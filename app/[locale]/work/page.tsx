"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { PageIntro } from "../../../components/page-intro";
import { cases } from "../../../data/site";
import { WorkCard } from "../../../components/work-card";
import { Link } from "../../../i18n/navigation";

const filters = [
  "all",
  "customApp",
  "saas",
  "automation",
  "integration",
] as const;

type FilterKey = (typeof filters)[number];

export default function Work() {
  const t = useTranslations("WorkPage");
  const site = useTranslations("Site");

  const [filter, setFilter] = useState<FilterKey>("all");

  const shown = useMemo(() => {
    if (filter === "all") {
      return cases;
    }

    return cases.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <main>
      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-[72px] sm:px-6 sm:pb-28 lg:px-8">
        {/* FILTERS */}
        <div className="mb-8 flex gap-5 overflow-x-auto border-b border-border sm:mb-12 sm:gap-7">
          {filters.map((item) => {
            const active = filter === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`
                  shrink-0 border-b-2 bg-transparent pb-4 text-sm
                  transition-colors

                  ${
                    active
                      ? "border-accent font-semibold text-accent"
                      : "border-transparent text-grey hover:text-ink"
                  }
                `}
              >
                {t(`filters.${item}`)}
              </button>
            );
          })}
        </div>

        {/* WORK GRID */}
        {shown.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {shown.map((item, index) => (
              <WorkCard key={item.key} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border px-6 py-16 text-center text-grey">
            <p>{t("empty.title")}</p>

            <Link
              href="/contact"
              className="mt-3 inline-block text-accent transition hover:underline"
            >
              {t("empty.cta")} →
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
