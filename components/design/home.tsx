import { PageShell } from "@/components/ui/page-shell";
import { workCardData } from "@/data/work-presentation";
import { cases } from "@/data/site";
import { WorkCard } from "@/components/work-card";
import { Link } from "@/i18n/navigation";
import { DesignText as T } from "@/components/ui/design-text";
import { ProjectCTA } from "@/components/design/project-cta";

const problems = [
  [
    "Scattered data",
    "Information spread across WhatsApp chats, stray Excel files, and piles of printed invoices with no single source of truth.",
  ],
  [
    "Hard to monitor operations",
    "Warehouse stock, customer order status, cash reports, or team assignments are not visible on one integrated screen.",
  ],
  ["Disconnected systems", "Website and bookkeeping don't talk to each other. Staff retype the same work manually, over and over."],
  [
    "Tangled manual bureaucracy",
    "Many approval flows and data recaps could be shortened to a single click with an automated digital system.",
  ],
] as const;

const phases = [
  ["01", "Tell us the process", "We study the workflows, bottlenecks, and team needs currently running in the field."],
  ["02", "Define the system", "Features, database relations, and interfaces designed precisely to need — no bloatware."],
  ["03", "Build & test", "The app is programmed modularly, verified with the operations team, and refined."],
  ["04", "Ready to use", "The system is deployed to production, direct training is given, and it's ready to lift business performance."],
] as const;

