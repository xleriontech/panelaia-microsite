"use client";

import { useState } from "react";
import type { Answer } from "@/lib/types";

export function AnswerView({ answer, compact = false }: { answer: Answer; compact?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    if (!answer.code) return;
    await navigator.clipboard.writeText(answer.code.body);
    setCopied(true);
  }

  return (
    <article className="space-y-4 bg-cream rounded-2xl p-5">
      <p className="font-display text-2xl leading-tight text-ink">{answer.direct}</p>
      <div className="space-y-3 text-sm leading-relaxed text-bark">
        {answer.detail.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {answer.table ? (
        <div className="overflow-x-auto">
          <table>
            <caption className="mb-2 text-left text-xs font-bold uppercase tracking-[0.14em] text-bark">
              {answer.table.caption}
            </caption>
            <thead>
              <tr>
                {answer.table.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {answer.table.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {answer.code && !compact ? (
        <div className="mt-3 p-3 bg-ink/10 rounded-xl border border-ink/20">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark">{answer.code.title}</p>
            <button type="button" className="btn btn-line px-3 py-1 text-xs" onClick={() => void copyCode()}>
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
          <pre className="mt-2 overflow-auto rounded text-xs" style={{ tabSize: 2 }}>
            <code className="text-ink">{answer.code.body}</code>
          </pre>
        </div>
      ) : null}
      {answer.legal && !compact ? (
        <section className="mt-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-bark">Marco legal</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bark">
            {answer.legal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {answer.risks ? (
        <section className="mt-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-alert">Riesgos</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bark">
            {answer.risks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {answer.next ? (
        <section className="mt-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-moss">Siguiente paso</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bark">
            {answer.next.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {answer.links ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {answer.links.map((link) => (
            <a key={link.href} href={link.href} className="btn btn-ink text-sm">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
