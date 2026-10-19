import type { Metadata } from "next";
import { FundDesk } from "@/components/fondo/FundDesk";
import { DataNote, PageHeader } from "@/components/ui/Primitives";
import { DOC } from "@/lib/constants";
import { formatCop } from "@/lib/format";
import { getLedger, getProducers } from "@/lib/queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Fondo de retiro" };

export default async function FondoPage() {
  const [producers, ledger] = await Promise.all([getProducers(), getLedger()]);
  return (
    <main className="bg-[color:var(--color-molasses)] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader
          kicker="Fideicomiso previsto · no constituido"
          title="Un vaso hacia 76 millones, sin prometer mesada."
          lede="El documento base simula $200.000 COP al mes durante 15 años, a una hipótesis de 9% EA, para una meta de $76.000.000 COP por productor. La mesada estimada es de $400.000 a $550.000 COP durante 20 años. No es un derecho de la Ley 100 de 1993."
        />
        <div className="mt-6">
          <DataNote kind="documento">Administrador previsto: {DOC.fiduciary}. Aporte por venta: 5% a 8%. El saldo que ve aquí es escenario de mesa, no un extracto fiduciario.</DataNote>
        </div>
        <FundDesk producers={producers} ledger={ledger} />
        <section id="politica" className="mt-6 rounded-2xl bg-cream p-6">
          <h2 className="font-display text-4xl text-ink mb-3">Política de inversión propuesta</h2>
          <p className="mt-3 text-sm leading-relaxed text-bark">Texto del documento base, no un reglamento aprobado por la Superintendencia Financiera ni por un comité fiduciario.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-cream p-4">
              <h3 className="font-display text-2xl">Años 1 a 5</h3>
              <p className="mt-2 text-sm">CDT, TES y acciones. El documento no fija los porcentajes de esa mezcla. No los invento.</p>
            </article>
            <article className="rounded-2xl bg-cream p-4">
              <h3 className="font-display text-2xl">Desde el año 5</h3>
              <p className="mt-2 text-sm">ETFs globales referidos al S&P 500. Implican pérdida posible de capital y no garantizan el 9% EA.</p>
            </article>
          </div>
        </section>
        <article id="contrato" className="mt-6 rounded-2xl bg-cream p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-bark">Borrador técnico · no firmar</p>
          <h2 className="mt-2 font-display text-4xl text-ink">Instrucción de aporte al fondo de retiro</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-bark">
            <p>
              Entre el asociado de la {DOC.cooperative}, {DOC.cooperativeStatus}, y la propia cooperativa, se deja esta minuta para revisión jurídica y de {DOC.fiduciary}. No es el contrato de fiducia.
            </p>
            <p><strong>Objeto.</strong> Destinar al fondo de retiro cooperativo entre el 5% y el 8% de cada venta directa de panela, sin intermediario, y reconocer como referencia voluntaria el aporte de {formatCop(DOC.pensionMonthlyCop)} al mes descrito en el documento base.</p>
            <p><strong>Meta referencial.</strong> {formatCop(DOC.pensionTargetCop)} por productor a 15 años, bajo una hipótesis de 9% efectivo anual. Esa meta no es una rentabilidad prometida ni una mesada del Sistema General de Pensiones.</p>
            <p><strong>Mesada estimada del documento.</strong> {formatCop(DOC.payoutLowCop)} a {formatCop(DOC.payoutHighCop)} al mes durante 20 años. El documento no publica la fórmula. Esta minuta no la reconstruye como obligación.</p>
            <p><strong>Inversión.</strong> La referencia de los años 1 a 5 es CDT, TES y acciones; desde el año 5, ETFs globales referidos al S&P 500. Solo será válida si el contrato que autorice Fiduagraria y el régimen de la Superintendencia Financiera la permiten.</p>
            <p><strong>Datos.</strong> El nombre del asociado no se publica en el QR. El tratamiento sigue la Ley 1581 de 2012.</p>
            <p><strong>Firmas.</strong> Quedan en blanco a propósito. Asociado: ________. Cooperativa: ________. Concepto de Fiduagraria: ________.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
