export const services = [
  { key: "customWeb", icon: "01" },
  { key: "saas", icon: "02" },
  { key: "automation", icon: "03" },
  { key: "integration", icon: "04" },
  { key: "devops", icon: "05" },
  { key: "maintenance", icon: "06" },
] as const;

export const cases = [
  { key: "nexus", slug: "nexus-analytics", category: "saas", visual: "bars" },
  { key: "globalFreight", slug: "globalfreight", category: "customApp", visual: "lines" },
  { key: "stripeErp", slug: "stripe-erp", category: "integration", visual: "nodes" },
] as const;
// data/site.ts
export type ProductStatus = "beta" | "comingSoon" | "live";

export interface ProductItem {
  readonly key: string;
  readonly name: string;
  readonly status: ProductStatus;
}

export const products: readonly ProductItem[] = [
  { key: "growpos", name: "GrowPOS", status: "live" },
  { key: "forgeInventory", name: "FieldCoord", status: "comingSoon" },
  { key: "signalDesk", name: "AuditLog OS", status: "comingSoon" },
];
export const insights = [
  { key: "overEngineering", slug: "over-engineering", date: "Oct 12, 2024" },
  { key: "professionalInterface", slug: "designing-for-calm", date: "Sep 15, 2024" },
  { key: "legacyMonolith", slug: "legacy-migrations", date: "Aug 30, 2024" },
] as const;
