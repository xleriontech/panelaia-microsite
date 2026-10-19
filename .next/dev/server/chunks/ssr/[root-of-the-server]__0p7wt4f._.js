module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHANNELS",
    ()=>CHANNELS,
    "DOC",
    ()=>DOC,
    "METRICS",
    ()=>METRICS,
    "PHOTOS",
    ()=>PHOTOS,
    "STAGES",
    ()=>STAGES
]);
const DOC = {
    municipality: "Nocaima",
    department: "Cundinamarca",
    province: "Gualivá",
    categoryLabel: "categoría 6",
    brand: "Nocaima Dulce Origen",
    cooperative: "Cooperativa de Productores de Panela de Nocaima",
    cooperativeStatus: "en constitución",
    fiduciary: "Fiduagraria S.A.",
    producerPriceMin: 3_000,
    producerPriceMax: 4_200,
    bogotaPriceMin: 7_000,
    bogotaPriceMax: 9_000,
    marketingMonthlyCop: 2_000_000,
    roadmapMonths: 18,
    contributionMinBps: 500,
    contributionMaxBps: 800,
    pensionMonthlyCop: 200_000,
    pensionYears: 15,
    pensionRateEa: 0.09,
    pensionTargetCop: 76_000_000,
    payoutLowCop: 400_000,
    payoutHighCop: 550_000,
    payoutYears: 20,
    punteoMinC: 110,
    punteoMaxC: 115
};
const STAGES = [
    "corte",
    "molienda",
    "hornilla",
    "punteo",
    "batido",
    "empaque",
    "despacho"
];
const CHANNELS = [
    {
        id: "b2b_bogota",
        label: "B2B Bogotá",
        band: "bogota",
        note: "Rango documental de venta en Bogotá."
    },
    {
        id: "suscripcion",
        label: "Suscripción hogar",
        band: "bogota",
        note: "El documento base no fija una tarifa distinta: se usa el rango de Bogotá."
    },
    {
        id: "mercado_campesino",
        label: "Mercado campesino",
        band: "bogota",
        note: "El documento base no fija una tarifa distinta: se usa el rango de Bogotá."
    },
    {
        id: "puerta_trapiche",
        label: "Puerta de trapiche",
        band: "productor",
        note: "Rango documental del precio al productor, en venta directa en finca."
    }
];
const METRICS = {
    temperatura: {
        station: "punteo",
        unit: "°C",
        min: 0,
        max: 300
    },
    brix: {
        station: "punteo",
        unit: "°Bx",
        min: 0,
        max: 100
    },
    brix_jugo: {
        station: "molienda",
        unit: "°Bx",
        min: 0,
        max: 40
    },
    rpm: {
        station: "molienda",
        unit: "rpm",
        min: 0,
        max: 500
    },
    extraccion: {
        station: "molienda",
        unit: "%",
        min: 0,
        max: 100
    },
    bagazo: {
        station: "hornilla",
        unit: "kg/h",
        min: 0,
        max: 5_000
    },
    humedad: {
        station: "corte",
        unit: "%",
        min: 0,
        max: 100
    }
};
const PHOTOS = {
    cane: "https://images.pexels.com/photos/38302386/pexels-photo-38302386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200",
    press: "https://images.pexels.com/photos/2254100/pexels-photo-2254100.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1600",
    andes: "https://images.pexels.com/photos/32190433/pexels-photo-32190433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    hills: "https://images.pexels.com/photos/28154138/pexels-photo-28154138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
};
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bpsLabel",
    ()=>bpsLabel,
    "formatCop",
    ()=>formatCop,
    "formatDate",
    ()=>formatDate,
    "formatNum",
    ()=>formatNum,
    "formatWhen",
    ()=>formatWhen
]);
function formatCop(value) {
    const rounded = Math.round(value);
    const formatted = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(Math.abs(rounded));
    const compact = formatted.replace(/\s/g, "");
    return `${rounded < 0 ? "-" : ""}${compact} COP`;
}
function formatNum(value, digits = 1) {
    return new Intl.NumberFormat("es-CO", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    }).format(value);
}
function formatWhen(value) {
    const date = typeof value === "string" ? new Date(value) : value;
    return new Intl.DateTimeFormat("es-CO", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "America/Bogota"
    }).format(date);
}
function formatDate(value) {
    const date = typeof value === "string" ? new Date(value) : value;
    return new Intl.DateTimeFormat("es-CO", {
        dateStyle: "long",
        timeZone: "America/Bogota"
    }).format(date);
}
function bpsLabel(bps) {
    return `${formatNum(bps / 100, 1)}%`;
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lots",
    ()=>lots,
    "pensionLedger",
    ()=>pensionLedger,
    "producers",
    ()=>producers,
    "sales",
    ()=>sales,
    "sensorReadings",
    ()=>sensorReadings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/columns/double-precision.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/indexes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/columns/serial.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
;
const producers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("producers", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("code").notNull().unique(),
    fullName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("full_name").notNull(),
    vereda: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("vereda").notNull(),
    caneVariety: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("cane_variety").notNull(),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("role").notNull(),
    youth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])("youth").notNull().default(false),
    contributionRateBps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("contribution_rate_bps").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("status").notNull()
});
const lots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("lots", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("code").notNull().unique(),
    producerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("producer_id").notNull().references(()=>producers.id),
    milledAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("milled_at", {
        withTimezone: true,
        mode: "date"
    }).notNull(),
    caneVariety: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("cane_variety").notNull(),
    brix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("brix").notNull(),
    punteoTempC: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("punteo_temp_c").notNull(),
    humidityPct: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("humidity_pct").notNull(),
    rpm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("rpm").notNull(),
    extractionPct: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("extraction_pct").notNull(),
    bagasseKg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("bagasse_kg").notNull(),
    netKg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("net_kg").notNull(),
    stage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("stage").notNull(),
    anchorStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("anchor_status").notNull(),
    localHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("local_hash").notNull(),
    destination: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("destination")
});
const sensorReadings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("sensor_readings", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    station: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("station").notNull(),
    metric: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("metric").notNull(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("value").notNull(),
    unit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("unit").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("status").notNull(),
    source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("source").notNull(),
    recordedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("recorded_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])("sensor_recorded_idx").on(table.recordedAt)
    ]);
const sales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("sales", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    lotId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("lot_id").notNull().references(()=>lots.id),
    channel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("channel").notNull(),
    counterparty: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("counterparty").notNull(),
    kg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$double$2d$precision$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doublePrecision"])("kg").notNull(),
    pricePerKg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("price_per_kg").notNull(),
    contributionRateBps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("contribution_rate_bps").notNull(),
    contributionCop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("contribution_cop").notNull(),
    soldAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("sold_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});
const pensionLedger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pgTable"])("pension_ledger", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    producerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("producer_id").notNull().references(()=>producers.id),
    saleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("sale_id").references(()=>sales.id),
    kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("kind").notNull(),
    amountCop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])("amount_cop").notNull(),
    note: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])("note").notNull(),
    recordedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])("recorded_at", {
        withTimezone: true,
        mode: "date"
    }).notNull()
});
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db,
    "pool",
    ()=>pool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/node-postgres/driver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/schema.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const databaseUrl = process.env.DATABASE_URL;
