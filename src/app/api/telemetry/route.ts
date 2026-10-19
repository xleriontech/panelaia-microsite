import { db } from "@/db";
import { sensorReadings } from "@/db/schema";
import { METRICS } from "@/lib/constants";
import { getTelemetry } from "@/lib/queries";
import { ensureSeeded } from "@/lib/seed";
import { statusForMetric } from "@/lib/telemetry";
import { InputError, asMetric, asNumber, asText } from "@/lib/validators";

export const dynamic = "force-dynamic";

export async function GET() {
  const telemetry = await getTelemetry();
  return Response.json(telemetry);
}

export async function POST(request: Request) {
  if (!db) return Response.json({ error: "Base de datos no disponible" }, { status: 503 });
  try {
    await ensureSeeded();
    const body = (await request.json()) as { metric?: unknown; value?: unknown; source?: unknown };
    const metric = asMetric(body.metric);
    const spec = METRICS[metric];
    const value = Math.round(asNumber(body.value, "Valor", spec.min, spec.max) * 10) / 10;
    const source = asText(body.source ?? "captura-manual", "Fuente", 3, 40);
    const [saved] = await db
      .insert(sensorReadings)
      .values({
        station: spec.station,
        metric,
        value,
        unit: spec.unit,
        status: statusForMetric(metric, value),
        source,
        recordedAt: new Date(),
      })
      .returning({ id: sensorReadings.id, status: sensorReadings.status });
    return Response.json(saved);
  } catch (error) {
    const message = error instanceof InputError ? error.message : "No se pudo registrar la lectura.";
    return Response.json({ error: message }, { status: error instanceof InputError ? 400 : 500 });
  }
}
