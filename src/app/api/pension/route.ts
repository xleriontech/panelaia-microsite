import { eq } from "drizzle-orm";
import { db } from "@/db";
import { pensionLedger, producers } from "@/db/schema";
import { DOC } from "@/lib/constants";
import { ensureSeeded } from "@/lib/seed";
import { InputError, asInt } from "@/lib/validators";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!db) return Response.json({ error: "Base de datos no disponible" }, { status: 503 });
  try {
    await ensureSeeded();
    const body = (await request.json()) as { producerId?: unknown };
    const producerId = asInt(body.producerId, "Productor", 1, 1_000_000);
    const [producer] = await db.select().from(producers).where(eq(producers.id, producerId)).limit(1);
    if (!producer) throw new InputError("El productor no está en la mesa.");
    await db.insert(pensionLedger).values({
      producerId,
      kind: "aporte_mensual_documental",
      amountCop: DOC.pensionMonthlyCop,
      note: "Aporte mensual documental de $200.000 COP. Escenario de mesa, no recaudo de Fiduagraria.",
      recordedAt: new Date(),
    });
    return Response.json({ ok: true, amountCop: DOC.pensionMonthlyCop });
  } catch (error) {
    const message = error instanceof InputError ? error.message : "No se pudo registrar el aporte.";
    return Response.json({ error: message }, { status: error instanceof InputError ? 400 : 500 });
  }
}