export function HomeDesign() {
  return (
    <PageShell>
      {/* HERO — asymmetric editorial */}
      <section className="border-b border-[#111111] px-5 pt-12 pb-14 md:px-12 md:pt-20 md:pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-12">
            <p data-hero-reveal className="eyebrow text-[#A93100]">
              <T>{"RisenDev — Independent Digital Studio"}</T>
            </p>
            <p data-hero-reveal className="eyebrow mt-2 text-[#5F5E5E]">
              <T>{"Indonesia — Available remotely [ 2026 ]"}</T>
            </p>
          </div>
          <div className="md:col-span-10">
            <h1
              data-hero-reveal
              className="font-[family-name:var(--font-geist-sans)] text-5xl leading-[0.95] font-semibold tracking-tight uppercase md:text-8xl"
            >
              <T>{"Websites & business apps that are neat, clear, and ready to use."}</T>
            </h1>
          </div>
          <div className="md:col-span-5 md:col-start-1">
            <p data-hero-reveal className="max-w-[45ch] text-base leading-relaxed text-[#5C4037] md:text-lg">
              <T>{"RisenDev helps businesses build websites, internal systems, and web apps based on real needs — not templates."}</T>
            </p>
            <div data-hero-reveal className="mt-6 flex flex-wrap gap-3">
              <Link href="/work" className="btn-ink">
                <T>{"View Our Work"}</T> <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/start-a-project" className="btn-forge">
                <T>{"Start a Project"}</T> <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-8">
            <div className="border border-[#111111] bg-[#FFFDF7] p-5">
              <p className="eyebrow text-[#A93100]">
                <T>{"[ Our approach ]"}</T>
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.06em] uppercase">
                <T>{"Business-focused technology partner"}</T>
              </p>
              <p className="mt-1 text-sm text-[#5F5E5E]">
                <T>{"Ready to support your daily operations without friction."}</T>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — CONSTRUCTION PRINCIPLE */}
      <section className="border-b border-[#111111] px-5 py-14 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-[#A93100]">
              <T>{"[ What RisenDev builds / 01 ]"}</T>
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:text-4xl">
              <T>{"Construction principle"}</T>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-[family-name:var(--font-geist-sans)] text-xl leading-snug font-medium tracking-tight md:text-2xl">
              <T>{"Not generic factory software. We design precision data architecture that matches your real internal flow."}</T>
            </p>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-[#5F5E5E]">
              <T>
                {
                  "From company profile websites, cashier apps, stock systems, booking, dashboards, to developing systems already in operation."
                }
              </T>
            </p>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-[#5F5E5E]">
              <T>{"We remove messy spreadsheets, cut duplicate input, and give owners full control over daily operational data."}</T>
            </p>
          </div>
        </div>
      </section>

      {/* 02 — PROBLEMS */}
      <section className="border-b border-[#111111] bg-[#F6F3EC] px-5 py-14 md:px-12 md:py-20">
        <p className="eyebrow text-[#A93100]">
          <T>{"[ Problems that keep recurring / 02 ]"}</T>
        </p>
        <div className="mt-3 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:col-span-8 md:text-5xl">
            <T>{"Still running the business on chats, spreadsheets, and manual records?"}</T>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(([title, desc], i) => (
            <div key={title} className="bg-[#FFFDF7] p-6">
              <p className="eyebrow text-[#A93100]">[0{i + 1}]</p>
              <h3 className="mt-3 font-[family-name:var(--font-geist-sans)] text-lg font-medium tracking-tight">
                <T>{title}</T>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5E5E]">
                <T>{desc}</T>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE FLOW */}
      <section className="border-b border-[#111111] px-5 py-14 md:px-12 md:py-20">
        <p className="eyebrow text-[#A93100]">
          <T>{"[ Digital transition / Architecture flow ]"}</T>
        </p>
        <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:col-span-7 md:text-4xl">
            <T>{"From manual process to a system that's easier to manage."}</T>
          </h2>
          <p className="text-[15px] leading-relaxed text-[#5F5E5E] md:col-span-5">
            <T>
              {
                "Migration doesn't have to stop operations. We dissect the existing workflow chain and move it to modular software step by step."
              }
            </T>
          </p>
        </div>
        <ol className="mt-10 grid list-none grid-cols-1 gap-px border border-[#111111] bg-[#111111] p-0 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map(([n, title, desc]) => (
            <li key={n} className="bg-[#F6F3EC] p-6">
              <p className="eyebrow text-[#A93100]">
                <T>{"Phase"}</T> {n}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-geist-sans)] text-lg font-medium tracking-tight">
                <T>{title}</T>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5E5E]">
                <T>{desc}</T>
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 — SERVICES INDEX */}
      <section className="border-b border-[#111111] px-5 py-14 md:px-12 md:py-20">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-[#A93100]">
              <T>{"[ Services / 03 ]"}</T>
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:text-4xl">
              <T>{"What RisenDev can help build."}</T>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/services"
              className="text-xs font-semibold tracking-[0.06em] text-[#A93100] uppercase underline underline-offset-4"
            >
              <T>{"View all services"}</T> →
            </Link>
          </div>
        </div>
        <div className="mt-8">
          {[
            [
              "01",
              "Company Profile & Business Websites",
              "High-performance professional websites presenting business strengths, product catalogs, and credibility in clients' eyes.",
            ],
            [
              "02",
              "Business Systems & Internal Tools",
              "Customized apps for multi-location stock, booking reservations, staff attendance, workflow tracking, invoicing, and profit-and-loss recaps.",
            ],
            [
              "03",
              "Existing System Development",
              "Legacy app modernization, custom feature additions, local payment gateway integration, courier integration, and performance fixes.",
            ],
            [
              "04",
              "Maintenance & Deployment",
              "24/7 uptime monitoring, automatic SSL renewal, offsite data backup, and routine security patches.",
            ],
          ].map(([n, title, desc]) => (
            <Link
              key={n}
              href="/services"
              className="index-row group grid grid-cols-1 gap-2 px-2 py-6 md:grid-cols-12 md:items-baseline md:px-4"
            >
              <span className="eyebrow index-accent text-[#A93100] md:col-span-1">[ {n} ]</span>
              <span className="font-[family-name:var(--font-geist-sans)] text-xl font-medium tracking-tight md:col-span-5 md:text-2xl">
                <T>{title}</T>
              </span>
              <span className="index-muted text-sm leading-relaxed text-[#5F5E5E] md:col-span-5">
                <T>{desc}</T>
              </span>
              <span aria-hidden="true" className="text-lg md:col-span-1 md:text-right">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-b border-[#111111] bg-[#F6F3EC] px-5 py-14 md:px-12 md:py-20">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-[#A93100]">
              <T>{"[ Selected work ]"}</T>
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:text-4xl">
              <T>{"Systems built for real needs."}</T>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/work" className="text-xs font-semibold tracking-[0.06em] text-[#A93100] uppercase underline underline-offset-4">
              <T>{"View all case studies"}</T> →
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] min-[600px]:grid-cols-2 lg:grid-cols-3">
          {cases
            .filter((x) => ["idxStocks", "odooWageOvertime", "stockOpname"].includes(x.key))
            .map((item, i) => (
              <WorkCard key={item.key} item={workCardData(item)} index={i} />
            ))}
        </div>
      </section>

      <ProjectCTA />
    </PageShell>
  );
}