let pool = null;
let db = null;
if (databaseUrl) {
    const globalForDb = globalThis;
    pool = globalForDb.__arenaNextJsPostgresqlPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$pg$29$__["Pool"]({
        connectionString: databaseUrl
    });
    if ("TURBOPACK compile-time truthy", 1) {
        globalForDb.__arenaNextJsPostgresqlPool = pool;
    }
    db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzle"])(pool, {
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
    });
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/hash.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canonicalHash",
    ()=>canonicalHash
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
function canonicalHash(payload) {
    const keys = Object.keys(payload).sort();
    const ordered = {};
    for (const key of keys)ordered[key] = payload[key];
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(JSON.stringify(ordered)).digest("hex");
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/pension.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contributionFromSale",
    ()=>contributionFromSale,
    "futureValueAnnuity",
    ()=>futureValueAnnuity,
    "monthlyRateFromEa",
    ()=>monthlyRateFromEa,
    "payoutAnnuity",
    ()=>payoutAnnuity,
    "projectPension",
    ()=>projectPension
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-rsc] (ecmascript)");
;
function monthlyRateFromEa(ea) {
    return Math.pow(1 + ea, 1 / 12) - 1;
}
function futureValueAnnuity(monthlyCop, ea, years) {
    const periods = years * 12;
    if (monthlyCop <= 0 || periods <= 0) return 0;
    const rate = monthlyRateFromEa(ea);
    if (rate === 0) return monthlyCop * periods;
    return monthlyCop * ((Math.pow(1 + rate, periods) - 1) / rate);
}
function payoutAnnuity(capitalCop, ea, years) {
    const periods = years * 12;
    if (capitalCop <= 0 || periods <= 0) return 0;
    const rate = monthlyRateFromEa(ea);
    if (rate === 0) return capitalCop / periods;
    return capitalCop * rate / (1 - Math.pow(1 + rate, -periods));
}
function contributionFromSale(kg, pricePerKg, bps) {
    return Math.round(kg * pricePerKg * (bps / 10_000));
}
function projectPension(input) {
    const producers = input.producers;
    const monthlyCop = input.monthlyCop ?? __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionMonthlyCop;
    const years = input.years ?? __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionYears;
    const rateEa = input.rateEa ?? __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionRateEa;
    const futureValueCop = futureValueAnnuity(monthlyCop, rateEa, years);
    const documentedTargetCop = __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionTargetCop;
    return {
        producers,
        monthlyCop,
        years,
        rateEa,
        futureValueCop,
        documentedTargetCop,
        gapCop: futureValueCop - documentedTargetCop,
        aggregateTargetCop: documentedTargetCop * producers,
        aggregateMonthlyCop: monthlyCop * producers,
        aggregateFutureValueCop: futureValueCop * producers,
        mathematicalPayoutCop: payoutAnnuity(documentedTargetCop, rateEa, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].payoutYears)
    };
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/seed.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "ensureSeeded",
    ()=>ensureSeeded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$hash$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/hash.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$pension$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/pension.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
