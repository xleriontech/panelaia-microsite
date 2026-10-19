import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-20">
      <p className="kicker">Sin lote</p>
      <h1 className="mt-3 font-display text-5xl text-cream">Ese pasaporte no está en la fase 1.</h1>
      <p className="mt-4 text-honey">El código no coincide con un lote de esta mesa. No fabrico un origen.</p>
      <Link href="/trazabilidad" className="btn btn-primary mt-6">
        Volver a la bitácora
      </Link>
    </main>
  );
}
