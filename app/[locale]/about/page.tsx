import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "../../../i18n/navigation";
import { PageIntro } from "../../../components/page-intro";

const principles = [
  { key: "reliability", number: "01" },
  { key: "businessFirst", number: "02" },
  { key: "precision", number: "03" },
] as const;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "AboutPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/about`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/about", id: "/id/about", "x-default": "/en/about" },
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

export default async function About({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "AboutPage" });

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* INTRO */}

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      {/* PRINCIPLES */}

      <section className="bg-alt py-16 sm:py-[88px] lg:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div className="mb-8 max-w-[760px] sm:mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs">{t("principles.eyebrow")}</div>

            <h2 className="mt-3 break-words font-heading text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[30px] lg:text-[34px]">
              {t("principles.title")}
            </h2>
          </div>

          {/* CARDS */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
            {principles.map((principle) => (
              <article
                key={principle.key}
                className="group flex h-full min-h-[230px] min-w-0 flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 sm:min-h-[250px] sm:p-6 lg:min-h-[280px] lg:p-7 lg:hover:-translate-y-1 lg:hover:border-accent lg:hover:shadow-[0_12px_32px_rgba(181,80,26,0.08)]"
              >
                <span className="text-[10px] font-semibold text-accent sm:text-xs">{principle.number}</span>

                <div className="mt-auto pt-10">
                  <h3 className="mb-2.5 break-words font-heading text-lg font-semibold leading-[1.35] text-ink transition-colors duration-200 group-hover:text-accent sm:text-xl">
                    {t(`principles.items.${principle.key}.title`)}
                  </h3>

                  <p className="text-sm leading-[1.75] text-grey">{t(`principles.items.${principle.key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO */}

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-start gap-10 px-4 py-16 sm:px-6 sm:py-[88px] md:grid-cols-[minmax(160px,0.65fr)_minmax(0,1.35fr)] md:gap-12 lg:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] lg:gap-20 lg:px-8 lg:py-28 xl:gap-24">
        {/* BRAND MARK */}

        {/* <div className="grid aspect-square w-[120px] shrink-0 place-items-center rounded-xl bg-ink font-heading text-[36px] font-bold tracking-[-0.05em] text-white sm:w-[150px] sm:text-[44px] md:w-full md:max-w-[240px] md:text-[clamp(48px,7vw,72px)] lg:max-w-[320px] xl:max-w-[360px]"></div> */}
        <Image
          src={"/img/forge-icon.png"}
          alt="Forge Studio"
          width={512}
          height={512}
          priority
          className="rounded-2xl h-full w-full object-contain"
        />

        {/* CONTENT */}

        <div className="min-w-0 md:pt-1 lg:pt-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs">{t("studio.eyebrow")}</div>

          <h2 className="mb-5 mt-4 max-w-[650px] break-words font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] text-ink sm:text-[34px] lg:text-4xl">
            {t("studio.title")}
          </h2>

          <p className="mb-4 max-w-[650px] text-sm leading-[1.8] text-grey sm:text-base sm:leading-[1.75]">{t("studio.paragraph1")}</p>

          <p className="mb-4 max-w-[650px] text-sm leading-[1.8] text-grey sm:text-base sm:leading-[1.75]">{t("studio.paragraph2")}</p>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline sm:text-xs"
          >
            {t("studio.cta")}

            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
