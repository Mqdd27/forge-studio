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
    metric: "Performance, responsiveness, and technical SEO are considered from the start.",
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
    ideal: "Deployment, backups, SSL, monitoring, and routine maintenance based on project needs.",
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
      <section className="w-full bg-primary px-margin py-space-lg text-on-primary md:px-margin-tablet md:py-space-xl lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-md">
          <div className="flex items-center justify-between border-b border-on-surface/20 pb-space-sm">
            <span className="font-label-sm font-semibold tracking-widest uppercase">
              <T>{"[03 // SERVICES INDEX]"}</T>
            </span>
            <span className="font-label-sm font-semibold tracking-widest uppercase">RISENDEV ENGINEERING</span>
          </div>
          <div className="grid grid-cols-1 items-end gap-gutter-desktop pt-4 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile leading-[.95] font-semibold tracking-tight uppercase md:font-display-lg">
                <T>{"Websites and applications built around what your business actually needs."}</T>
              </h1>
            </div>
            <div className="pb-2 lg:col-span-3">
              <p className="text-body-lg font-body-lg leading-relaxed font-medium">
                <T>{"From a simple website to a more complex operational system. No invented complexity."}</T>
              </p>
            </div>
          </div>
        </div>
      </section>

      {blocks.map((b) => (
        <section key={b.n} className="w-full bg-surface px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter-desktop border-t border-on-surface py-12 lg:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-label-md font-semibold tracking-widest text-primary uppercase">
                {b.n} / {b.tag}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
                <T>{b.title}</T>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="border border-[#1c1c18] bg-white p-5 md:p-6">
                <p className="eyebrow text-[#5c4037]">
                  <T>{"Ideal for"}</T>
                </p>
                <p className="mt-2 text-[15px] leading-relaxed">
                  <T>{b.ideal}</T>
                </p>
              </div>
              <p className="mt-5 max-w-[65ch] text-[15px] leading-relaxed text-[#5c4037]">
                <T>{b.desc}</T>
              </p>
              <ul className="mt-6 grid list-none grid-cols-1 gap-px border border-[#1c1c18] bg-[#31312c] p-0 sm:grid-cols-2">
                {b.items.map((item) => (
                  <li key={item} className="bg-[#f6f3ec] px-4 py-3 text-sm font-medium">
                    <T>{item}</T>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-4 border-t border-[#1c1c18] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="eyebrow text-[#5c4037]">
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

      <section className="border-t border-[#1c1c18] bg-[#31312c] px-5 py-14 text-[#f3f0e9] md:px-12 md:py-20">
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
            ["Deployment & support", "Production setup, backups, monitoring, and post-launch support based on the agreed scope."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#31312c] p-6">
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
