import { DOC } from "@/lib/constants";
import { bpsLabel, formatCop, formatNum } from "@/lib/format";
import { NORMAS } from "@/lib/normativa";
import { projectPension } from "@/lib/pension";
import type { Answer, OverviewDTO } from "@/lib/types";

export type AssistantContext = OverviewDTO;

const HORNILLA_SNIPPET = `import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";
import * as THREE from "three";

type HornillaProps = {
  punteoC: number;
  reducedMotion: boolean;
};

export function HornillaCimpa({ punteoC, reducedMotion }: HornillaProps) {
  const steam = useRef<Points>(null);
  const positions = useMemo(() => {
    const data = new Float32Array(120 * 3);
    for (let index = 0; index < 120; index += 1) {
      data[index * 3] = (Math.random() - 0.5) * 0.7;
      data[index * 3 + 1] = Math.random() * 1.8;
      data[index * 3 + 2] = (Math.random() - 0.5) * 0.7;
    }
    return data;
  }, []);
  const geometry = useMemo(() => {
    const next = new THREE.BufferGeometry();
    next.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return next;
  }, [positions]);

  useFrame((_, delta) => {
    if (reducedMotion || !steam.current) return;
    const attribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    const hot = punteoC > 115 ? 1.35 : 0.85;
    for (let index = 0; index < attribute.count; index += 1) {
      let y = attribute.getY(index) + delta * hot;
      if (y > 2.1) y = 0;
      attribute.setY(index, y);
    }
    attribute.needsUpdate = true;
  });

  const alert = punteoC < 110 || punteoC > 115;
  return (
    <group position={[1.4, 0, 0]}>
      <mesh position={[0, 0.38, 0]}>
        <boxGeometry args={[1.3, 0.76, 0.9]} />
        <meshStandardMaterial color="#6b3a28" roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.46, 0.28]}>
        <coneGeometry args={[0.14, 0.36, 8]} />
        <meshStandardMaterial
          color={alert ? "#ff5a2a" : "#ffb15a"}
          emissive={alert ? "#ff3b1f" : "#ff8a2a"}
          emissiveIntensity={2}
        />
      </mesh>
      <points ref={steam} geometry={geometry} position={[0.15, 1.05, 0]}>
        <pointsMaterial color="#f6efe4" size={0.045} transparent opacity={0.45} depthWrite={false} />
      </points>
    </group>
  );
}`;

const GATEWAY_SNIPPET = `// Arquitectura objetivo. No está desplegada en esta instancia Next.js.
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import type { Server } from "socket.io";

type Station = "corte" | "molienda" | "hornilla" | "punteo" | "batido" | "empaque";

type TelemetryEvent = {
  station: Station;
  metric: "temperatura" | "brix" | "humedad" | "rpm" | "extraccion" | "bagazo";
  value: number;
  unit: string;
  recordedAt: string;
};

@WebSocketGateway({ namespace: "/trapiche" })
export class TrapicheGateway {
  @WebSocketServer()
  server!: Server;

  publish(event: TelemetryEvent): void {
    this.server.emit("telemetry", event);
  }

  @SubscribeMessage("subscribe-station")
  subscribe(@MessageBody() station: Station): { ok: true; station: Station } {
    return { ok: true, station };
  }
}`;

const SQL_SNIPPET = `create table lots (
  id serial primary key,
  code text not null unique,
  producer_id integer not null references producers(id),
  milled_at timestamptz not null,
  cane_variety text not null,
  brix double precision not null,
  punteo_temp_c double precision not null,
  humidity_pct double precision not null,
  rpm double precision not null,
  extraction_pct double precision not null,
  bagasse_kg double precision not null,
  net_kg double precision not null,
  stage text not null,
  anchor_status text not null default 'pendiente_fase_2',
  local_hash text not null,
  destination text
);`;

