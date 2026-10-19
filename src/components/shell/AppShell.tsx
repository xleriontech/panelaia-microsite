"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AssistantDock } from "@/components/shell/AssistantDock";
import { Seal } from "@/components/ui/Primitives";

const NAV = [
  { href: "/", label: "Mesa" },
  { href: "/trapiche", label: "Trapiche" },
  { href: "/trazabilidad", label: "Lotes" },
  { href: "/fondo", label: "Fondo" },
  { href: "/comercial", label: "Mercado" },
  { href: "/gestion", label: "Gestión" },
  { href: "/asistente", label: "PanelaIA" },
];

function active(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const quiet = pathname.startsWith("/origen");

  if (quiet) {
    return (
      <div className="min-h-screen">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">
          Saltar al contenido
        </a>
        <header className="no-print flex items-center justify-between px-5 py-4">
          <Link href="/" className="inline-flex items-center gap-3 text-honey">
            <Seal className="h-10 w-10" />
            <span className="font-display text-xl">Nocaima Dulce Origen</span>
          </Link>
          <Link href="/trazabilidad" className="text-sm text-glow">
            Bitácora interna
          </Link>
        </header>
        <div id="contenido">{children}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen md:pl-[108px]">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">
        Saltar al contenido
      </a>
      <aside className="no-print fixed inset-y-0 left-0 z-40 hidden w-[108px] flex-col items-center border-r border-white/10 bg-molasses/90 py-5 md:flex">
        <Link href="/" aria-label="Mesa de mando" className="text-amber">
          <Seal />
        </Link>
        <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-glow [writing-mode:vertical-rl]">
          Dulce Origen
        </p>
        <nav className="mt-6 flex flex-1 flex-col gap-1" aria-label="Componentes del proyecto">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(pathname, item.href) ? "page" : undefined}
              className={`rounded-xl px-2 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] ${active(pathname, item.href) ? "bg-amber text-ink" : "text-honey/80 hover:bg-white/5"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <header className="no-print sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-ink/85 px-4 py-3 backdrop-blur md:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-amber">
          <Seal className="h-8 w-8" />
          <span className="font-display text-lg">PanelaIA</span>
        </Link>
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-glow">Nocaima</p>
      </header>
      <div id="contenido">{children}</div>
      <footer className="no-print mx-auto max-w-6xl px-5 pb-28 pt-10 text-xs leading-relaxed text-honey/70 md:pb-10">
        <p>
          PanelaIA apoya a la Cooperativa de Productores de Panela de Nocaima, en constitución, y a la Alcaldía. No es un
          intermediario comercial ni un canal de la Superintendencia Financiera. Las metas de precio, aporte, marketing y
          fondo salen del documento base. Los nombres, lotes y saldos son un escenario para ensayar la mesa.
        </p>
        <p className="mt-2">
          Fotografías de referencia, no del trapiche de Nocaima: Joshuan Barboza, Mariya Muschard, Juan Felipe Ramírez y
          Adrienne Andersen, vía Pexels.
        </p>
      </footer>
      <nav className="no-print fixed inset-x-0 bottom-0 z-40 flex justify-between gap-1 border-t border-white/10 bg-ink/95 px-2 py-2 md:hidden" aria-label="Componentes del proyecto">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active(pathname, item.href) ? "page" : undefined}
            className={`flex-1 rounded-lg px-1 py-2 text-center text-[0.62rem] font-bold uppercase tracking-[0.08em] ${active(pathname, item.href) ? "bg-amber text-ink" : "text-honey"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <AssistantDock />
    </div>
  );
}
