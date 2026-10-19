import { sql } from "drizzle-orm";
import { db } from "@/db";
import { lots, pensionLedger, producers, sales, sensorReadings } from "@/db/schema";
import { canonicalHash } from "@/lib/hash";
import { contributionFromSale } from "@/lib/pension";
import { DOC } from "@/lib/constants";

let pending: Promise<void> | null = null;

async function ensureSchema(): Promise<void> {
  if (!db) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS producers (
      id serial PRIMARY KEY,
      code text NOT NULL UNIQUE,
      full_name text NOT NULL,
      vereda text NOT NULL,
      cane_variety text NOT NULL,
      role text NOT NULL,
      youth boolean NOT NULL DEFAULT false,
      contribution_rate_bps integer NOT NULL,
      status text NOT NULL
    )
  `);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS lots (
      id serial PRIMARY KEY,
      code text NOT NULL UNIQUE,
      producer_id integer NOT NULL REFERENCES producers(id),
      milled_at timestamptz NOT NULL,
      cane_variety text NOT NULL,
      brix double precision NOT NULL,
      punteo_temp_c double precision NOT NULL,
      humidity_pct double precision NOT NULL,
      rpm double precision NOT NULL,
      extraction_pct double precision NOT NULL,
      bagasse_kg double precision NOT NULL,
      net_kg double precision NOT NULL,
      stage text NOT NULL,
      anchor_status text NOT NULL,
      local_hash text NOT NULL,
      destination text
    )
  `);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS sensor_readings (
      id serial PRIMARY KEY,
      station text NOT NULL,
      metric text NOT NULL,
      value double precision NOT NULL,
      unit text NOT NULL,
      status text NOT NULL,
      source text NOT NULL,
      recorded_at timestamptz NOT NULL
    )
  `);
  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS sensor_recorded_idx ON sensor_readings (recorded_at)
  `);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS sales (
      id serial PRIMARY KEY,
      lot_id integer NOT NULL REFERENCES lots(id),
      channel text NOT NULL,
      counterparty text NOT NULL,
      kg double precision NOT NULL,
      price_per_kg integer NOT NULL,
      contribution_rate_bps integer NOT NULL,
      contribution_cop integer NOT NULL,
      sold_at timestamptz NOT NULL
    )
  `);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS pension_ledger (
      id serial PRIMARY KEY,
      producer_id integer NOT NULL REFERENCES producers(id),
      sale_id integer REFERENCES sales(id),
      kind text NOT NULL,
      amount_cop integer NOT NULL,
      note text NOT NULL,
      recorded_at timestamptz NOT NULL
    )
  `);
}

function hoursAgo(hours: number): Date {
  return new Date(Date.now() - hours * 60 * 60 * 1000);
}

