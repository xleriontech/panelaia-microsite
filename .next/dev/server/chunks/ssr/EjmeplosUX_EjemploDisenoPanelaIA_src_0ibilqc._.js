module.exports = [
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnswerView",
    ()=>AnswerView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AnswerView({ answer, compact = false }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function copyCode() {
        if (!answer.code) return;
        await navigator.clipboard.writeText(answer.code.body);
        setCopied(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "space-y-4 bg-cream rounded-2xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-2xl leading-tight text-ink",
                children: answer.direct
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 text-sm leading-relaxed text-bark",
                children: answer.detail.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: paragraph
                    }, paragraph, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            answer.table ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                            className: "mb-2 text-left text-xs font-bold uppercase tracking-[0.14em] text-bark",
                            children: answer.table.caption
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: answer.table.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: header
                                    }, header, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                        lineNumber: 32,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: answer.table.rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: row.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: cell
                                        }, cell, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                            lineNumber: 40,
                                            columnNumber: 21
                                        }, this))
                                }, row.join("-"), false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this) : null,
            answer.code && !compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-3 bg-ink/10 rounded-xl border border-ink/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold uppercase tracking-[0.14em] text-bark",
                                children: answer.code.title
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-line px-3 py-1 text-xs",
                                onClick: ()=>void copyCode(),
                                children: copied ? "Copiado" : "Copiar"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "mt-2 overflow-auto rounded text-xs",
                        style: {
                            tabSize: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "text-ink",
                            children: answer.code.body
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this) : null,
            answer.legal && !compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold uppercase tracking-[0.14em] text-bark",
                        children: "Marco legal"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-2 list-disc space-y-1 pl-5 text-sm text-bark",
                        children: answer.legal.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, item, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this) : null,
            answer.risks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold uppercase tracking-[0.14em] text-alert",
                        children: "Riesgos"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-2 list-disc space-y-1 pl-5 text-sm text-bark",
                        children: answer.risks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, item, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this) : null,
            answer.next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold uppercase tracking-[0.14em] text-moss",
                        children: "Siguiente paso"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-2 list-disc space-y-1 pl-5 text-sm text-bark",
                        children: answer.next.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, item, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : null,
            answer.links ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: answer.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        className: "btn btn-ink text-sm",
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePanelaStore",
    ()=>usePanelaStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
