import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { lots, pensionLedger, producers, sales, sensorReadings } from "@/db/schema";
import { ensureSeeded } from "@/lib/seed";
import { DOC } from "@/lib/constants";
import { canonicalHash } from "@/lib/hash";
import type { LedgerDTO, LotDTO, OverviewDTO, ProducerDTO, ReadingDTO, SaleDTO, TelemetryDTO } from "@/lib/types";

function iso(value: Date): string {
  return value.toISOString();
}

// Mock data for when database is unavailable
const MOCK_PRODUCERS: ProducerDTO[] = [
  { id: 1, code: "PR-01", fullName: "Rosa Elvira Pinzón", vereda: "El Cajón", caneVariety: "POJ 2878", role: "Productora", youth: false, contributionRateBps: 600, status: "escenario", balanceCop: 1_200_000 },
  { id: 2, code: "PR-02", fullName: "Miguel Ángel Rincón", vereda: "Tobia", caneVariety: "CC 84-75", role: "Productor", youth: false, contributionRateBps: 500, status: "escenario", balanceCop: 800_000 },
  { id: 3, code: "PR-03", fullName: "Laura Valentina Gómez", vereda: "La Florida", caneVariety: "RD 75-11", role: "Operadora IoT", youth: true, contributionRateBps: 700, status: "escenario", balanceCop: 1_400_000 },
  { id: 4, code: "PR-04", fullName: "Héctor Iván Cárdenas", vereda: "San José", caneVariety: "CC 85-92", role: "Productor", youth: false, contributionRateBps: 800, status: "escenario", balanceCop: 1_600_000 },
  { id: 5, code: "PR-05", fullName: "Sara Juliana Melo", vereda: "Lomalarga", caneVariety: "POJ 2878", role: "Community manager", youth: true, contributionRateBps: 600, status: "escenario", balanceCop: 1_000_000 },
  { id: 6, code: "PR-06", fullName: "José del Carmen Vargas", vereda: "Las Mercedes", caneVariety: "CC 84-75", role: "Productor", youth: false, contributionRateBps: 500, status: "escenario", balanceCop: 900_000 },
];

const MOCK_LOTS: LotDTO[] = (() => {
  const year = new Date().getFullYear();
  const baseLots = [
    { producer: "PR-01", daysAgo: 18, variety: "POJ 2878", brix: 90.4, punteo: 113.2, humidity: 68, rpm: 46, extraction: 61.5, bagazo: 840, netKg: 120, stage: "despacho", destination: "Bogotá — venta directa" },
    { producer: "PR-02", daysAgo: 16, variety: "CC 84-75", brix: 89.8, punteo: 112.4, humidity: 71, rpm: 44, extraction: 59.2, bagazo: 510, netKg: 80, stage: "despacho", destination: "Bogotá — venta directa" },
    { producer: "PR-03", daysAgo: 12, variety: "RD 75-11", brix: 91.1, punteo: 114.6, humidity: 66, rpm: 49, extraction: 63.0, bagazo: 390, netKg: 60, stage: "despacho", destination: "Suscripción hogar" },
    { producer: "PR-04", daysAgo: 9, variety: "CC 85-92", brix: 88.7, punteo: 111.8, humidity: 73, rpm: 42, extraction: 58.4, bagazo: 620, netKg: 90, stage: "empaque", destination: "Mercado campesino" },
    { producer: "PR-05", daysAgo: 6, variety: "POJ 2878", brix: 90.9, punteo: 112.9, humidity: 69, rpm: 47, extraction: 60.8, bagazo: 700, netKg: 100, stage: "batido", destination: null },
    { producer: "PR-06", daysAgo: 4, variety: "CC 84-75", brix: 89.2, punteo: 110.7, humidity: 74, rpm: 45, extraction: 57.9, bagazo: 460, netKg: 70, stage: "punteo", destination: null },
  ] as const;

  return baseLots.map((row, index) => {
    const person = MOCK_PRODUCERS.find(p => p.code === row.producer)!;
    const code = `ND-${year}-${String(index + 1).padStart(4, "0")}`;
    const milledAt = new Date(Date.now() - row.daysAgo * 24 * 60 * 60 * 1000);
    const payload = { lote: code, productor: person.code, vereda: person.vereda, variedad: row.variety, brix: row.brix, punteoC: row.punteo, humedad: row.humidity, rpm: row.rpm, extraccion: row.extraction, bagazoKg: row.bagazo, netoKg: row.netKg, fase: "1" };
    return {
      id: index + 1,
      code,
      producerId: person.id,
      producerCode: person.code,
      producerName: person.fullName,
      vereda: person.vereda,
      milledAt: iso(milledAt),
      caneVariety: row.variety,
      brix: row.brix,
      punteoTempC: row.punteo,
      humidityPct: row.humidity,
      rpm: row.rpm,
      extractionPct: row.extraction,
      bagasseKg: row.bagazo,
      netKg: row.netKg,
      soldKg: index < 4 ? [80, 40, 25, 30][index] : 0,
      stage: row.stage,
      anchorStatus: "pendiente_fase_2",
      localHash: canonicalHash(payload),
      destination: row.destination,
    };
  });
})();