function norm(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function has(text: string, ...words: string[]): boolean {
  return words.some((word) => text.includes(word));
}

function greeting(ctx?: AssistantContext): Answer {
  const live = ctx?.punteoC != null
    ? `En el escenario demostrativo la paila marca ${formatNum(ctx.punteoC, 1)} °C (${ctx.punteoStatus === "en_rango" ? "dentro" : "fuera"} del rango documental 110-115 °C).`
    : "Aún no hay una lectura de punteo en el escenario.";
  return {
    direct: "Soy PanelaIA, asistente técnico de la revitalización panelera de Nocaima. Puedo apoyar el gemelo 3D, el IoT, la trazabilidad, el fondo de retiro, la comercialización directa o la gestión pública.",
    detail: [
      `${DOC.cooperative} (${DOC.cooperativeStatus}). Marca: ${DOC.brand}. Municipio de ${DOC.municipality}, provincia del ${DOC.province}, ${DOC.department}. La categoría 6 se toma del documento base y debe confirmarse.`,
      live,
      "No invento cifras. Si un dato no está en el documento base, lo digo y señalo la fuente oficial que hay que consultar.",
    ],
    next: ["Indique el componente: 3D web, IoT, trazabilidad, fondo de pensión, comercialización o gestión pública."],
    links: [
      { href: "/trapiche", label: "Abrir trapiche 3D" },
      { href: "/trazabilidad", label: "Abrir lotes" },
      { href: "/fondo", label: "Abrir fondo" },
      { href: "/comercial", label: "Abrir comercialización" },
      { href: "/gestion", label: "Abrir gestión pública" },
    ],
  };
}

function scenarioCount(text: string): number {
  if (text.includes("cincuenta")) return 50;
  const match = text.match(/(\d{1,4})\s*productores?/);
  if (match) return Number(match[1]);
  if (text.includes("50")) return 50;
  return 1;
}

function projection(text: string): Answer {
  const producers = Math.min(500, Math.max(1, scenarioCount(text)));
  const scenario = projectPension({ producers });
  const rateIsDocument = true;
  return {
    direct: producers === 1
      ? `La meta documental es ${formatCop(DOC.pensionTargetCop)} por productor, con ${formatCop(DOC.pensionMonthlyCop)} al mes durante ${DOC.pensionYears} años y una hipótesis de 9% EA.`
      : `Escenario de ${producers} productores: la meta documental agregada es ${formatCop(scenario.aggregateTargetCop)}. No es el censo de Nocaima.`,
    detail: [
      "El valor futuro se calcula con tasa mensual equivalente al 9% efectivo anual: (1,09)^(1/12) − 1, y anualidad de 180 depósitos. Esa convención puede no coincidir con el redondeo del documento, que fija la meta en $76.000.000 COP. No sustituyo la meta.",
      "La mesada estimada del documento base es de $400.000 a $550.000 COP durante 20 años. El documento no publica la fórmula. Por eso no la reconstruyo como si fuera oficial.",
      rateIsDocument
        ? "La tasa de 9% EA es una hipótesis del documento base, no una tasa vigente de TES ni una promesa de Fiduagraria."
        : "",
    ].filter(Boolean),
    table: {
      caption: "Simulación con cifras del documento base",
      headers: ["Concepto", "Valor"],
      rows: [
        ["Productores del escenario", String(producers)],
        ["Aporte mensual documental", formatCop(DOC.pensionMonthlyCop)],
        ["Aporte mensual agregado", formatCop(scenario.aggregateMonthlyCop)],
        ["Horizonte", `${DOC.pensionYears} años`],
        ["Tasa hipotética", "9% EA"],
        ["Valor futuro calculado, 1 productor", formatCop(scenario.futureValueCop)],
        ["Diferencia contra la meta de $76.000.000", formatCop(scenario.gapCop)],
        ["Meta documental, 1 productor", formatCop(DOC.pensionTargetCop)],
        ["Meta documental agregada", formatCop(scenario.aggregateTargetCop)],
        ["Mesada estimada documental", `${formatCop(DOC.payoutLowCop)} a ${formatCop(DOC.payoutHighCop)} / mes`],
        ["Duración de esa mesada, documento base", `${DOC.payoutYears} años`],
      ],
    },
    legal: [
      "Un fideicomiso de administración no es, por sí solo, una pensión de la Ley 100 de 1993.",
      "El vehículo previsto en el documento es un fideicomiso con Fiduagraria S.A., vigilado por la Superintendencia Financiera si se contrata.",
    ],
    risks: [
      "9% EA no está garantizado. Si la tasa real es menor, no se llega a la meta con el mismo aporte.",
      "El escenario de varios productores multiplica la ficha documental. No usa un censo municipal.",
      "No incluyo costos de comisión fiduciaria: el documento base no los fija.",
    ],
    next: [
      "Llevar esta ficha al comité que redacte la instrucción a Fiduagraria, sin presentarla como mesada adquirida.",
      "Confirmar en Banco de la República y Ministerio de Hacienda la tasa vigente de TES antes de escribir la política de inversión.",
    ],
    links: [{ href: "/fondo", label: "Abrir simulador y borrador de aporte" }],
  };
}

export function respond(question: string, ctx?: AssistantContext): Answer {
  const text = norm(question).trim();
  if (!text || ["hola", "buenas", "buenos dias", "hey", "inicio", "panelaia"].includes(text)) {
    return greeting(ctx);
  }
  if (has(text, "eleccion presidencial", "apostar", "casino", "narcotrafico", "fabricar un arma")) {
    return {
      direct: "Esa consulta sale del objeto de la cooperativa panelera de Nocaima. No la atiendo.",
      detail: ["Puedo volver a trapiche, trazabilidad, fondo de retiro, comercialización directa o gestión ante la Alcaldía."],
      next: ["Reformule la pregunta dentro de la cadena panelera."],
    };
  }
  if (has(text, "contrato", "clausula", "fideicomiso de pension", "aporte al fideicomiso", "minuta")) {
    return {
      direct: "El borrador de aporte está en la mesa del fondo. Es un texto técnico, no un contrato fiduciario firmado ni revisado por Fiduagraria.",
      detail: [
        `Partes previstas: el asociado y la ${DOC.cooperative} (${DOC.cooperativeStatus}), con instrucción posterior a ${DOC.fiduciary}.`,
        `Aporte documental: entre ${bpsLabel(DOC.contributionMinBps)} y ${bpsLabel(DOC.contributionMaxBps)} de cada venta directa, más la referencia de ${formatCop(DOC.pensionMonthlyCop)} al mes.`,
        "El borrador deja constancia de que la meta de $76.000.000 COP y la mesada estimada no son un derecho pensional de la Ley 100 de 1993.",
      ],
      legal: [
        "Ley 79 de 1988 para la relación asociativa.",
        "Decreto 663 de 1993 y Decreto 2555 de 2010 para la actividad fiduciaria, si Fiduagraria acepta el encargo.",
        "Ley 1328 de 2009 solo en deberes de información al consumidor financiero.",
      ],
      risks: [
        "Firmar este borrador como si fuera el contrato de fiducia induciría a error a los asociados.",
        "Sin cooperativa constituida no hay fideicomitente colectivo todavía.",
      ],
      next: ["Revise el borrador en la sección Fondo, imprímalo y entrégueselo al asesor jurídico y a Fiduagraria. No lo use como clausulado final."],
      links: [{ href: "/fondo#contrato", label: "Abrir borrador de aporte" }],
    };
  }
  if (has(text, "politica de inversion", "cdt", "tes", "etf", "s&p", "sp 500", "superfinanciera")) {
    return {
      direct: "La política del documento base es conservadora los primeros cinco años (CDT, TES y acciones) y, desde el año 5, ETFs globales referidos al S&P 500. No está aprobada por un comité ni por la Superintendencia Financiera.",
      detail: [
        "Años 1 a 5: CDT, TES y acciones, según el documento base. No fija porcentajes internos. No los invento.",
        "Año 5 en adelante: ETFs globales referidos al S&P 500, según el documento base.",
        "Administrador previsto: Fiduagraria S.A. La política real será la que permita el contrato de fiducia y el régimen de inversiones aplicable.",
      ],
      legal: [
        "Superintendencia Financiera de Colombia, vigilancia del fideicomiso si se constituye con una sociedad fiduciaria.",
        "La Ley 1328 de 2009 exige información clara al consumidor financiero; no autoriza por sí sola esta mezcla de activos.",
      ],
      risks: [
        "Acciones y ETF implican pérdida de capital. No encajan con una promesa de 9% EA.",
        "Un asociado puede leer 'pensión' donde solo hay una hipótesis de ahorro.",
      ],
      next: ["Pedir a Fiduagraria el régimen de inversiones del tipo de fideicomiso que sí puede administrar, y no publicar la política hasta ese concepto."],
      links: [{ href: "/fondo#politica", label: "Ver política propuesta" }],
    };
  }
  if (has(text, "proyeccion", "15 anos", "76", "mesada", "simul", "productores", "fondo de retiro", "pension")) {
    return projection(text);
  }
  if (has(text, "hornilla", "three", "r3f", "react three", "particula", "vapor", "gemelo", "3d")) {
    return {
      direct: "El gemelo del trapiche ya está en ejecución: molienda, hornilla CIMPA, vapor y paila cuyo color sigue la temperatura de punteo.",
      detail: [
        "Stack de esta instancia: Next.js, React 19, TypeScript, Three.js y React Three Fiber. No hay un GLB medido del trapiche de Nocaima: la geometría es procedural hasta que exista el levantamiento.",
        "Cuando exista el modelo, el reemplazo justificado es glTF con Draco: reduce el peso del archivo de un levantamiento fotogramétrico. Hoy no aporta, porque no hay malla que comprimir.",
        "La temperatura documental de punteo es 110-115 °C. Fuera de ese rango el fuego y el estado pasan a alerta. El °Brix, la humedad, las RPM, la extracción y el bagazo se muestran como lecturas: el documento no les fija rango.",
      ],
      code: {
        title: "Extracto tipado de la hornilla CIMPA",
        language: "tsx",
        body: HORNILLA_SNIPPET,
      },
      risks: [
        "Un gemelo procedural no sustituye la calibración en el trapiche real.",
        "El efecto visual no debe usarse como único canal: la tabla de lecturas es la alternativa accesible (WCAG 2.1 AA).",
      ],
      next: ["Abra el trapiche, active un ciclo de demostración y contraste la paila con la tabla. El siguiente hito físico es el termopar, no otro render."],
      links: [{ href: "/trapiche", label: "Abrir gemelo 3D" }],
    };
  }
  if (has(text, "mqtt", "websocket", "esp32", "sensor", "dht22", "termopar", "gateway", "nestjs", "iot", "telemetr")) {
    return {
      direct: "La fase 1 de esta mesa recibe telemetría por HTTP y la guarda en PostgreSQL. El gateway NestJS con WebSocket y el broker MQTT son la arquitectura objetivo, no un servicio desplegado aquí.",
      detail: [
        "Corrección de instrumento: el DHT22 mide humedad y temperatura ambiente, normalmente hasta unos 80 °C. No puede leer el punteo a 110-115 °C. Ese punto exige termopar, por ejemplo tipo K con MAX6675 o MAX31855. La celda de carga corresponde al peso de empaque. El documento base lista los tres instrumentos; no son intercambiables.",
        "Tópico MQTT propuesto, cuando exista broker: nocaima/trapiche/{estacion}/{metrica}. Estaciones: corte, molienda, hornilla, punteo, batido, empaque.",
        "En esta instancia el equivalente operativo es POST /api/telemetry. La vista sondea las últimas lecturas. No hay un ESP32 de Nocaima conectado.",
      ],
      code: {
        title: "Referencia de gateway NestJS, no desplegada",
        language: "ts",
        body: GATEWAY_SNIPPET,
      },
      risks: [
        "Publicar el broker MQTT sin autenticación expondría la operación del trapiche.",
        "Una serie temporal larga, en producción, justifica TimescaleDB. Aquí PostgreSQL basta para la fase 1 y no se simula una extensión que no está instalada.",
      ],
      next: ["Asignar a un joven operador la captura manual de una lectura de punteo y comparar el estado en_rango / fuera_de_rango."],
      links: [{ href: "/trapiche", label: "Abrir telemetría" }],
    };
  }
  if (has(text, "qr", "trazab", "lote", "esquema", "blockchain", "besu", "polygon", "hash")) {
    return {
      direct: "La fase 1 ya registra lote, productor, variedad, °Brix, temperatura de punteo y una huella SHA-256 local. El QR abre el pasaporte público. No hay anclaje en blockchain.",
      detail: [
        "Fase 1, documento base: base centralizada y QR. Fase 2: inmutabilidad en Hyperledger Besu o Polygon, como alternativas, no como decisión tomada.",
        "Besu se justificaría si la Alcaldía y la cooperativa quieren un consorcio con permisos. Polygon se justificaría por costo bajo de anclaje público. Ninguna de las dos está desplegada: elegir ahora sería comprar un sello sin operación.",
        "La huella local prepara el payload. No es un hash de transacción. Quien diga que el lote ya está en cadena no está describiendo este sistema.",
      ],
      code: {
        title: "Núcleo relacional del lote",
        language: "sql",
        body: SQL_SNIPPET,
      },
      legal: [
        "Ley 1581 de 2012: el pasaporte público muestra código de productor y vereda, no el nombre, salvo autorización.",
        "Reglamento (UE) 2023/1115: no cubre panela ni caña. No se use como argumento de exportación.",
      ],
      risks: [
        "Un QR sin control del dominio puede ser suplantado. En producción el código debe vivir en el dominio de la cooperativa.",
        "Anclar datos personales en una cadena pública puede chocar con la Ley 1581 de 2012.",
      ],
      next: ["Revise un pasaporte desde Trazabilidad y confirme que el estado de anclaje dice pendiente de fase 2."],
      links: [{ href: "/trazabilidad", label: "Abrir bitácora de lotes" }],
    };
  }
  if (has(text, "alianza", "minagricultura", "postul", "adr", "convocatoria")) {
    return {
      direct: "Puedo estructurar la postulación, no presentarla. El documento base no trae el monto de cofinanciación ni el plazo de la convocatoria vigente.",
      detail: [
        "Identificación: Nocaima, Cundinamarca, provincia del Gualivá. Categoría 6 según documento base, a confirmar. Organización: cooperativa en constitución.",
        "Problema que sí está en el proyecto: intermediación, trapiche por automatizar, ausencia de trazabilidad digital, fondo de retiro por diseñar y relevo generacional.",
        "Componentes alineados: hornilla y molienda, trazabilidad fase 1, venta directa, instrucción fiduciaria y operación juvenil.",
        `Única cifra de gasto comercial del documento: ${formatCop(DOC.marketingMonthlyCop)} al mes. No es el presupuesto total del proyecto. No lo presento como contrapartida aprobada.`,
        "Ventanilla: confirmar si la convocatoria vigente está en MinAgricultura o en la Agencia de Desarrollo Rural. No cito un cierre ni un cupo.",
      ],
      legal: ["Decreto 1071 de 2015 como marco del sector agropecuario. Ley 79 de 1988 para la forma jurídica."],
      risks: [
        "Postular una cooperativa que aún no existe puede ser causal de rechazo, según las bases de la convocatoria.",
        "Inventar un presupuesto total para cuadrar un formulario sería una falta frente al financiador.",
      ],
      next: ["Descargue las bases vigentes en el portal de MinAgricultura o de la ADR y complete solo los campos que esas bases pidan, con cifras verificadas."],
      links: [{ href: "/gestion#alianzas", label: "Abrir estructura de postulación" }],
    };
  }
  if (has(text, "precio", "comercial", "intermedi", "marketing", "bogota", "suscrip", "agrotur")) {
    return {
      direct: `El documento base fija $3.000 a $4.200 COP/kg al productor y $7.000 a $9.000 COP/kg en Bogotá. El marketing es de ${formatCop(DOC.marketingMonthlyCop)} al mes. No hay otra tarifa.`,
      detail: [
        "La brecha entre esos rangos es el espacio que la venta directa busca capturar. No es margen neto: el documento no fija flete, merma ni empaque.",
        "Canales sin intermediario: B2B Bogotá, mercados campesinos, suscripción y agroturismo. El agroturismo no tiene tarifa en el documento; no invento el valor de la visita.",
        `En 18 meses, el marketing documental suma ${formatCop(DOC.marketingMonthlyCop * DOC.roadmapMonths)}. Es una multiplicación, no una apropiación aprobada por la Alcaldía.`,
      ],
      table: {
        caption: "Precios que sí están en el documento base",
        headers: ["Referencia", "Mínimo", "Máximo"],
        rows: [
          ["Productor", formatCop(DOC.producerPriceMin), formatCop(DOC.producerPriceMax)],
          ["Bogotá", formatCop(DOC.bogotaPriceMin), formatCop(DOC.bogotaPriceMax)],
          ["Marketing mensual", formatCop(DOC.marketingMonthlyCop), formatCop(DOC.marketingMonthlyCop)],
        ],
      },
      risks: [
        "Vender a $9.000 COP/kg no demuestra utilidad si el costo logístico se come la brecha.",
        "Un intermediario disfrazado de 'aliado comercial' contradice el objeto del proyecto.",
      ],
      next: ["Registre una venta directa solo dentro de los rangos. El aporte del 5% al 8% queda en el libro del fondo de escenario."],
      links: [{ href: "/comercial", label: "Abrir comercialización" }],
    };
  }
  if (has(text, "ley", "decreto", "tribut", "norma", "ica", "car ", "eudr", "ses", "estatuto")) {
    return {
      direct: "La matriz normativa corrige tres citas del documento de trabajo: Decreto 1067 de 2015, artículo 197 del ET y el Reglamento (UE) 2023/1115 aplicado a la panela.",
      detail: NORMAS.slice(0, 6).map((norma) => `${norma.tema}. Aplica: ${norma.aplica} Corrección: ${norma.correccion}`),
      legal: NORMAS.map((norma) => `${norma.tema}: ${norma.aplica}`),
      risks: ["Citar una norma equivocada en un acto de la Alcaldía o en un empaque es peor que dejar el campo en verificación."],
      next: ["Use la matriz de Gestión Pública y confirme cada número en la fuente oficial antes de llevarlo a un documento firmado."],
      links: [{ href: "/gestion", label: "Abrir matriz normativa" }],
    };
  }
  if (has(text, "joven", "relevo", "generacional", "community manager")) {
    return {
      direct: "El relevo generacional es un objetivo del proyecto: jóvenes cooperativistas como operadores IoT y community managers de Nocaima Dulce Origen.",
      detail: [
        "No es un programa decorativo. Operan sensores, cuidan el QR y sostienen la venta directa sin intermediarios.",
        "El escenario demostrativo incluye dos roles juveniles ficticios para mostrar la mesa. No es un censo de jóvenes de Nocaima.",
      ],
      risks: ["Formar operadores sin pagarles o sin asociarlos reproduce la precariedad que el proyecto dice corregir."],
      next: ["Reservar en los estatutos un asiento joven en el comité de trapiche y de marca, con las mismas reglas de asociado de la Ley 79 de 1988."],
      links: [{ href: "/gestion", label: "Ver relevo en la hoja de ruta" }],
    };
  }
  if (has(text, "saldo", "como vamos", "estado", "cuantos lotes", "alerta")) {
    return {
      direct: "Estas cifras son del escenario demostrativo, no del trapiche real ni de un fideicomiso abierto.",
      detail: [
        ctx
          ? `Lotes: ${ctx.lots}. Ventas directas registradas: ${formatCop(ctx.salesCop)}. Libro del fondo: ${formatCop(ctx.fundCop)}. Jóvenes en el escenario: ${ctx.youth} de ${ctx.producers}.`
          : "No hay contexto operativo en esta consulta.",
        ctx?.punteoC != null
          ? `Punteo vigente: ${formatNum(ctx.punteoC, 1)} °C, estado ${ctx.punteoStatus}. Alertas abiertas de punteo: ${ctx.openAlerts}.`
          : "Sin lectura de punteo.",
      ],
      risks: ["Mezclar este escenario con un informe a la Alcaldía como si fuera ejecución física sería una información falsa."],
      next: ["Use el escenario para ensayar la mesa. El primer dato real debe entrar por captura de un termopar, no por esta semilla."],
      links: [{ href: "/", label: "Volver a la mesa" }],
    };
  }
  if (has(text, "cuanto cuesta", "presupuesto total", "hectarea", "censo", "poblacion", "habitantes", "resolucion ica", "tarifa de agroturismo")) {
    return {
      direct: "Esa cifra no está en el documento base. No la estimo.",
      detail: [
        "Puedo trabajar con los precios, el aporte, la meta de $76.000.000 COP, el marketing de $2.000.000 COP al mes, el horizonte de 18 meses y el rango de punteo. Lo demás hay que pedirlo a la fuente.",
      ],
      next: ["Consulte DANE, ICA, CAR, SES, Superfinanciera, MinAgricultura o la Secretaría de Desarrollo, según el dato."],
    };
  }
  return {
    direct: "No tengo certeza sobre esa consulta dentro del proyecto. No completo el vacío con una cifra o una norma.",
    detail: [
      "Puedo apoyar el gemelo 3D, la telemetría, la trazabilidad por lote, el fondo de retiro, la venta directa o la gestión ante la Alcaldía y la Secretaría de Desarrollo.",
      "Fuentes que sí recomiendo verificar: DNP, MinAgricultura, Superintendencia de Economía Solidaria, Superintendencia Financiera, ICA y CAR.",
    ],
    next: ["Reformule la pregunta hacia uno de esos seis componentes."],
    links: [{ href: "/asistente", label: "Ver preguntas sugeridas" }],
  };
}

export const SUGGESTIONS = [
  "Genera la hornilla CIMPA en React Three Fiber",
  "Diseña el esquema de trazabilidad con QR",
  "Proyección del fondo a 15 años con 50 productores",
  "Política de inversión del fideicomiso",
  "Borrador de aporte al fideicomiso",
  "Gateway de telemetría del trapiche",
  "Postulación a Alianzas Productivas",
  "Precios y comercialización sin intermediarios",
];
