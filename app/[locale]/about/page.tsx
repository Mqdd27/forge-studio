import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Link } from "../../../i18n/navigation";
import { PageIntro } from "../../../components/page-intro";

const principles = [
  {
    key: "reliability",
    number: "01",
  },
  {
    key: "businessFirst",
    number: "02",
  },
  {
    key: "precision",
    number: "03",
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: {
    locale: string;
  };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "AboutPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function About({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "AboutPage",
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
          PRINCIPLES
      ========================================================= */}

      <section className="bg-alt py-[72px] sm:py-[88px] lg:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              {t("principles.eyebrow")}
            </div>

            <h2 className="mt-3 font-heading text-[28px] font-semibold leading-[1.3] text-ink">
              {t("principles.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {principles.map((principle) => (
              <article
                key={principle.key}
                className="
                  flex min-h-[260px] flex-col
                  rounded-lg border border-border
                  bg-surface p-7
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-accent
                  hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]
                "
              >
                <span className="text-xs font-semibold text-accent">
                  {principle.number}
                </span>

                <h3 className="mb-2.5 mt-[50px] font-heading text-xl font-semibold text-ink">
                  {t(`principles.items.${principle.key}.title`)}
                </h3>

                <p className="text-sm text-grey">
                  {t(`principles.items.${principle.key}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDIO
      ========================================================= */}

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-10 px-4 py-[72px] sm:px-6 sm:py-[88px] lg:grid-cols-[1fr_2fr] lg:gap-24 lg:px-8 lg:py-28">
        {/* BRAND MARK */}

        <div className="grid aspect-square w-full max-w-[180px] place-items-center bg-ink font-heading text-[clamp(40px,8vw,96px)] font-bold text-white lg:max-w-[360px]">
          FS
        </div>

        {/* CONTENT */}

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {t("studio.eyebrow")}
          </div>

          <h2 className="mb-[22px] mt-4 max-w-[620px] font-heading text-[30px] font-semibold leading-[1.2] text-ink sm:text-4xl">
            {t("studio.title")}
          </h2>

          <p className="mb-4 max-w-[620px] text-base text-grey">
            {t("studio.paragraph1")}
          </p>

          <p className="mb-4 max-w-[620px] text-base text-grey">
            {t("studio.paragraph2")}
          </p>

          <Link
            href="/contact"
            className="
              mt-4 inline-block
              text-xs font-semibold uppercase
              tracking-[0.06em] text-accent
              transition hover:underline
            "
          >
            {t("studio.cta")} →
          </Link>
        </div>
      </section>
    </main>
  );
}
