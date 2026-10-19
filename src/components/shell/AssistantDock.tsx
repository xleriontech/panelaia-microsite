"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { AnswerView } from "@/components/asistente/AnswerView";
import { askPanela } from "@/components/asistente/ask";
import { usePanelaStore } from "@/lib/store";

export function AssistantDock() {
  const { dockOpen, setDockOpen, messages, pending } = usePanelaStore();
  const [question, setQuestion] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = question;
    setQuestion("");
    void askPanela(next);
  }

  return (
    <div className="no-print fixed bottom-20 right-3 z-50 md:bottom-5 md:right-5">
      <button type="button" className="btn btn-primary shadow-lg" onClick={() => setDockOpen(!dockOpen)} aria-expanded={dockOpen}>
        {dockOpen ? "Cerrar PanelaIA" : "Hablar con PanelaIA"}
      </button>
      <AnimatePresence>
        {dockOpen ? (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="paper mt-3 flex max-h-[70vh] w-[min(92vw,400px)] flex-col overflow-hidden rounded-3xl"
            aria-label="Consulta a PanelaIA"
          >
            <header className="border-b border-bark/10 px-4 py-3">
              <p className="kicker text-copper">Asistente técnico</p>
              <p className="mt-1 text-sm text-bark">
                PanelaIA en línea. ¿En qué componente requiere apoyo: 3D, IoT, trazabilidad, fondo, comercialización o gestión?
              </p>
            </header>
            <div className="flex-1 space-y-3 overflow-auto px-4 py-3" aria-live="polite">
              {messages.length === 0 ? (
                <p className="text-sm text-bark">Puede preguntar por la hornilla, el QR, los 50 productores o la norma aplicable.</p>
              ) : (
                messages.slice(-4).map((message) => (
                  <div key={message.id} className={message.role === "user" ? "text-sm font-semibold text-ink" : ""}>
                    {message.role === "user" ? <p>Usted: {message.text}</p> : message.answer ? <AnswerView answer={message.answer} compact /> : <p className="text-sm">{message.text}</p>}
                  </div>
                ))
              )}
              {pending ? <p className="text-sm text-bark">Consultando la bitácora…</p> : null}
            </div>
            <form onSubmit={onSubmit} className="flex gap-2 border-t border-bark/10 p-3">
              <label className="sr-only" htmlFor="dock-question">
                Pregunta para PanelaIA
              </label>
              <input
                id="dock-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className="min-w-0 flex-1 rounded-full border border-bark/20 px-3 py-2 text-sm text-ink"
                placeholder="Escriba la consulta"
                maxLength={2000}
              />
              <button className="btn btn-ink px-4 py-2 text-sm" type="submit" disabled={pending}>
                Enviar
              </button>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
