"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { WorkVisual } from "@/components/visual";
import { workPresentation } from "@/data/work-presentation";
import { DesignText } from "@/components/ui/design-text";

import type { cases } from "@/data/site";

export function WorkCard({ item }: { item: Pick<(typeof cases)[number], "key" | "slug" | "visual"> }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const presentation = workPresentation[item.key];
  const tWorkCard = useTranslations("WorkCard");

  const tCases = useTranslations("Site.cases");

  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[#e3ddd5] bg-[#ffffff] shadow-sm transition-colors duration-200 hover:border-[#c34810] motion-reduce:transition-none"
    >
      <div
        className="flex items-center justify-between border-b border-[#e3ddd5]/70 bg-[#FBF9F7] px-3.5 py-2.5 font-mono text-[10px] text-[#8c8c8c]"
        aria-hidden="true"
      >
        <span className="flex items-center gap-1.5">
          <i className="inline-block h-2 w-2 rounded-full bg-[#E06C75]/70" />
          <i className="inline-block h-2 w-2 rounded-full bg-[#E5C07B]/70" />
          <i className="inline-block h-2 w-2 rounded-full bg-[#98C379]/70" />
        </span>
        <span className="tracking-widest">Forge Studio</span>
        <span className="text-[#b5501a] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </div>

      <div className="h-[230px] w-full min-w-0 shrink-0 overflow-hidden border-b border-[#e3ddd5]/70 bg-[#f7f4f0] lg:h-[clamp(210px,18vw,290px)]">
        {presentation.screenshots[0] && failedSource !== presentation.screenshots[0].src ? (
          <Image
            src={presentation.screenshots[0].src}
            alt={presentation.screenshots[0].alt}
            width={presentation.screenshots[0].width}
            height={presentation.screenshots[0].height}
            sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            onError={() => setFailedSource(presentation.screenshots[0].src)}
            loading="lazy"
          />
        ) : (
          <div className="relative h-full transition-transform duration-500 ease-out group-hover:scale-[1.025]">
            <div aria-hidden="true" className="h-full">
              <WorkVisual type={item.visual} project={item.key} />
            </div>
            <span className="absolute top-2 right-2 rounded-sm bg-white/95 px-2 py-1 text-[10px] text-[#786c64]">
              <DesignText>{"Project illustration"}</DesignText>
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-[22px]">
        <div className="mb-3.5 flex flex-wrap gap-2">
          <span className="inline-flex max-w-full rounded bg-[#f4efea] px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider text-[#b5501a] uppercase">
            {tCases(`${item.key}.category`)}
          </span>
        </div>

        <h3 className="mb-2 font-[family-name:var(--font-manrope)] text-lg leading-snug font-bold tracking-tight break-words text-[#1f1f1f] transition-colors duration-200 group-hover:text-[#b5501a] sm:text-xl">
          {tCases(`${item.key}.title`)}
        </h3>

        <p className="text-sm leading-relaxed text-[#595959]">{tCases(`${item.key}.summary`)}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {presentation.tags.map((tag) => (
            <li key={tag} className="rounded-sm bg-[#f4e1d2] px-2 py-0.5 text-[10px] text-[#76330d]">
              <DesignText>{tag}</DesignText>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between border-t border-[#e3ddd5]/60 pt-3 text-xs font-semibold text-[#b5501a]">
            <span>{tWorkCard("caseStudy")}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
