import { sql } from "drizzle-orm";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { lots, producers } from "@/db/schema";
import { canonicalHash } from "@/lib/hash";
import { ensureSeeded } from "@/lib/seed";
import { InputError, asInt, asNumber, asStage, asText } from "@/lib/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!db) return Response.json({ error: "Base de datos no disponible" }, { status: 503 });
  try {
    await ensureSeeded();
    const body = (await request.json()) as Record<string, unknown>;
    const producerId = asInt(body.producerId, "Productor", 1, 1_000_000);
    const caneVariety = asText(body.caneVariety, "Variedad", 2, 40);
    const brix = asNumber(body.brix, "°Brix", 0, 100);
    const punteoTempC = asNumber(body.punteoTempC, "Temperatura de punteo", 0, 300);
    const humidityPct = asNumber(body.humidityPct, "Humedad", 0, 100);
    const rpm = asNumber(body.rpm, "RPM", 0, 500);
    const extractionPct = asNumber(body.extractionPct, "Extracción", 0, 100);
    const bagasseKg = asNumber(body.bagasseKg, "Bagazo", 0, 100_000);
    const netKg = asNumber(body.netKg, "Kilos netos", 0.1, 100_000);
    const stage = asStage(body.stage);
    const destination = body.destination ? asText(body.destination, "Destino", 0, 120) : null;
    const [producer] = await db.select().from(producers).where(eq(producers.id, producerId)).limit(1);
    if (!producer) throw new InputError("El productor no está en la mesa.");
    const [countRow] = await db.select({ count: sql<number>`count(*)::int` }).from(lots);
    const code = `ND-${new Date().getFullYear()}-${String(Number(countRow?.count ?? 0) + 1).padStart(4, "0")}`;
    const localHash = canonicalHash({
      lote: code,
      productor: producer.code,
      vereda: producer.vereda,
      variedad: caneVariety,
      brix,
      punteoC: punteoTempC,
      humedad: humidityPct,
      rpm,
      extraccion: extractionPct,
      bagazoKg: bagasseKg,
      netoKg: netKg,
      fase: "1",
    });
    const [saved] = await db
      .insert(lots)
      .values({
        code,
        producerId,
        milledAt: new Date(),
        caneVariety,
        brix,
        punteoTempC,
        humidityPct,
        rpm,
        extractionPct,
        bagasseKg,
        netKg,
        stage,
        anchorStatus: "pendiente_fase_2",
        localHash,
        destination,
      })
      .returning({ code: lots.code, localHash: lots.localHash });
    return Response.json(saved);
  } catch (error) {
    const message = error instanceof InputError ? error.message : "No se pudo abrir el lote.";
    return Response.json({ error: message }, { status: error instanceof InputError ? 400 : 500 });
  }
}
