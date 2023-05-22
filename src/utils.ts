import { CampaignData, CanBePercent } from "./data";

export function calculatePercentage(value: number, total: number): number {
  return Math.round((value / total) * 100);
}

export function campaignComparator(
  key: keyof CampaignData,
  orderDir: "asc" | "desc",
  numericRep: "number" | "percentage"
) {
  return (a: CampaignData, b: CampaignData) => {
    let aVal = a[key];
    let bVal = b[key];

    if (
      numericRep === "percentage" &&
      CanBePercent.has(key) &&
      typeof aVal === "number" &&
      typeof bVal === "number"
    ) {
      aVal = calculatePercentage(aVal as number, a.sent);
      bVal = calculatePercentage(bVal as number, b.sent);
    }

    if (aVal < bVal) {
      return orderDir === "asc" ? -1 : 1;
    }
    if (aVal > bVal) {
      return orderDir === "asc" ? 1 : -1;
    }
    return 0;
  };
}
