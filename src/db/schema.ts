import {
  boolean,
  doublePrecision,
  index,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const producers = pgTable("producers", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  fullName: text("full_name").notNull(),
  vereda: text("vereda").notNull(),
  caneVariety: text("cane_variety").notNull(),
  role: text("role").notNull(),
  youth: boolean("youth").notNull().default(false),
  contributionRateBps: integer("contribution_rate_bps").notNull(),
  status: text("status").notNull(),
});

export const lots = pgTable("lots", {
  id: serial("id").primaryKey(),
  code: text("code").notNull().unique(),
  producerId: integer("producer_id")
    .notNull()
    .references(() => producers.id),
  milledAt: timestamp("milled_at", { withTimezone: true, mode: "date" }).notNull(),
  caneVariety: text("cane_variety").notNull(),
  brix: doublePrecision("brix").notNull(),
  punteoTempC: doublePrecision("punteo_temp_c").notNull(),
  humidityPct: doublePrecision("humidity_pct").notNull(),
  rpm: doublePrecision("rpm").notNull(),
  extractionPct: doublePrecision("extraction_pct").notNull(),
  bagasseKg: doublePrecision("bagasse_kg").notNull(),
  netKg: doublePrecision("net_kg").notNull(),
  stage: text("stage").notNull(),
  anchorStatus: text("anchor_status").notNull(),
  localHash: text("local_hash").notNull(),
  destination: text("destination"),
});

export const sensorReadings = pgTable(
  "sensor_readings",
  {
    id: serial("id").primaryKey(),
    station: text("station").notNull(),
    metric: text("metric").notNull(),
    value: doublePrecision("value").notNull(),
    unit: text("unit").notNull(),
    status: text("status").notNull(),
    source: text("source").notNull(),
    recordedAt: timestamp("recorded_at", { withTimezone: true, mode: "date" }).notNull(),
  },
  (table) => [index("sensor_recorded_idx").on(table.recordedAt)],
);

export const sales = pgTable("sales", {
  id: serial("id").primaryKey(),
  lotId: integer("lot_id")
    .notNull()
    .references(() => lots.id),
  channel: text("channel").notNull(),
  counterparty: text("counterparty").notNull(),
  kg: doublePrecision("kg").notNull(),
  pricePerKg: integer("price_per_kg").notNull(),
  contributionRateBps: integer("contribution_rate_bps").notNull(),
  contributionCop: integer("contribution_cop").notNull(),
  soldAt: timestamp("sold_at", { withTimezone: true, mode: "date" }).notNull(),
});

export const pensionLedger = pgTable("pension_ledger", {
  id: serial("id").primaryKey(),
  producerId: integer("producer_id")
    .notNull()
    .references(() => producers.id),
  saleId: integer("sale_id").references(() => sales.id),
  kind: text("kind").notNull(),
  amountCop: integer("amount_cop").notNull(),
  note: text("note").notNull(),
  recordedAt: timestamp("recorded_at", { withTimezone: true, mode: "date" }).notNull(),
});
