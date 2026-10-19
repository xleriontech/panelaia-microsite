import type { Metadata } from "next";
import { TrapicheDesk } from "@/components/trapiche/TrapicheDesk";
import { DataNote, PageHeader } from "@/components/ui/Primitives";
import { DOC } from "@/lib/constants";
import { getTelemetry } from "@/lib/queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Trapiche 3D" };

export default async function TrapichePage() {
  const telemetry = await getTelemetry();
  return (
    <main className="bg-[color:var(--color-molasses)] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader
          kicker="Componente 3D e IoT"
          title="El trapiche, a la vista de quien lo trabaja."
          lede="Gemelo procedural de la molienda, la hornilla CIMPA y la paila. La temperatura de punteo usa el rango documental de 110 a 115 °C. El resto de sensores se muestra como lectura, porque el documento no les fija meta."
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <DataNote kind="documento">Punteo objetivo: {DOC.punteoMinC}–{DOC.punteoMaxC} °C. Instrumento correcto: termopar. El DHT22 queda para humedad ambiente.</DataNote>
          <DataNote kind="correccion">No hay modelo glTF del trapiche real. Draco se usará cuando exista el levantamiento; hoy no hay malla que comprimir.</DataNote>
        </div>
        <TrapicheDesk initial={telemetry} />
        <section className="mt-6 rounded-2xl bg-cream p-5">
          <h2 className="font-display text-3xl text-ink mb-3">Arquitectura</h2>
          <p>Esta instancia recibe lecturas en <code>POST /api/telemetry</code> y las guarda en PostgreSQL. El tópico MQTT propuesto, cuando haya broker, es <code>nocaima/trapiche/&#123;estacion&#125;/&#123;metrica&#125;</code>. El gateway NestJS con WebSocket es la arquitectura objetivo y no está desplegado aquí.</p>
        </section>
      </div>
    </main>
  );
}
