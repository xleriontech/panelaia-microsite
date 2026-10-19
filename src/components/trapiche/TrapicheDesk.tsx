"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { DataNote, Sparkline, StatusPill } from "@/components/ui/Primitives";
import { DOC, METRICS, type MetricKey } from "@/lib/constants";
import { formatNum, formatWhen } from "@/lib/format";
import type { TelemetryDTO } from "@/lib/types";

const Scene = dynamic(() => import("@/components/trapiche/TrapicheScene"), {
  ssr: false,
  loading: () => <div className="grid h-full min-h-[520px] place-items-center text-honey">Cargando gemelo del trapiche…</div>,
});

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

const ORDER: MetricKey[] = ["temperatura", "brix", "brix_jugo", "rpm", "extraccion", "bagazo", "humedad"];

export function TrapicheDesk({ initial }: { initial: TelemetryDTO }) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [data, setData] = useState(initial);
  const [auto, setAuto] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [metric, setMetric] = useState<MetricKey>("temperatura");
  const temp = data.latest.temperatura;

  async function refresh() {
    const next = (await fetch("/api/telemetry").then((response) => response.json())) as TelemetryDTO;
    setData(next);
  }

  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => {
      void fetch("/api/telemetry/tick", { method: "POST" })
        .then(() => refresh())
        .catch(() => setError("El ciclo de demostración no respondió."));
    }, 8000);
    return () => window.clearInterval(id);
  }, [auto]);

  const live = useMemo(
    () => ({
      punteoC: temp?.value ?? 112,
      brix: data.latest.brix?.value ?? 0,
      rpm: data.latest.rpm?.value ?? 40,
      alert: temp?.status === "fuera_de_rango",
      reducedMotion: reduced,
    }),
    [data.latest.brix?.value, data.latest.rpm?.value, reduced, temp?.status, temp?.value],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/telemetry", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        metric: form.get("metric"),
        value: form.get("value"),
        source: form.get("source"),
      }),
    });
    const payload = (await response.json()) as { error?: string };
    setPending(false);
    if (!response.ok) {
      setError(payload.error ?? "No se pudo registrar la lectura.");
      return;
    }
    event.currentTarget.reset();
    await refresh();
    router.refresh();
  }

  const marker = temp ? Math.min(100, Math.max(0, ((temp.value - 100) / 25) * 100)) : 0;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_0.82fr]">
      <section className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
        <div className="flex items-end justify-between gap-4 px-4 py-3">
          <div>
            <p className="kicker">Gemelo procedural</p>
            <p className="text-sm text-honey/80">Arrastre para orbitar. La tabla es la alternativa accesible.</p>
          </div>
          <button type="button" className="btn btn-ghost px-3 py-1.5 text-xs" onClick={() => setAuto((value) => !value)} aria-pressed={auto}>
            {auto ? "Detener ciclo" : "Simular ciclo"}
          </button>
        </div>
        <div className="h-[560px]" role="img" aria-label="Gemelo tridimensional del trapiche comunitario: molienda, hornilla CIMPA, vapor y paila de punteo.">
          <Scene live={live} />
        </div>
      </section>
      <div className="space-y-4">
        <article className="paper rounded-[1.6rem] p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-bark">Punteo</p>
              <p className="font-display text-5xl text-ink">{temp ? formatNum(temp.value, 1) : "—"}<span className="text-2xl"> °C</span></p>
            </div>
            {temp ? <StatusPill status={temp.status} /> : null}
          </div>
          <div
            className="relative mt-4 h-3 overflow-hidden rounded-full bg-[#efe4d4]"
            role="meter"
            aria-valuemin={100}
            aria-valuemax={125}
            aria-valuenow={temp?.value ?? 0}
            aria-label="Temperatura de punteo. El rango documental va de 110 a 115 grados Celsius."
          >
            <div className="absolute inset-y-0 bg-cane/50" style={{ left: "40%", width: "20%" }} />
            <div className="absolute top-0 h-full w-1 bg-ink" style={{ left: `${marker}%` }} />
          </div>
          <p className="mt-2 text-xs text-bark">Banda documental: {DOC.punteoMinC}–{DOC.punteoMaxC} °C. El resto de sensores no tiene meta en el documento.</p>
          <Sparkline values={data.series.temperatura ?? []} alert={temp?.status === "fuera_de_rango"} />
        </article>
        <form onSubmit={onSubmit} className="paper space-y-3 rounded-[1.6rem] p-5">
          <p className="font-display text-2xl text-ink">Captura manual</p>
          <label className="field">
            Métrica
            <select name="metric" value={metric} onChange={(event) => setMetric(event.target.value as MetricKey)}>
              {ORDER.map((key) => (
                <option key={key} value={key}>
                  {METRICS[key].station} · {key} ({METRICS[key].unit})
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            Valor ({METRICS[metric].unit})
            <input name="value" type="number" step="0.1" min={METRICS[metric].min} max={METRICS[metric].max} required />
          </label>
          <label className="field">
            Fuente
            <input name="source" defaultValue="operador-joven" maxLength={40} required />
          </label>
          <button className="btn btn-ink w-full" type="submit" disabled={pending}>
            {pending ? "Registrando…" : "Registrar lectura"}
          </button>
          {error ? <p className="text-sm text-alert" role="alert">{error}</p> : null}
        </form>
      </div>
      <div className="lg:col-span-2">
        <DataNote kind="escenario">
          No hay un ESP32 de Nocaima conectado. El ciclo simula una caminata de la temperatura y, a veces, una salida del rango para probar la alerta. El DHT22 no sirve para el punteo: ese punto exige termopar.
        </DataNote>
      </div>
      <section className="paper overflow-x-auto rounded-[1.6rem] p-5 lg:col-span-2">
        <h2 className="font-display text-3xl text-ink">Últimas lecturas</h2>
        <table className="mt-3">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Estación</th>
              <th>Métrica</th>
              <th>Valor</th>
              <th>Estado</th>
              <th>Fuente</th>
            </tr>
          </thead>
          <tbody>
            {data.recent.map((reading) => (
              <tr key={reading.id}>
                <td>{formatWhen(reading.recordedAt)}</td>
                <td>{reading.station}</td>
                <td>{reading.metric}</td>
                <td>{formatNum(reading.value, 1)} {reading.unit}</td>
                <td>{reading.status}</td>
                <td>{reading.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
