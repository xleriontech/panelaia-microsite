"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { DOC } from "@/lib/constants";
import { bpsLabel, formatCop, formatWhen } from "@/lib/format";
import { projectPension } from "@/lib/pension";
import type { LedgerDTO, ProducerDTO } from "@/lib/types";

const Scene = dynamic(() => import("@/components/fondo/FundScene"), {
  ssr: false,
  loading: () => <div className="grid h-full place-items-center text-honey">Cargando vaso de la meta…</div>,
});

export function FundDesk({ producers, ledger }: { producers: ProducerDTO[]; ledger: LedgerDTO[] }) {
  const router = useRouter();
  const [producerId, setProducerId] = useState(producers[0]?.id ?? 0);
  const [count, setCount] = useState(50);
  const [sensitivity, setSensitivity] = useState(false);
  const [rate, setRate] = useState(9);
  const [projection, setProjection] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const selected = producers.find((producer) => producer.id === producerId) ?? producers[0];
  const scenario = useMemo(
    () => projectPension({ producers: count, rateEa: sensitivity ? rate / 100 : DOC.pensionRateEa }),
    [count, rate, sensitivity],
  );
  const progress = projection || !selected ? 1 : selected.balanceCop / DOC.pensionTargetCop;

  async function aportar() {
    setPending(true);
    setError(null);
    const response = await fetch("/api/pension", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ producerId }),
    });
    const payload = (await response.json()) as { error?: string };
    setPending(false);
    if (!response.ok) {
      setError(payload.error ?? "No se pudo anotar el aporte.");
      return;
    }
    router.refresh();
  }

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
        <div className="flex items-center justify-between px-4 py-3">
          <p className="kicker">{projection ? "Proyección, no es saldo" : "Saldo de escenario"}</p>
          <button type="button" className="btn btn-ghost px-3 py-1 text-xs" onClick={() => setProjection((value) => !value)} aria-pressed={projection}>
            {projection ? "Ver saldo" : "Ver meta llena"}
          </button>
        </div>
        <div className="h-[420px]" role="img" aria-label="Vaso de cobre que representa el avance hacia la meta documental de 76 millones de pesos.">
          <Scene progress={progress} projection={projection} />
        </div>
      </section>
      <section className="paper rounded-[1.6rem] p-5">
        <h2 className="font-display text-3xl text-ink">Simulador</h2>
        <label className="field mt-4">
          Productor del vaso
          <select value={producerId} onChange={(event) => setProducerId(Number(event.target.value))}>
            {producers.map((producer) => (
              <option key={producer.id} value={producer.id}>
                {producer.code} · {producer.fullName}
              </option>
            ))}
          </select>
        </label>
        {selected ? (
          <div className="mt-4">
            <p className="font-display text-4xl text-ink">{formatCop(projection ? DOC.pensionTargetCop : selected.balanceCop)}</p>
            <p className="text-sm text-bark">Meta documental por productor: {formatCop(DOC.pensionTargetCop)}. Aporte previsto del asociado: {bpsLabel(selected.contributionRateBps)}.</p>
            <meter min={0} max={DOC.pensionTargetCop} value={projection ? DOC.pensionTargetCop : selected.balanceCop} aria-label="Progreso hacia la meta documental" />
          </div>
        ) : null}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="field">
            Productores del escenario
            <input type="number" min={1} max={500} value={count} onChange={(event) => setCount(Number(event.target.value) || 1)} />
          </label>
          <label className="field">
            Sensibilidad de tasa, no documental
            <input type="number" min={0} max={15} step={0.1} value={rate} disabled={!sensitivity} onChange={(event) => setRate(Number(event.target.value))} />
          </label>
        </div>
        <label className="mt-3 flex items-center gap-2 text-sm text-bark">
          <input type="checkbox" checked={sensitivity} onChange={(event) => setSensitivity(event.target.checked)} />
          Abrir sensibilidad. La hipótesis del documento sigue siendo 9% EA.
        </label>
        <dl className="mt-4 grid gap-2 text-sm text-bark">
          <div className="flex justify-between gap-3"><dt>Valor futuro calculado, 1 productor</dt><dd>{formatCop(scenario.futureValueCop)}</dd></div>
          <div className="flex justify-between gap-3"><dt>Diferencia contra $76.000.000</dt><dd>{formatCop(scenario.gapCop)}</dd></div>
          <div className="flex justify-between gap-3"><dt>Meta agregada del escenario</dt><dd>{formatCop(scenario.aggregateTargetCop)}</dd></div>
          <div className="flex justify-between gap-3"><dt>Aporte mensual agregado</dt><dd>{formatCop(scenario.aggregateMonthlyCop)}</dd></div>
        </dl>
        {sensitivity ? <p className="mt-3 text-sm text-alert">Esta tasa no está en el documento base. No la use en un acto.</p> : null}
        <button type="button" className="btn btn-ink mt-4" onClick={() => void aportar()} disabled={pending}>
          {pending ? "Anotando…" : "Anotar aporte documental de $200.000"}
        </button>
        {error ? <p className="mt-2 text-sm text-alert" role="alert">{error}</p> : null}
      </section>
      <section className="paper overflow-x-auto rounded-[1.6rem] p-5 lg:col-span-2">
        <h2 className="font-display text-3xl text-ink">Libro del fondo</h2>
        <table className="mt-3">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Asociado</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((row) => (
              <tr key={row.id}>
                <td>{formatWhen(row.recordedAt)}</td>
                <td>{row.producerName}</td>
                <td>{row.kind === "aporte_venta" ? "Venta directa" : "Mensual documental"}</td>
                <td>{formatCop(row.amountCop)}</td>
                <td>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
