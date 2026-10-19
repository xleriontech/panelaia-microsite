"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-5 py-20">
      <p className="kicker">Mesa interrumpida</p>
      <h1 className="mt-3 font-display text-5xl text-cream">No se pudo abrir la bitácora.</h1>
      <p className="mt-4 text-honey">Verifique PostgreSQL y vuelva a intentar. No continúo con cifras de reemplazo.</p>
      <button type="button" className="btn btn-primary mt-6" onClick={() => reset()}>
        Reintentar
      </button>
    </main>
  );
}
