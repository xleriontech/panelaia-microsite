"use client";

import { FormEvent, useState } from "react";
import { AnswerView } from "@/components/asistente/AnswerView";
import { askPanela } from "@/components/asistente/ask";
import { SUGGESTIONS } from "@/lib/panela-ia";
import { usePanelaStore } from "@/lib/store";

export function AssistantConsole() {
  const { messages, pending } = usePanelaStore();
  const [question, setQuestion] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = question;
    setQuestion("");
    void askPanela(next);
  }

  return (
    <div className="mt-8 bg-[color:var(--color-molasses)] rounded-2xl overflow-hidden">
      <section className="border-b border-bark/15 px-6 py-4">
        <h2 className="font-display text-3xl text-ink">Consultas de la mesa</h2>
        <div className="mt-4 flex flex-col gap-2">
          {SUGGESTIONS.map((suggestion) => (
            <button key={suggestion} type="button" className="rounded-xl border border-bark/15 px-3 py-2.5 text-left text-sm text-ink hover:border-copper transition-colors">
              {suggestion}
            </button>
          ))}
        </div>
      </section>
      <section className="p-6 flex-1 space-y-5 overflow-auto" aria-live="polite">
        <article className="rounded-2xl bg-cream p-4">
          <p className="kicker text-copper">PanelaIA</p>
          <p className="mt-2 font-display text-2xl leading-tight text-ink">
            Estoy en línea para el trapiche, la trazabilidad, el fondo, la venta directa y la gestión pública de Nocaima.
          </p>
        </article>
        {messages.map((message) => (
          <article key={message.id} className={message.role === "user" ? "ml-8 rounded-2xl bg-ink px-4 py-3 text-cream" : "rounded-2xl bg-amber/5 px-4 py-3"}>
            {message.role === "user" ? <p>{message.text}</p> : message.answer ? <AnswerView answer={message.answer} /> : <p>{message.text}</p>}
          </article>
        ))}
        {pending ? <p className="text-sm text-bark">Consultando la bitácora…</p> : null}
      </section>
      <form onSubmit={onSubmit} className="p-6 border-t border-bark/15">
        <label className="sr-only" htmlFor="consulta">Consulta</label>
        <div className="flex gap-2">
          <input id="consulta" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={2000} className="flex-1 rounded-full border border-bark/20 px-4 py-3 text-ink focus:border-copper focus:outline-none" placeholder="Pregunte por norma, cifra o componente" />
          <button className="btn btn-ink" type="submit" disabled={pending}>Enviar</button>
        </div>
      </form>
    </div>
  );
}
