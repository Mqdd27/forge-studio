"use client";

import { useLocale } from "next-intl";

import { PageShell } from "@/components/ui/page-shell";
import { WorkList } from "@/components/work-list";
import { ProjectCTA } from "@/components/design/project-cta";

import { cases } from "@/data/site";

export function WorkDesign() {
  const id = useLocale() === "id";

  return (
    <PageShell>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#F6F3EC] px-5 pt-12 pb-16 text-[#1C1C18] md:px-10 md:pt-16 md:pb-20 lg:px-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-[1440px]">
          {/* eyebrow */}

          <div className="flex items-center justify-between border-b border-black/15 pb-4">
            <span className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
              // {id ? "Portofolio" : "Selected Work"}
            </span>

            <span className="text-[10px] font-semibold tracking-[0.14em] text-black/35 uppercase">
              {String(cases.length).padStart(2, "0")} {id ? "Proyek" : "Projects"}
            </span>
          </div>

          {/* main hero */}

          <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:items-end lg:pt-16">
            <div className="lg:col-span-8">
              <h1 className="max-w-[1000px] text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.86] font-semibold tracking-[-0.065em] uppercase">
                {id ? (
                  <>
                    Karya
                    <br />
                    pilihan.
                  </>
                ) : (
                  <>
                    Selected
                    <br />
                    work.
                  </>
                )}
              </h1>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-lg leading-[1.5] font-medium tracking-[-0.02em] md:text-xl">
                {id
                  ? "Kumpulan aplikasi web, sistem bisnis, dan solusi custom yang dibangun untuk kebutuhan operasional nyata."
                  : "A selection of web applications, business systems, and custom solutions built around real operational needs."}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-2 w-2 bg-primary" />

                <span className="text-[9px] font-semibold tracking-[0.16em] text-black/40 uppercase">
                  RisenDev / {id ? "Portofolio" : "Portfolio"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT LIST
      ====================================================== */}

      <WorkList />

      {/* =====================================================
          CTA
      ====================================================== */}

      <ProjectCTA />
    </PageShell>
  );
}
