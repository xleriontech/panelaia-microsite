import { DOC } from "@/lib/constants";

export function statusForMetric(metric: string, value: number): string {
  if (metric !== "temperatura") return "lectura";
  return value >= DOC.punteoMinC && value <= DOC.punteoMaxC ? "en_rango" : "fuera_de_rango";
}
