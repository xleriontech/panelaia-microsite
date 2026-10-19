import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { lots, pensionLedger, sales } from "@/db/schema";
import { contributionFromSale } from "@/lib/pension";
import { ensureSeeded } from "@/lib/seed";
import { InputError, asChannel, asInt, asNumber, asRateBps, asText, assertDocumentedPrice } from "@/lib/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!db) return Response.json({ error: "Base de datos no disponible" }, { status: 503 });
  try {
    await ensureSeeded();
    const body = (await request.json()) as Record<string, unknown>;
    const lotId = asInt(body.lotId, "Lote", 1, 1_000_000);
    const channel = asChannel(body.channel);
    const counterparty = asText(body.counterparty, "Comprador", 3, 140);
    const kg = asNumber(body.kg, "Kilogramos", 0.1, 100_000);
    const pricePerKg = asInt(body.pricePerKg, "Precio por kilogramo", 1, 100_000);
    const rate = asRateBps(body.contributionRateBps);
    assertDocumentedPrice(channel, pricePerKg);

    const result = await db.transaction(async (tx) => {
      const [lot] = await tx.select().from(lots).where(eq(lots.id, lotId)).limit(1);
      if (!lot) throw new InputError("El lote no existe.");
      const [sold] = await tx
        .select({ kg: sql<number>`coalesce(sum(${sales.kg}), 0)::float8` })
        .from(sales)
        .where(eq(sales.lotId, lotId));
      const remaining = lot.netKg - Number(sold?.kg ?? 0);
      if (kg - remaining > 0.001) {
        throw new InputError(`El lote solo tiene ${remaining.toFixed(1)} kg disponibles.`);
      }
      const contributionCop = contributionFromSale(kg, pricePerKg, rate);
      const [saved] = await tx
        .insert(sales)
        .values({
          lotId,
          channel,
          counterparty,
          kg,
          pricePerKg,
          contributionRateBps: rate,
          contributionCop,
          soldAt: new Date(),
        })
        .returning({ id: sales.id });
      await tx.insert(pensionLedger).values({
        producerId: lot.producerId,
        saleId: saved.id,
        kind: "aporte_venta",
        amountCop: contributionCop,
        note: `Aporte de venta directa del lote ${lot.code}. Registro de esta mesa, no es un movimiento de Fiduagraria.`,
        recordedAt: new Date(),
      });
      return { id: saved.id, contributionCop };
    });
    return Response.json(result);
  } catch (error) {
    const message = error instanceof InputError ? error.message : "No se pudo registrar la venta.";
    return Response.json({ error: message }, { status: error instanceof InputError ? 400 : 500 });
  }
}
