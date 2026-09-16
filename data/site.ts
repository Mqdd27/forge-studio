// data/site.ts

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://risendev.dev";

/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    key: "customWeb",
    icon: "code",
    title: "Custom Web Development",
    description: "Web applications designed around your requirements and workflows.",
    useCases: ["Admin dashboards", "Customer portals", "Management applications", "Custom workflows"],
  },
  {
    key: "businessSystems",
    icon: "inventory_2",
    title: "Business Systems",
    description: "Bring operational data and everyday processes into one manageable web system.",
    useCases: ["Inventory & warehouse", "Booking & POS", "Reporting", "Approval workflows"],
  },
  {
    key: "existingSystems",
    icon: "sync",
    title: "Existing System Development",
    description: "Continue and improve your existing application with new features, fixes, and integrations.",
    useCases: ["Feature development", "Bug fixes", "API & payment integration", "Performance improvements"],
  },
  {
    key: "maintenance",
    icon: "cloud",
    title: "Maintenance & Deployment",
    description: "Get your application into production and keep it supported after launch.",
    useCases: ["Deployment & server setup", "Domain & SSL", "Backup & monitoring", "Ongoing improvements"],
  },
] as const;

/* =========================================================
   WORK / CASE STUDIES
========================================================= */

export const cases = [
  {
    key: "idxStocks",
    slug: "idx-stocks-dashboard",

    title: "IDX Stocks Dashboard",
    category: "customApp",

    summary: "A dashboard for exploring and monitoring Indonesian stock market data.",

    description:
      "A focused dashboard experience for working with IDX stock information in one place. Available for Web Based and Application Based",

    visual: "bars",

    problem: "Stock-market information is easier to evaluate when the relevant data can be reviewed in a single, structured workspace.",

    solution: "RisenDev built a dedicated dashboard interface for exploring and monitoring IDX stock data.",

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
      "Rust",
      "Tauri",
      "PostgreSQL 16+",
      "lightweight-charts",
      "Server-Sent Events",
    ],

    repositoryUrl: "https://github.com/Mqdd27/idx-stocks-dashboard",

    facts: [
      "Supports 840+ IDX-listed companies",
      "Available in Desktop App or Self-Hosted",
      "Integrated with AI Multiple Providers using 9Router to Analyze Market Data",
      "Hermes Agent Compatible to send stocks data (performance, signals, etc) daily, weekly, or yearly",
      "Browser UI communicates with the FastAPI backend over HTTP and SSE",
    ],
  },

  {
    key: "aiSummarizer",
    slug: "ai-summarizer",

    title: "Summarizer Powered by AI Models",
    category: "saas",

    summary: "An AI-assisted application for turning longer content into concise summaries.",

    description: "A practical summarization workflow powered by AI models.",

    visual: "lines",

    problem: "Long-form content takes time to review, especially when the reader only needs the essential points.",

    solution: "RisenDev built a focused application that uses AI models to generate concise summaries from supplied content.",

    engineering:
      "The product centers on a simple input-to-summary flow so the AI capability remains useful without adding unnecessary complexity.",

    scope: ["AI-powered summarization", "Content input workflow", "Readable summary output"],

    stack: ["Flask", "FastAPI", "Python 3.12+", "SQLite"],

    repositoryUrl: "https://github.com/Mqdd27/summarizer",

    facts: ["Self-hosted deployment", "Integrated with multiple AI Providers with 9Router", "Local Model compatible using Ollama"],
  },

  {
    key: "odooWageOvertime",
    slug: "odoo-wage-overtime-module",

    title: "Odoo Custom Module for Wage and Overtime",
    category: "automation",

    summary: "A custom Odoo module for supporting wage and overtime workflows.",

    description: "Business workflow customization within an Odoo environment.",

    visual: "nodes",

    problem: "Wage and overtime processes need to reflect the operational rules a business already uses.",

    solution: "RisenDev developed a custom Odoo module to support wage and overtime processes within the existing ERP workflow.",

    engineering:
      "The module extends Odoo with a workflow-specific implementation instead of requiring teams to work around a generic process.",

    scope: ["Custom Odoo module", "Wage workflow support", "Overtime workflow support"],

    stack: ["Odoo 14", "Postgresql"],

    repositoryUrl: null,

    facts: ["Fully Custom Module for Wage Monitoring and Approval"],
  },

  {
    key: "stockOpname",
    slug: "stock-opname-application",

    title: "Stock Opname Application",
    category: "customApp",

    summary: "An application for supporting structured stock-opname activities.",

    description: "A dedicated workflow for recording and reviewing physical stock counts.",

    visual: "bars",

    problem: "Physical stock counts are easier to manage when recording, review, and reconciliation follow one clear workflow.",

    solution: "RisenDev built a stock-opname application to support structured inventory-counting activities.",

    engineering: "The application focuses on clear operational steps so stock-count information can be captured and reviewed consistently.",

    scope: ["Stock-count workflow", "Inventory recording", "Review-ready operational data"],

    stack: ["Laravel 11", "Postgresql", "Odoo 14"],

    repositoryUrl: null,

    facts: ["Integrated with Odoo 14", "Import and Export Compatible with Odoo 14 Inventory"],
  },
] as const;
