"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { cases } from "../data/site";
import { WorkCard } from "./work-card";
import { Link } from "../i18n/navigation";

const filters = ["all", "customApp", "saas", "automation", "integration"] as const;

type FilterKey = (typeof filters)[number];

export function WorkList() {
  const t = useTranslations("WorkPage");

  const [filter, setFilter] = useState<FilterKey>("all");

  const shown = useMemo(() => {
    if (filter === "all") {
      return cases;
    }

    return cases.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      {/* FILTERS */}

      <div className="relative mb-8 sm:mb-10 lg:mb-12">
        <div className="flex w-full gap-4 overflow-x-auto border-b border-border pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 lg:gap-7">
          {filters.map((item) => {
            const active = filter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={`relative shrink-0 border-b-2 bg-transparent px-0.5 pb-3 text-[12px] font-medium whitespace-nowrap transition-all duration-200 sm:pb-4 sm:text-sm ${
                  active ? `border-accent font-semibold text-accent` : `border-transparent text-grey hover:text-ink`
                }`}
              >
                {t(`filters.${item}`)}
              </button>
            );
          })}
        </div>

        {/* MOBILE FADE INDICATOR */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[calc(100%-1px)] w-10 bg-gradient-to-l from-surface to-transparent sm:hidden"
        />
      </div>

      {/* GRID */}

      {shown.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {shown.map((item) => (
            <WorkCard key={item.key} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border px-5 py-12 text-center sm:px-8 sm:py-16">
          <p className="mx-auto max-w-[480px] text-sm leading-relaxed text-grey sm:text-base">{t("empty.title")}</p>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-accent transition-all hover:underline sm:text-xs"
          >
            {t("empty.cta")}

            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
