import designContent from "../../../../data/design-content.json";
import { DesignDetail } from "../../../../components/design/detail";
import { InventoryDesign } from "../../../../components/design/inventory";
import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { cases } from "../../../../data/site";
import { WorkVisual } from "../../../../components/visual";
import { Link } from "../../../../i18n/navigation";
const slugs = ["nexus-analytics", "globalfreight", "stripe-erp"] as const;

export function generateStaticParams() {
  return [...slugs.map((slug) => ({ slug })), ...designContent.work.map(({ slug }) => ({ slug }))];
}

/* METADATA */

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }): Promise<Metadata> {
  const designItem = designContent.work.find((item) => item.slug === params.slug);
  if (designItem)
    return {
      title: designItem.title,
      description: designItem.description,
      alternates: {
        canonical: `/${params.locale}/work/${params.slug}`,
        languages: { en: `/en/work/${params.slug}`, id: `/id/work/${params.slug}` },
      },
    };
  const index = slugs.indexOf(params.slug as (typeof slugs)[number]);

  if (index < 0) {
    return {};
  }

  const item = cases[index];

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  const projectTitle = site(`cases.${item.key}.title`);
  const description = site(`cases.${item.key}.summary`);

  const title = params.locale === "id" ? `${projectTitle} — Studi Kasus` : `${projectTitle} — Case Study`;

  const path = `/${params.locale}/work/${params.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: `/en/work/${params.slug}`, id: `/id/work/${params.slug}`, "x-default": `/en/work/${params.slug}` },
    },

    openGraph: {
      type: "article",
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

export default async function CaseStudy({ params }: { params: { slug: string; locale: string } }) {
  const designItem = designContent.work.find((item) => item.slug === params.slug);
  if (params.slug === "multi-site-inventory-system") return <InventoryDesign />;
  if (designItem) return <DesignDetail item={designItem} kind="work" locale={params.locale} />;
  const index = slugs.indexOf(params.slug as (typeof slugs)[number]);

  if (index < 0) {
    notFound();
  }

  const item = cases[index];

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  const t = await getTranslations({ locale: params.locale, namespace: "CaseStudyPage" });

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* HERO */}

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-14 pt-[120px] min-[375px]:pt-[128px] sm:px-6 sm:pb-20 sm:pt-[145px] md:pb-24 md:pt-[155px] lg:px-8 lg:pb-28 lg:pt-[170px]">
        {/* META */}

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-accent sm:text-xs">
          <span>{site(`cases.${item.key}.category`)}</span>

          <span className="text-muted">/</span>

          <span>{t("label")}</span>
        </div>

        {/* TITLE */}

        <h1 className="mt-4 max-w-[900px] break-words font-heading text-[clamp(38px,11vw,50px)] font-bold leading-[1.06] tracking-[-0.04em] text-ink sm:mt-[18px] sm:text-[56px] md:text-[64px] lg:text-[72px]">
          {site(`cases.${item.key}.title`)}
        </h1>

        {/* DESCRIPTION */}

        <p className="mt-5 max-w-[700px] text-base leading-[1.75] text-grey sm:text-lg sm:leading-[1.7]">
          {site(`cases.${item.key}.summary`)}
        </p>

        {/* VISUAL */}

        <div className="mt-8 aspect-[16/10] w-full min-w-0 overflow-hidden sm:mt-12 sm:aspect-video lg:mt-14">
          <WorkVisual type={item.visual} />
        </div>
      </section>

      {/* CASE BODY */}

      <section className="mx-auto w-full max-w-[900px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        {/* 01 — CONTEXT */}

        <CaseSection
          number="01"
          label={t("sections.context")}
          title={t(`projects.${item.key}.context.title`)}
          text={t(`projects.${item.key}.context.text`)}
        />

        {/* 02 — SOLUTION */}

        <CaseSection
          number="02"
          label={t("sections.solution")}
          title={t(`projects.${item.key}.solution.title`)}
          text={t(`projects.${item.key}.solution.text`)}
        />

        {/* 03 — ENGINEERING */}

        <CaseSection
          number="03"
          label={t("sections.engineering")}
          title={t(`projects.${item.key}.engineering.title`)}
          text={t(`projects.${item.key}.engineering.text`)}
        />

        {/* 04 — RESULT */}

        <CaseSection
          number="04"
          label={t("sections.result")}
          title={t(`projects.${item.key}.result.title`)}
          text={t(`projects.${item.key}.result.text`)}
        />
      </section>

      {/* CLOSING CTA */}

      <section className="bg-ink py-16 sm:py-20 lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-7 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-8">
          <h2 className="max-w-[650px] break-words font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.025em] text-white sm:text-[34px] lg:text-4xl">
            {t("cta.title")}
          </h2>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-lg bg-accent px-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-accent-dark sm:w-auto sm:text-xs lg:hover:-translate-y-px"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}

/* CASE SECTION */

function CaseSection({ number, label, title, text }: { number: string; label: string; title: string; text: string }) {
  return (
    <section className="border-t border-border py-10 sm:py-14 lg:py-16">
      {/* META */}

      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs">
        <span>{number}</span>

        <span className="text-muted">/</span>

        <span>{label}</span>
      </div>

      {/* TITLE */}

      <h2 className="mt-4 max-w-[740px] break-words font-heading text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[32px] lg:text-[36px]">
        {title}
      </h2>

      {/* DESCRIPTION */}

      <p className="mt-5 max-w-[650px] text-sm leading-[1.8] text-grey sm:text-base sm:leading-relaxed">{text}</p>
    </section>
  );
}
