import { getTranslations } from "next-intl/server";

import { Link } from "../../i18n/navigation";
import { services, cases, products } from "../../data/site";
import { WorkVisual } from "../../components/visual";
import { Reveal } from "../../components/reveal";

const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

const eyebrow = "text-xs font-semibold uppercase tracking-[0.12em] text-accent";

const textLink =
  "text-xs font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-lg border border-ink px-6 text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-accent-light";

const card =
  "rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_32px_rgba(181,80,26,0.08)]";

export default async function Home({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  // Translation khusus homepage
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Home",
  });

  // Translation data services, cases, products, dll.
  const site = await getTranslations({
    locale: params.locale,
    namespace: "Site",
  });

  const processSteps = [
    t("process.steps.discovery"),
    t("process.steps.consultation"),
    t("process.steps.proposal"),
    t("process.steps.development"),
    t("process.steps.handover"),
    t("process.steps.maintenance"),
  ];

  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className={`${container} relative min-h-[650px] pb-20 pt-[140px] sm:min-h-[680px] lg:pt-[190px]`}
      >
        <Reveal y={14} duration={0.75}>
          <div className={eyebrow}>{t("hero.eyebrow")}</div>
        </Reveal>

        <Reveal y={22} delay={0.06} duration={0.85}>
          <h1 className="mb-7 mt-[18px] max-w-[900px] font-heading text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[80px]">
            {t("hero.title")}{" "}
            <em className="not-italic text-accent">{t("hero.highlight")}</em>
          </h1>
        </Reveal>

        <Reveal y={18} delay={0.13} duration={0.75}>
          <p className="max-w-[610px] text-lg text-grey">
            {t("hero.description")}
          </p>
        </Reveal>

        <Reveal y={14} delay={0.2} duration={0.7}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link className={primaryButton} href="/contact">
              {t("hero.startProject")}
            </Link>

            <Link className={secondaryButton} href="/work">
              {t("hero.viewWork")}
            </Link>
          </div>
        </Reveal>

        <Reveal
          y={10}
          delay={0.28}
          duration={0.7}
          className="mt-[72px] lg:absolute lg:bottom-[90px] lg:right-8 lg:mt-0"
        >
          <div className="flex gap-3 text-xs uppercase leading-[1.35] tracking-[0.06em] text-grey">
            <span className="font-semibold text-accent">01</span>

            <span>
              {t("hero.noteTitle")}
              <br />
              {t("hero.noteDescription")}
            </span>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <Reveal y={12} duration={0.65}>
        <section className="border-y border-border bg-alt">
          <div
            className={`${container} flex min-h-[92px] flex-wrap items-center gap-[18px] py-5 text-[13px] text-muted sm:gap-10 sm:py-0`}
          >
            <span className="w-full sm:w-auto">{t("technology.label")}</span>

            <b className="font-heading text-ink">Next.js</b>

            <b className="font-heading text-ink">TypeScript</b>

            <b className="font-heading text-ink">PostgreSQL</b>

            <b className="font-heading text-ink">Cloud infrastructure</b>
          </div>
        </section>
      </Reveal>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className={`${container} py-[72px] sm:py-[88px] lg:py-28`}>
        <Reveal y={20}>
          <div className="mb-8 block gap-6 sm:mb-12 sm:flex sm:items-end sm:justify-between">
            <div>
              <div className={eyebrow}>{t("services.eyebrow")}</div>

              <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.3]">
                {t("services.title")}
              </h2>

              <p className="mt-2.5 text-grey">{t("services.description")}</p>
            </div>

            <Link
              className={`${textLink} mt-5 inline-block sm:mt-0`}
              href="/services"
            >
              {t("services.viewAll")}
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.key}
              delay={index * 0.07}
              y={22}
              duration={0.65}
            >
              <Link
                href="/services"
                className={`${card} flex min-h-[250px] flex-col p-6 sm:p-8 lg:p-10`}
              >
                <span className="mb-9 font-heading text-[13px] font-semibold text-accent">
                  {service.icon}
                </span>

                <h3 className="mb-2.5 font-heading text-xl font-semibold">
                  {site(`services.${service.key}.title`)}
                </h3>

                <p className="mb-6 text-sm text-grey">
                  {site(`services.${service.key}.description`)}
                </p>

                <span className={`${textLink} mt-auto`}>
                  {t("services.learnMore")}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}

      <section className="bg-alt py-[72px] sm:py-[88px] lg:py-28">
        <div className={container}>
          <Reveal y={20}>
            <div className="mb-8 block gap-6 sm:mb-12 sm:flex sm:items-end sm:justify-between">
              <div>
                <div className={eyebrow}>{t("work.eyebrow")}</div>

                <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.3]">
                  {t("work.title")}
                </h2>

                <p className="mt-2.5 text-grey">{t("work.description")}</p>
              </div>

              <Link
                className={`${textLink} mt-5 inline-block sm:mt-0`}
                href="/work"
              >
                {t("work.viewAll")}
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {cases.map((item, index) => (
              <Reveal key={item.key} delay={index * 0.08} y={24}>
                <Link
                  href={`/work/${item.slug}`}
                  className={`${card} block overflow-hidden`}
                >
                  <div className="aspect-video overflow-hidden border-b border-border">
                    <WorkVisual type={item.visual} />
                  </div>

                  <div className="p-5">
                    <div className="mb-3.5 flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-accent-light px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-accent">
                        {site(`cases.${item.key}.category`)}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-xl font-semibold leading-[1.35]">
                      {site(`cases.${item.key}.title`)}
                    </h3>

                    <p className="text-sm text-grey">
                      {site(`cases.${item.key}.summary`)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        className={`${container} grid grid-cols-1 gap-10 py-[72px] sm:py-[88px] lg:grid-cols-2 lg:gap-24 lg:py-28`}
      >
        <Reveal x={-16} y={0} duration={0.7}>
          <div>
            <div className={eyebrow}>{t("process.eyebrow")}</div>

            <h2 className="my-4 max-w-[520px] font-heading text-[30px] font-bold leading-[1.2] sm:text-4xl">
              {t("process.title")}
            </h2>

            <p className="mb-7 max-w-[470px] text-grey">
              {t("process.description")}
            </p>

            <Link className={textLink} href="/contact">
              {t("process.startConversation")}
            </Link>
          </div>
        </Reveal>

        <div className="border-t border-border">
          {processSteps.map((step, index) => (
            <Reveal
              key={step}
              delay={index * 0.055}
              x={18}
              y={0}
              duration={0.55}
            >
              <div className="flex items-center gap-6 border-b border-border py-[18px]">
                <span className="text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <b className="font-heading text-xl font-semibold">{step}</b>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================= */}

      <section className="bg-alt py-[72px] sm:py-[88px] lg:py-28">
        <div className={container}>
          <Reveal>
            <div className="mb-8 block gap-6 sm:mb-12 sm:flex sm:items-end sm:justify-between">
              <div>
                <div className={eyebrow}>{t("products.eyebrow")}</div>

                <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.3]">
                  {t("products.title")}
                </h2>
              </div>

              <Link
                className={`${textLink} mt-5 inline-block sm:mt-0`}
                href="/products"
              >
                {t("products.viewAll")}
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {products.map((item, index) => {
              const isComingSoon = item.status === "comingSoon";

              return (
                <Reveal key={item.key} delay={index * 0.07} y={22}>
                  <article className="flex min-h-[280px] flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]">
                    <div className="mb-7 flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded bg-ink font-heading text-sm font-bold text-white">
                        FS
                      </div>

                      <span
                        className={`
                          inline-flex rounded-full px-2.5 py-[5px]
                          text-[11px] font-semibold uppercase tracking-[0.06em]

                          ${
                            item.status === "beta"
                              ? "bg-[#FBF3DD] text-warning"
                              : item.status === "live"
                                ? "bg-[#EAF4EA] text-success"
                                : "bg-[#F0F0F0] text-muted"
                          }
                        `}
                      >
                        {site(`productStatus.${item.status}`)}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-xl font-semibold text-ink">
                      {item.name}
                    </h3>

                    <p className="mb-[18px] min-h-[45px] text-sm text-grey">
                      {site(`products.${item.key}.tagline`)}
                    </p>

                    <span className="mb-6 inline-flex w-max rounded-full bg-alt px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-grey">
                      {site(`products.${item.key}.category`)}
                    </span>

                    <Link
                      href="/products"
                      className="mt-auto text-xs font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline"
                    >
                      {isComingSoon
                        ? site("productStatus.notify")
                        : site("productStatus.visit")}
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        className={`${container} grid grid-cols-1 gap-10 py-[72px] sm:py-[88px] lg:grid-cols-2 lg:gap-24 lg:py-28`}
      >
        <Reveal x={-18} y={0}>
          <div>
            <div className={eyebrow}>{t("about.eyebrow")}</div>

            <h2 className="my-4 font-heading text-[30px] font-bold leading-[1.2] sm:text-4xl">
              {t("about.titleLine1")}
              <br />
              {t("about.titleLine2")}
            </h2>
          </div>
        </Reveal>

        <Reveal x={18} y={0} delay={0.08}>
          <div>
            <p className="mb-7 max-w-[470px] text-grey">
              {t("about.description")}
            </p>

            <Link className={textLink} href="/about">
              {t("about.link")}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="overflow-hidden bg-ink py-[72px] text-white lg:py-[104px]">
        <div className={container}>
          <Reveal y={18} duration={0.75}>
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D97A45]">
              {t("cta.eyebrow")}
            </div>
          </Reveal>

          <Reveal y={26} delay={0.07} duration={0.8}>
            <h2 className="mb-8 mt-[18px] max-w-[620px] font-heading text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-[-0.04em]">
              {t("cta.title")}
            </h2>
          </Reveal>

          <Reveal y={14} delay={0.14}>
            <Link className={primaryButton} href="/contact">
              {t("cta.button")}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
