import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { sensorReadings } from "@/db/schema";
import { METRICS } from "@/lib/constants";
import { ensureSeeded } from "@/lib/seed";
import { statusForMetric } from "@/lib/telemetry";

export const dynamic = "force-dynamic";

export async function POST() {
  if (!db) return Response.json({ ok: false, error: "Base de datos no disponible" }, { status: 503 });
  try {
    await ensureSeeded();
    const [last] = await db
      .select()
      .from(sensorReadings)
      .where(eq(sensorReadings.metric, "temperatura"))
      .orderBy(desc(sensorReadings.recordedAt))
      .limit(1);
    const base = last?.value ?? 112.4;
    const excursion = Math.random() < 0.12;
    const walked = excursion ? 116.2 + Math.random() * 1.6 : base + (Math.random() - 0.48) * 1.3;
    const value = Math.round(Math.min(120, Math.max(106, walked)) * 10) / 10;
    const rotating = (["rpm", "bagazo", "humedad", "extraccion"] as const)[Math.floor(Math.random() * 4)];
    const spec = METRICS[rotating];
    const [previous] = await db
      .select()
      .from(sensorReadings)
      .where(eq(sensorReadings.metric, rotating))
      .orderBy(desc(sensorReadings.recordedAt))
      .limit(1);
    const companion = Math.round(
      Math.min(spec.max, Math.max(spec.min, (previous?.value ?? spec.min + 8) + (Math.random() - 0.5) * 1.6)) * 10,
    ) / 10;
    await db.insert(sensorReadings).values([
      {
        station: "punteo",
        metric: "temperatura",
        value,
        unit: "°C",
        status: statusForMetric("temperatura", value),
        source: "ciclo-demo",
        recordedAt: new Date(),
      },
      {
        station: spec.station,
        metric: rotating,
        value: Math.min(spec.max, companion),
        unit: spec.unit,
        status: "lectura",
        source: "ciclo-demo",
        recordedAt: new Date(),
      },
    ]);
    await db.execute(sql`
      delete from sensor_readings
      where id in (
        select id from sensor_readings
        order by recorded_at desc
        offset 400
      )
    `);
    return Response.json({ ok: true, temperatura: value, status: statusForMetric("temperatura", value) });
  } catch {
    return Response.json({ ok: false, error: "Error en ciclo demo" }, { status: 500 });
  }
}
