"use client";

import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import { WorkVisual } from "./visual";
import type { cases } from "../data/site";

export function WorkCard({
  item,
}: {
  item: (typeof cases)[number];
  index: number;
}) {
  const tWorkCard = useTranslations("WorkCard");
  const tCases = useTranslations("Site.cases");

  return (
    <Link
      href={`/work/${item.slug}`}
      className="overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]"
    >
      <div className="aspect-video border-b border-border">
        <WorkVisual type={item.visual} />
      </div>

      <div className="p-5">
        <div className="mb-3.5 flex flex-wrap gap-2">
          <span className="inline-flex rounded-full bg-accent-light px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-accent">
            {item.category}
          </span>

          <span className="inline-flex rounded-full bg-alt px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-grey">
            {tWorkCard("caseStudy")}
          </span>
        </div>

        <h3 className="mb-2 font-heading text-xl font-semibold leading-[1.35] text-ink">
          {tCases(`${item.key}.title`)}
        </h3>

        <p className="text-sm text-grey">{tCases(`${item.key}.summary`)}</p>
      </div>
    </Link>
  );
}
