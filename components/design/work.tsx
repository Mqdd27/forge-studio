"use client";
import { PageShell } from "@/components/ui/page-shell";
import { WorkList } from "@/components/work-list";
import { ProjectCTA } from "@/components/design/project-cta";
import { cases } from "@/data/site";
import { useLocale } from "next-intl";

export function WorkDesign() {
  const id = useLocale() === "id";
  return (
    <PageShell>
      <section className="w-full bg-surface px-margin pt-space-lg pb-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-label-sm font-semibold tracking-widest text-primary uppercase">{`// ${id ? "ARSIP PROYEK & REKAYASA SISTEM" : "PROJECT ARCHIVE & SYSTEM ENGINEERING"}`}</span>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-primary" />
              <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">RISENDEV ARCHIVE DEPLOYMENT DIRECTORY</span>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-gutter-desktop lg:grid-cols-12">
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg leading-none tracking-tight uppercase lg:col-span-9">
              {id ? (
                <>
                  Portofolio & sistem untuk <span className="text-primary underline decoration-2 underline-offset-8">kebutuhan nyata</span>.
                </>
              ) : (
                <>
                  Portfolio & systems built for <span className="text-primary underline decoration-2 underline-offset-8">real needs</span>.
                </>
              )}
            </h1>
            <div className="flex flex-col gap-4 lg:col-span-3 lg:pt-4">
              <span className="font-label-md font-semibold tracking-wider text-primary uppercase">
                {id ? "[ CAKUPAN KERJA ]" : "[ WORK SCOPE ]"}
              </span>
              <p className="font-body-sm leading-relaxed text-on-surface-variant">
                {id
                  ? "Project nyata dari portofolio RisenDev, tanpa client, metrik, atau klaim bisnis yang dibuat-buat."
                  : "Real projects from the RisenDev portfolio, presented without invented clients, metrics, or business claims."}
              </p>
            </div>
          </div>
          <div className="mt-space-md flex items-center gap-3 bg-surface-container-low p-space-md">
            <span className="font-display-lg-mobile font-semibold tracking-tight">{String(cases.length).padStart(2, "0")}</span>
            <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">{`// ${id ? "PROJECT DALAM DATA PORTOFOLIO" : "PROJECTS IN PORTFOLIO DATA"}`}</span>
          </div>
        </div>
      </section>
      <WorkList />
      <ProjectCTA />
    </PageShell>
  );
}
