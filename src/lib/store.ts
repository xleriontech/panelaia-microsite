"use client";

import { create } from "zustand";
import type { Answer } from "@/lib/types";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  answer?: Answer;
};

type PanelaState = {
  dockOpen: boolean;
  pending: boolean;
  messages: ChatMessage[];
  setDockOpen: (open: boolean) => void;
  setPending: (pending: boolean) => void;
  push: (message: ChatMessage) => void;
};

export const usePanelaStore = create<PanelaState>((set) => ({
  dockOpen: false,
  pending: false,
  messages: [],
  setDockOpen: (dockOpen) => set({ dockOpen }),
  setPending: (pending) => set({ pending }),
  push: (message) => set((state) => ({ messages: [...state.messages, message] })),
}));