function daysAgo(days: number): Date {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

async function seedOnce(): Promise<void> {
  if (!db) return;
  await ensureSchema();
  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(794615)`);
    const existing = await tx.select({ id: producers.id }).from(producers).limit(1);
    if (existing.length > 0) return;

    const people = await tx
      .insert(producers)
      .values([
        {
          code: "PR-01",
          fullName: "Rosa Elvira Pinzón",
          vereda: "El Cajón",
          caneVariety: "POJ 2878",
          role: "Productora",
          youth: false,
          contributionRateBps: 600,
          status: "escenario",
        },
        {
          code: "PR-02",
          fullName: "Miguel Ángel Rincón",
          vereda: "Tobia",
          caneVariety: "CC 84-75",
          role: "Productor",
          youth: false,
          contributionRateBps: 500,
          status: "escenario",
        },
        {
          code: "PR-03",
          fullName: "Laura Valentina Gómez",
          vereda: "La Florida",
          caneVariety: "RD 75-11",
          role: "Operadora IoT",
          youth: true,
          contributionRateBps: 700,
          status: "escenario",
        },
        {
          code: "PR-04",
          fullName: "Héctor Iván Cárdenas",
          vereda: "San José",
          caneVariety: "CC 85-92",
          role: "Productor",
          youth: false,
          contributionRateBps: 800,
          status: "escenario",
        },
        {
          code: "PR-05",
          fullName: "Sara Juliana Melo",
          vereda: "Lomalarga",
          caneVariety: "POJ 2878",
          role: "Community manager",
          youth: true,
          contributionRateBps: 600,
          status: "escenario",
        },
        {
          code: "PR-06",
          fullName: "José del Carmen Vargas",
          vereda: "Las Mercedes",
          caneVariety: "CC 84-75",
          role: "Productor",
          youth: false,
          contributionRateBps: 500,
          status: "escenario",
        },
      ])
      .returning({
        id: producers.id,
        code: producers.code,
        rate: producers.contributionRateBps,
        name: producers.fullName,
        vereda: producers.vereda,
      });

    const byCode = Object.fromEntries(people.map((person) => [person.code, person]));
    const year = new Date().getFullYear();
    const lotSeed = [
      ["PR-01", 18, "POJ 2878", 90.4, 113.2, 68, 46, 61.5, 840, 120, "despacho", "Bogotá — venta directa"],
      ["PR-02", 16, "CC 84-75", 89.8, 112.4, 71, 44, 59.2, 510, 80, "despacho", "Bogotá — venta directa"],
      ["PR-03", 12, "RD 75-11", 91.1, 114.6, 66, 49, 63.0, 390, 60, "despacho", "Suscripción hogar"],
      ["PR-04", 9, "CC 85-92", 88.7, 111.8, 73, 42, 58.4, 620, 90, "empaque", "Mercado campesino"],
      ["PR-05", 6, "POJ 2878", 90.9, 112.9, 69, 47, 60.8, 700, 100, "batido", null],
      ["PR-06", 4, "CC 84-75", 89.2, 110.7, 74, 45, 57.9, 460, 70, "punteo", null],
      ["PR-01", 2, "POJ 2878", 91.6, 115.0, 67, 48, 62.4, 380, 50, "hornilla", null],
      ["PR-04", 1, "CC 85-92", 88.1, 111.2, 70, 43, 58.8, 760, 110, "molienda", null],
    ] as const;

    const insertedLots = [];
    for (let index = 0; index < lotSeed.length; index += 1) {
      const row = lotSeed[index];
      const person = byCode[row[0]];
      const code = `ND-${year}-${String(index + 1).padStart(4, "0")}`;
      const milledAt = daysAgo(row[1]);
      const payload = {
        lote: code,
        productor: person.code,
        vereda: person.vereda,
        variedad: row[2],
        brix: row[3],
        punteoC: row[4],
        humedad: row[5],
        rpm: row[6],
        extraccion: row[7],
        bagazoKg: row[8],
        netoKg: row[9],
        fase: "1",
      };
      const [lot] = await tx
        .insert(lots)
        .values({
          code,
          producerId: person.id,
          milledAt,
          caneVariety: row[2],
          brix: row[3],
          punteoTempC: row[4],
          humidityPct: row[5],
          rpm: row[6],
          extractionPct: row[7],
          bagasseKg: row[8],
          netKg: row[9],
          stage: row[10],
          anchorStatus: "pendiente_fase_2",
          localHash: canonicalHash(payload),
          destination: row[11],
        })
        .returning({ id: lots.id, code: lots.code, producerId: lots.producerId });
      insertedLots.push(lot);
    }

    const saleSeed = [
      { lot: insertedLots[0], channel: "b2b_bogota", counterparty: "Cocina de origen — Chapinero, venta directa", kg: 80, price: 8_500, bps: 600, days: 10 },
      { lot: insertedLots[1], channel: "b2b_bogota", counterparty: "Grupo de restaurantes, contrato directo", kg: 40, price: 9_000, bps: 500, days: 8 },
      { lot: insertedLots[2], channel: "suscripcion", counterparty: "Canasta mensual de hogares en Bogotá", kg: 25, price: 7_800, bps: 700, days: 6 },
      { lot: insertedLots[3], channel: "mercado_campesino", counterparty: "Puesto cooperativo en mercado campesino", kg: 30, price: 7_000, bps: 800, days: 3 },
    ];

    for (const sale of saleSeed) {
      const contributionCop = contributionFromSale(sale.kg, sale.price, sale.bps);
      const [saved] = await tx
        .insert(sales)
        .values({
          lotId: sale.lot.id,
          channel: sale.channel,
          counterparty: sale.counterparty,
          kg: sale.kg,
          pricePerKg: sale.price,
          contributionRateBps: sale.bps,
          contributionCop,
          soldAt: daysAgo(sale.days),
        })
        .returning({ id: sales.id });
      await tx.insert(pensionLedger).values({
        producerId: sale.lot.producerId,
        saleId: saved.id,
        kind: "aporte_venta",
        amountCop: contributionCop,
        note: `Aporte del ${sale.bps / 100}% sobre venta directa del lote ${sale.lot.code}. Escenario demostrativo, no es un movimiento de Fiduagraria.`,
        recordedAt: daysAgo(sale.days),
      });
    }

    for (const person of people) {
      for (const days of [40, 12]) {
        await tx.insert(pensionLedger).values({
          producerId: person.id,
          kind: "aporte_mensual_documental",
          amountCop: DOC.pensionMonthlyCop,
          note: "Aporte mensual del documento base ($200.000 COP). Escenario demostrativo, no es un recaudo fiduciario real.",
          recordedAt: daysAgo(days),
        });
      }
    }

    const readings: Array<typeof sensorReadings.$inferInsert> = [];
    for (let step = 36; step >= 0; step -= 1) {
      const wave = 112.6 + Math.sin(step / 3.2) * 1.05;
      const value = step === 8 ? 116.8 : Math.round(wave * 10) / 10;
      readings.push({
        station: "punteo",
        metric: "temperatura",
        value,
        unit: "°C",
        status: value >= DOC.punteoMinC && value <= DOC.punteoMaxC ? "en_rango" : "fuera_de_rango",
        source: "semilla",
        recordedAt: hoursAgo(step * 0.55),
      });
    }
    const snapshots = [
      ["molienda", "rpm", 46.5, "rpm"],
      ["molienda", "extraccion", 61.2, "%"],
      ["molienda", "brix_jugo", 18.6, "°Bx"],
      ["hornilla", "bagazo", 86, "kg/h"],
      ["punteo", "brix", 90.8, "°Bx"],
      ["corte", "humedad", 69.4, "%"],
    ] as const;
    for (const [station, metric, value, unit] of snapshots) {
      for (let step = 8; step >= 0; step -= 1) {
        readings.push({
          station,
          metric,
          value: Math.round((value + Math.sin(step) * 0.4) * 10) / 10,
          unit,
          status: "lectura",
          source: "semilla",
          recordedAt: hoursAgo(step * 1.3),
        });
      }
    }
    await tx.insert(sensorReadings).values(readings);
  });
}

export function ensureSeeded(): Promise<void> {
  if (!pending) {
    pending = seedOnce().catch((error: unknown) => {
      pending = null;
      throw error;
    });
  }
  return pending;
}