const MOCK_SALES: SaleDTO[] = [
  { id: 1, lotCode: MOCK_LOTS[0].code, producerName: MOCK_LOTS[0].producerName, channel: "b2b_bogota", counterparty: "Cocina de origen — Chapinero, venta directa", kg: 80, pricePerKg: 8_500, contributionRateBps: 600, contributionCop: Math.round(80 * 8500 * 0.06), soldAt: iso(new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)) },
  { id: 2, lotCode: MOCK_LOTS[1].code, producerName: MOCK_LOTS[1].producerName, channel: "b2b_bogota", counterparty: "Grupo de restaurantes, contrato directo", kg: 40, pricePerKg: 9_000, contributionRateBps: 500, contributionCop: Math.round(40 * 9000 * 0.05), soldAt: iso(new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)) },
  { id: 3, lotCode: MOCK_LOTS[2].code, producerName: MOCK_LOTS[2].producerName, channel: "suscripcion", counterparty: "Canasta mensual de hogares en Bogotá", kg: 25, pricePerKg: 7_800, contributionRateBps: 700, contributionCop: Math.round(25 * 7800 * 0.07), soldAt: iso(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)) },
  { id: 4, lotCode: MOCK_LOTS[3].code, producerName: MOCK_LOTS[3].producerName, channel: "mercado_campesino", counterparty: "Puesto cooperativo en mercado campesino", kg: 30, pricePerKg: 7_000, contributionRateBps: 800, contributionCop: Math.round(30 * 7000 * 0.08), soldAt: iso(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)) },
];

const MOCK_LEDGER: LedgerDTO[] = [
  ...MOCK_SALES.flatMap((sale, i) => ({
    id: i + 1,
    producerId: MOCK_PRODUCERS.find(p => p.code === sale.lotCode.split("-").slice(0, 3).join("-"))?.id ?? 1,
    producerName: sale.producerName,
    kind: "aporte_venta",
    amountCop: sale.contributionCop,
    note: `Aporte del ${sale.contributionRateBps / 100}% sobre venta directa del lote ${sale.lotCode}. Escenario demostrativo.`,
    recordedAt: sale.soldAt,
  })),
  ...MOCK_PRODUCERS.flatMap((person) => [40, 12].map((days, idx) => ({
    id: 100 + person.id * 10 + idx,
    producerId: person.id,
    producerName: person.fullName,
    kind: "aporte_mensual_documental",
    amountCop: DOC.pensionMonthlyCop,
    note: "Aporte mensual del documento base ($200.000 COP). Escenario demostrativo.",
    recordedAt: iso(new Date(Date.now() - days * 24 * 60 * 60 * 1000)),
  }))),
];

const MOCK_TELEMETRY: TelemetryDTO = (() => {
  const recent: ReadingDTO[] = [];
  for (let step = 36; step >= 0; step -= 1) {
    const wave = 112.6 + Math.sin(step / 3.2) * 1.05;
    const value = step === 8 ? 116.8 : Math.round(wave * 10) / 10;
    recent.push({
      id: step,
      station: "punteo", metric: "temperatura", value, unit: "°C",
      status: value >= DOC.punteoMinC && value <= DOC.punteoMaxC ? "en_rango" : "fuera_de_rango",
      source: "semilla", recordedAt: iso(new Date(Date.now() - step * 0.55 * 60 * 60 * 1000)),
    });
  }
  const snapshots = [["molienda", "rpm", 46.5, "rpm"], ["molienda", "extraccion", 61.2, "%"], ["molienda", "brix_jugo", 18.6, "°Bx"], ["hornilla", "bagazo", 86, "kg/h"], ["punteo", "brix", 90.8, "°Bx"], ["corte", "humedad", 69.4, "%"]] as const;
  for (const [station, metric, value, unit] of snapshots) {
    for (let step = 8; step >= 0; step -= 1) {
      recent.push({ id: recent.length, station, metric, value: Math.round((value + Math.sin(step) * 0.4) * 10) / 10, unit, status: "lectura", source: "semilla", recordedAt: iso(new Date(Date.now() - step * 1.3 * 60 * 60 * 1000)) });
    }
  }
  const latest: Record<string, ReadingDTO> = {};
  const seriesBuckets = new Map<string, number[]>();
  for (const reading of recent) {
    if (!latest[reading.metric]) latest[reading.metric] = reading;
    const bucket = seriesBuckets.get(reading.metric) ?? [];
    bucket.push(reading.value);
    seriesBuckets.set(reading.metric, bucket);
  }
  const series: Record<string, number[]> = {};
  for (const [metric, values] of seriesBuckets) {
    series[metric] = values.slice(0, 36).reverse();
  }
  return { latest, series, recent: recent.slice(0, 18) };
})();

