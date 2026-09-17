"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { workPresentation } from "@/data/work-presentation";
import { DesignText } from "@/components/ui/design-text";

import type { cases } from "@/data/site";

export function WorkCard({ item, index = 0 }: { item: Pick<(typeof cases)[number], "key" | "slug" | "visual">; index?: number }) {
  const presentation = workPresentation[item.key];
  const tWorkCard = useTranslations("WorkCard");
  const tCases = useTranslations("Site.cases");
  const n = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex h-full min-w-0 flex-col bg-white transition-colors duration-150 hover:bg-[#31312c] hover:text-[#f3f0e9]"
    >
      <div className="flex items-center justify-between border-b border-[#1c1c18]/15 px-5 py-3">
        <span className="text-[11px] font-semibold tracking-[0.08em] text-[#a93100] uppercase">[{n}]</span>
        <span className="max-w-[60%] truncate text-[11px] font-semibold tracking-[0.08em] text-[#5c4037] uppercase group-hover:text-[#f3f0e9]">
          {tCases(`${item.key}.category`)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-[family-name:var(--font-geist-sans)] text-xl leading-tight font-medium tracking-tight break-words md:text-2xl">
          {tCases(`${item.key}.title`)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5c4037] group-hover:text-[#B9B5AE]">{tCases(`${item.key}.summary`)}</p>

        <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0">
          {presentation.tags.slice(0, 4).map((tag) => (
            <li
              key={tag}
              className="border border-[#1c1c18]/25 px-2 py-1 text-[10px] font-semibold tracking-[0.06em] uppercase group-hover:border-[#F3F0E9]/40"
            >
              <DesignText>{tag}</DesignText>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-[#1c1c18]/15 pt-3 text-xs font-semibold tracking-[0.06em] text-[#a93100] uppercase group-hover:border-[#F3F0E9]/25">
            <span>{tWorkCard("caseStudy")}</span>
            <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
