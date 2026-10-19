"use client";

import { usePanelaStore } from "@/lib/store";
import type { Answer } from "@/lib/types";

export async function askPanela(question: string): Promise<void> {
  const trimmed = question.trim();
  if (!trimmed) return;
  const { push, setPending, pending } = usePanelaStore.getState();
  if (pending) return;
  push({ id: crypto.randomUUID(), role: "user", text: trimmed });
  setPending(true);
  try {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ question: trimmed }),
    });
    const payload = (await response.json()) as Answer & { error?: string };
    if (!response.ok || !payload.direct) {
      push({
        id: crypto.randomUUID(),
        role: "assistant",
        text: payload.error ?? "No pude consultar la bitácora.",
      });
      return;
    }
    push({ id: crypto.randomUUID(), role: "assistant", text: payload.direct, answer: payload });
  } catch {
    push({
      id: crypto.randomUUID(),
      role: "assistant",
      text: "La consulta no llegó al servidor. Intente de nuevo.",
    });
  } finally {
    setPending(false);
  }
}
