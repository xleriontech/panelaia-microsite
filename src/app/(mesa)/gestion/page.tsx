import type { Metadata } from "next";
import { DataNote, PageHeader } from "@/components/ui/Primitives";
import { PHOTOS } from "@/lib/constants";
import { NORMAS, ROADMAP } from "@/lib/normativa";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Gestión pública" };

export default function GestionPage() {
  return (
    <main className="bg-[color:var(--color-molasses)] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader
          kicker="Alcaldía y Secretaría de Desarrollo"
          title="Primero la norma correcta. Después el formulario."
          lede="PanelaIA no redacta actos. Ordena lo que el proyecto puede citar y señala lo que hay que verificar en DNP, MinAgricultura, SES, Superfinanciera, ICA y CAR."
        />
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
          <img src={PHOTOS.andes} alt="Atardecer en los Andes colombianos, referencia de territorio, no una vista certificada de Nocaima." className="h-72 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className="absolute bottom-0 max-w-xl p-6">
            <p className="kicker">Provincia del Gualivá</p>
            <p className="mt-2 font-display text-4xl text-cream">Nocaima no se gestiona con una cita equivocada.</p>
          </div>
        </section>
        <div className="mt-6">
          <DataNote kind="correccion">Tres correcciones al documento de trabajo: el Decreto 1067 de 2015 no es de agricultura; el artículo 197 del ET no es el régimen cooperativo; el Reglamento (UE) 2023/1115 no cubre la panela.</DataNote>
        </div>
        <section className="mt-6 overflow-x-auto">
          <table className="dark-table min-w-[760px]">
            <thead>
              <tr>
                <th>Tema</th>
                <th>Norma que sí aplica</th>
                <th>Corrección</th>
                <th>Dónde verificar</th>
              </tr>
            </thead>
            <tbody>
              {NORMAS.map((norma) => (
                <tr key={norma.tema}>
                  <td className="font-semibold text-cream">{norma.tema}</td>
                  <td>{norma.aplica}</td>
                  <td>{norma.correccion}</td>
                  <td>{norma.verificar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="mt-10">
          <h2 className="font-display text-4xl text-cream mb-2">Hoja de 18 meses, propuesta</h2>
          <p className="max-w-2xl text-sm text-honey/80 mb-6">El documento fija el horizonte, no el cronograma mensual. Esta secuencia es de trabajo. No está aprobada por la Alcaldía.</p>
          <ol className="grid gap-3 md:grid-cols-2">
            {ROADMAP.map((item) => (
              <li key={item.month} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="kicker">Meses {item.month}</p>
                <h3 className="mt-2 font-display text-2xl text-cream">{item.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-glow">{item.owner}</p>
                <p className="mt-2 text-sm text-honey/85">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>
        <section id="alianzas" className="mt-8 rounded-2xl bg-cream p-6">
          <h2 className="font-display text-4xl text-ink mb-3">Estructura para Alianzas Productivas</h2>
          <p className="mt-3 text-sm text-bark mb-4">No es una postulación. Falta la convocatoria vigente, el monto y la existencia jurídica de la cooperativa.</p>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-bark">
            <li>Territorio: Nocaima, Cundinamarca, provincia del Gualivá. Categoría 6 solo si la categorización vigente lo confirma.</li>
            <li>Organización: cooperativa en constitución, Ley 79 de 1988. No postular como si ya tuviera personería.</li>
            <li>Problema: intermediación, trapiche por automatizar, trazabilidad ausente, fondo por diseñar y relevo generacional.</li>
            <li>Componentes: piloto de hornilla CIMPA, fase 1 de lote y QR, venta directa, instrucción a Fiduagraria y operación juvenil.</li>
            <li>Cifra comercial usable: marketing de $2.000.000 COP al mes. No es el presupuesto total ni la contrapartida.</li>
            <li>Indicadores que sí se pueden medir en esta mesa: lotes con QR, punteo dentro de 110-115 °C, porcentaje de venta directa y jóvenes en operación.</li>
            <li>Ventanilla: confirmar en MinAgricultura o en la Agencia de Desarrollo Rural. No citar un cierre que esta mesa no ha leído.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
