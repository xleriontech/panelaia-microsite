import { DOC, PHOTOS } from "@/lib/constants";
import { formatCop, formatNum } from "@/lib/format";
import { getOverview } from "@/lib/queries";
import { DataNote, Seal } from "@/components/ui/Primitives";

export const dynamic = "force-dynamic";

const MODULES = [
  { href: "/trapiche", index: "01", title: "Trapiche 3D", text: "Hornilla CIMPA, vapor y punteo entre 110 y 115 °C.", image: PHOTOS.press },
  { href: "/trazabilidad", index: "02", title: "Trazabilidad", text: "Lote, QR y huella local. La cadena queda para la fase 2.", image: PHOTOS.cane },
  { href: "/fondo", index: "03", title: "Fondo de retiro", text: "Meta documental de $76.000.000 COP por productor.", image: PHOTOS.andes },
  { href: "/comercial", index: "04", title: "Venta directa", text: "Bogotá entre $7.000 y $9.000 COP/kg, sin intermediarios.", image: PHOTOS.hills },
  { href: "/gestion", index: "05", title: "Gestión pública", text: "Norma corregida, 18 meses y Alianzas Productivas.", image: PHOTOS.andes },
  { href: "/asistente", index: "06", title: "PanelaIA", text: "Consulta para Alcaldía, Secretaría y cooperativa.", image: PHOTOS.cane },
];

export default async function HomePage() {
  const overview = await getOverview();
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <img src={PHOTOS.cane} alt="Cañaduzal de referencia, no es una parcela de Nocaima." className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/25" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid min-h-[88vh] max-w-7xl items-end gap-10 lg:grid-cols-[1.2fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3 text-amber mb-6">
                <Seal className="h-14 w-14" />
                <p className="kicker">Nocaima · Gualivá · {DOC.categoryLabel}</p>
              </div>
              <h1 className="mt-6 max-w-xl font-display text-[clamp(3rem,8vw,6.4rem)] leading-[0.88] text-cream tracking-tighter">
                PanelaIA <span className="italic text-amber">escucha</span> el trapiche.
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-honey">
                Soy el asistente técnico de la revitalización panelera de Nocaima. Marca {DOC.brand}. Cooperativa en constitución. ¿En qué componente requiere apoyo?
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary">Hablar con PanelaIA</a>
                <a className="btn btn-ghost">Abrir gemelo 3D</a>
              </div>
            </div>
            <aside className="paper rounded-[1.8rem] p-6 lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-bark mb-4">Cifras que sí están escritas</p>
              <ul className="space-y-3 text-sm text-ink">
                <li className="flex justify-between gap-3"><span>Productor</span><strong>{formatCop(DOC.producerPriceMin)} – {formatCop(DOC.producerPriceMax)} /kg</strong></li>
                <li className="flex justify-between gap-3"><span>Bogotá</span><strong>{formatCop(DOC.bogotaPriceMin)} – {formatCop(DOC.bogotaPriceMax)} /kg</strong></li>
                <li className="flex justify-between gap-3"><span>Aporte por venta</span><strong>5% – 8%</strong></li>
                <li className="flex justify-between gap-3"><span>Aporte mensual</span><strong>{formatCop(DOC.pensionMonthlyCop)}</strong></li>
                <li className="flex justify-between gap-3"><span>Meta a 15 años</span><strong>{formatCop(DOC.pensionTargetCop)}</strong></li>
                <li className="flex justify-between gap-3"><span>Marketing</span><strong>{formatCop(DOC.marketingMonthlyCop)} /mes</strong></li>
                <li className="flex justify-between gap-3"><span>Punteo</span><strong>{DOC.punteoMinC}–{DOC.punteoMaxC} °C</strong></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <DataNote kind="escenario">
          La mesa ya consultó PostgreSQL. Hay {overview.lots} lotes de ensayo, {formatCop(overview.salesCop)} en ventas directas simuladas y {formatCop(overview.fundCop)} en el libro del fondo. Punteo vigente: {overview.punteoC == null ? "sin lectura" : `${formatNum(overview.punteoC, 1)} °C`}. Jóvenes del escenario: {overview.youth}. Esto no es un informe de ejecución física.
        </DataNote>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {MODULES.map((module) => (
            <a key={module.href} href={module.href} className="group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 hover:border-copper/30 transition-colors">
              <img src={module.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-in-out hover:scale-105 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <p className="font-display text-3xl text-amber">{module.index}</p>
                <h2 className="mt-2 font-display text-3xl text-cream">{module.title}</h2>
                <p className="mt-3 max-w-xs text-sm text-honey">{module.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