export async function getProducers(): Promise<ProducerDTO[]> {
  if (!db) return MOCK_PRODUCERS;
  try {
    await ensureSeeded();
    const people = await db.select().from(producers).orderBy(producers.code);
    const ledger = await db.select().from(pensionLedger);
    const balances = new Map<number, number>();
    for (const row of ledger) {
      balances.set(row.producerId, (balances.get(row.producerId) ?? 0) + row.amountCop);
    }
    return people.map((person) => ({
      id: person.id,
      code: person.code,
      fullName: person.fullName,
      vereda: person.vereda,
      caneVariety: person.caneVariety,
      role: person.role,
      youth: person.youth,
      contributionRateBps: person.contributionRateBps,
      status: person.status,
      balanceCop: balances.get(person.id) ?? 0,
    }));
  } catch {
    return MOCK_PRODUCERS;
  }
}

export async function getLots(query?: string): Promise<LotDTO[]> {
  if (!db) {
    const needle = query?.trim().toLowerCase();
    return MOCK_LOTS.filter((row) => {
      if (!needle) return true;
      return [row.code, row.producerName, row.producerCode, row.vereda, row.caneVariety, row.stage]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }
  try {
    await ensureSeeded();
    const sold = await db
      .select({
        lotId: sales.lotId,
        kg: sql<number>`coalesce(sum(${sales.kg}), 0)::float8`,
      })
      .from(sales)
      .groupBy(sales.lotId);
    const soldByLot = new Map(sold.map((row) => [row.lotId, Number(row.kg)]));
    const rows = await db
      .select({
        id: lots.id,
        code: lots.code,
        producerId: lots.producerId,
        producerCode: producers.code,
        producerName: producers.fullName,
        vereda: producers.vereda,
        milledAt: lots.milledAt,
        caneVariety: lots.caneVariety,
        brix: lots.brix,
        punteoTempC: lots.punteoTempC,
        humidityPct: lots.humidityPct,
        rpm: lots.rpm,
        extractionPct: lots.extractionPct,
        bagasseKg: lots.bagasseKg,
        netKg: lots.netKg,
        stage: lots.stage,
        anchorStatus: lots.anchorStatus,
        localHash: lots.localHash,
        destination: lots.destination,
      })
      .from(lots)
      .innerJoin(producers, eq(lots.producerId, producers.id))
      .orderBy(desc(lots.milledAt));

    const needle = query?.trim().toLowerCase();
    return rows
      .filter((row) => {
        if (!needle) return true;
        return [row.code, row.producerName, row.producerCode, row.vereda, row.caneVariety, row.stage]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      })
      .map((row) => ({
        ...row,
        milledAt: iso(row.milledAt),
        soldKg: soldByLot.get(row.id) ?? 0,
      }));
  } catch {
    const needle = query?.trim().toLowerCase();
    return MOCK_LOTS.filter((row) => {
      if (!needle) return true;
      return [row.code, row.producerName, row.producerCode, row.vereda, row.caneVariety, row.stage]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }
}

export async function getLot(code: string): Promise<LotDTO | null> {
  const rows = await getLots();
  return rows.find((row) => row.code.toLowerCase() === code.toLowerCase()) ?? null;
}

export async function getTelemetry(): Promise<TelemetryDTO> {
  if (!db) return MOCK_TELEMETRY;
  try {
    await ensureSeeded();
    const recentRows = await db
      .select()
      .from(sensorReadings)
      .orderBy(desc(sensorReadings.recordedAt))
      .limit(240);
    const recent: ReadingDTO[] = recentRows.map((row) => ({
      id: row.id,
      station: row.station,
      metric: row.metric,
      value: row.value,
      unit: row.unit,
      status: row.status,
      source: row.source,
      recordedAt: iso(row.recordedAt),
    }));
    const latest: Record<string, ReadingDTO> = {};
    const seriesBuckets = new Map<string, number[]>();
    for (const reading of recent) {
      if (!latest[reading.metric]) latest[reading.metric] = reading;
      const bucket = seriesBuckets.get(reading.metric) ?? [];
      bucket.push(reading.value);
      seriesBuckets.set(reading.metric, bucket);
    }
    const series: Record<string, number[]> = {};
    for (const [metric, values] of seriesBuckets) {
      series[metric] = values.slice(0, 36).reverse();
    }
    return { latest, series, recent: recent.slice(0, 18) };
  } catch {
    return MOCK_TELEMETRY;
  }
}

export async function getSales(): Promise<SaleDTO[]> {
  if (!db) return MOCK_SALES;
  try {
    await ensureSeeded();
    const rows = await db
      .select({
        id: sales.id,
        lotCode: lots.code,
        producerName: producers.fullName,
        channel: sales.channel,
        counterparty: sales.counterparty,
        kg: sales.kg,
        pricePerKg: sales.pricePerKg,
        contributionRateBps: sales.contributionRateBps,
        contributionCop: sales.contributionCop,
        soldAt: sales.soldAt,
      })
      .from(sales)
      .innerJoin(lots, eq(sales.lotId, lots.id))
      .innerJoin(producers, eq(lots.producerId, producers.id))
      .orderBy(desc(sales.soldAt));
    return rows.map((row) => ({ ...row, soldAt: iso(row.soldAt) }));
  } catch {
    return MOCK_SALES;
  }
}

export async function getLedger(): Promise<LedgerDTO[]> {
  if (!db) return MOCK_LEDGER;
  try {
    await ensureSeeded();
    const rows = await db
      .select({
        id: pensionLedger.id,
        producerId: pensionLedger.producerId,
        producerName: producers.fullName,
        kind: pensionLedger.kind,
        amountCop: pensionLedger.amountCop,
        note: pensionLedger.note,
        recordedAt: pensionLedger.recordedAt,
      })
      .from(pensionLedger)
      .innerJoin(producers, eq(pensionLedger.producerId, producers.id))
      .orderBy(desc(pensionLedger.recordedAt));
    return rows.map((row) => ({ ...row, recordedAt: iso(row.recordedAt) }));
  } catch {
    return MOCK_LEDGER;
  }
}

export async function getOverview(): Promise<OverviewDTO> {
  const [people, lotRows, saleRows, telemetry] = await Promise.all([
    getProducers(),
    getLots(),
    getSales(),
    getTelemetry(),
  ]);
  const punteo = telemetry.latest.temperatura ?? null;
  const lastAlert = telemetry.recent.find((row) => row.status === "fuera_de_rango");
  const historyAlert = Object.values(telemetry.series).length
    ? telemetry.recent.find((row) => row.status === "fuera_de_rango")
    : undefined;
  const excursion = [...telemetry.recent].reverse().find((row) => row.status === "fuera_de_rango") ?? lastAlert ?? historyAlert;

  let olderExcursion: string | null = null;
  if (db) {
    try {
      const older = await db
        .select()
        .from(sensorReadings)
        .where(eq(sensorReadings.status, "fuera_de_rango"))
        .orderBy(desc(sensorReadings.recordedAt))
        .limit(1);
      if (older[0]) olderExcursion = older[0].recordedAt.toISOString();
    } catch {
      // ignore
    }
  }

  return {
    lots: lotRows.length,
    salesCop: saleRows.reduce((sum, sale) => sum + Math.round(sale.kg * sale.pricePerKg), 0),
    salesKg: saleRows.reduce((sum, sale) => sum + sale.kg, 0),
    fundCop: people.reduce((sum, person) => sum + person.balanceCop, 0),
    producers: people.length,
    youth: people.filter((person) => person.youth).length,
    punteoC: punteo?.value ?? null,
    punteoStatus: punteo?.status ?? null,
    openAlerts: punteo?.status === "fuera_de_rango" ? 1 : 0,
    lastExcursion: olderExcursion ?? excursion?.recordedAt ?? null,
  };
}
