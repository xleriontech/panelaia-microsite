import { CHANNELS, DOC, METRICS, STAGES, type ChannelId, type MetricKey } from "@/lib/constants";
import { formatCop } from "@/lib/format";

export class InputError extends Error {}

export function asText(value: unknown, name: string, min: number, max: number): string {
  if (typeof value !== "string") throw new InputError(`${name} es obligatorio.`);
  const text = value.trim();
  if (text.length < min || text.length > max) {
    throw new InputError(`${name} debe tener entre ${min} y ${max} caracteres.`);
  }
  if (/[\u0000-\u001F]/.test(text)) throw new InputError(`${name} contiene caracteres no válidos.`);
  return text;
}

export function asNumber(value: unknown, name: string, min: number, max: number): number {
  const number = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(number) || number < min || number > max) {
    throw new InputError(`${name} está fuera del rango de captura (${min} a ${max}).`);
  }
  return number;
}

export function asInt(value: unknown, name: string, min: number, max: number): number {
  const number = asNumber(value, name, min, max);
  if (!Number.isInteger(number)) throw new InputError(`${name} debe ser un entero.`);
  return number;
}

export function asStage(value: unknown): (typeof STAGES)[number] {
  const stage = asText(value, "Etapa", 3, 20);
  if (!STAGES.includes(stage as (typeof STAGES)[number])) {
    throw new InputError("Etapa no reconocida en el flujo del trapiche.");
  }
  return stage as (typeof STAGES)[number];
}

export function asChannel(value: unknown): ChannelId {
  const channel = asText(value, "Canal", 3, 40);
  if (!CHANNELS.some((item) => item.id === channel)) {
    throw new InputError("Canal comercial no admitido.");
  }
  return channel as ChannelId;
}

export function assertDocumentedPrice(channel: ChannelId, pricePerKg: number): void {
  const item = CHANNELS.find((entry) => entry.id === channel);
  if (!item) throw new InputError("Canal comercial no admitido.");
  const [min, max] =
    item.band === "productor"
      ? [DOC.producerPriceMin, DOC.producerPriceMax]
      : [DOC.bogotaPriceMin, DOC.bogotaPriceMax];
  if (pricePerKg < min || pricePerKg > max) {
    throw new InputError(
      `Precio fuera del documento base. Para este canal solo se admite entre ${formatCop(min)} y ${formatCop(max)} por kilogramo. ${item.note}`,
    );
  }
}

export function asMetric(value: unknown): MetricKey {
  const metric = asText(value, "Métrica", 3, 30);
  if (!(metric in METRICS)) throw new InputError("Métrica no configurada en el trapiche.");
  return metric as MetricKey;
}

export function asRateBps(value: unknown): number {
  return asInt(value, "Porcentaje de aporte", DOC.contributionMinBps, DOC.contributionMaxBps);
}
