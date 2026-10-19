export function formatCop(value: number): string {
  const rounded = Math.round(value);
  const formatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(Math.abs(rounded));
  const compact = formatted.replace(/\s/g, "");
  return `${rounded < 0 ? "-" : ""}${compact} COP`;
}

export function formatNum(value: number, digits = 1): string {
  return new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatWhen(value: string | Date): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Bogota",
  }).format(date);
}

export function formatDate(value: string | Date): string {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "long",
    timeZone: "America/Bogota",
  }).format(date);
}

export function bpsLabel(bps: number): string {
  return `${formatNum(bps / 100, 1)}%`;
}
