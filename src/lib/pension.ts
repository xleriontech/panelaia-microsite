import { DOC } from "@/lib/constants";

export function monthlyRateFromEa(ea: number): number {
  return Math.pow(1 + ea, 1 / 12) - 1;
}

export function futureValueAnnuity(monthlyCop: number, ea: number, years: number): number {
  const periods = years * 12;
  if (monthlyCop <= 0 || periods <= 0) return 0;
  const rate = monthlyRateFromEa(ea);
  if (rate === 0) return monthlyCop * periods;
  return monthlyCop * ((Math.pow(1 + rate, periods) - 1) / rate);
}

export function payoutAnnuity(capitalCop: number, ea: number, years: number): number {
  const periods = years * 12;
  if (capitalCop <= 0 || periods <= 0) return 0;
  const rate = monthlyRateFromEa(ea);
  if (rate === 0) return capitalCop / periods;
  return (capitalCop * rate) / (1 - Math.pow(1 + rate, -periods));
}

export function contributionFromSale(kg: number, pricePerKg: number, bps: number): number {
  return Math.round(kg * pricePerKg * (bps / 10_000));
}

export type PensionScenario = {
  producers: number;
  monthlyCop: number;
  years: number;
  rateEa: number;
  futureValueCop: number;
  documentedTargetCop: number;
  gapCop: number;
  aggregateTargetCop: number;
  aggregateMonthlyCop: number;
  aggregateFutureValueCop: number;
  mathematicalPayoutCop: number;
};

export function projectPension(input: {
  producers: number;
  monthlyCop?: number;
  years?: number;
  rateEa?: number;
}): PensionScenario {
  const producers = input.producers;
  const monthlyCop = input.monthlyCop ?? DOC.pensionMonthlyCop;
  const years = input.years ?? DOC.pensionYears;
  const rateEa = input.rateEa ?? DOC.pensionRateEa;
  const futureValueCop = futureValueAnnuity(monthlyCop, rateEa, years);
  const documentedTargetCop = DOC.pensionTargetCop;
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
    mathematicalPayoutCop: payoutAnnuity(documentedTargetCop, rateEa, DOC.payoutYears),
  };
}
