"use client";

import { useMemo, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { cases } from "@/data/site";
import { workPresentation } from "@/data/work-presentation";

import { ProjectCarousel } from "@/components/design/project-carousel";

const filters = ["all", "webApplication", "businessSystem", "existingSystem"] as const;

type Filter = (typeof filters)[number];

type ProjectItem = (typeof cases)[number];

/* ============================================================
   WORK LIST
============================================================ */

export function WorkList() {
  const locale = useLocale();

  const tCases = useTranslations("Site.cases");
  const tFilters = useTranslations("WorkPage.filters");

  const id = locale === "id";

  const [active, setActive] = useState<Filter>("all");

  const visible = useMemo(() => {
    if (active === "all") {
      return cases;
    }

    return cases.filter((item) => workPresentation[item.key]?.category === active);
  }, [active]);

  return (
    <>
      {/* =====================================================
          FILTER
      ====================================================== */}

      <section className="sticky top-20 z-30 border-y border-black/10 bg-[#FAF8F2]/95 px-5 backdrop-blur-md md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 overflow-x-auto py-4">
          <div className="flex shrink-0 items-center gap-1">
            {filters.map((filter) => {
              const selected = active === filter;

              const label = filter === "all" ? tFilters("all") : tFilters(filter);

              const count =
                filter === "all" ? cases.length : cases.filter((item) => workPresentation[item.key]?.category === filter).length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`group flex items-center gap-2 px-4 py-2.5 text-[10px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                    selected ? "bg-[#1C1C18] text-white" : "text-black/45 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  <span>{label}</span>

                  <span className={selected ? "text-[#FF4F00]" : "text-black/25"}>{String(count).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>

          <span className="hidden shrink-0 text-[9px] font-semibold tracking-[0.16em] text-black/30 uppercase lg:block">
            {String(visible.length).padStart(2, "0")} {id ? "Proyek ditampilkan" : "Projects shown"}
          </span>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="bg-[#FAF8F2] px-5 text-[#1C1C18] md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          {visible.map((item) => {
            const index = cases.findIndex((project) => project.key === item.key) + 1;

            return (
              <ProjectRow
                key={item.key}
                item={item}
                index={index}
                locale={locale}
                id={id}
                title={tCases(`${item.key}.title`)}
                category={tCases(`${item.key}.category`)}
                summary={tCases(`${item.key}.summary`)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

/* ============================================================
   PROJECT ROW
============================================================ */

function ProjectRow({
  item,
  index,
  locale,
  id,
  title,
  category,
  summary,
}: {
  item: ProjectItem;
  index: number;
  locale: string;
  id: boolean;
  title: string;
  category: string;
  summary: string;
}) {
  const status =
    item.status === "development"
      ? id
        ? "Dalam Pengembangan"
        : "In Development"
      : item.status === "active"
        ? id
          ? "Aktif"
          : "Active"
        : id
          ? "Selesai"
          : "Completed";

  return (
    <article className="border-b border-black/15 py-14 first:border-t md:py-18 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
        {/* =================================================
            PROJECT INFO
        ================================================== */}

        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            {/* meta */}

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-semibold tracking-[0.12em] text-primary">{String(index).padStart(2, "0")}</span>

              <span className="h-px w-8 bg-black/20" />

              <span className="text-[10px] font-semibold tracking-[0.16em] text-black/40 uppercase">{category}</span>
            </div>

            {/* title */}

            <h2 className="mt-7 max-w-xl text-4xl leading-[0.95] font-semibold tracking-[-0.05em] md:text-5xl lg:text-[3.6rem]">{title}</h2>

            {/* summary */}

            <p className="mt-6 max-w-lg text-base leading-[1.65] text-black/55 md:text-lg">{summary}</p>
          </div>

          {/* bottom info */}

          <div className="mt-10">
            {/* stack */}

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {item.stack.slice(0, 4).map((technology) => (
                <span key={technology} className="text-[9px] font-semibold tracking-[0.12em] text-black/35 uppercase">
                  {technology}
                </span>
              ))}
            </div>

            {/* status */}

            <div className="mt-5 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 ${item.status === "development" ? "bg-primary" : "bg-black/30"}`} />

              <span className="text-[9px] font-semibold tracking-[0.14em] text-black/35 uppercase">{status}</span>
            </div>

            {/* link */}

            <div className="mt-8">
              <Link
                href={`/work/${item.slug}`}
                className="group inline-flex items-center gap-8 border-b border-black pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase transition-colors hover:border-primary hover:text-primary"
              >
                {id ? "Lihat Case Study" : "View Case Study"}

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =================================================
            PROJECT VISUAL
        ================================================== */}

        <div className="lg:col-span-7">
          <ProjectVisual item={item} locale={locale} title={title} index={index} />
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({ item, locale, title, index }: { item: ProjectItem; locale: string; title: string; index: number }) {
  const id = locale === "id";

  /* ----------------------------------------------------------
     HAS SCREENSHOTS
  ---------------------------------------------------------- */

  if (item.images.length > 0) {
    return (
      <div className="relative h-full overflow-hidden bg-[#1C1C18]">
        <ProjectCarousel images={item.images} title={title} locale={locale} className="h-full w-full" />
      </div>
    );
  }

  /* ----------------------------------------------------------
     NO SCREENSHOTS
  ---------------------------------------------------------- */

  return (
    <Link
      href={`/work/${item.slug}`}
      className="group flex h-full min-h-[360px] flex-col justify-between overflow-hidden bg-[#1C1C18] p-6 text-white transition-colors duration-500 hover:bg-[#23231E] md:min-h-[440px] md:p-8"
    >
      {/* top */}

      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-white/35 uppercase">
          {String(index).padStart(2, "0")} / RisenDev
        </span>

        <span className="text-xl text-[#FF4F00] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>

      {/* center */}

      <div>
        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#FF4F00] uppercase">
          // {id ? "Project Preview" : "Project Preview"}
        </span>

        <p className="mt-5 max-w-lg text-[clamp(2.5rem,5vw,5rem)] leading-[0.88] font-semibold tracking-[-0.06em] uppercase">{title}</p>
      </div>

      {/* bottom */}

      <div className="flex items-end justify-between border-t border-white/15 pt-5">
        <span className="max-w-xs text-xs leading-[1.6] text-white/40">
          {id ? "Detail lengkap tersedia pada halaman case study." : "Full project details are available in the case study."}
        </span>

        <span className="text-[9px] font-semibold tracking-[0.14em] text-white/30 uppercase">RisenDev</span>
      </div>
    </Link>
  );
}
