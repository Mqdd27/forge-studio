// data/site.ts

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://risendev.dev";

export const cases = [
  {
    key: "idxStocks",
    slug: "idx-stocks-dashboard",
    status: "active",

    images: [],

    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "FastAPI",
      "Python 3.12+",
      "Rust",
      "Tauri",
      "PostgreSQL 16+",
      "lightweight-charts",
      "Server-Sent Events",
    ],

    contentCount: { challenges: 3, solutions: 4, capabilities: 6, engineering: 5 },
  },

  {
    key: "growpos",
    slug: "growpos-saas-pos",
    status: "development",

    images: [
      "/img/portofolio/growpos/1.png",
      "/img/portofolio/growpos/2.png",
      "/img/portofolio/growpos/3.png",
      "/img/portofolio/growpos/4.png",
      "/img/portofolio/growpos/5.png",
    ],

    stack: [
      "Laravel 13",
      "PHP",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "MySQL 8",
      "Laravel Sanctum",
      "Spatie Laravel Permission",
      "Maatwebsite Excel",
      "Midtrans Core API",
      "Google OAuth",
      "Vite",
    ],

    contentCount: { challenges: 3, solutions: 5, capabilities: 7, engineering: 6 },
  },

  {
    key: "aiSummarizer",
    slug: "ai-summarizer",
    status: "completed",

    images: [],

    stack: ["Flask", "FastAPI", "Python 3.12+", "SQLite"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },

  {
    key: "odooWageOvertime",
    slug: "odoo-wage-overtime-module",
    status: "completed",

    images: [],

    stack: ["Odoo 14", "PostgreSQL"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },

  {
    key: "stockOpname",
    slug: "stock-opname-application",
    status: "completed",

    images: [],

    stack: ["Laravel 11", "PostgreSQL", "Odoo 14"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },
] as const;

export type PortfolioCase = (typeof cases)[number];
