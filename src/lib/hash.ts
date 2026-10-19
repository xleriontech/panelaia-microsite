import { createHash } from "node:crypto";

export function canonicalHash(payload: Record<string, string | number | null>): string {
  const keys = Object.keys(payload).sort();
  const ordered: Record<string, string | number | null> = {};
  for (const key of keys) ordered[key] = payload[key];
  return createHash("sha256").update(JSON.stringify(ordered)).digest("hex");
}
