export const DOC = {
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
  punteoMaxC: 115,
} as const;

export const STAGES = [
  "corte",
  "molienda",
  "hornilla",
  "punteo",
  "batido",
  "empaque",
  "despacho",
] as const;

export type Stage = (typeof STAGES)[number];

export const CHANNELS = [
  {
    id: "b2b_bogota",
    label: "B2B Bogotá",
    band: "bogota",
    note: "Rango documental de venta en Bogotá.",
  },
  {
    id: "suscripcion",
    label: "Suscripción hogar",
    band: "bogota",
    note: "El documento base no fija una tarifa distinta: se usa el rango de Bogotá.",
  },
  {
    id: "mercado_campesino",
    label: "Mercado campesino",
    band: "bogota",
    note: "El documento base no fija una tarifa distinta: se usa el rango de Bogotá.",
  },
  {
    id: "puerta_trapiche",
    label: "Puerta de trapiche",
    band: "productor",
    note: "Rango documental del precio al productor, en venta directa en finca.",
  },
] as const;

export type ChannelId = (typeof CHANNELS)[number]["id"];

export const METRICS = {
  temperatura: { station: "punteo", unit: "°C", min: 0, max: 300 },
  brix: { station: "punteo", unit: "°Bx", min: 0, max: 100 },
  brix_jugo: { station: "molienda", unit: "°Bx", min: 0, max: 40 },
  rpm: { station: "molienda", unit: "rpm", min: 0, max: 500 },
  extraccion: { station: "molienda", unit: "%", min: 0, max: 100 },
  bagazo: { station: "hornilla", unit: "kg/h", min: 0, max: 5_000 },
  humedad: { station: "corte", unit: "%", min: 0, max: 100 },
} as const;

export type MetricKey = keyof typeof METRICS;

export const PHOTOS = {
  cane: "https://images.pexels.com/photos/38302386/pexels-photo-38302386.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200",
  press: "https://images.pexels.com/photos/2254100/pexels-photo-2254100.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1600",
  andes: "https://images.pexels.com/photos/32190433/pexels-photo-32190433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
  hills: "https://images.pexels.com/photos/28154138/pexels-photo-28154138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600",
} as const;