let pending = null;
async function ensureSchema() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return;
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS producers (
      id serial PRIMARY KEY,
      code text NOT NULL UNIQUE,
      full_name text NOT NULL,
      vereda text NOT NULL,
      cane_variety text NOT NULL,
      role text NOT NULL,
      youth boolean NOT NULL DEFAULT false,
      contribution_rate_bps integer NOT NULL,
      status text NOT NULL
    )
  `);
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS lots (
      id serial PRIMARY KEY,
      code text NOT NULL UNIQUE,
      producer_id integer NOT NULL REFERENCES producers(id),
      milled_at timestamptz NOT NULL,
      cane_variety text NOT NULL,
      brix double precision NOT NULL,
      punteo_temp_c double precision NOT NULL,
      humidity_pct double precision NOT NULL,
      rpm double precision NOT NULL,
      extraction_pct double precision NOT NULL,
      bagasse_kg double precision NOT NULL,
      net_kg double precision NOT NULL,
      stage text NOT NULL,
      anchor_status text NOT NULL,
      local_hash text NOT NULL,
      destination text
    )
  `);
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS sensor_readings (
      id serial PRIMARY KEY,
      station text NOT NULL,
      metric text NOT NULL,
      value double precision NOT NULL,
      unit text NOT NULL,
      status text NOT NULL,
      source text NOT NULL,
      recorded_at timestamptz NOT NULL
    )
  `);
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    CREATE INDEX IF NOT EXISTS sensor_recorded_idx ON sensor_readings (recorded_at)
  `);
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS sales (
      id serial PRIMARY KEY,
      lot_id integer NOT NULL REFERENCES lots(id),
      channel text NOT NULL,
      counterparty text NOT NULL,
      kg double precision NOT NULL,
      price_per_kg integer NOT NULL,
      contribution_rate_bps integer NOT NULL,
      contribution_cop integer NOT NULL,
      sold_at timestamptz NOT NULL
    )
  `);
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
    CREATE TABLE IF NOT EXISTS pension_ledger (
      id serial PRIMARY KEY,
      producer_id integer NOT NULL REFERENCES producers(id),
      sale_id integer REFERENCES sales(id),
      kind text NOT NULL,
      amount_cop integer NOT NULL,
      note text NOT NULL,
      recorded_at timestamptz NOT NULL
    )
  `);
}
function hoursAgo(hours) {
    return new Date(Date.now() - hours * 60 * 60 * 1000);
}
function daysAgo(days) {
    return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}
