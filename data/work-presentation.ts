import type { cases } from "./site";
export type WorkPresentation = {
  category: "webApplication" | "businessSystem" | "existingSystem" | "internalTool";
  tags: readonly string[];
  // Add only reviewed, anonymized screenshots. Empty means no actual screenshot is available.
  screenshots: readonly { src: string; alt: string; width: number; height: number }[];
};
export const workPresentation: Record<(typeof cases)[number]["key"], WorkPresentation> = {
  idxStocks: { category: "webApplication", tags: ["Market monitoring", "Reporting", "Research"], screenshots: [] },
  aiSummarizer: { category: "webApplication", tags: ["AI summaries", "Content workflow"], screenshots: [] },
  odooWageOvertime: { category: "existingSystem", tags: ["ERP customization", "Wage workflows", "Overtime"], screenshots: [] },
  stockOpname: { category: "businessSystem", tags: ["Inventory", "Stock counts", "Review workflow"], screenshots: [] },
};

// Only these fields cross the server/client boundary for public project cards.
export function workCardData(item: (typeof cases)[number]) {
  const { key, slug, visual } = item;
  return { key, slug, visual };
}
