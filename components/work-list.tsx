"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cases } from "@/data/site";
import { workPresentation } from "@/data/work-presentation";

function ProjectVisual({ item }: { item: (typeof cases)[number] }) {
  return (
    <div className="flex min-h-[310px] flex-col justify-between overflow-hidden bg-inverse-surface p-space-md text-inverse-on-surface">
      <div className="flex items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-primary" />
          <span className="font-label-sm tracking-widest text-surface-dim uppercase">// ENGINEERING PROJECT</span>
        </div>
        <span className="font-label-sm tracking-wider text-primary-fixed uppercase">{item.stack[0] ?? "WEB"}</span>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
        <div className="flex min-h-[210px] flex-col justify-between bg-surface/10 p-5">
          <span className="font-label-sm tracking-widest text-primary-fixed uppercase">TECH STACK</span>
          <div className="mt-8 flex flex-wrap gap-2">
            {item.stack.slice(0, 6).map((s) => (
              <span key={s} className="border border-surface-dim/25 px-2 py-1 font-label-sm text-surface-dim">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {item.scope.slice(0, 4).map((s, i) => (
            <div key={s} className="flex gap-3 bg-surface/10 p-3">
              <span className="font-label-sm text-primary-fixed">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-body-sm text-surface-dim">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between border-t border-surface-dim/15 pt-3 font-label-sm tracking-widest text-surface-dim uppercase">
        <span>{item.visual}</span>
        <span className="text-primary-fixed">CASE STUDY READY ↗</span>
      </div>
    </div>
  );
}

export function WorkList() {
  const locale = useLocale();
  const tCases = useTranslations("Site.cases");
  const tFilters = useTranslations("WorkPage.filters");
  const id = locale === "id";
  const filters = ["all", "webApplication", "businessSystem", "existingSystem"] as const;
  const [active, setActive] = useState<(typeof filters)[number]>("all");
  const visible = useMemo(() => (active === "all" ? cases : cases.filter((c) => workPresentation[c.key].category === active)), [active]);

  return (
    <>
      <section className="sticky top-20 z-30 w-full bg-surface/95 px-margin py-space-sm backdrop-blur-sm md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 font-label-md tracking-wider uppercase transition-colors ${active === f ? "bg-on-surface text-surface" : "bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary"}`}
              >
                [ {f === "all" ? tFilters("all") : tFilters(f)}
                {f === "all" ? ` (${cases.length})` : ""} ]
              </button>
            ))}
          </div>
          <div className="font-label-sm tracking-widest text-on-surface-variant uppercase">
            {`// ${id ? "URUTKAN: DATA PORTOFOLIO" : "SORT: PORTFOLIO DATA"}`} &nbsp; • &nbsp;{" "}
            <span className="font-semibold text-primary">// VIEW: GRID &amp; ARCHIVE</span>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface px-margin py-space-lg md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-xl">
          {visible.map((item) => {
            const index = cases.findIndex((c) => c.key === item.key) + 1;
            return (
              <article key={item.key} className="flex w-full flex-col gap-space-md bg-surface-container-low p-space-md lg:p-space-lg">
                <div className="grid grid-cols-1 items-stretch gap-gutter-desktop lg:grid-cols-12">
                  <div className="flex flex-col justify-between gap-space-md lg:col-span-5">
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-display-lg-mobile font-semibold text-primary">[{String(index).padStart(2, "0")}]</span>
                        <span className="bg-surface-container px-3 py-1 font-label-sm font-semibold tracking-widest uppercase">
                          // {tCases(`${item.key}.category`)}
                        </span>
                      </div>
                      <h2 className="pt-2 font-headline-lg tracking-tight uppercase">{tCases(`${item.key}.title`)}</h2>
                      <p className="pt-1 font-body-lg leading-snug text-on-surface-variant">{tCases(`${item.key}.summary`)}</p>
                    </div>
                    <div className="flex flex-col gap-space-sm pt-4">
                      <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">{`// ${id ? "CAKUPAN & TEKNOLOGI" : "SCOPE & TECHNOLOGY"}:`}</span>
                      <div className="grid grid-cols-2 gap-2">
                        {item.scope.slice(0, 4).map((_, i) => (
                          <div key={i} className="flex flex-col bg-surface p-3">
                            <span className="font-label-sm text-on-surface-variant">{String(i + 1).padStart(2, "0")}</span>
                            <span className="font-body-sm font-medium">{tCases(`${item.key}.scope.${i}`)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.stack.slice(0, 6).map((s) => (
                          <span key={s} className="bg-surface px-3 py-1 font-label-sm text-primary">
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4">
                        <Link
                          href={`/work/${item.slug}`}
                          className="inline-flex items-center gap-2 bg-on-surface px-6 py-3 font-label-md tracking-wider text-surface uppercase transition-colors hover:bg-primary hover:text-on-primary"
                        >
                          {id ? "Buka Case Study" : "Open Case Study"} ↗
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <ProjectVisual item={item} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