async function seedOnce() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return;
    await ensureSchema();
    await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].transaction(async (tx)=>{
        await tx.execute(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`select pg_advisory_xact_lock(794615)`);
        const existing = await tx.select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].id
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"]).limit(1);
        if (existing.length > 0) return;
        const people = await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"]).values([
            {
                code: "PR-01",
                fullName: "Rosa Elvira Pinzón",
                vereda: "El Cajón",
                caneVariety: "POJ 2878",
                role: "Productora",
                youth: false,
                contributionRateBps: 600,
                status: "escenario"
            },
            {
                code: "PR-02",
                fullName: "Miguel Ángel Rincón",
                vereda: "Tobia",
                caneVariety: "CC 84-75",
                role: "Productor",
                youth: false,
                contributionRateBps: 500,
                status: "escenario"
            },
            {
                code: "PR-03",
                fullName: "Laura Valentina Gómez",
                vereda: "La Florida",
                caneVariety: "RD 75-11",
                role: "Operadora IoT",
                youth: true,
                contributionRateBps: 700,
                status: "escenario"
            },
            {
                code: "PR-04",
                fullName: "Héctor Iván Cárdenas",
                vereda: "San José",
                caneVariety: "CC 85-92",
                role: "Productor",
                youth: false,
                contributionRateBps: 800,
                status: "escenario"
            },
            {
                code: "PR-05",
                fullName: "Sara Juliana Melo",
                vereda: "Lomalarga",
                caneVariety: "POJ 2878",
                role: "Community manager",
                youth: true,
                contributionRateBps: 600,
                status: "escenario"
            },
            {
                code: "PR-06",
                fullName: "José del Carmen Vargas",
                vereda: "Las Mercedes",
                caneVariety: "CC 84-75",
                role: "Productor",
                youth: false,
                contributionRateBps: 500,
                status: "escenario"
            }
        ]).returning({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].id,
            code: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].code,
            rate: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].contributionRateBps,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].fullName,
            vereda: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].vereda
        });
        const byCode = Object.fromEntries(people.map((person)=>[
                person.code,
                person
            ]));
        const year = new Date().getFullYear();
        const lotSeed = [
            [
                "PR-01",
                18,
                "POJ 2878",
                90.4,
                113.2,
                68,
                46,
                61.5,
                840,
                120,
                "despacho",
                "Bogotá — venta directa"
            ],
            [
                "PR-02",
                16,
                "CC 84-75",
                89.8,
                112.4,
                71,
                44,
                59.2,
                510,
                80,
                "despacho",
                "Bogotá — venta directa"
            ],
            [
                "PR-03",
                12,
                "RD 75-11",
                91.1,
                114.6,
                66,
                49,
                63.0,
                390,
                60,
                "despacho",
                "Suscripción hogar"
            ],
            [
                "PR-04",
                9,
                "CC 85-92",
                88.7,
                111.8,
                73,
                42,
                58.4,
                620,
                90,
                "empaque",
                "Mercado campesino"
            ],
            [
                "PR-05",
                6,
                "POJ 2878",
                90.9,
                112.9,
                69,
                47,
                60.8,
                700,
                100,
                "batido",
                null
            ],
            [
                "PR-06",
                4,
                "CC 84-75",
                89.2,
                110.7,
                74,
                45,
                57.9,
                460,
                70,
                "punteo",
                null
            ],
            [
                "PR-01",
                2,
                "POJ 2878",
                91.6,
                115.0,
                67,
                48,
                62.4,
                380,
                50,
                "hornilla",
                null
            ],
            [
                "PR-04",
                1,
                "CC 85-92",
                88.1,
                111.2,
                70,
                43,
                58.8,
                760,
                110,
                "molienda",
                null
            ]
        ];
        const insertedLots = [];
        for(let index = 0; index < lotSeed.length; index += 1){
            const row = lotSeed[index];
            const person = byCode[row[0]];
            const code = `ND-${year}-${String(index + 1).padStart(4, "0")}`;
            const milledAt = daysAgo(row[1]);
            const payload = {
                lote: code,
                productor: person.code,
                vereda: person.vereda,
                variedad: row[2],
                brix: row[3],
                punteoC: row[4],
                humedad: row[5],
                rpm: row[6],
                extraccion: row[7],
                bagazoKg: row[8],
                netoKg: row[9],
                fase: "1"
            };
            const [lot] = await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"]).values({
                code,
                producerId: person.id,
                milledAt,
                caneVariety: row[2],
                brix: row[3],
                punteoTempC: row[4],
                humidityPct: row[5],
                rpm: row[6],
                extractionPct: row[7],
                bagasseKg: row[8],
                netKg: row[9],
                stage: row[10],
                anchorStatus: "pendiente_fase_2",
                localHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$hash$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalHash"])(payload),
                destination: row[11]
            }).returning({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].id,
                code: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].code,
                producerId: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].producerId
            });
            insertedLots.push(lot);
        }
        const saleSeed = [
            {
                lot: insertedLots[0],
                channel: "b2b_bogota",
                counterparty: "Cocina de origen — Chapinero, venta directa",
                kg: 80,
                price: 8_500,
                bps: 600,
                days: 10
            },
            {
                lot: insertedLots[1],
                channel: "b2b_bogota",
                counterparty: "Grupo de restaurantes, contrato directo",
                kg: 40,
                price: 9_000,
                bps: 500,
                days: 8
            },
            {
                lot: insertedLots[2],
                channel: "suscripcion",
                counterparty: "Canasta mensual de hogares en Bogotá",
                kg: 25,
                price: 7_800,
                bps: 700,
                days: 6
            },
            {
                lot: insertedLots[3],
                channel: "mercado_campesino",
                counterparty: "Puesto cooperativo en mercado campesino",
                kg: 30,
                price: 7_000,
                bps: 800,
                days: 3
            }
        ];
        for (const sale of saleSeed){
            const contributionCop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$pension$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contributionFromSale"])(sale.kg, sale.price, sale.bps);
            const [saved] = await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"]).values({
                lotId: sale.lot.id,
                channel: sale.channel,
                counterparty: sale.counterparty,
                kg: sale.kg,
                pricePerKg: sale.price,
                contributionRateBps: sale.bps,
                contributionCop,
                soldAt: daysAgo(sale.days)
            }).returning({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].id
            });
            await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"]).values({
                producerId: sale.lot.producerId,
                saleId: saved.id,
                kind: "aporte_venta",
                amountCop: contributionCop,
                note: `Aporte del ${sale.bps / 100}% sobre venta directa del lote ${sale.lot.code}. Escenario demostrativo, no es un movimiento de Fiduagraria.`,
                recordedAt: daysAgo(sale.days)
            });
        }
        for (const person of people){
            for (const days of [
                40,
                12
            ]){
                await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"]).values({
                    producerId: person.id,
                    kind: "aporte_mensual_documental",
                    amountCop: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionMonthlyCop,
                    note: "Aporte mensual del documento base ($200.000 COP). Escenario demostrativo, no es un recaudo fiduciario real.",
                    recordedAt: daysAgo(days)
                });
            }
        }
        const readings = [];
        for(let step = 36; step >= 0; step -= 1){
            const wave = 112.6 + Math.sin(step / 3.2) * 1.05;
            const value = step === 8 ? 116.8 : Math.round(wave * 10) / 10;
            readings.push({
                station: "punteo",
                metric: "temperatura",
                value,
                unit: "°C",
                status: value >= __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].punteoMinC && value <= __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].punteoMaxC ? "en_rango" : "fuera_de_rango",
                source: "semilla",
                recordedAt: hoursAgo(step * 0.55)
            });
        }
        const snapshots = [
            [
                "molienda",
                "rpm",
                46.5,
                "rpm"
            ],
            [
                "molienda",
                "extraccion",
                61.2,
                "%"
            ],
            [
                "molienda",
                "brix_jugo",
                18.6,
                "°Bx"
            ],
            [
                "hornilla",
                "bagazo",
                86,
                "kg/h"
            ],
            [
                "punteo",
                "brix",
                90.8,
                "°Bx"
            ],
            [
                "corte",
                "humedad",
                69.4,
                "%"
            ]
        ];
        for (const [station, metric, value, unit] of snapshots){
            for(let step = 8; step >= 0; step -= 1){
                readings.push({
                    station,
                    metric,
                    value: Math.round((value + Math.sin(step) * 0.4) * 10) / 10,
                    unit,
                    status: "lectura",
                    source: "semilla",
                    recordedAt: hoursAgo(step * 1.3)
                });
            }
        }
        await tx.insert(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sensorReadings"]).values(readings);
    });
}
function ensureSeeded() {
    if (!pending) {
        pending = seedOnce().catch((error)=>{
            pending = null;
            throw error;
        });
    }
    return pending;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getLedger",
    ()=>getLedger,
    "getLot",
    ()=>getLot,
    "getLots",
    ()=>getLots,
    "getOverview",
    ()=>getOverview,
    "getProducers",
    ()=>getProducers,
    "getSales",
    ()=>getSales,
    "getTelemetry",
    ()=>getTelemetry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/sql/expressions/select.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/seed.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$hash$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/hash.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function iso(value) {
    return value.toISOString();
}
// Mock data for when database is unavailable
const MOCK_PRODUCERS = [
    {
        id: 1,
        code: "PR-01",
        fullName: "Rosa Elvira Pinzón",
        vereda: "El Cajón",
        caneVariety: "POJ 2878",
        role: "Productora",
        youth: false,
        contributionRateBps: 600,
        status: "escenario",
        balanceCop: 1_200_000
    },
    {
        id: 2,
        code: "PR-02",
        fullName: "Miguel Ángel Rincón",
        vereda: "Tobia",
        caneVariety: "CC 84-75",
        role: "Productor",
        youth: false,
        contributionRateBps: 500,
        status: "escenario",
        balanceCop: 800_000
    },
    {
        id: 3,
        code: "PR-03",
        fullName: "Laura Valentina Gómez",
        vereda: "La Florida",
        caneVariety: "RD 75-11",
        role: "Operadora IoT",
        youth: true,
        contributionRateBps: 700,
        status: "escenario",
        balanceCop: 1_400_000
    },
    {
        id: 4,
        code: "PR-04",
        fullName: "Héctor Iván Cárdenas",
        vereda: "San José",
        caneVariety: "CC 85-92",
        role: "Productor",
        youth: false,
        contributionRateBps: 800,
        status: "escenario",
        balanceCop: 1_600_000
    },
    {
        id: 5,
        code: "PR-05",
        fullName: "Sara Juliana Melo",
        vereda: "Lomalarga",
        caneVariety: "POJ 2878",
        role: "Community manager",
        youth: true,
        contributionRateBps: 600,
        status: "escenario",
        balanceCop: 1_000_000
    },
    {
        id: 6,
        code: "PR-06",
        fullName: "José del Carmen Vargas",
        vereda: "Las Mercedes",
        caneVariety: "CC 84-75",
        role: "Productor",
        youth: false,
        contributionRateBps: 500,
        status: "escenario",
        balanceCop: 900_000
    }
];
const MOCK_LOTS = (()=>{
    const year = new Date().getFullYear();
    const baseLots = [
        {
            producer: "PR-01",
            daysAgo: 18,
            variety: "POJ 2878",
            brix: 90.4,
            punteo: 113.2,
            humidity: 68,
            rpm: 46,
            extraction: 61.5,
            bagazo: 840,
            netKg: 120,
            stage: "despacho",
            destination: "Bogotá — venta directa"
        },
        {
            producer: "PR-02",
            daysAgo: 16,
            variety: "CC 84-75",
            brix: 89.8,
            punteo: 112.4,
            humidity: 71,
            rpm: 44,
            extraction: 59.2,
            bagazo: 510,
            netKg: 80,
            stage: "despacho",
            destination: "Bogotá — venta directa"
        },
        {
            producer: "PR-03",
            daysAgo: 12,
            variety: "RD 75-11",
            brix: 91.1,
            punteo: 114.6,
            humidity: 66,
            rpm: 49,
            extraction: 63.0,
            bagazo: 390,
            netKg: 60,
            stage: "despacho",
            destination: "Suscripción hogar"
        },
        {
            producer: "PR-04",
            daysAgo: 9,
            variety: "CC 85-92",
            brix: 88.7,
            punteo: 111.8,
            humidity: 73,
            rpm: 42,
            extraction: 58.4,
            bagazo: 620,
            netKg: 90,
            stage: "empaque",
            destination: "Mercado campesino"
        },
        {
            producer: "PR-05",
            daysAgo: 6,
            variety: "POJ 2878",
            brix: 90.9,
            punteo: 112.9,
            humidity: 69,
            rpm: 47,
            extraction: 60.8,
            bagazo: 700,
            netKg: 100,
            stage: "batido",
            destination: null
        },
        {
            producer: "PR-06",
            daysAgo: 4,
            variety: "CC 84-75",
            brix: 89.2,
            punteo: 110.7,
            humidity: 74,
            rpm: 45,
            extraction: 57.9,
            bagazo: 460,
            netKg: 70,
            stage: "punteo",
            destination: null
        }
    ];
    return baseLots.map((row, index)=>{
        const person = MOCK_PRODUCERS.find((p)=>p.code === row.producer);
        const code = `ND-${year}-${String(index + 1).padStart(4, "0")}`;
        const milledAt = new Date(Date.now() - row.daysAgo * 24 * 60 * 60 * 1000);
        const payload = {
            lote: code,
            productor: person.code,
            vereda: person.vereda,
            variedad: row.variety,
            brix: row.brix,
            punteoC: row.punteo,
            humedad: row.humidity,
            rpm: row.rpm,
            extraccion: row.extraction,
            bagazoKg: row.bagazo,
            netoKg: row.netKg,
            fase: "1"
        };
        return {
            id: index + 1,
            code,
            producerId: person.id,
            producerCode: person.code,
            producerName: person.fullName,
            vereda: person.vereda,
            milledAt: iso(milledAt),
            caneVariety: row.variety,
            brix: row.brix,
            punteoTempC: row.punteo,
            humidityPct: row.humidity,
            rpm: row.rpm,
            extractionPct: row.extraction,
            bagasseKg: row.bagazo,
            netKg: row.netKg,
            soldKg: index < 4 ? [
                80,
                40,
                25,
                30
            ][index] : 0,
            stage: row.stage,
            anchorStatus: "pendiente_fase_2",
            localHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$hash$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canonicalHash"])(payload),
            destination: row.destination
        };
    });
})();
const MOCK_SALES = [
    {
        id: 1,
        lotCode: MOCK_LOTS[0].code,
        producerName: MOCK_LOTS[0].producerName,
        channel: "b2b_bogota",
        counterparty: "Cocina de origen — Chapinero, venta directa",
        kg: 80,
        pricePerKg: 8_500,
        contributionRateBps: 600,
        contributionCop: Math.round(80 * 8500 * 0.06),
        soldAt: iso(new Date(Date.now() - 10 * 24 * 60 * 60 * 1000))
    },
    {
        id: 2,
        lotCode: MOCK_LOTS[1].code,
        producerName: MOCK_LOTS[1].producerName,
        channel: "b2b_bogota",
        counterparty: "Grupo de restaurantes, contrato directo",
        kg: 40,
        pricePerKg: 9_000,
        contributionRateBps: 500,
        contributionCop: Math.round(40 * 9000 * 0.05),
        soldAt: iso(new Date(Date.now() - 8 * 24 * 60 * 60 * 1000))
    },
    {
        id: 3,
        lotCode: MOCK_LOTS[2].code,
        producerName: MOCK_LOTS[2].producerName,
        channel: "suscripcion",
        counterparty: "Canasta mensual de hogares en Bogotá",
        kg: 25,
        pricePerKg: 7_800,
        contributionRateBps: 700,
        contributionCop: Math.round(25 * 7800 * 0.07),
        soldAt: iso(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000))
    },
    {
        id: 4,
        lotCode: MOCK_LOTS[3].code,
        producerName: MOCK_LOTS[3].producerName,
        channel: "mercado_campesino",
        counterparty: "Puesto cooperativo en mercado campesino",
        kg: 30,
        pricePerKg: 7_000,
        contributionRateBps: 800,
        contributionCop: Math.round(30 * 7000 * 0.08),
        soldAt: iso(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000))
    }
];
const MOCK_LEDGER = [
    ...MOCK_SALES.flatMap((sale, i)=>({
            id: i + 1,
            producerId: MOCK_PRODUCERS.find((p)=>p.code === sale.lotCode.split("-").slice(0, 3).join("-"))?.id ?? 1,
            producerName: sale.producerName,
            kind: "aporte_venta",
            amountCop: sale.contributionCop,
            note: `Aporte del ${sale.contributionRateBps / 100}% sobre venta directa del lote ${sale.lotCode}. Escenario demostrativo.`,
            recordedAt: sale.soldAt
        })),
    ...MOCK_PRODUCERS.flatMap((person)=>[
            40,
            12
        ].map((days, idx)=>({
                id: 100 + person.id * 10 + idx,
                producerId: person.id,
                producerName: person.fullName,
                kind: "aporte_mensual_documental",
                amountCop: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionMonthlyCop,
                note: "Aporte mensual del documento base ($200.000 COP). Escenario demostrativo.",
                recordedAt: iso(new Date(Date.now() - days * 24 * 60 * 60 * 1000))
            })))
];
const MOCK_TELEMETRY = (()=>{
    const recent = [];
    for(let step = 36; step >= 0; step -= 1){
        const wave = 112.6 + Math.sin(step / 3.2) * 1.05;
        const value = step === 8 ? 116.8 : Math.round(wave * 10) / 10;
        recent.push({
            id: step,
            station: "punteo",
            metric: "temperatura",
            value,
            unit: "°C",
            status: value >= __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].punteoMinC && value <= __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].punteoMaxC ? "en_rango" : "fuera_de_rango",
            source: "semilla",
            recordedAt: iso(new Date(Date.now() - step * 0.55 * 60 * 60 * 1000))
        });
    }
    const snapshots = [
        [
            "molienda",
            "rpm",
            46.5,
            "rpm"
        ],
        [
            "molienda",
            "extraccion",
            61.2,
            "%"
        ],
        [
            "molienda",
            "brix_jugo",
            18.6,
            "°Bx"
        ],
        [
            "hornilla",
            "bagazo",
            86,
            "kg/h"
        ],
        [
            "punteo",
            "brix",
            90.8,
            "°Bx"
        ],
        [
            "corte",
            "humedad",
            69.4,
            "%"
        ]
    ];
    for (const [station, metric, value, unit] of snapshots){
        for(let step = 8; step >= 0; step -= 1){
            recent.push({
                id: recent.length,
                station,
                metric,
                value: Math.round((value + Math.sin(step) * 0.4) * 10) / 10,
                unit,
                status: "lectura",
                source: "semilla",
                recordedAt: iso(new Date(Date.now() - step * 1.3 * 60 * 60 * 1000))
            });
        }
    }
    const latest = {};
    const seriesBuckets = new Map();
    for (const reading of recent){
        if (!latest[reading.metric]) latest[reading.metric] = reading;
        const bucket = seriesBuckets.get(reading.metric) ?? [];
        bucket.push(reading.value);
        seriesBuckets.set(reading.metric, bucket);
    }
    const series = {};
    for (const [metric, values] of seriesBuckets){
        series[metric] = values.slice(0, 36).reverse();
    }
    return {
        latest,
        series,
        recent: recent.slice(0, 18)
    };
})();
async function getProducers() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return MOCK_PRODUCERS;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSeeded"])();
        const people = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"]).orderBy(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].code);
        const ledger = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"]);
        const balances = new Map();
        for (const row of ledger){
            balances.set(row.producerId, (balances.get(row.producerId) ?? 0) + row.amountCop);
        }
        return people.map((person)=>({
                id: person.id,
                code: person.code,
                fullName: person.fullName,
                vereda: person.vereda,
                caneVariety: person.caneVariety,
                role: person.role,
                youth: person.youth,
                contributionRateBps: person.contributionRateBps,
                status: person.status,
                balanceCop: balances.get(person.id) ?? 0
            }));
    } catch  {
        return MOCK_PRODUCERS;
    }
}
async function getLots(query) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) {
        const needle = query?.trim().toLowerCase();
        return MOCK_LOTS.filter((row)=>{
            if (!needle) return true;
            return [
                row.code,
                row.producerName,
                row.producerCode,
                row.vereda,
                row.caneVariety,
                row.stage
            ].join(" ").toLowerCase().includes(needle);
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSeeded"])();
        const sold = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            lotId: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].lotId,
            kg: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`coalesce(sum(${__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].kg}), 0)::float8`
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"]).groupBy(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].lotId);
        const soldByLot = new Map(sold.map((row)=>[
                row.lotId,
                Number(row.kg)
            ]));
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].id,
            code: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].code,
            producerId: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].producerId,
            producerCode: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].code,
            producerName: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].fullName,
            vereda: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].vereda,
            milledAt: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].milledAt,
            caneVariety: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].caneVariety,
            brix: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].brix,
            punteoTempC: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].punteoTempC,
            humidityPct: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].humidityPct,
            rpm: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].rpm,
            extractionPct: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].extractionPct,
            bagasseKg: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].bagasseKg,
            netKg: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].netKg,
            stage: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].stage,
            anchorStatus: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].anchorStatus,
            localHash: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].localHash,
            destination: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].destination
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].producerId, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].id)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].milledAt));
        const needle = query?.trim().toLowerCase();
        return rows.filter((row)=>{
            if (!needle) return true;
            return [
                row.code,
                row.producerName,
                row.producerCode,
                row.vereda,
                row.caneVariety,
                row.stage
            ].join(" ").toLowerCase().includes(needle);
        }).map((row)=>({
                ...row,
                milledAt: iso(row.milledAt),
                soldKg: soldByLot.get(row.id) ?? 0
            }));
    } catch  {
        const needle = query?.trim().toLowerCase();
        return MOCK_LOTS.filter((row)=>{
            if (!needle) return true;
            return [
                row.code,
                row.producerName,
                row.producerCode,
                row.vereda,
                row.caneVariety,
                row.stage
            ].join(" ").toLowerCase().includes(needle);
        });
    }
}
async function getLot(code) {
    const rows = await getLots();
    return rows.find((row)=>row.code.toLowerCase() === code.toLowerCase()) ?? null;
}
async function getTelemetry() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return MOCK_TELEMETRY;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSeeded"])();
        const recentRows = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sensorReadings"]).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sensorReadings"].recordedAt)).limit(240);
        const recent = recentRows.map((row)=>({
                id: row.id,
                station: row.station,
                metric: row.metric,
                value: row.value,
                unit: row.unit,
                status: row.status,
                source: row.source,
                recordedAt: iso(row.recordedAt)
            }));
        const latest = {};
        const seriesBuckets = new Map();
        for (const reading of recent){
            if (!latest[reading.metric]) latest[reading.metric] = reading;
            const bucket = seriesBuckets.get(reading.metric) ?? [];
            bucket.push(reading.value);
            seriesBuckets.set(reading.metric, bucket);
        }
        const series = {};
        for (const [metric, values] of seriesBuckets){
            series[metric] = values.slice(0, 36).reverse();
        }
        return {
            latest,
            series,
            recent: recent.slice(0, 18)
        };
    } catch  {
        return MOCK_TELEMETRY;
    }
}
async function getSales() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return MOCK_SALES;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSeeded"])();
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].id,
            lotCode: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].code,
            producerName: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].fullName,
            channel: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].channel,
            counterparty: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].counterparty,
            kg: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].kg,
            pricePerKg: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].pricePerKg,
            contributionRateBps: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].contributionRateBps,
            contributionCop: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].contributionCop,
            soldAt: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].soldAt
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].lotId, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].id)).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lots"].producerId, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].id)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sales"].soldAt));
        return rows.map((row)=>({
                ...row,
                soldAt: iso(row.soldAt)
            }));
    } catch  {
        return MOCK_SALES;
    }
}
async function getLedger() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return MOCK_LEDGER;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$seed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureSeeded"])();
        const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].id,
            producerId: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].producerId,
            producerName: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].fullName,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].kind,
            amountCop: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].amountCop,
            note: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].note,
            recordedAt: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].recordedAt
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].producerId, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["producers"].id)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pensionLedger"].recordedAt));
        return rows.map((row)=>({
                ...row,
                recordedAt: iso(row.recordedAt)
            }));
    } catch  {
        return MOCK_LEDGER;
    }
}
async function getOverview() {
    const [people, lotRows, saleRows, telemetry] = await Promise.all([
        getProducers(),
        getLots(),
        getSales(),
        getTelemetry()
    ]);
    const punteo = telemetry.latest.temperatura ?? null;
    const lastAlert = telemetry.recent.find((row)=>row.status === "fuera_de_rango");
    const historyAlert = Object.values(telemetry.series).length ? telemetry.recent.find((row)=>row.status === "fuera_de_rango") : undefined;
    const excursion = [
        ...telemetry.recent
    ].reverse().find((row)=>row.status === "fuera_de_rango") ?? lastAlert ?? historyAlert;
    let olderExcursion = null;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) {
        try {
            const older = await __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sensorReadings"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sensorReadings"].status, "fuera_de_rango")).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sensorReadings"].recordedAt)).limit(1);
            if (older[0]) olderExcursion = older[0].recordedAt.toISOString();
        } catch  {
        // ignore
        }
    }
    return {
        lots: lotRows.length,
        salesCop: saleRows.reduce((sum, sale)=>sum + Math.round(sale.kg * sale.pricePerKg), 0),
        salesKg: saleRows.reduce((sum, sale)=>sum + sale.kg, 0),
        fundCop: people.reduce((sum, person)=>sum + person.balanceCop, 0),
        producers: people.length,
        youth: people.filter((person)=>person.youth).length,
        punteoC: punteo?.value ?? null,
        punteoStatus: punteo?.status ?? null,
        openAlerts: punteo?.status === "fuera_de_rango" ? 1 : 0,
        lastExcursion: olderExcursion ?? excursion?.recordedAt ?? null
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataNote",
    ()=>DataNote,
    "PageHeader",
    ()=>PageHeader,
    "Seal",
    ()=>Seal,
    "Sparkline",
    ()=>Sparkline,
    "StatusPill",
    ()=>StatusPill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function PageHeader({ kicker, title, lede }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "max-w-2xl mx-auto mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "kicker text-sm uppercase tracking-widest text-bark mb-3",
                children: kicker
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-3 font-display text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95] text-cream",
                children: title
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-2xl text-base leading-relaxed text-honey/90",
                children: lede
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function DataNote({ kind, children }) {
    const label = kind === "documento" ? "Documento base" : kind === "escenario" ? "Escenario demostrativo" : "Corrección";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `note note-${kind}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: children
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function Seal({ className = "h-16 w-16" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "60",
                r: "56",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "60",
                r: "46",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "0.6"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 28c8 10 10 16 10 24 0 8-4 14-10 20-6-6-10-12-10-20 0-8 2-14 10-24z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 78h44M42 86h36",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "46",
                y: "62",
                width: "28",
                height: "10",
                rx: "2",
                fill: "none",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function Sparkline({ values, alert = false }) {
    if (values.length < 2) return null;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const width = 160;
    const height = 42;
    const path = values.map((value, index)=>{
        const x = index / (values.length - 1) * width;
        const y = height - (value - min) / (max - min || 1) * (height - 6) - 3;
        return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${width} ${height}`,
        className: "h-12 w-full",
        role: "img",
        "aria-label": "Serie reciente de la métrica",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: path,
            fill: "none",
            stroke: alert ? "#c4492c" : "#c57a45",
            strokeWidth: "2.2"
        }, void 0, false, {
            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
function StatusPill({ status }) {
    const alert = status === "fuera_de_rango";
    const label = status === "en_rango" ? "En rango 110-115 °C" : status === "fuera_de_rango" ? "Fuera de rango" : "Lectura de proceso";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] ${alert ? "bg-alert text-white" : "bg-moss text-cream"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const dynamic = "force-dynamic";
const MODULES = [
    {
        href: "/trapiche",
        index: "01",
        title: "Trapiche 3D",
        text: "Hornilla CIMPA, vapor y punteo entre 110 y 115 °C.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].press
    },
    {
        href: "/trazabilidad",
        index: "02",
        title: "Trazabilidad",
        text: "Lote, QR y huella local. La cadena queda para la fase 2.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].cane
    },
    {
        href: "/fondo",
        index: "03",
        title: "Fondo de retiro",
        text: "Meta documental de $76.000.000 COP por productor.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].andes
    },
    {
        href: "/comercial",
        index: "04",
        title: "Venta directa",
        text: "Bogotá entre $7.000 y $9.000 COP/kg, sin intermediarios.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].hills
    },
    {
        href: "/gestion",
        index: "05",
        title: "Gestión pública",
        text: "Norma corregida, 18 meses y Alianzas Productivas.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].andes
    },
    {
        href: "/asistente",
        index: "06",
        title: "PanelaIA",
        text: "Consulta para Alcaldía, Secretaría y cooperativa.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].cane
    }
];
async function HomePage() {
    const overview = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOverview"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PHOTOS"].cane,
                        alt: "Cañaduzal de referencia, no es una parcela de Nocaima.",
                        className: "absolute inset-0 h-full w-full object-cover opacity-45"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/25"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-7xl px-5 py-16 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid min-h-[88vh] max-w-7xl items-end gap-10 lg:grid-cols-[1.2fr_0.9fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-amber mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Seal"], {
                                                    className: "h-14 w-14"
                                                }, void 0, false, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "kicker",
                                                    children: [
                                                        "Nocaima · Gualivá · ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].categoryLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-6 max-w-xl font-display text-[clamp(3rem,8vw,6.4rem)] leading-[0.88] text-cream tracking-tighter",
                                            children: [
                                                "PanelaIA ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic text-amber",
                                                    children: "escucha"
                                                }, void 0, false, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 26
                                                }, this),
                                                " el trapiche."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 max-w-xl text-lg leading-relaxed text-honey",
                                            children: [
                                                "Soy el asistente técnico de la revitalización panelera de Nocaima. Marca ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].brand,
                                                ". Cooperativa en constitución. ¿En qué componente requiere apoyo?"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-wrap gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "btn btn-primary",
                                                    children: "Hablar con PanelaIA"
                                                }, void 0, false, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "btn btn-ghost",
                                                    children: "Abrir gemelo 3D"
                                                }, void 0, false, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "paper rounded-[1.8rem] p-6 lg:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold uppercase tracking-[0.16em] text-bark mb-4",
                                            children: "Cifras que sí están escritas"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3 text-sm text-ink",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Productor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].producerPriceMin),
                                                                " – ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].producerPriceMax),
                                                                " /kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 82
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Bogotá"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].bogotaPriceMin),
                                                                " – ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].bogotaPriceMax),
                                                                " /kg"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 79
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Aporte por venta"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "5% – 8%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 47,
                                                            columnNumber: 89
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Aporte mensual"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionMonthlyCop)
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 87
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Meta a 15 años"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].pensionTargetCop)
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 87
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Marketing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].marketingMonthlyCop),
                                                                " /mes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 82
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Punteo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 60
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].punteoMinC,
                                                                "–",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DOC"].punteoMaxC,
                                                                " °C"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 79
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-7xl px-5 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DataNote"], {
                        kind: "escenario",
                        children: [
                            "La mesa ya consultó PostgreSQL. Hay ",
                            overview.lots,
                            " lotes de ensayo, ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(overview.salesCop),
                            " en ventas directas simuladas y ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatCop"])(overview.fundCop),
                            " en el libro del fondo. Punteo vigente: ",
                            overview.punteoC == null ? "sin lectura" : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNum"])(overview.punteoC, 1)} °C`,
                            ". Jóvenes del escenario: ",
                            overview.youth,
                            ". Esto no es un informe de ejecución física."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                        children: MODULES.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: module.href,
                                className: "group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 hover:border-copper/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: module.image,
                                        alt: "",
                                        className: "absolute inset-0 h-full w-full object-cover transition duration-500 ease-in-out hover:scale-105 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10"
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex h-full flex-col justify-end p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-3xl text-amber",
                                                children: module.index
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-2 font-display text-3xl text-cream",
                                                children: module.title
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 max-w-xs text-sm text-honey",
                                                children: module.text
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, module.href, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/app/(mesa)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p7wt4f._.js.map