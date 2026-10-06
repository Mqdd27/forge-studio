import type { cases } from "./site";

export type WorkPresentation = {
  category: "webApplication" | "businessSystem" | "existingSystem" | "internalTool";
  tags: readonly string[];
  // Add only reviewed, anonymized screenshots. Empty means no actual screenshot is available.
  screenshots: readonly { src: string; alt: string; width: number; height: number }[];
};

export const workPresentation: Record<(typeof cases)[number]["key"], WorkPresentation> = {
  idxStocks: { category: "webApplication", tags: ["Market monitoring", "Reporting", "Research"], screenshots: [] },
  growpos: { category: "businessSystem", tags: ["Sales", "Inventory", "Reporting"], screenshots: [] },
  aiSummarizer: { category: "webApplication", tags: ["AI summaries", "Content workflow"], screenshots: [] },
  odooWageOvertime: { category: "existingSystem", tags: ["ERP customization", "Wage workflows", "Overtime"], screenshots: [] },
  stockOpname: { category: "businessSystem", tags: ["Inventory", "Stock counts", "Review workflow"], screenshots: [] },
  // Tambahkan entri board di bawah ini:
  board: { category: "internalTool", tags: [], screenshots: [] },
};