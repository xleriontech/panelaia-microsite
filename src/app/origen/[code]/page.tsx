import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QrMark } from "@/components/qr/QrMark";
import { DOC } from "@/lib/constants";
import { formatDate, formatNum } from "@/lib/format";
import { getLot } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
  const { code } = await params;
  return { title: `Pasaporte ${code}` };
}

export default async function OrigenPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const lot = await getLot(code);
  if (!lot) notFound();
  const inRange = lot.punteoTempC >= DOC.punteoMinC && lot.punteoTempC <= DOC.punteoMaxC;
  return (
    <main id="contenido" className="mx-auto max-w-3xl px-5 py-8">
      <p className="no-print mb-4 text-sm text-glow">
        <a href="/" className="underline">PanelaIA</a>
        <span> · pasaporte público, sin nombre del asociado</span>
      </p>
      <article className="paper rounded-[1.8rem] p-6 sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-bark">{DOC.brand}</p>
        <h1 className="mt-2 font-display text-5xl text-ink">{lot.code}</h1>
        <p className="mt-2 text-bark">Pasaporte de origen. Venta prevista sin intermediarios. Cooperativa en constitución.</p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <QrMark path={`/origen/${lot.code}`} label={`Código QR del lote ${lot.code}`} />
          <dl className="grid flex-1 gap-2 text-sm">
            <div><dt className="text-xs uppercase tracking-[0.14em] text-bark">Molienda</dt><dd>{formatDate(lot.milledAt)}</dd></div>
            <div><dt className="text-xs uppercase tracking-[0.14em] text-bark">Origen</dt><dd>{lot.producerCode} · vereda {lot.vereda}</dd></div>
            <div><dt className="text-xs uppercase tracking-[0.14em] text-bark">Variedad</dt><dd>{lot.caneVariety}</dd></div>
            <div><dt className="text-xs uppercase tracking-[0.14em] text-bark">Etapa</dt><dd>{lot.stage}</dd></div>
          </dl>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-cream p-4"><p className="text-xs uppercase tracking-[0.14em]">Punteo</p><p className="font-display text-3xl">{formatNum(lot.punteoTempC, 1)} °C</p><p className="text-xs">{inRange ? "Dentro de 110-115 °C" : "Fuera del rango documental"}</p></div>
          <div className="rounded-2xl bg-cream p-4"><p className="text-xs uppercase tracking-[0.14em]">°Brix</p><p className="font-display text-3xl">{formatNum(lot.brix, 1)}</p><p className="text-xs">Sin meta documental</p></div>
          <div className="rounded-2xl bg-cream p-4"><p className="text-xs uppercase tracking-[0.14em]">Neto</p><p className="font-display text-3xl">{formatNum(lot.netKg, 1)} kg</p><p className="text-xs">Vendidos {formatNum(lot.soldKg, 1)} kg</p></div>
        </div>
        <section className="mt-8">
          <h2 className="font-display text-2xl">Huella local SHA-256</h2>
          <p className="mt-2 break-all font-mono text-xs leading-relaxed">{lot.localHash}</p>
          <p className="mt-2 text-sm text-bark">Estado de anclaje: {lot.anchorStatus.replaceAll("_", " ")}. No es una transacción de Besu ni de Polygon.</p>
        </section>
        <p className="mt-6 text-xs text-bark">El nombre del asociado no se publica en este pasaporte. Ley 1581 de 2012. El dato completo vive en la bitácora interna de la cooperativa.</p>
      </article>
    </main>
  );
}
