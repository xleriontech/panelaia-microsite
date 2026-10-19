import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="max-w-2xl mx-auto mb-8">
      <p className="kicker text-sm uppercase tracking-widest text-bark mb-3">{kicker}</p>
      <h1 className="mt-3 font-display text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95] text-cream">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-honey/90">{lede}</p>
    </header>
  );
}

export function DataNote({
  kind,
  children,
}: {
  kind: "documento" | "escenario" | "correccion";
  children: ReactNode;
}) {
  const label = kind === "documento" ? "Documento base" : kind === "escenario" ? "Escenario demostrativo" : "Corrección";
  return (
    <aside className={`note note-${kind}`}>
      <span>{label}</span>
      <div>{children}</div>
    </aside>
  );
}

export function Seal({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path d="M60 28c8 10 10 16 10 24 0 8-4 14-10 20-6-6-10-12-10-20 0-8 2-14 10-24z" fill="currentColor" />
      <path d="M38 78h44M42 86h36" stroke="currentColor" strokeWidth="2" />
      <rect x="46" y="62" width="28" height="10" rx="2" fill="none" stroke="currentColor" />
    </svg>
  );
}

export function Sparkline({ values, alert = false }: { values: number[]; alert?: boolean }) {
  if (values.length < 2) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const width = 160;
  const height = 42;
  const path = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / (max - min || 1)) * (height - 6) - 3;
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-12 w-full" role="img" aria-label="Serie reciente de la métrica">
      <path d={path} fill="none" stroke={alert ? "#c4492c" : "#c57a45"} strokeWidth="2.2" />
    </svg>
  );
}

export function StatusPill({ status }: { status: string }) {
  const alert = status === "fuera_de_rango";
  const label = status === "en_rango" ? "En rango 110-115 °C" : status === "fuera_de_rango" ? "Fuera de rango" : "Lectura de proceso";
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] ${alert ? "bg-alert text-white" : "bg-moss text-cream"}`}>
      {label}
    </span>
  );
}
