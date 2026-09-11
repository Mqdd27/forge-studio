export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
// export const services = [
//   {
//     key: "customWeb",
//     icon: "01",
//   },
//   {
//     key: "saas",
//     icon: "02",
//   },
//   {
//     key: "automation",
//     icon: "03",
//   },
//   {
//     key: "integration",
//     icon: "04",
//   },
//   {
//     key: "devops",
//     icon: "05",
//   },
//   {
//     key: "maintenance",
//     icon: "06",
//   },
// ] as const;

// export const cases = [
//   {
//     key: "nexus",
//     slug: "nexus-analytics",
//     category: "saas",
//     visual: "bars",
//   },
//   {
//     key: "globalFreight",
//     slug: "globalfreight",
//     category: "customApp",
//     visual: "lines",
//   },
//   {
//     key: "stripeErp",
//     slug: "stripe-erp",
//     category: "integration",
//     visual: "nodes",
//   },
// ] as const;

export const services = [
  {
    title: "Custom Web Applications",
    icon: "01",
    description: "Purpose-built systems that remove operational bottlenecks and fit the way your team actually works.",
    useCases: ["Internal dashboards", "Client portals", "Operational tools"],
  },
  {
    title: "SaaS Development",
    icon: "02",
    description: "From product definition to production, we engineer reliable software that can grow with its customers.",
    useCases: ["Multi-tenant platforms", "Subscription workflows", "Product MVPs"],
  },
  {
    title: "Business Automation",
    icon: "03",
    description: "Turn repetitive work into dependable processes that save time, reduce errors, and keep your team moving.",
    useCases: ["Workflow scripts", "Document processing", "Scheduled operations"],
  },
  {
    title: "API & System Integration",
    icon: "04",
    description: "Connect the systems your business depends on and create a clear, consistent flow of information.",
    useCases: ["Custom APIs", "Legacy modernization", "Third-party orchestration"],
  },
  {
    title: "DevOps & Deployment",
    icon: "05",
    description: "Practical infrastructure and delivery practices that make releases safer, faster, and easier to operate.",
    useCases: ["CI/CD pipelines", "Cloud infrastructure", "Monitoring setup"],
  },
  {
    title: "Maintenance & Support",
    icon: "06",
    description: "Ongoing technical partnership to keep software secure, performant, and aligned with changing needs.",
    useCases: ["Security updates", "Bug fixes", "Continuous improvements"],
  },
];

export const cases = [
  {
    slug: "idx-stocks-dashboard",
    title: "IDX Stocks Dashboard",
    category: "Custom App",
    summary: "A dashboard for exploring and monitoring Indonesian stock market data.",
    description: "A focused dashboard experience for working with IDX stock information in one place.",
    visual: "bars",
    problem: "Stock-market information is easier to evaluate when the relevant data can be reviewed in a single, structured workspace.",
    solution: "Forge Studio built a dedicated dashboard interface for exploring and monitoring IDX stock data.",
    engineering:
      "The project is structured as a data-focused web application, designed around readable information hierarchy and repeatable dashboard views.",
    scope: [
      "Interactive market terminal with IHSG, gainers, losers, and active movers",
      "Five-year candlestick charts with SMA, EMA, RSI, MACD, Bollinger Bands, ATR, and volume analysis",
      "Annual and quarterly financial statements with valuation and performance ratios",
      "Fundamental screener, watchlists, and Google News RSS integration",
      "Quant and multi-agent AI paper-trading research with strategy-performance analytics",
      "Automated Telegram market briefs and operations-health monitoring",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "FastAPI",
      "Python 3.12+",
      "PostgreSQL 16+",
      "lightweight-charts",
      "Server-Sent Events",
    ],
    repositoryUrl: "https://github.com/Mqdd27/idx-stocks-dashboard",
    facts: [
      "Supports 840+ IDX-listed companies",
      "Self-hosted deployment with systemd services and timers",
      "Market data and paper-trading outcomes persist in PostgreSQL",
      "Browser UI communicates with the FastAPI backend over HTTP and SSE",
    ],
  },
  {
    slug: "ai-summarizer",
    title: "Summarizer Powered by AI Models",
    category: "SaaS",
    summary: "An AI-assisted application for turning longer content into concise summaries.",
    description: "A practical summarization workflow powered by AI models.",
    visual: "lines",
    problem: "Long-form content takes time to review, especially when the reader only needs the essential points.",
    solution: "Forge Studio built a focused application that uses AI models to generate concise summaries from supplied content.",
    engineering:
      "The product centers on a simple input-to-summary flow so the AI capability remains useful without adding unnecessary complexity.",
    scope: ["AI-powered summarization", "Content input workflow", "Readable summary output"],
    stack: [],
    facts: [],
  },
  {
    slug: "odoo-wage-overtime-module",
    title: "Odoo Custom Module for Wage and Overtime",
    category: "Automation",
    summary: "A custom Odoo module for supporting wage and overtime workflows.",
    description: "Business workflow customization within an Odoo environment.",
    visual: "nodes",
    problem: "Wage and overtime processes need to reflect the operational rules a business already uses.",
    solution: "Forge Studio developed a custom Odoo module to support wage and overtime processes within the existing ERP workflow.",
    engineering:
      "The module extends Odoo with a workflow-specific implementation instead of requiring teams to work around a generic process.",
    scope: ["Custom Odoo module", "Wage workflow support", "Overtime workflow support"],
    stack: [],
    facts: [],
  },
  {
    slug: "stock-opname-application",
    title: "Stock Opname Application",
    category: "Custom App",
    summary: "An application for supporting structured stock-opname activities.",
    description: "A dedicated workflow for recording and reviewing physical stock counts.",
    visual: "bars",
    problem: "Physical stock counts are easier to manage when recording, review, and reconciliation follow one clear workflow.",
    solution: "Forge Studio built a stock-opname application to support structured inventory-counting activities.",
    engineering: "The application focuses on clear operational steps so stock-count information can be captured and reviewed consistently.",
    scope: ["Stock-count workflow", "Inventory recording", "Review-ready operational data"],
    stack: [],
    facts: [],
  },
];
//   { key: "customWeb", icon: "01" },
//   { key: "saas", icon: "02" },
//   { key: "automation", icon: "03" },
//   { key: "integration", icon: "04" },
//   { key: "devops", icon: "05" },
//   { key: "maintenance", icon: "06" },
// ] as const;

// export const cases = [
//   { key: "nexus", slug: "nexus-analytics", category: "saas", visual: "bars" },
//   { key: "globalFreight", slug: "globalfreight", category: "customApp", visual: "lines" },
//   { key: "stripeErp", slug: "stripe-erp", category: "integration", visual: "nodes" },
// ] as const;
// data/site.ts
export type ProductStatus = "beta" | "comingSoon" | "live";

export interface ProductItem {
  readonly key: string;
  readonly name: string;
  readonly status: ProductStatus;
}

export const products: readonly ProductItem[] = [
  { key: "growpos", name: "GrowPOS", status: "beta" },
  { key: "forgeInventory", name: "Forge Inventory", status: "comingSoon" },
  { key: "signalDesk", name: "Signal Desk", status: "comingSoon" },
];
export const insights = [
  { key: "overEngineering", slug: "over-engineering", date: "Oct 12, 2024" },
  { key: "professionalInterface", slug: "designing-for-calm", date: "Sep 15, 2024" },
  { key: "legacyMonolith", slug: "legacy-migrations", date: "Aug 30, 2024" },
] as const;
