import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { Link } from "../../../i18n/navigation";
import { PageIntro } from "../../../components/page-intro";
import { insights } from "../../../data/site";

/* METADATA */

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "InsightsPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/insights`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/insights", id: "/id/insights", "x-default": "/en/insights" },
    },

    openGraph: {
      type: "website",
      title: `${title} | Forge Studio`,
      description,
      url: path,
      siteName: "Forge Studio",

      locale: params.locale === "id" ? "id_ID" : "en_US",

      alternateLocale: params.locale === "id" ? ["en_US"] : ["id_ID"],
    },

    twitter: { card: "summary_large_image", title: `${title} | Forge Studio`, description },
  };
}

/* INSIGHTS */

export default async function Insights({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "InsightsPage" });

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* INTRO */}

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      {/* INSIGHTS */}

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 sm:gap-5 sm:px-6 sm:pb-20 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:pb-28 xl:pb-32">
        {insights.map((item) => (
          <article
            key={item.key}
            className="group flex h-full min-h-[280px] min-w-0 flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 sm:min-h-[300px] sm:p-6 lg:min-h-[320px] lg:hover:-translate-y-1 lg:hover:border-accent lg:hover:shadow-[0_12px_32px_rgba(181,80,26,0.08)]"
          >
            {/* META */}

            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mb-6">
              <span className="inline-flex max-w-full rounded-full bg-alt px-2.5 py-[5px] text-[9px] font-semibold uppercase leading-tight tracking-[0.05em] text-grey sm:text-[10px] lg:text-[11px]">
                {site(`insights.${item.key}.tag`)}
              </span>

              <span className="whitespace-nowrap text-[11px] text-muted sm:text-xs">{item.date}</span>
            </div>

            {/* TITLE */}

            <h2 className="mb-3 break-words font-heading text-lg font-semibold leading-[1.35] tracking-[-0.015em] text-ink transition-colors duration-200 group-hover:text-accent sm:text-xl">
              {site(`insights.${item.key}.title`)}
            </h2>

            {/* SUMMARY */}

            <p className="mb-6 text-sm leading-[1.75] text-grey">{site(`insights.${item.key}.summary`)}</p>

            {/* ACTION */}

            <Link
              href={`/insights/${item.slug}`}
              className="mt-auto inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-accent transition-all hover:underline sm:text-[11px] lg:text-xs"
            >
              {t("readArticle")}

              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
