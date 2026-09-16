import { PageShell } from "@/components/ui/page-shell";
import { Link } from "@/i18n/navigation";
import { DesignText as T } from "@/components/ui/design-text";
import { ProjectCTA } from "@/components/design/project-cta";

const blocks = [
  {
    n: "01",
    tag: "Website",
    title: "Company Profile & Business Websites",
    ideal:
      "Company profiles, personal brands, studio portfolios, service businesses, high-converting landing pages, & visual product catalogs.",
    desc: "For businesses that want to look more professional, be easy to find, and have an official place to explain products or services with reputational weight.",
    items: [
      "Absolute responsive design",
      "Contact & lead forms",
      "WhatsApp API integration",
      "Dedicated service pages",
      "Structured product catalog",
      "Lightweight blog & CMS",
      "Technical SEO foundation",
      "Domain & hosting setup",
    ],
    metric: "Sub-0.8s render performance with optimal Core Web Vitals scores.",
    cta: "Start this website",
  },
  {
    n: "02",
    tag: "System",
    title: "Business Systems & Internal Tools",
    ideal: "Inventory warehouses, reservation systems, custom POS, multi-tier approvals, finance validation, & operational logs.",
    desc: "For businesses still doing a lot of repetitive work manually. Systems are built from processes actually used in the field — not rigid templates forcing you to change how you work.",
    items: [
      "Operational dashboard",
      "Employee access rights",
      "Inventory recording",
      "Cashier & POS reconciliation",
      "Real-time executive reports",
      "Audit activity logs",
    ],
    metric: "Field workflow audit → data-relation blueprint → modular ready-to-use implementation.",
    cta: "Design a system",
  },
  {
    n: "03",
    tag: "Development",
    title: "Existing System Development",
    ideal: "Slow legacy software, fragmented codebases, stuck payment integration modules, or outdated UI.",
    desc: "Already have an app that needs developing? RisenDev continues and restructures existing systems without throwing away your code investment from scratch.",
    items: [
      "New feature development",
      "Bug & error cleanup",
      "UI/UX interface upgrade",
      "REST & webhook API integration",
      "Payment gateway (Midtrans/Xendit)",
      "Database query optimization",
      "Speed & caching boost",
      "Architecture refactoring",
    ],
    metric: "Codebase directory and data-security analysis before any code intervention.",
    cta: "Audit an existing app",
  },
  {
    n: "04",
    tag: "Support",
    title: "Maintenance & Deployment",
    ideal: "24/7 uptime monitoring, automatic SSL certificate renewal, offsite data backup, and routine security patches.",
    desc: "RisenDev also stays with you after the app is finished — guaranteeing server infrastructure stability, emergency incident handling, and periodic care so the system is never neglected as your business grows.",
    items: [
      "Deployment pipeline",
      "VPS / bare-metal setup",
      "Domain routing & SSL",
      "Server hardening & firewall",
      "Automated data backup",
      "Incident response",
    ],
    metric: "Systems stay stable, backed up, and patched while you focus on the business.",
    cta: "Discuss maintenance",
  },
] as const;

export function ServicesDesign() {
  return (
    <PageShell>
      <section className="border-b border-[#111111] px-5 pt-12 pb-14 md:px-12 md:pt-20 md:pb-20">
        <p data-hero-reveal className="eyebrow text-[#A93100]">
          <T>{"[ 03 // Service index ]"}</T>
        </p>
        <h1
          data-hero-reveal
          className="mt-3 max-w-[16ch] font-[family-name:var(--font-geist-sans)] text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:text-7xl"
        >
          <T>{"RisenDev engineering"}</T>
        </h1>
        <p data-hero-reveal className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#5C4037] md:text-lg">
          <T>
            {
              "Websites & apps built to your business needs. From simple websites to more complex operational systems. Without fictional complications."
            }
          </T>
        </p>
      </section>

      {blocks.map((b) => (
        <section key={b.n} className="border-b border-[#111111] px-5 py-14 last:border-b-0 md:px-12 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-[family-name:var(--font-geist-sans)] text-6xl font-semibold tracking-tight text-[#111111] md:text-7xl">
                {b.n}
              </p>
              <p className="eyebrow mt-2 text-[#A93100]">{b.tag}</p>
              <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
                <T>{b.title}</T>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="border border-[#111111] bg-[#FFFDF7] p-5 md:p-6">
                <p className="eyebrow text-[#5F5E5E]">
                  <T>{"Ideal for"}</T>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed">
                  <T>{b.ideal}</T>
                </p>
              </div>
              <p className="mt-5 max-w-[65ch] text-[15px] leading-relaxed text-[#5F5E5E]">
                <T>{b.desc}</T>
              </p>
              <ul className="mt-6 grid list-none grid-cols-1 gap-px border border-[#111111] bg-[#111111] p-0 sm:grid-cols-2">
                {b.items.map((item) => (
                  <li key={item} className="bg-[#F6F3EC] px-4 py-3 text-sm font-medium">
                    <T>{item}</T>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-4 border-t border-[#111111] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="eyebrow text-[#5F5E5E]">
                  <T>{"// Metric"}</T> — <T>{b.metric}</T>
                </p>
                <Link href="/start-a-project" className="btn-forge shrink-0">
                  <T>{b.cta}</T> <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-[#111111] bg-[#111111] px-5 py-14 text-[#F3F0E9] md:px-12 md:py-20">
        <p className="eyebrow text-[#FF4F00]">
          <T>{"[ Delivery principles ]"}</T>
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:text-4xl">
          <T>{"Built with care."}</T>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-px border border-[#F3F0E9] bg-[#F3F0E9] sm:grid-cols-3">
          {[
            ["Clear scope", "What gets built, why it matters, and how it supports daily work — written down before code."],
            ["Maintainable apps", "Modular structure, readable data relations, and handover docs your team can actually use."],
            ["Deployment & support", "Production setup, backups, monitoring, and a 30-day hypercare window after launch."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#111111] p-6">
              <h3 className="font-[family-name:var(--font-geist-sans)] text-lg font-medium tracking-tight">
                <T>{title}</T>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B9B5AE]">
                <T>{desc}</T>
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProjectCTA />
    </PageShell>
  );
}

export function ServiceCards() {
  const cards = [
    ["01", "Company Profile & Business Websites", "Professional high-performance websites presenting business strengths and credibility."],
    ["02", "Business Systems & Internal Tools", "Custom apps for stock, booking, attendance, workflow tracking, and invoicing."],
    ["03", "Existing System Development", "Modernize legacy apps, add custom features, integrate payments and couriers."],
    ["04", "Maintenance & Deployment", "Monitoring, SSL, backups, and security patches after launch."],
  ] as const;
  return (
    <div className="mt-8 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] min-[540px]:grid-cols-2 lg:grid-cols-4">
      {cards.map(([n, title, desc]) => (
        <article key={n} className="flex flex-col bg-[#FFFDF7] p-6">
          <span className="eyebrow text-[#A93100]">[ {n} ]</span>
          <h3 className="mt-3 font-[family-name:var(--font-geist-sans)] text-lg font-medium tracking-tight">
            <T>{title}</T>
          </h3>
          <p className="mt-2 mb-5 text-sm leading-relaxed text-[#5F5E5E]">
            <T>{desc}</T>
          </p>
          <Link
            href="/services"
            className="mt-auto inline-flex min-h-11 items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#A93100] uppercase"
          >
            <T>{"Learn more"}</T> <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
