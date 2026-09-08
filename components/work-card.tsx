"use client";

import { useTranslations } from "next-intl";

import { Link } from "../i18n/navigation";
import { WorkVisual } from "./visual";

import type { cases } from "../data/site";

export function WorkCard({ item }: { item: (typeof cases)[number] }) {
  const tWorkCard = useTranslations("WorkCard");

  const tCases = useTranslations("Site.cases");

  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_32px_rgba(181,80,26,0.08)]"
    >
      {/* VISUAL */}

      <div className="aspect-[16/10] w-full min-w-0 overflow-hidden border-b border-border sm:aspect-video">
        <WorkVisual type={item.visual} />
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* TAGS */}

        <div className="mb-3.5 flex flex-wrap gap-2">
          <span className="inline-flex max-w-full rounded-full bg-accent-light px-2.5 py-[5px] text-[9px] font-semibold uppercase leading-tight tracking-[0.05em] text-accent sm:text-[10px] lg:text-[11px]">
            {item.category}
          </span>

          <span className="inline-flex max-w-full rounded-full bg-alt px-2.5 py-[5px] text-[9px] font-semibold uppercase leading-tight tracking-[0.05em] text-grey sm:text-[10px] lg:text-[11px]">
            {tWorkCard("caseStudy")}
          </span>
        </div>

        {/* TITLE */}

        <h3 className="mb-2 break-words font-heading text-lg font-semibold leading-[1.35] tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-accent sm:text-xl">
          {tCases(`${item.key}.title`)}
        </h3>

        {/* DESCRIPTION */}

        <p className="text-sm leading-[1.7] text-grey">{tCases(`${item.key}.summary`)}</p>

        {/* BOTTOM INDICATOR */}

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-accent sm:text-[11px]">
            {tWorkCard("caseStudy")}

            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
