import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { Link } from "../../i18n/navigation";

import { services, cases, products } from "../../data/site";

import { WorkVisual } from "../../components/visual";

import { Reveal } from "../../components/reveal";

import Image from "next/image";

/* SHARED STYLES */

const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8";

const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs";

const textLink =
  "inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline sm:text-xs";

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark sm:w-auto sm:px-6 sm:text-xs";

const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-ink px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-accent-light sm:w-auto sm:px-6 sm:text-xs";

const card =
  "rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_32px_rgba(181,80,26,0.08)]";

/* METADATA */

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Home.metadata" });

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,

    alternates: {
      canonical: `/${params.locale}`,

      languages: { en: "/en", id: "/id", "x-default": "/en" },
    },

    openGraph: {
      type: "website",

      title: `${title} | Forge Studio`,

      description,

      url: `/${params.locale}`,

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

export default async function Home({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "Home" });

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  const processSteps = [
    t("process.steps.discovery"),
    t("process.steps.consultation"),
    t("process.steps.proposal"),
    t("process.steps.development"),
    t("process.steps.handover"),
    t("process.steps.maintenance"),
  ];

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* HERO */}

      <section
        className={`${container} relative flex min-h-[640px] flex-col pb-16 pt-[120px] min-[375px]:pt-[130px] sm:min-h-[680px] sm:pb-20 sm:pt-[145px] md:min-h-[720px] lg:min-h-[760px] lg:pb-24 lg:pt-[180px] xl:min-h-[790px] xl:pt-[190px]`}
      >
        <div className="max-w-[940px]">
          <Reveal y={14} duration={0.75}>
            <div className={eyebrow}>{t("hero.eyebrow")}</div>
          </Reveal>

          <Reveal y={22} delay={0.06} duration={0.85}>
            <h1 className="mb-5 mt-4 max-w-[920px] font-heading text-[clamp(40px,13vw,54px)] font-bold leading-[1.04] tracking-[-0.05em] text-ink sm:mb-6 sm:mt-[18px] sm:text-[60px] md:text-[68px] lg:mb-7 lg:text-[76px] xl:text-[80px]">
              {t("hero.title")} <em className="not-italic text-accent">{t("hero.highlight")}</em>
            </h1>
          </Reveal>

          <Reveal y={18} delay={0.13} duration={0.75}>
            <p className="max-w-[610px] text-base leading-[1.7] text-grey sm:text-lg sm:leading-[1.65]">{t("hero.description")}</p>
          </Reveal>

          <Reveal y={14} delay={0.2} duration={0.7}>
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link className={primaryButton} href="/contact">
                {t("hero.startProject")}
              </Link>

              <Link className={secondaryButton} href="/work">
                {t("hero.viewWork")}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* HERO NOTE */}

        <Reveal
          y={10}
          delay={0.28}
          duration={0.7}
          className="mt-auto pt-12 sm:pt-16 lg:absolute lg:bottom-[88px] lg:right-8 lg:mt-0 lg:max-w-[280px] lg:pt-0"
        >
          <div className="flex max-w-[320px] items-start gap-3 text-[11px] uppercase leading-[1.5] tracking-[0.06em] text-grey sm:text-xs">
            <span className="shrink-0 font-semibold text-accent">01</span>

            <span>
              {t("hero.noteTitle")}
              <br />
              {t("hero.noteDescription")}
            </span>
          </div>
        </Reveal>
      </section>

      {/* TECHNOLOGY */}

      <Reveal y={12} duration={0.65}>
        <section className="border-y border-border bg-alt">
          <div
            className={`${container} flex min-h-[88px] flex-wrap items-center gap-x-5 gap-y-3 py-5 text-[12px] text-muted sm:min-h-[92px] sm:gap-x-8 sm:gap-y-4 sm:text-[13px] lg:gap-10 lg:py-0`}
          >
            <span className="w-full border-b border-border pb-3 text-[10px] font-semibold uppercase tracking-[0.08em] sm:w-auto sm:border-0 sm:pb-0 sm:text-[12px]">
              {t("technology.label")}
            </span>

            <b className="font-heading font-semibold text-ink">Next.js</b>

            <b className="font-heading font-semibold text-ink">TypeScript</b>

            <b className="font-heading font-semibold text-ink">PostgreSQL</b>

            <b className="font-heading font-semibold text-ink">{t("technology.cloudInfrastructure")}</b>
          </div>
        </section>
      </Reveal>

      {/* SERVICES */}

      <section className={`${container} py-16 sm:py-[88px] lg:py-28`}>
        <Reveal y={20}>
          <div className="mb-8 sm:mb-12 sm:flex sm:items-end sm:justify-between sm:gap-8">
            <div className="max-w-[680px]">
              <div className={eyebrow}>{t("services.eyebrow")}</div>

              <h2 className="mt-3 max-w-[620px] font-heading text-[26px] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[30px] lg:text-[34px]">
                {t("services.title")}
              </h2>

              <p className="mt-2.5 max-w-[620px] text-sm leading-relaxed text-grey sm:text-base">{t("services.description")}</p>
            </div>

            <Link className={`${textLink} mt-5 shrink-0 sm:mt-0`} href="/services">
              {t("services.viewAll")}
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.key} delay={index * 0.07} y={22} duration={0.65} className="h-full">
              <Link
                href="/services"
                className={`${card} flex h-full min-h-[220px] flex-col p-5 sm:min-h-[240px] sm:p-7 lg:min-h-[270px] lg:p-8 xl:p-10`}
              >
                <span className="mb-7 font-heading text-[12px] font-semibold text-accent sm:mb-9 sm:text-[13px]">{service.icon}</span>

                <h3 className="mb-2.5 font-heading text-lg font-semibold leading-snug sm:text-xl">
                  {site(`services.${service.key}.title`)}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-grey">{site(`services.${service.key}.description`)}</p>

                <span className={`${textLink} mt-auto`}>{t("services.learnMore")}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}

      <section className="bg-alt py-16 sm:py-[88px] lg:py-28">
        <div className={container}>
          <Reveal y={20}>
            <div className="mb-8 sm:mb-12 sm:flex sm:items-end sm:justify-between sm:gap-8">
              <div className="max-w-[680px]">
                <div className={eyebrow}>{t("work.eyebrow")}</div>

                <h2 className="mt-3 font-heading text-[26px] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[30px] lg:text-[34px]">
                  {t("work.title")}
                </h2>

                <p className="mt-2.5 text-sm leading-relaxed text-grey sm:text-base">{t("work.description")}</p>
              </div>

              <Link className={`${textLink} mt-5 shrink-0 sm:mt-0`} href="/work">
                {t("work.viewAll")}
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
            {cases.map((item, index) => (
              <Reveal key={item.key} delay={index * 0.08} y={24} className="h-full">
                <Link href={`/work/${item.slug}`} className={`${card} block h-full overflow-hidden`}>
                  <div className="aspect-[16/10] overflow-hidden border-b border-border sm:aspect-video">
                    <WorkVisual type={item.visual} />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="mb-3.5 flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-accent-light px-2.5 py-[5px] text-[10px] font-semibold uppercase tracking-[0.05em] text-accent sm:text-[11px]">
                        {site(`cases.${item.key}.category`)}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-lg font-semibold leading-[1.35] sm:text-xl">{site(`cases.${item.key}.title`)}</h3>

                    <p className="text-sm leading-relaxed text-grey">{site(`cases.${item.key}.summary`)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section
        className={`${container} grid grid-cols-1 gap-12 py-16 sm:py-[88px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-28 xl:gap-24`}
      >
        <Reveal x={-16} y={0} duration={0.7}>
          <div className="lg:sticky lg:top-32">
            <div className={eyebrow}>{t("process.eyebrow")}</div>

            <h2 className="my-4 max-w-[520px] font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.025em] sm:text-4xl">
              {t("process.title")}
            </h2>

            <p className="mb-7 max-w-[470px] text-sm leading-relaxed text-grey sm:text-base">{t("process.description")}</p>

            <Link className={textLink} href="/contact">
              {t("process.startConversation")}
            </Link>
          </div>
        </Reveal>

        <div className="border-t border-border">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 0.055} x={18} y={0} duration={0.55}>
              <div className="flex items-center gap-4 border-b border-border py-4 sm:gap-6 sm:py-[18px] lg:min-h-[72px]">
                <span className="w-6 shrink-0 text-[11px] text-accent sm:w-8 sm:text-xs">{String(index + 1).padStart(2, "0")}</span>

                <b className="min-w-0 font-heading text-base font-semibold leading-snug sm:text-lg lg:text-xl">{step}</b>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}

      <section className="bg-alt py-16 sm:py-[88px] lg:py-28">
        <div className={container}>
          <Reveal>
            <div className="mb-8 sm:mb-12 sm:flex sm:items-end sm:justify-between sm:gap-8">
              <div>
                <div className={eyebrow}>{t("products.eyebrow")}</div>

                <h2 className="mt-3 font-heading text-[26px] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[30px] lg:text-[34px]">
                  {t("products.title")}
                </h2>
              </div>

              <Link className={`${textLink} mt-5 shrink-0 sm:mt-0`} href="/products">
                {t("products.viewAll")}
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
            {products.map((item, index) => {
              const isComingSoon = item.status === "comingSoon";

              return (
                <Reveal key={item.key} delay={index * 0.07} y={22} className="h-full">
                  <article className="flex h-full min-h-[250px] flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-200 sm:min-h-[270px] sm:p-6 lg:min-h-[290px] lg:hover:-translate-y-0.5 lg:hover:border-accent lg:hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      {/* <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink font-heading text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">
                        FS
                      </div> */}
                      <Image src={"/img/forge-icon.png"} alt="Forge Studio" width={60} height={60} priority className=" object-fill" />

                      <span
                        className={`inline-flex max-w-[150px] rounded-full px-2.5 py-[5px] text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.05em] sm:text-[10px] ${
                          item.status === "beta" ? "bg-[#FBF3DD] text-warning" : "bg-[#F0F0F0] text-muted"
                        }`}
                      >
                        {site(`productStatus.${item.status}`)}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-lg font-semibold text-ink sm:text-xl">{item.name}</h3>

                    <p className="mb-[18px] text-sm leading-relaxed text-grey">{site(`products.${item.key}.tagline`)}</p>

                    <span className="mb-6 inline-flex w-fit max-w-full rounded-full bg-alt px-2.5 py-[5px] text-[10px] font-semibold uppercase leading-tight tracking-[0.05em] text-grey">
                      {site(`products.${item.key}.category`)}
                    </span>

                    <Link href="/products" className={`${textLink} mt-auto`}>
                      {isComingSoon ? site("productStatus.notify") : site("productStatus.visit")}
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        className={`${container} grid grid-cols-1 gap-8 py-16 sm:gap-10 sm:py-[88px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20 lg:py-28 xl:gap-24`}
      >
        <Reveal x={-18} y={0}>
          <div>
            <div className={eyebrow}>{t("about.eyebrow")}</div>

            <h2 className="my-4 max-w-[520px] font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.025em] sm:text-4xl">
              {t("about.titleLine1")}

              <br />

              {t("about.titleLine2")}
            </h2>
          </div>
        </Reveal>

        <Reveal x={18} y={0} delay={0.08}>
          <div className="lg:pt-6">
            <p className="mb-7 max-w-[520px] text-sm leading-[1.75] text-grey sm:text-base">{t("about.description")}</p>

            <Link className={textLink} href="/about">
              {t("about.link")}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}

      <section className="overflow-hidden bg-ink py-16 text-white sm:py-20 lg:py-[104px]">
        <div className={container}>
          <Reveal y={18} duration={0.75}>
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D97A45] sm:text-xs">{t("cta.eyebrow")}</div>
          </Reveal>

          <Reveal y={26} delay={0.07} duration={0.8}>
            <h2 className="mb-7 mt-4 max-w-[700px] font-heading text-[clamp(34px,10vw,46px)] font-bold leading-[1.08] tracking-[-0.04em] sm:mb-8 sm:mt-[18px] sm:text-[52px] lg:text-[64px]">
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
