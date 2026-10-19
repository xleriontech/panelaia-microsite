"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { STAGES } from "@/lib/constants";
import { formatNum, formatWhen } from "@/lib/format";
import type { LotDTO, ProducerDTO } from "@/lib/types";

export function LotDesk({ lots, producers, query }: { lots: LotDTO[]; producers: ProducerDTO[]; query: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [opened, setOpened] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/lots", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form.entries())),
    });
    const payload = (await response.json()) as { error?: string; code?: string };
    setPending(false);
    if (!response.ok || !payload.code) {
      setError(payload.error ?? "No se pudo abrir el lote.");
      return;
    }
    setOpened(payload.code);
    event.currentTarget.reset();
    router.refresh();
  }

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <form onSubmit={onSubmit} className="paper space-y-3 rounded-[1.6rem] p-5">
        <h2 className="font-display text-3xl text-ink">Abrir lote fase 1</h2>
        <label className="field">
          Productor del escenario
          <select name="producerId" required defaultValue={producers[0]?.id}>
            {producers.map((producer) => (
              <option key={producer.id} value={producer.id}>
                {producer.code} · {producer.fullName} · {producer.vereda}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          Variedad de caña
          <input name="caneVariety" required maxLength={40} placeholder="POJ 2878" />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="field">°Brix<input name="brix" type="number" step="0.1" min="0" max="100" required /></label>
          <label className="field">Punteo °C<input name="punteoTempC" type="number" step="0.1" min="0" max="300" required /></label>
          <label className="field">Humedad %<input name="humidityPct" type="number" step="0.1" min="0" max="100" required /></label>
          <label className="field">RPM<input name="rpm" type="number" step="0.1" min="0" max="500" required /></label>
          <label className="field">Extracción %<input name="extractionPct" type="number" step="0.1" min="0" max="100" required /></label>
          <label className="field">Bagazo kg<input name="bagasseKg" type="number" step="0.1" min="0" required /></label>
          <label className="field">Neto kg<input name="netKg" type="number" step="0.1" min="0.1" required /></label>
          <label className="field">
            Etapa
            <select name="stage" defaultValue="punteo">
              {STAGES.map((stage) => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="field">
          Destino, si ya se conoce
          <input name="destination" maxLength={120} placeholder="Venta directa, sin intermediario" />
        </label>
        <button className="btn btn-ink w-full" disabled={pending} type="submit">
          {pending ? "Sellando lote…" : "Crear lote y huella local"}
        </button>
        {error ? <p className="text-sm text-alert" role="alert">{error}</p> : null}
        {opened ? (
          <p className="text-sm text-moss">
            Lote {opened} listo. <a className="underline" href={`/origen/${opened}`}>Abrir pasaporte</a>
          </p>
        ) : null}
      </form>
      <section className="paper overflow-x-auto rounded-[1.6rem] p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl text-ink">Bitácora</h2>
          <form action="/trazabilidad" className="flex gap-2">
            <label className="sr-only" htmlFor="q">Buscar lote</label>
            <input id="q" name="q" defaultValue={query} placeholder="Código, vereda o variedad" className="rounded-full border border-bark/20 px-3 py-2 text-sm" />
            <button className="btn btn-line px-4 py-2 text-sm" type="submit">Buscar</button>
          </form>
        </div>
        <table className="mt-4">
          <thead>
            <tr>
              <th>Lote</th>
              <th>Origen</th>
              <th>Punteo</th>
              <th>°Brix</th>
              <th>Kg</th>
              <th>Anclaje</th>
            </tr>
          </thead>
          <tbody>
            {lots.map((lot) => (
              <tr key={lot.id}>
                <td>
                  <a className="font-bold underline decoration-copper" href={`/origen/${lot.code}`}>{lot.code}</a>
                  <div className="text-xs text-bark">{formatWhen(lot.milledAt)} · {lot.stage}</div>
                </td>
                <td>{lot.producerCode}<div className="text-xs">{lot.vereda} · {lot.caneVariety}</div></td>
                <td>{formatNum(lot.punteoTempC, 1)} °C</td>
                <td>{formatNum(lot.brix, 1)}</td>
                <td>{formatNum(lot.soldKg, 1)} / {formatNum(lot.netKg, 1)}</td>
                <td>Pendiente fase 2</td>
              </tr>
            ))}
          </tbody>
        </table>
        {lots.length === 0 ? <p className="mt-4 text-sm">Ningún lote coincide con la búsqueda.</p> : null}
      </section>
    </div>
  );
}