"use client";
;
const usePanelaStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        dockOpen: false,
        pending: false,
        messages: [],
        setDockOpen: (dockOpen)=>set({
                dockOpen
            }),
        setPending: (pending)=>set({
                pending
            }),
        push: (message)=>set((state)=>({
                    messages: [
                        ...state.messages,
                        message
                    ]
                }))
    }));
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/ask.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "askPanela",
    ()=>askPanela
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/store.ts [app-ssr] (ecmascript)");
"use client";
;
async function askPanela(question) {
    const trimmed = question.trim();
    if (!trimmed) return;
    const { push, setPending, pending } = __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePanelaStore"].getState();
    if (pending) return;
    push({
        id: crypto.randomUUID(),
        role: "user",
        text: trimmed
    });
    setPending(true);
    try {
        const response = await fetch("/api/assistant", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                question: trimmed
            })
        });
        const payload = await response.json();
        if (!response.ok || !payload.direct) {
            push({
                id: crypto.randomUUID(),
                role: "assistant",
                text: payload.error ?? "No pude consultar la bitácora."
            });
            return;
        }
        push({
            id: crypto.randomUUID(),
            role: "assistant",
            text: payload.direct,
            answer: payload
        });
    } catch  {
        push({
            id: crypto.randomUUID(),
            role: "assistant",
            text: "La consulta no llegó al servidor. Intente de nuevo."
        });
    } finally{
        setPending(false);
    }
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssistantDock",
    ()=>AssistantDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$asistente$2f$AnswerView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/AnswerView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$asistente$2f$ask$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/asistente/ask.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/lib/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AssistantDock() {
    const { dockOpen, setDockOpen, messages, pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePanelaStore"])();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function onSubmit(event) {
        event.preventDefault();
        const next = question;
        setQuestion("");
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$asistente$2f$ask$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["askPanela"])(next);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-print fixed bottom-20 right-3 z-50 md:bottom-5 md:right-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-primary shadow-lg",
                onClick: ()=>setDockOpen(!dockOpen),
                "aria-expanded": dockOpen,
                children: dockOpen ? "Cerrar PanelaIA" : "Hablar con PanelaIA"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: dockOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 12
                    },
                    className: "paper mt-3 flex max-h-[70vh] w-[min(92vw,400px)] flex-col overflow-hidden rounded-3xl",
                    "aria-label": "Consulta a PanelaIA",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "border-b border-bark/10 px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "kicker text-copper",
                                    children: "Asistente técnico"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-bark",
                                    children: "PanelaIA en línea. ¿En qué componente requiere apoyo: 3D, IoT, trazabilidad, fondo, comercialización o gestión?"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-3 overflow-auto px-4 py-3",
                            "aria-live": "polite",
                            children: [
                                messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-bark",
                                    children: "Puede preguntar por la hornilla, el QR, los 50 productores o la norma aplicable."
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this) : messages.slice(-4).map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: message.role === "user" ? "text-sm font-semibold text-ink" : "",
                                        children: message.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Usted: ",
                                                message.text
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                            lineNumber: 46,
                                            columnNumber: 48
                                        }, this) : message.answer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$asistente$2f$AnswerView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnswerView"], {
                                            answer: message.answer,
                                            compact: true
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                            lineNumber: 46,
                                            columnNumber: 96
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: message.text
                                        }, void 0, false, {
                                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                            lineNumber: 46,
                                            columnNumber: 145
                                        }, this)
                                    }, message.id, false, {
                                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                        lineNumber: 45,
                                        columnNumber: 19
                                    }, this)),
                                pending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-bark",
                                    children: "Consultando la bitácora…"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 50,
                                    columnNumber: 26
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: onSubmit,
                            className: "flex gap-2 border-t border-bark/10 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "sr-only",
                                    htmlFor: "dock-question",
                                    children: "Pregunta para PanelaIA"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "dock-question",
                                    value: question,
                                    onChange: (event)=>setQuestion(event.target.value),
                                    className: "min-w-0 flex-1 rounded-full border border-bark/20 px-3 py-2 text-sm text-ink",
                                    placeholder: "Escriba la consulta",
                                    maxLength: 2000
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-ink px-4 py-2 text-sm",
                                    type: "submit",
                                    disabled: pending,
                                    children: "Enviar"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PageHeader({ kicker, title, lede }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "max-w-2xl mx-auto mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "kicker text-sm uppercase tracking-widest text-bark mb-3",
                children: kicker
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-3 font-display text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.95] text-cream",
                children: title
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `note note-${kind}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 28c8 10 10 16 10 24 0 8-4 14-10 20-6-6-10-12-10-20 0-8 2-14 10-24z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 78h44M42 86h36",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${width} ${height}`,
        className: "h-12 w-full",
        role: "img",
        "aria-label": "Serie reciente de la métrica",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] ${alert ? "bg-alert text-white" : "bg-moss text-cream"}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$shell$2f$AssistantDock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AssistantDock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/ui/Primitives.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const NAV = [
    {
        href: "/",
        label: "Mesa"
    },
    {
        href: "/trapiche",
        label: "Trapiche"
    },
    {
        href: "/trazabilidad",
        label: "Lotes"
    },
    {
        href: "/fondo",
        label: "Fondo"
    },
    {
        href: "/comercial",
        label: "Mercado"
    },
    {
        href: "/gestion",
        label: "Gestión"
    },
    {
        href: "/asistente",
        label: "PanelaIA"
    }
];
function active(pathname, href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}
function AppShell({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const quiet = pathname.startsWith("/origen");
    if (quiet) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contenido",
                    className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink",
                    children: "Saltar al contenido"
                }, void 0, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "no-print flex items-center justify-between px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center gap-3 text-honey",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Seal"], {
                                    className: "h-10 w-10"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-xl",
                                    children: "Nocaima Dulce Origen"
                                }, void 0, false, {
                                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/trazabilidad",
                            className: "text-sm text-glow",
                            children: "Bitácora interna"
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "contenido",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen md:pl-[108px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#contenido",
                className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink",
                children: "Saltar al contenido"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "no-print fixed inset-y-0 left-0 z-40 hidden w-[108px] flex-col items-center border-r border-white/10 bg-molasses/90 py-5 md:flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        "aria-label": "Mesa de mando",
                        className: "text-amber",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Seal"], {}, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-glow [writing-mode:vertical-rl]",
                        children: "Dulce Origen"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-6 flex flex-1 flex-col gap-1",
                        "aria-label": "Componentes del proyecto",
                        children: NAV.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                "aria-current": active(pathname, item.href) ? "page" : undefined,
                                className: `rounded-xl px-2 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] ${active(pathname, item.href) ? "bg-amber text-ink" : "text-honey/80 hover:bg-white/5"}`,
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "no-print sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-ink/85 px-4 py-3 backdrop-blur md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 text-amber",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$ui$2f$Primitives$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Seal"], {
                                className: "h-8 w-8"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-lg",
                                children: "PanelaIA"
                            }, void 0, false, {
                                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[0.68rem] uppercase tracking-[0.16em] text-glow",
                        children: "Nocaima"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "contenido",
                children: children
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "no-print mx-auto max-w-6xl px-5 pb-28 pt-10 text-xs leading-relaxed text-honey/70 md:pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "PanelaIA apoya a la Cooperativa de Productores de Panela de Nocaima, en constitución, y a la Alcaldía. No es un intermediario comercial ni un canal de la Superintendencia Financiera. Las metas de precio, aporte, marketing y fondo salen del documento base. Los nombres, lotes y saldos son un escenario para ensayar la mesa."
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2",
                        children: "Fotografías de referencia, no del trapiche de Nocaima: Joshuan Barboza, Mariya Muschard, Juan Felipe Ramírez y Adrienne Andersen, vía Pexels."
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "no-print fixed inset-x-0 bottom-0 z-40 flex justify-between gap-1 border-t border-white/10 bg-ink/95 px-2 py-2 md:hidden",
                "aria-label": "Componentes del proyecto",
                children: NAV.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        "aria-current": active(pathname, item.href) ? "page" : undefined,
                        className: `flex-1 rounded-lg px-1 py-2 text-center text-[0.62rem] font-bold uppercase tracking-[0.08em] ${active(pathname, item.href) ? "bg-amber text-ink" : "text-honey"}`,
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$src$2f$components$2f$shell$2f$AssistantDock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AssistantDock"], {}, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/shell/AppShell.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=EjmeplosUX_EjemploDisenoPanelaIA_src_0ibilqc._.js.map