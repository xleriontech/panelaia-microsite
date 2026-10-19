import type { Metadata } from "next";
import { SalesDesk } from "@/components/comercial/SalesDesk";
import { DataNote, PageHeader } from "@/components/ui/Primitives";
import { DOC, PHOTOS } from "@/lib/constants";
import { formatCop } from "@/lib/format";
import { getLots, getProducers, getSales } from "@/lib/queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Comercialización" };

export default async function ComercialPage() {
  const [lots, producers, sales] = await Promise.all([getLots(), getProducers(), getSales()]);
  const grossLow = DOC.bogotaPriceMin - DOC.producerPriceMax;
  const grossHigh = DOC.bogotaPriceMax - DOC.producerPriceMin;
  return (
    <main className="bg-[color:var(--color-molasses)] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader
          kicker="Sin intermediarios"
          title="La brecha de precio se queda en la cooperativa."
          lede="El documento base distingue el precio al productor del precio en Bogotá. Esta mesa no calcula margen neto: no hay flete, merma ni empaque escritos en el documento."
        />
        <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-moss/70 p-5">
              <p className="kicker">Productor</p>
              <p className="mt-3 font-display text-4xl text-cream">{formatCop(DOC.producerPriceMin)}</p>
              <p className="text-honey">hasta {formatCop(DOC.producerPriceMax)} /kg</p>
            </article>
            <article className="rounded-2xl bg-amber p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em]">Bogotá</p>
              <p className="mt-3 font-display text-4xl">{formatCop(DOC.bogotaPriceMin)}</p>
              <p>hasta {formatCop(DOC.bogotaPriceMax)} /kg</p>
            </article>
            <article className="paper rounded-2xl p-5 sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-bark">Brecha bruta documental</p>
              <p className="mt-2 font-display text-3xl text-ink">{formatCop(grossLow)} a {formatCop(grossHigh)} /kg</p>
              <p className="mt-2 text-sm text-bark">Es la distancia entre rangos, no la utilidad. Marketing documental: {formatCop(DOC.marketingMonthlyCop)} al mes, {formatCop(DOC.marketingMonthlyCop * DOC.roadmapMonths)} si se sostiene 18 meses. Esa suma no es una apropiación de la Alcaldía.</p>
            </article>
          </div>
          <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <img src={PHOTOS.hills} alt="Colinas de Cundinamarca, referencia de paisaje, no una finca de Nocaima." className="h-full min-h-72 w-full object-cover" />
          </figure>
        </section>
        <div className="mt-6 px-4">
          <DataNote kind="documento">Canales del proyecto: B2B Bogotá, mercados campesinos, suscripción y agroturismo.</DataNote>
          <DataNote kind="correccion">El agroturismo no tiene tarifa en el documento. No se cobra una visita inventada.</DataNote>
          <DataNote kind="escenario">Los jóvenes community managers del escenario sostienen la marca. No reemplazan un censo de relevo.</DataNote>
        </div>
        <SalesDesk lots={lots} producers={producers} sales={sales} />
      </div>
    </main>
  );
}
