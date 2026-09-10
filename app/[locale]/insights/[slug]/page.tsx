import designContent from "../../../../data/design-content.json";
import { DesignDetail } from "../../../../components/design/detail";
import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { insights } from "../../../../data/site";
import { Link } from "../../../../i18n/navigation";

const slugs = insights.map((item) => item.slug);

/* STATIC PARAMS */

export function generateStaticParams() {
  return [...slugs.map((slug) => ({ slug })), ...designContent.insights.map(({ slug }) => ({ slug }))];
}

/* METADATA */

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }): Promise<Metadata> {
  const designItem = designContent.insights.find((item) => item.slug === params.slug);
  if (designItem)
    return {
      title: designItem.title,
      description: designItem.description,
      alternates: {
        canonical: `/${params.locale}/insights/${params.slug}`,
        languages: { en: `/en/insights/${params.slug}`, id: `/id/insights/${params.slug}` },
      },
    };
  const item = insights.find((entry) => entry.slug === params.slug);

  if (!item) {
    return {};
  }

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  const title = site(`insights.${item.key}.title`);
  const description = site(`insights.${item.key}.summary`);

  const path = `/${params.locale}/insights/${item.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: `/en/insights/${item.slug}`, id: `/id/insights/${item.slug}`, "x-default": `/en/insights/${item.slug}` },
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

/* ARTICLE */

export default async function InsightArticle({ params }: { params: { slug: string; locale: string } }) {
  const designItem = designContent.insights.find((item) => item.slug === params.slug);
  if (designItem) return <DesignDetail item={designItem} kind="insights" locale={params.locale} />;
  const item = insights.find((entry) => entry.slug === params.slug);

  if (!item) {
    notFound();
  }

  const site = await getTranslations({ locale: params.locale, namespace: "Site" });

  const t = await getTranslations({ locale: params.locale, namespace: "InsightDetailPage" });

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* ARTICLE HERO */}

      <section className="mx-auto w-full max-w-[900px] px-4 pb-12 pt-[120px] min-[375px]:pt-[128px] sm:px-6 sm:pb-16 sm:pt-[145px] md:pt-[155px] lg:px-8 lg:pb-20 lg:pt-[170px]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-accent sm:text-xs">
          <span>{site(`insights.${item.key}.tag`)}</span>

          <span className="text-muted">/</span>

          <span className="text-muted">{item.date}</span>
        </div>

        <h1 className="mt-5 max-w-[860px] break-words font-heading text-[clamp(36px,10vw,50px)] font-bold leading-[1.08] tracking-[-0.04em] text-ink sm:text-[56px] md:text-[62px]">
          {site(`insights.${item.key}.title`)}
        </h1>

        <p className="mt-6 max-w-[720px] text-base leading-[1.8] text-grey sm:text-lg">{site(`insights.${item.key}.summary`)}</p>
      </section>

      {/* ARTICLE BODY */}

      <article className="mx-auto w-full max-w-[760px] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <ArticleSection number="01" title={t(`articles.${item.key}.sections.1.title`)} text={t(`articles.${item.key}.sections.1.text`)} />

        <ArticleSection number="02" title={t(`articles.${item.key}.sections.2.title`)} text={t(`articles.${item.key}.sections.2.text`)} />

        <ArticleSection number="03" title={t(`articles.${item.key}.sections.3.title`)} text={t(`articles.${item.key}.sections.3.text`)} />

        <ArticleSection number="04" title={t(`articles.${item.key}.sections.4.title`)} text={t(`articles.${item.key}.sections.4.text`)} />
      </article>

      {/* CLOSING CTA */}

      <section className="border-t border-border bg-alt py-14 sm:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-start gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-accent sm:text-xs">{t("cta.eyebrow")}</p>

            <h2 className="mt-2 max-w-[560px] font-heading text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink sm:text-[30px]">
              {t("cta.title")}
            </h2>
          </div>

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

/* ARTICLE SECTION */

function ArticleSection({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <section className="border-t border-border py-10 sm:py-12 lg:py-14">
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs">{number}</div>

      <h2 className="mt-4 break-words font-heading text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-ink sm:text-[30px]">
        {title}
      </h2>

      <p className="mt-5 whitespace-pre-line text-sm leading-[1.9] text-grey sm:text-base">{text}</p>
    </section>
  );
}
