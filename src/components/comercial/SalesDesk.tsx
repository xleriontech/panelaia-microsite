"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { CHANNELS, DOC } from "@/lib/constants";
import { bpsLabel, formatCop, formatNum, formatWhen } from "@/lib/format";
import { contributionFromSale } from "@/lib/pension";
import type { LotDTO, ProducerDTO, SaleDTO } from "@/lib/types";

export function SalesDesk({
  lots,
  producers,
  sales,
}: {
  lots: LotDTO[];
  producers: ProducerDTO[];
  sales: SaleDTO[];
}) {
  const router = useRouter();
  const [lotId, setLotId] = useState(String(lots.find((lot) => lot.netKg - lot.soldKg > 0)?.id ?? lots[0]?.id ?? ""));
  const [channel, setChannel] = useState<(typeof CHANNELS)[number]["id"]>("b2b_bogota");
  const [kg, setKg] = useState(10);
  const [price, setPrice] = useState<number>(DOC.bogotaPriceMin);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const selected = lots.find((lot) => String(lot.id) === lotId);
  const producer = producers.find((item) => item.id === selected?.producerId);
  const [rate, setRate] = useState(producer?.contributionRateBps ?? DOC.contributionMinBps);
  const band = CHANNELS.find((item) => item.id === channel)?.band ?? "bogota";
  const min = band === "productor" ? DOC.producerPriceMin : DOC.bogotaPriceMin;
  const max = band === "productor" ? DOC.producerPriceMax : DOC.bogotaPriceMax;
  const preview = useMemo(() => contributionFromSale(kg, price, rate), [kg, price, rate]);

  function chooseLot(value: string) {
    setLotId(value);
    const lot = lots.find((item) => String(item.id) === value);
    const owner = producers.find((item) => item.id === lot?.producerId);
    if (owner) setRate(owner.contributionRateBps);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/sales", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lotId: form.get("lotId"),
        channel: form.get("channel"),
        counterparty: form.get("counterparty"),
        kg: form.get("kg"),
        pricePerKg: form.get("pricePerKg"),
        contributionRateBps: form.get("contributionRateBps"),
      }),
    });
    const payload = (await response.json()) as { error?: string; contributionCop?: number };
    setPending(false);
    if (!response.ok) {
      setError(payload.error ?? "No se pudo registrar la venta.");
      return;
    }
    router.refresh();
  }

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <form onSubmit={onSubmit} className="paper space-y-3 rounded-[1.6rem] p-5">
        <h2 className="font-display text-3xl text-ink">Registrar venta directa</h2>
        <label className="field">
          Lote
          <select name="lotId" value={lotId} onChange={(event) => chooseLot(event.target.value)}>
            {lots.map((lot) => (
              <option key={lot.id} value={lot.id} disabled={lot.netKg - lot.soldKg <= 0}>
                {lot.code} · quedan {formatNum(lot.netKg - lot.soldKg, 1)} kg
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          Canal
          <select
            name="channel"
            value={channel}
            onChange={(event) => {
              const next = event.target.value as (typeof CHANNELS)[number]["id"];
              setChannel(next);
              const nextBand = CHANNELS.find((item) => item.id === next)?.band;
              setPrice(nextBand === "productor" ? DOC.producerPriceMin : DOC.bogotaPriceMin);
            }}
          >
            {CHANNELS.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
        <p className="text-xs text-bark">{CHANNELS.find((item) => item.id === channel)?.note} Rango admitido: {formatCop(min)} a {formatCop(max)}.</p>
        <label className="field">
          Comprador directo
          <input name="counterparty" required minLength={3} maxLength={140} placeholder="Hogar, restaurante o puesto cooperativo" />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="field">
            Kilogramos
            <input name="kg" type="number" step="0.1" min="0.1" value={kg} onChange={(event) => setKg(Number(event.target.value))} required />
          </label>
          <label className="field">
            Precio COP/kg
            <input name="pricePerKg" type="number" min={min} max={max} value={price} onChange={(event) => setPrice(Number(event.target.value))} required />
          </label>
        </div>
        <label className="field">
          Aporte al fondo ({bpsLabel(rate)})
          <input name="contributionRateBps" type="number" min={DOC.contributionMinBps} max={DOC.contributionMaxBps} step={50} value={rate} onChange={(event) => setRate(Number(event.target.value))} required />
        </label>
        <p className="text-sm text-bark">Aporte calculado de esta venta: {formatCop(preview)}. Queda en el libro de escenario, no en Fiduagraria.</p>
        <button className="btn btn-ink w-full" disabled={pending} type="submit">
          {pending ? "Registrando…" : "Registrar sin intermediario"}
        </button>
        {error ? <p className="text-sm text-alert" role="alert">{error}</p> : null}
      </form>
      <section className="paper overflow-x-auto rounded-[1.6rem] p-5">
        <h2 className="font-display text-3xl text-ink">Ventas del escenario</h2>
        <table className="mt-4">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Canal</th>
              <th>Lote</th>
              <th>Precio</th>
              <th>Aporte</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td>{formatWhen(sale.soldAt)}<div className="text-xs">{sale.counterparty}</div></td>
                <td>{CHANNELS.find((item) => item.id === sale.channel)?.label ?? sale.channel}</td>
                <td>{sale.lotCode}<div className="text-xs">{formatNum(sale.kg, 1)} kg</div></td>
                <td>{formatCop(sale.pricePerKg)}</td>
                <td>{formatCop(sale.contributionCop)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
