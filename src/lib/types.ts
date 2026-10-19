export type ProducerDTO = {
  id: number;
  code: string;
  fullName: string;
  vereda: string;
  caneVariety: string;
  role: string;
  youth: boolean;
  contributionRateBps: number;
  status: string;
  balanceCop: number;
};

export type LotDTO = {
  id: number;
  code: string;
  producerId: number;
  producerCode: string;
  producerName: string;
  vereda: string;
  milledAt: string;
  caneVariety: string;
  brix: number;
  punteoTempC: number;
  humidityPct: number;
  rpm: number;
  extractionPct: number;
  bagasseKg: number;
  netKg: number;
  soldKg: number;
  stage: string;
  anchorStatus: string;
  localHash: string;
  destination: string | null;
};

export type ReadingDTO = {
  id: number;
  station: string;
  metric: string;
  value: number;
  unit: string;
  status: string;
  source: string;
  recordedAt: string;
};

export type TelemetryDTO = {
  latest: Record<string, ReadingDTO>;
  series: Record<string, number[]>;
  recent: ReadingDTO[];
};

export type SaleDTO = {
  id: number;
  lotCode: string;
  producerName: string;
  channel: string;
  counterparty: string;
  kg: number;
  pricePerKg: number;
  contributionRateBps: number;
  contributionCop: number;
  soldAt: string;
};

export type LedgerDTO = {
  id: number;
  producerId: number;
  producerName: string;
  kind: string;
  amountCop: number;
  note: string;
  recordedAt: string;
};

export type OverviewDTO = {
  lots: number;
  salesCop: number;
  salesKg: number;
  fundCop: number;
  producers: number;
  youth: number;
  punteoC: number | null;
  punteoStatus: string | null;
  openAlerts: number;
  lastExcursion: string | null;
};

export type Answer = {
  direct: string;
  detail: string[];
  legal?: string[];
  risks?: string[];
  next?: string[];
  table?: { caption: string; headers: string[]; rows: string[][] };
  code?: { title: string; language: string; body: string };
  links?: { href: string; label: string }[];
};
