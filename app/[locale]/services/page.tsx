import { getTranslations } from "next-intl/server";

import { Link } from "../../../i18n/navigation";
import { PageIntro } from "../../../components/page-intro";
import { services } from "../../../data/site";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-lg border border-ink px-6 text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-accent-light";

const textLink =
  "text-xs font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline";

const maintenancePlans = [
  {
    key: "basic",
    featured: false,
  },
  {
    key: "business",
    featured: true,
  },
  {
    key: "continuous",
    featured: false,
  },
] as const;

export default async function Services({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ServicesPage",
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
          SERVICES
      ========================================================= */}

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-[72px] sm:px-6 sm:pb-28 lg:px-8">
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
              className="grid grid-cols-1 gap-8 border-t border-border py-12 md:grid-cols-[5fr_7fr] md:gap-16 md:py-16"
            >
              <div>
                <span className="font-heading text-[13px] font-semibold text-accent">
                  {service.icon}
                </span>

                <div className="mt-[18px] flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <h2 className="font-heading text-[28px] font-semibold leading-[1.3] text-ink">
                    {site(`services.${service.key}.title`)}
                  </h2>

                  <span
                    className={`
                      inline-flex rounded-full px-2.5 py-[5px]
                      text-[11px] font-semibold uppercase tracking-[0.06em]

                      ${
                        available
                          ? "bg-[#EAF4EA] text-success"
                          : "bg-[#F0F0F0] text-muted"
                      }
                    `}
                  >
                    {available ? t("status.available") : t("status.byRequest")}
                  </span>
                </div>

                <p className="my-5 max-w-[500px] text-grey">
                  {site(`services.${service.key}.description`)}
                </p>

                <Link href="/contact" className={secondaryButton}>
                  {t("discussProject")} →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {useCases.map((useCase, useCaseIndex) => (
                  <div
                    key={`${service.key}-${useCaseIndex}`}
                    className="min-h-[150px] rounded-lg border border-border bg-alt p-[22px]"
                  >
                    <span className="text-xs text-accent">
                      {String(useCaseIndex + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mb-[7px] mt-6 font-heading text-lg font-semibold text-ink">
                      {useCase}
                    </h3>

                    <p className="text-[13px] leading-relaxed text-grey">
                      {t("useCaseDescription")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* =========================================================
          MAINTENANCE
      ========================================================= */}

      <section className="bg-alt py-[72px] sm:py-[88px] lg:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              {t("maintenance.eyebrow")}
            </div>

            <h2 className="mt-3 font-heading text-[28px] font-semibold leading-[1.3] text-ink">
              {t("maintenance.title")}
            </h2>

            <p className="mt-2.5 text-grey">{t("maintenance.description")}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {maintenancePlans.map((plan) => {
              const features = [
                t(`maintenance.plans.${plan.key}.features.1`),
                t(`maintenance.plans.${plan.key}.features.2`),
                t(`maintenance.plans.${plan.key}.features.3`),
              ];

              return (
                <article
                  key={plan.key}
                  className={`
                    relative flex min-h-[260px] flex-col rounded-lg
                    border bg-surface p-7 transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]
                    sm:min-h-[300px]

                    ${
                      plan.featured
                        ? "border-accent"
                        : "border-border hover:border-accent"
                    }
                  `}
                >
                  {plan.featured && (
                    <span className="absolute -top-[13px] left-6 rounded-full bg-accent px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.04em] text-white">
                      {t("maintenance.mostPopular")}
                    </span>
                  )}

                  <h3 className="mb-2 font-heading text-xl font-semibold text-ink">
                    {t(`maintenance.plans.${plan.key}.name`)}
                  </h3>

                  <p className="min-h-12 text-sm text-grey">
                    {t(`maintenance.plans.${plan.key}.description`)}
                  </p>

                  <ul className="my-6 grid list-none gap-2.5 p-0 text-sm text-grey">
                    {features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="text-accent">+</span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={`${textLink} mt-auto`}>
                    {t("maintenance.discussPlan")} →
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
