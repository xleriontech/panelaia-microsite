(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrapicheScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/@react-three/drei/core/Instances.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Roller({ position, speed, color, reducedMotion }) {
    _s();
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Roller.useFrame": (_, delta)=>{
            if (reducedMotion || !mesh.current) return;
            mesh.current.rotation.y += delta * speed;
        }
    }["Roller.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        rotation: [
            Math.PI / 2,
            0,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
            ref: mesh,
            castShadow: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                    args: [
                        0.2,
                        0.2,
                        0.78,
                        24
                    ]
                }, void 0, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                    color: color,
                    metalness: 0.72,
                    roughness: 0.32
                }, void 0, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Roller, "aboyJ/StuJfvpd16sdbtizo3yWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Roller;
function Rollers({ rpm, reducedMotion }) {
    const speed = Math.max(0.6, rpm / 36);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            -1.55,
            0.95,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Roller, {
                position: [
                    -0.24,
                    0,
                    0
                ],
                speed: speed,
                color: "#8d5a34",
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Roller, {
                position: [
                    0,
                    0,
                    0
                ],
                speed: -speed * 1.05,
                color: "#d08a52",
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Roller, {
                position: [
                    0.24,
                    0,
                    0
                ],
                speed: speed,
                color: "#8d5a34",
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c1 = Rollers;
function Steam({ alert, reducedMotion }) {
    _s1();
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Steam.useMemo[geometry]": ()=>{
            const data = new Float32Array(140 * 3);
            for(let index = 0; index < 140; index += 1){
                data[index * 3] = (Math.random() - 0.5) * 0.72;
                data[index * 3 + 1] = Math.random() * 1.8;
                data[index * 3 + 2] = (Math.random() - 0.5) * 0.72;
            }
            const next = new __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            next.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](data, 3));
            return next;
        }
    }["Steam.useMemo[geometry]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Steam.useFrame": (_, delta)=>{
            if (reducedMotion) return;
            const attribute = geometry.getAttribute("position");
            for(let index = 0; index < attribute.count; index += 1){
                let y = attribute.getY(index) + delta * (alert ? 0.85 : 0.45);
                if (y > 2) y = 0;
                attribute.setY(index, y);
            }
            attribute.needsUpdate = true;
            if (points.current) points.current.geometry = geometry;
        }
    }["Steam.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: points,
        geometry: geometry,
        position: [
            1.55,
            1.35,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
            color: "#f7f1e7",
            size: 0.045,
            transparent: true,
            opacity: 0.42,
            depthWrite: false
        }, void 0, false, {
            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s1(Steam, "eUr4/FM62OWe4Ws2ipEBbSdOTgA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Steam;
function Fire({ alert, reducedMotion }) {
    _s2();
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Fire.useFrame": ({ clock })=>{
            if (reducedMotion || !mesh.current) return;
            const pulse = 1 + Math.sin(clock.elapsedTime * 7) * 0.08;
            mesh.current.scale.set(pulse, 1 + Math.sin(clock.elapsedTime * 5) * 0.12, pulse);
        }
    }["Fire.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: mesh,
        position: [
            0.55,
            0.48,
            0.2
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                args: [
                    0.13,
                    0.38,
                    8
                ]
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: alert ? "#ff5a2a" : "#ffb15a",
                emissive: alert ? "#ff3b1f" : "#ff8a2a",
                emissiveIntensity: 2.1
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s2(Fire, "aboyJ/StuJfvpd16sdbtizo3yWA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Fire;
function CaneField() {
    _s3();
    const stalks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CaneField.useMemo[stalks]": ()=>Array.from({
                length: 32
            }, {
                "CaneField.useMemo[stalks]": (_, index)=>({
                        position: [
                            -2.6 + index % 8 * 0.28,
                            0.72,
                            -2.15 - Math.floor(index / 8) * 0.26
                        ],
                        scale: 0.8 + index % 4 * 0.08
                    })
            }["CaneField.useMemo[stalks]"])
    }["CaneField.useMemo[stalks]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Instances"], {
        limit: 32,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                args: [
                    0.018,
                    0.026,
                    1.45,
                    5
                ]
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: "#7d9a55",
                roughness: 0.74
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            stalks.map((stalk, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Instances$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Instance"], {
                    position: stalk.position,
                    scale: stalk.scale
                }, index, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s3(CaneField, "pEJH//dr+LjTL+Pr8rL1uniuas4=");
_c4 = CaneField;
function Mill({ live }) {
    const syrup = live.alert ? "#7a2e12" : "#c46a1d";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                receiveShadow: true,
                position: [
                    0.4,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            5.4,
                            48
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#3a2618",
                        roughness: 1
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaneField, {}, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -1.55,
                    0.42,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.35,
                            0.28,
                            0.95
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6a4630",
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rollers, {
                rpm: live.rpm,
                reducedMotion: live.reducedMotion
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -2.35,
                    1.05,
                    0
                ],
                rotation: [
                    0,
                    0,
                    Math.PI / 2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.05,
                            0.05,
                            1.1,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#6e8f4e"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.55,
                    0.36,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.25,
                            0.72,
                            0.92
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#7a4632",
                        roughness: 0.88
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.55,
                    1.15,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.12,
                            0.16,
                            0.7,
                            12
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#5c4034"
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fire, {
                alert: live.alert,
                reducedMotion: live.reducedMotion
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.55,
                    0.78,
                    0
                ],
                scale: [
                    1,
                    0.42,
                    1
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.5,
                            28,
                            18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#b87333",
                        metalness: 0.78,
                        roughness: 0.28
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    1.55,
                    0.9,
                    0
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            0.36,
                            24
                        ]
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: syrup,
                        emissive: syrup,
                        emissiveIntensity: 0.28
                    }, void 0, false, {
                        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Steam, {
                alert: live.alert,
                reducedMotion: live.reducedMotion
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            Array.from({
                length: 5
            }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        3.05,
                        0.42,
                        -0.45 + index * 0.22
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                0.28,
                                0.12,
                                0.18
                            ]
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: index % 2 ? "#c9843a" : "#a86428",
                            roughness: 0.55
                        }, void 0, false, {
                            fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    0.7,
                    0.8,
                    0.4
                ],
                color: live.alert ? "#ff5a2a" : "#ff9a45",
                intensity: live.alert ? 7 : 4,
                distance: 5
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c5 = Mill;
function TrapicheScene({ live }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        camera: {
            position: [
                5.2,
                3.05,
                5.6
            ],
            fov: 36
        },
        dpr: [
            1,
            1.6
        ],
        shadows: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    "#1a100b"
                ]
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                attach: "fog",
                args: [
                    "#1a100b",
                    8,
                    17
                ]
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.38,
                color: "#f0e2cf"
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    4,
                    6,
                    3
                ],
                intensity: 2.1,
                color: "#fff4e4",
                castShadow: true
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    "#d5e2bc",
                    "#3a2416",
                    0.45
                ]
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mill, {
                live: live
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                makeDefault: true,
                target: [
                    0.6,
                    0.8,
                    0
                ],
                enablePan: false,
                minDistance: 3.4,
                maxDistance: 10,
                maxPolarAngle: Math.PI / 2.05,
                autoRotate: !live.reducedMotion,
                autoRotateSpeed: 0.35
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$EjmeplosUX$2f$EjemploDisenoPanelaIA$2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                    intensity: 0.25,
                    luminanceThreshold: 0.9,
                    mipmapBlur: true
                }, void 0, false, {
                    fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c6 = TrapicheScene;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Roller");
__turbopack_context__.k.register(_c1, "Rollers");
__turbopack_context__.k.register(_c2, "Steam");
__turbopack_context__.k.register(_c3, "Fire");
__turbopack_context__.k.register(_c4, "CaneField");
__turbopack_context__.k.register(_c5, "Mill");
__turbopack_context__.k.register(_c6, "TrapicheScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/EjmeplosUX/EjemploDisenoPanelaIA/src/components/trapiche/TrapicheScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=04~8_EjemploDisenoPanelaIA_src_components_trapiche_TrapicheScene_tsx_069l9ed._.js.map