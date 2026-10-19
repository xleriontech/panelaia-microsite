import type { Metadata } from "next";
import { LotDesk } from "@/components/trazabilidad/LotDesk";
import { DataNote, PageHeader } from "@/components/ui/Primitives";
import { getLots, getProducers } from "@/lib/queries";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Trazabilidad" };

export default async function TrazabilidadPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const query = params.q ?? "";
  const [lots, producers] = await Promise.all([getLots(query), getProducers()]);
  return (
    <main className="bg-[color:var(--color-molasses)] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <PageHeader
          kicker="Fase 1 · base centralizada"
          title="Cada lote tiene nombre, peso y una huella que todavía no es cadena."
          lede="El QR abre un pasaporte público con código de productor y vereda, no con el nombre. La fase 2 —Hyperledger Besu o Polygon— sigue pendiente. No hay anclaje que mostrar."
        />
        <div className="mt-6">
          <DataNote kind="correccion">El Reglamento (UE) 2023/1115 no cubre panela ni caña. La trazabilidad de esta mesa sirve a la cooperativa y al comprador directo, no a una declaración EUDR.</DataNote>
        </div>
        <LotDesk lots={lots} producers={producers} query={query} />
      </div>
    </main>
  );
}
