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
      className="work-card group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8B7A6] hover:shadow-md"
    >
      <div
        className="project-toolbar flex items-center justify-between border-b border-border/70 bg-[#FBF9F7] px-3.5 py-2.5 text-[10px] text-muted font-mono"
        aria-hidden="true"
      >
        <span className="window-dots flex items-center gap-1.5">
          <i className="inline-block h-2 w-2 rounded-full bg-[#E06C75]/70" />
          <i className="inline-block h-2 w-2 rounded-full bg-[#E5C07B]/70" />
          <i className="inline-block h-2 w-2 rounded-full bg-[#98C379]/70" />
        </span>
        <span className="tracking-widest">Forge Studio</span>
        <span className="text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </div>
      {}

      <div className="project-media aspect-[16/10] w-full min-w-0 overflow-hidden border-b border-border/70 bg-alt">
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
            <span className="project-illustration-label">
              <DesignText>{"Project illustration"}</DesignText>
            </span>
          </div>
        )}
      </div>

      {}

      <div className="project-copy flex flex-1 flex-col p-5 sm:p-6">
        {}

        <div className="project-meta mb-3.5 flex flex-wrap gap-2">
          <span className="inline-flex max-w-full rounded bg-accent-light px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
            {tCases(`${item.key}.category`)}
          </span>

          <span className="inline-flex max-w-full rounded bg-alt px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
            {tWorkCard("caseStudy")}
          </span>
        </div>

        {}

        <h3 className="mb-2 break-words font-heading text-lg font-bold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-accent sm:text-xl">
          {tCases(`${item.key}.title`)}
        </h3>

        {}

        <p className="text-sm leading-relaxed text-grey">{tCases(`${item.key}.summary`)}</p>

        <ul className="project-tags mt-4 flex flex-wrap gap-1.5">
          {presentation.tags.map((tag) => (
            <li key={tag} className="rounded border border-border/60 bg-alt px-2 py-0.5 font-mono text-[10px] text-muted">
              <DesignText>{tag}</DesignText>
            </li>
          ))}
        </ul>

        {}

        <div className="project-link mt-auto pt-5">
          <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-accent">
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
