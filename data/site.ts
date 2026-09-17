// data/site.ts

// Localized copy for every case lives in messages/{en,id}.json under `Site.cases`.

// `scope` and `facts` stay here only as the item count/order for the
// translated entries; move them into a generated index if they ever drift again.

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://risendev.dev";

export const cases = [
  {
    key: "idxStocks",

    slug: "idx-stocks-dashboard",

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
      "Rust",
      "Tauri",
      "PostgreSQL 16+",
      "lightweight-charts",
      "Server-Sent Events",
    ],

    facts: [
      "Supports 840+ IDX-listed companies",
      "Available in Desktop App or Self-Hosted",
      "Integrated with AI Multiple Providers using 9Router to Analyze Market Data",
      "Hermes Agent Compatible to send stocks data (performance, signals, etc) daily, weekly, or yearly",
      "Browser UI communicates with the FastAPI backend over HTTP and SSE",
    ],
  },

  {
    key: "growpos",

    slug: "growpos-saas-pos",

    scope: [
      "Multi-tenant SaaS point-of-sale and business operations platform",
      "Product, category, variant, inventory, material, and supplier management",
      "Cash and Midtrans-based digital payment workflows with partial payment support",
      "Cashier shifts, cash ledger, operational expenses, returns, and refunds",
      "Customer, employee, role, loyalty, discount, and subscription management",
      "Business-specific kitchen and service-job operational workflows",
      "Business dashboard, reporting, activity logs, and spreadsheet exports",
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

    facts: [
      "Built as a multi-tenant SaaS application",
      "Supports retail, grocery, food, service, and mixed business configurations",
      "Includes product and variant-level inventory management with stock movement history",
      "Supports cash payments, partial payments, Midtrans-based digital payments, returns, and cash refunds",
      "Includes cashier shift reconciliation and an operational cash ledger",
      "Provides kitchen preparation workflows for food businesses and service-job tracking for service businesses",
      "Includes subscription, billing, role-based access control, reporting, data export, and scheduled database backup",
    ],
  },

  {
    key: "aiSummarizer",

    slug: "ai-summarizer",

    scope: ["AI-powered summarization", "Content input workflow", "Readable summary output"],

    stack: ["Flask", "FastAPI", "Python 3.12+", "SQLite"],

    facts: ["Self-hosted deployment", "Integrated with multiple AI Providers with 9Router", "Local Model compatible using Ollama"],
  },

  {
    key: "odooWageOvertime",

    slug: "odoo-wage-overtime-module",

    scope: ["Custom Odoo module", "Wage workflow support", "Overtime workflow support"],

    stack: ["Odoo 14", "Postgresql"],

    facts: ["Fully Custom Module for Wage Monitoring and Approval"],
  },

  {
    key: "stockOpname",

    slug: "stock-opname-application",

    scope: ["Stock-count workflow", "Inventory recording", "Review-ready operational data"],

    stack: ["Laravel 11", "Postgresql", "Odoo 14"],

    facts: ["Integrated with Odoo 14", "Import and Export Compatible with Odoo 14 Inventory"],
  },
] as const;
