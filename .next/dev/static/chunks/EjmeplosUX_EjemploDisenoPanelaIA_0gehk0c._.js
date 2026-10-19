(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrapicheDesk",
    ()=>TrapicheDesk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/format.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-full min-h-[520px] place-items-center text-honey",
            children: "Cargando gemelo del trapiche…"
        }, void 0, false, {
            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
            lineNumber: 13,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = Scene;
function useReducedMotion() {
    _s();
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            const media = window.matchMedia("(prefers-reduced-motion: reduce)");
            const update = {
                "useReducedMotion.useEffect.update": ()=>setReduced(media.matches)
            }["useReducedMotion.useEffect.update"];
            update();
            media.addEventListener("change", update);
            return ({
                "useReducedMotion.useEffect": ()=>media.removeEventListener("change", update)
            })["useReducedMotion.useEffect"];
        }
    }["useReducedMotion.useEffect"], []);
    return reduced;
}
_s(useReducedMotion, "PAG4zvF6+IsK2eHB7xTPE8NJ12w=");
const ORDER = [
    "temperatura",
    "brix",
    "brix_jugo",
    "rpm",
    "extraccion",
    "bagazo",
    "humedad"
];
function TrapicheDesk({ initial }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const reduced = useReducedMotion();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [auto, setAuto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [metric, setMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("temperatura");
    const temp = data.latest.temperatura;
    async function refresh() {
        const next = await fetch("/api/telemetry").then((response)=>response.json());
        setData(next);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrapicheDesk.useEffect": ()=>{
            if (!auto) return;
            const id = window.setInterval({
                "TrapicheDesk.useEffect.id": ()=>{
                    void fetch("/api/telemetry/tick", {
                        method: "POST"
                    }).then({
                        "TrapicheDesk.useEffect.id": ()=>refresh()
                    }["TrapicheDesk.useEffect.id"]).catch({
                        "TrapicheDesk.useEffect.id": ()=>setError("El ciclo de demostración no respondió.")
                    }["TrapicheDesk.useEffect.id"]);
                }
            }["TrapicheDesk.useEffect.id"], 8000);
            return ({
                "TrapicheDesk.useEffect": ()=>window.clearInterval(id)
            })["TrapicheDesk.useEffect"];
        }
    }["TrapicheDesk.useEffect"], [
        auto
    ]);
    const live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TrapicheDesk.useMemo[live]": ()=>({
                punteoC: temp?.value ?? 112,
                brix: data.latest.brix?.value ?? 0,
                rpm: data.latest.rpm?.value ?? 40,
                alert: temp?.status === "fuera_de_rango",
                reducedMotion: reduced
            })
    }["TrapicheDesk.useMemo[live]"], [
        data.latest.brix?.value,
        data.latest.rpm?.value,
        reduced,
        temp?.status,
        temp?.value
    ]);
    async function onSubmit(event) {
        event.preventDefault();
        setPending(true);
        setError(null);
        const form = new FormData(event.currentTarget);
        const response = await fetch("/api/telemetry", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                metric: form.get("metric"),
                value: form.get("value"),
                source: form.get("source")
            })
        });
        const payload = await response.json();
        setPending(false);
        if (!response.ok) {
            setError(payload.error ?? "No se pudo registrar la lectura.");
            return;
        }
        event.currentTarget.reset();
        await refresh();
        router.refresh();
    }
    const marker = temp ? Math.min(100, Math.max(0, (temp.value - 100) / 25 * 100)) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 grid gap-6 lg:grid-cols-[1.45fr_0.82fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between gap-4 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker",
                                        children: "Gemelo procedural"
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-honey/80",
                                        children: "Arrastre para orbitar. La tabla es la alternativa accesible."
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-ghost px-3 py-1.5 text-xs",
                                onClick: ()=>setAuto((value)=>!value),
                                "aria-pressed": auto,
                                children: auto ? "Detener ciclo" : "Simular ciclo"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[560px]",
                        role: "img",
                        "aria-label": "Gemelo tridimensional del trapiche comunitario: molienda, hornilla CIMPA, vapor y paila de punteo.",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                            live: live
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "paper rounded-[1.6rem] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold uppercase tracking-[0.16em] text-bark",
                                                children: "Punteo"
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-5xl text-ink",
                                                children: [
                                                    temp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNum"])(temp.value, 1) : "—",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: " °C"
                                                    }, void 0, false, {
                                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 100
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    temp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusPill"], {
                                        status: temp.status
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 116,
                                        columnNumber: 21
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-4 h-3 overflow-hidden rounded-full bg-[#efe4d4]",
                                role: "meter",
                                "aria-valuemin": 100,
                                "aria-valuemax": 125,
                                "aria-valuenow": temp?.value ?? 0,
                                "aria-label": "Temperatura de punteo. El rango documental va de 110 a 115 grados Celsius.",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 bg-cane/50",
                                        style: {
                                            left: "40%",
                                            width: "20%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 h-full w-1 bg-ink",
                                        style: {
                                            left: `${marker}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-bark",
                                children: [
                                    "Banda documental: ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOC"].punteoMinC,
                                    "–",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOC"].punteoMaxC,
                                    " °C. El resto de sensores no tiene meta en el documento."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkline"], {
                                values: data.series.temperatura ?? [],
                                alert: temp?.status === "fuera_de_rango"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        className: "paper space-y-3 rounded-[1.6rem] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-2xl text-ink",
                                children: "Captura manual"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    "Métrica",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "metric",
                                        value: metric,
                                        onChange: (event)=>setMetric(event.target.value),
                                        children: ORDER.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: key,
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRICS"][key].station,
                                                    " · ",
                                                    key,
                                                    " (",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRICS"][key].unit,
                                                    ")"
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    "Valor (",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRICS"][metric].unit,
                                    ")",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "value",
                                        type: "number",
                                        step: "0.1",
                                        min: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRICS"][metric].min,
                                        max: __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METRICS"][metric].max,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field",
                                children: [
                                    "Fuente",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "source",
                                        defaultValue: "operador-joven",
                                        maxLength: 40,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-ink w-full",
                                type: "submit",
                                disabled: pending,
                                children: pending ? "Registrando…" : "Registrar lectura"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-alert",
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 155,
                                columnNumber: 20
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataNote"], {
                    kind: "escenario",
                    children: "No hay un ESP32 de Nocaima conectado. El ciclo simula una caminata de la temperatura y, a veces, una salida del rango para probar la alerta. El DHT22 no sirve para el punteo: ese punto exige termopar."
                }, void 0, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "paper overflow-x-auto rounded-[1.6rem] p-5 lg:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl text-ink",
                        children: "Últimas lecturas"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Hora"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Estación"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Métrica"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Valor"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Estado"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Fuente"
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data.recent.map((reading)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatWhen"])(reading.recordedAt)
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: reading.station
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: reading.metric
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNum"])(reading.value, 1),
                                                    " ",
                                                    reading.unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: reading.status
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: reading.source
                                            }, void 0, false, {
                                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, reading.id, true, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheDesk.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s1(TrapicheDesk, "OMlBi9/TuDFqd06fyjmv3fz/kMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        useReducedMotion
    ];
});
_c1 = TrapicheDesk;
var _c, _c1;
__turbopack_context__.k.register(_c, "Scene");
__turbopack_context__.k.register(_c1, "TrapicheDesk");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const query = (0, _deploymentid.getAssetTokenQuery)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${query}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable;
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
]);

//# sourceMappingURL=EjmeplosUX_EjemploDisenoPanelaIA_0gehk0c._.js.map