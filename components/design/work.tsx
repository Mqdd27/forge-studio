import { PageShell } from "@/components/ui/page-shell";
import { DesignText as T } from "@/components/ui/design-text";
import { WorkList } from "@/components/work-list";
import { ProjectCTA } from "@/components/design/project-cta";

export function WorkDesign() {
  return (
    <PageShell>
      <section className="border-b border-[#111111] px-5 pt-12 pb-14 md:px-12 md:pt-20 md:pb-20">
        <p data-hero-reveal className="eyebrow text-[#A93100]">
          <T>{"// Project archive & system engineering [ 2024 – 2026 ]"}</T>
        </p>
        <h1
          data-hero-reveal
          className="mt-3 font-[family-name:var(--font-geist-sans)] text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:text-7xl"
        >
          <T>{"RisenDev archive deployment directory"}</T>
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          <p data-hero-reveal className="max-w-[60ch] text-base leading-relaxed text-[#5C4037] md:col-span-7 md:text-lg">
            <T>
              {
                "Portfolio & systems built for real needs — from warehouse stock management, service booking workflows, multi-branch POS apps, to executive analytics dashboards. Every piece solves a concrete operational problem."
              }
            </T>
          </p>
          <div data-hero-reveal className="md:col-span-5">
            <div className="grid grid-cols-3 gap-px border border-[#111111] bg-[#111111]">
              {[
                ["100%", "Deployed systems"],
                ["100%", "Tailor-made architecture"],
                ["0", "Templates or boilerplate"],
              ].map(([v, l]) => (
                <div key={l} className="bg-[#FFFDF7] p-4 text-center">
                  <p className="font-[family-name:var(--font-geist-sans)] text-2xl font-semibold tracking-tight md:text-3xl">{v}</p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.06em] uppercase">
                    <T>{l}</T>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="pt-8">
        <WorkList />
      </div>
      <ProjectCTA />
    </PageShell>
  );
}
