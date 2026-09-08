import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { Link } from "../../../i18n/navigation";

import { PageIntro } from "../../../components/page-intro";

import { services } from "../../../data/site";

const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-ink px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-accent-light sm:w-auto sm:px-6 sm:text-xs";

const textLink =
  "inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline sm:text-xs";

const maintenancePlans = [
  { key: "basic", featured: false },
  { key: "business", featured: true },
  { key: "continuous", featured: false },
] as const;

/* METADATA */

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ServicesPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/services`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/services", id: "/id/services", "x-default": "/en/services" },
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

    twitter: {
      card: "summary_large_image",

      title: `${title} | Forge Studio`,

      description,
    },
  };
}

export default async function Services({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "ServicesPage" });

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* INTRO */}

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      {/* SERVICES */}

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        {services.map((service, index) => {
          const available = index < 4;

          const useCases = [
            site(`services.${service.key}.useCases.1`),
            site(`services.${service.key}.useCases.2`),
            site(`services.${service.key}.useCases.3`),
          ];

          return (
            <section
              id={`service-${service.key}`}
              key={service.key}
              className="grid grid-cols-1 gap-8 border-t border-border py-10 sm:gap-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-16 xl:grid-cols-[5fr_7fr] xl:gap-20"
            >
              {/* SERVICE INFO */}

              <div className="min-w-0">
                <span className="font-heading text-[12px] font-semibold text-accent sm:text-[13px]">{service.icon}</span>

                <div className="mt-4 flex flex-col items-start gap-3 sm:mt-[18px] md:flex-row md:flex-wrap md:items-center">
                  <h2 className="min-w-0 max-w-[620px] break-words font-heading text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[28px] lg:text-[30px]">
                    {site(`services.${service.key}.title`)}
                  </h2>

                  <span
                    className={`inline-flex shrink-0 rounded-full px-2.5 py-[5px] text-[9px] font-semibold uppercase leading-tight tracking-[0.05em] sm:text-[10px] lg:text-[11px] ${
                      available ? "bg-[#EAF4EA] text-success" : "bg-[#F0F0F0] text-muted"
                    }`}
                  >
                    {available ? t("status.available") : t("status.byRequest")}
                  </span>
                </div>

                <p className="my-5 max-w-[520px] text-sm leading-[1.75] text-grey sm:text-base sm:leading-relaxed">
                  {site(`services.${service.key}.description`)}
                </p>

                <Link href="/contact" className={secondaryButton}>
                  <span className="flex items-center gap-2">
                    {t("discussProject")}

                    <span>→</span>
                  </span>
                </Link>
              </div>

              {/* USE CASES */}

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {useCases.map((useCase, useCaseIndex) => (
                  <article
                    key={`${service.key}-${useCaseIndex}`}
                    className="flex min-h-[140px] min-w-0 flex-col rounded-xl border border-border bg-alt p-5 transition-all duration-200 sm:min-h-[150px] sm:p-[22px] lg:min-h-[160px] lg:hover:border-accent lg:hover:bg-surface"
                  >
                    <span className="text-[10px] font-medium text-accent sm:text-xs">{String(useCaseIndex + 1).padStart(2, "0")}</span>

                    <h3 className="mb-2 mt-5 break-words font-heading text-base font-semibold leading-[1.35] text-ink sm:mt-6 sm:text-lg">
                      {useCase}
                    </h3>

                    <p className="text-[12px] leading-[1.7] text-grey sm:text-[13px]">{t("useCaseDescription")}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>

      {/* MAINTENANCE */}

      <section className="bg-alt py-16 sm:py-[88px] lg:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div className="mb-8 max-w-[720px] sm:mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs">{t("maintenance.eyebrow")}</div>

            <h2 className="mt-3 font-heading text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[30px] lg:text-[34px]">
              {t("maintenance.title")}
            </h2>

            <p className="mt-2.5 max-w-[620px] text-sm leading-[1.75] text-grey sm:text-base sm:leading-relaxed">
              {t("maintenance.description")}
            </p>
          </div>

          {/* PLANS */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
            {maintenancePlans.map((plan) => {
              const features = [
                t(`maintenance.plans.${plan.key}.features.1`),
                t(`maintenance.plans.${plan.key}.features.2`),
                t(`maintenance.plans.${plan.key}.features.3`),
              ];

              return (
                <article
                  key={plan.key}
                  className={`relative flex h-full min-h-[260px] min-w-0 flex-col rounded-xl border bg-surface p-5 transition-all duration-200 sm:min-h-[280px] sm:p-6 lg:min-h-[310px] lg:p-7 lg:hover:-translate-y-1 lg:hover:shadow-[0_10px_30px_rgba(181,80,26,0.07)] ${
                    plan.featured ? `border-accent shadow-[0_8px_24px_rgba(181,80,26,0.05)]` : `border-border lg:hover:border-accent`
                  }`}
                >
                  {/* FEATURED BADGE */}

                  {plan.featured && (
                    <span className="absolute -top-[12px] left-5 max-w-[calc(100%-2.5rem)] rounded-full bg-accent px-2.5 py-[5px] text-[9px] font-semibold uppercase leading-tight tracking-[0.04em] text-white sm:left-6 sm:text-[10px] lg:text-[11px]">
                      {t("maintenance.mostPopular")}
                    </span>
                  )}

                  {/* PLAN TITLE */}

                  <h3
                    className={`mb-2 break-words font-heading text-lg font-semibold leading-snug text-ink sm:text-xl ${plan.featured ? "mt-2" : ""}`}
                  >
                    {t(`maintenance.plans.${plan.key}.name`)}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="text-sm leading-[1.7] text-grey">{t(`maintenance.plans.${plan.key}.description`)}</p>

                  {/* FEATURES */}

                  <ul className="my-6 grid list-none gap-3 p-0 text-sm leading-relaxed text-grey">
                    {features.map((feature) => (
                      <li key={feature} className="flex min-w-0 items-start gap-2.5">
                        <span className="shrink-0 text-accent">+</span>

                        <span className="min-w-0">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ACTION */}

                  <Link href="/contact" className={`${textLink} mt-auto`}>
                    <span className="flex items-center gap-2">
                      {t("maintenance.discussPlan")}

                      <span>→</span>
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
