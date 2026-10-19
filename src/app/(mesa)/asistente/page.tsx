import type { Metadata } from "next";
import { AssistantConsole } from "@/components/asistente/AssistantConsole";
import { PageHeader } from "@/components/ui/Primitives";

export const metadata: Metadata = { title: "PanelaIA" };

export default function AsistentePage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-molasses)] py-12">
      <div className="max-w-2xl mx-auto px-4">
        <PageHeader
          kicker="PanelaIA en línea"
          title="Diga el componente. No invento el dato."
          lede="Asisto a la Alcaldía, a la Secretaría de Desarrollo y a la cooperativa en constitución. Si la cifra no está en el documento base, lo digo y señalo la fuente oficial."
        />
        <AssistantConsole />
      </div>
    </main>
  );
}
