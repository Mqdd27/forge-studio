// data/site.ts

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://risendev.dev";

export const cases = [
  {
    key: "idxStocks",
    slug: "idx-stocks-dashboard",
    status: "active",

    images: [
      "/img/portofolio/idx-stocks/main.png",
      "/img/portofolio/idx-stocks/auto-trade.png",
      "/img/portofolio/idx-stocks/foreign-flow.png",
      "/img/portofolio/idx-stocks/calendar.png",
    ],

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

    images: [
      "/img/portofolio/summarizer/1.png",
      "/img/portofolio/summarizer/2.png",
    ],

    stack: ["Flask", "FastAPI", "Python 3.12+", "SQLite"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },

  {
    key: "odooWageOvertime",
    slug: "odoo-wage-overtime-module",
    status: "completed",

    images: [
      "/img/portofolio/odoo-wage/1.png",
      "/img/portofolio/odoo-wage/2.png",
    ],

    stack: ["Odoo 14", "PostgreSQL"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },

  {
    key: "stockOpname",
    slug: "stock-opname-application",
    status: "completed",

    images: [
      "/img/portofolio/stock-opname/1.png",
      "/img/portofolio/stock-opname/2.png",
      "/img/portofolio/stock-opname/3.png",
      "/img/portofolio/stock-opname/4.png",
    ],

    stack: ["Laravel 11", "PostgreSQL", "Odoo 14"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },

  {
    key: "board",
    slug: "board-application",
    status: "completed",

    images: [
      "/img/portofolio/board/1.png",
      "/img/portofolio/board/2.png",
      "/img/portofolio/board/3.png",
      "/img/portofolio/board/4.png",
    ],

    stack: ["NextJs 16", "React", "Taiwind CSS", "TypeScript", "Postgresql"],

    contentCount: { challenges: 2, solutions: 3, capabilities: 3, engineering: 3 },
  },
] as const;

export type PortfolioCase = (typeof cases)[number];
