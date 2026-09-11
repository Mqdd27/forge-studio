import { getTranslations } from "next-intl/server";

import { Link } from "../../../i18n/navigation";
import { PageIntro } from "../../../components/page-intro";
import { insights } from "../../../data/site";

export default async function Insights({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "InsightsPage",
  });

  const site = await getTranslations({
    locale: params.locale,
    namespace: "Site",
  });

  return (
    <main>
      {/* =========================================================
          INTRO
      ========================================================= */}

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      {/* =========================================================
          INSIGHTS
      ========================================================= */}

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 px-4 pb-[72px] sm:grid-cols-2 sm:gap-6 sm:px-6 sm:pb-28 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:pb-32">
        {insights.map((item) => (
          <article
            key={item.key}
            className="
              flex min-h-[300px] flex-col rounded-lg
              border border-border bg-surface p-6
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-accent
              hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]
            "
          >
            <div className="mb-[26px] flex items-center gap-3 text-[13px] text-grey">
              <span className="inline-flex rounded-full bg-alt px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-grey">
                {site(`insights.${item.key}.tag`)}
              </span>

              <span>{item.date}</span>
            </div>

            <h2 className="mb-3 font-heading text-xl font-semibold leading-[1.35] text-ink">
              {site(`insights.${item.key}.title`)}
            </h2>

            <p className="mb-6 text-sm text-grey">
              {site(`insights.${item.key}.summary`)}
            </p>

            <Link
              href={`/insights/${item.slug}`}
              className="
                mt-auto text-xs font-semibold uppercase
                tracking-[0.06em] text-accent
                transition hover:underline
              "
            >
              {t("readArticle")} →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
