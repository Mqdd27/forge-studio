import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageShell } from "@/components/ui/page-shell";
import { ProjectCTA } from "@/components/design/project-cta";
import { ProjectCarousel } from "@/components/design/project-carousel";

import { cases, siteUrl } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { JsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;

  const item = cases.find((project) => project.slug === slug);

  if (!item) return {};

  const t = await getTranslations({ locale, namespace: "Site.cases" });

  return pageMetadata({
    locale,
    path: `/work/${item.slug}`,
    title: t(`${item.key}.title`),
    description: t(`${item.key}.summary`),
    image: item.images[0],
  });
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;

  setRequestLocale(locale);

  const item = cases.find((project) => project.slug === slug);

  if (!item) notFound();

  const t = await getTranslations({ locale, namespace: "Site.cases" });

  const id = locale === "id";

  const nextCase = cases[(cases.findIndex((project) => project.slug === item.slug) + 1) % cases.length];

  const statusLabel =
    item.status === "development"
      ? id
        ? "Dalam Pengembangan"
        : "In Development"
      : item.status === "active"
        ? id
          ? "Aktif"
          : "Active"
        : id
          ? "Selesai"
          : "Completed";

  const points = (group: string, count: number) =>
    Array.from({ length: count }, (_, index) => ({
      title: t(`${item.key}.${group}.${index}.title`),
      description: t(`${item.key}.${group}.${index}.description`),
    }));

  return (
    <PageShell>
      <JsonLd
        data={{
          "@type": "CreativeWork",
          name: t(`${item.key}.title`),
          description: t(`${item.key}.summary`),
          url: `${siteUrl}/${locale}/work/${item.slug}`,
          image: `${siteUrl}${item.images[0]}`,
          inLanguage: locale,
          keywords: item.stack.join(", "),
          creator: { "@type": "Organization", name: "RisenDev", url: `${siteUrl}/${locale}` },
        }}
      />

      {/* Header: what it is and the key facts, readable without scrolling. */}
      <section className="bg-[#F6F3EC] px-5 pt-8 pb-12 text-[#1C1C18] md:px-10 md:pt-12 md:pb-16 lg:px-16">
        <div className="mx-auto max-w-[1120px]">
          <Link href="/work" className="text-sm font-medium text-black/70 transition-colors hover:text-primary">
            ← {id ? "Semua proyek" : "All work"}
          </Link>

          <h1 className="mt-10 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
            {t(`${item.key}.title`)}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-[1.5] text-black/75 md:text-2xl">{t(`${item.key}.summary`)}</p>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-y border-black/15 py-6 sm:grid-cols-2 lg:grid-cols-4">
            <Fact label={id ? "Jenis proyek" : "Project type"} value={t(`${item.key}.category`)} />
            <Fact label="Status" value={statusLabel} />
            <Fact label={id ? "Peran kami" : "Our role"} value={t(`${item.key}.role`)} />
            <Fact label={id ? "Teknologi utama" : "Main technology"} value={item.stack.slice(0, 3).join(", ")} />
          </dl>

          <ProjectCarousel images={item.images} title={t(`${item.key}.title`)} locale={locale} priority className="mt-10 w-full" />
        </div>
      </section>

      <Section label={id ? "Tantangan" : "The challenge"} title={t(`${item.key}.challengeTitle`)}>
        <Lead>{t(`${item.key}.challenge`)}</Lead>
        <PointList items={points("challengePoints", item.contentCount.challenges)} />
      </Section>

      <Section label={id ? "Pendekatan kami" : "Our approach"} title={t(`${item.key}.solutionTitle`)}>
        <Lead>{t(`${item.key}.solution`)}</Lead>
        <PointList items={points("solutionPoints", item.contentCount.solutions)} />
      </Section>

      <Section label={id ? "Yang kami bangun" : "What we built"} title={t(`${item.key}.capabilitiesTitle`)}>
        <ul className="mt-8 grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2">
          {points("capabilities", item.contentCount.capabilities).map((capability) => (
            <li key={capability.title} className="bg-[#FAF8F2] p-6 sm:last:odd:col-span-2">
              <h3 className="text-lg leading-[1.25] font-semibold tracking-[-0.015em]">{capability.title}</h3>
              <p className="mt-2 text-base leading-[1.6] text-black/70">{capability.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* The one high-contrast block, so the result stands out while scrolling. */}
      <section className="bg-[#1C1C18] px-5 py-16 text-[#F6F3EC] md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1120px] gap-4 lg:grid-cols-12 lg:gap-10">
          <SectionLabel dark>{id ? "Hasil" : "The result"}</SectionLabel>

          <div className="lg:col-span-9">
            <h2 className="max-w-3xl text-3xl leading-[1.1] font-semibold tracking-[-0.03em] md:text-4xl">
              {t(`${item.key}.outcomeTitle`)}
            </h2>
            <p className="mt-5 max-w-[65ch] text-lg leading-[1.65] text-white/80">{t(`${item.key}.outcome`)}</p>
          </div>
        </div>
      </section>

      {/* Technical detail is opt-in: useful to engineers, noise for most business readers. */}
      <section className="bg-[#FAF8F2] px-5 text-[#1C1C18] md:px-10 lg:px-16">
        <details className="group mx-auto max-w-[1120px] border-b border-black/15">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8 [&::-webkit-details-marker]:hidden">
            <h2 className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">{id ? "Detail teknis" : "Technical details"}</h2>
            <span aria-hidden="true" className="text-2xl leading-none text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="grid gap-4 pb-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-9 lg:col-start-4">
              <p className="text-xl leading-[1.3] font-semibold tracking-[-0.02em]">{t(`${item.key}.engineeringTitle`)}</p>
              <Lead>{t(`${item.key}.engineering`)}</Lead>
              <PointList items={points("engineeringPoints", item.contentCount.engineering)} />

              <ul className="mt-8 flex flex-wrap gap-2">
                {item.stack.map((technology) => (
                  <li key={technology} className="border border-black/20 px-3 py-1.5 text-sm text-black/75">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </section>

      <section className="bg-[#FAF8F2] px-5 pt-14 text-[#1C1C18] md:px-10 lg:px-16">
        <Link href={`/work/${nextCase.slug}`} className="group mx-auto grid max-w-[1120px] gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <span>
            <span className="block text-sm font-semibold text-primary">{id ? "Studi kasus berikutnya" : "Next case study"}</span>
            <span className="mt-3 block text-3xl leading-[1.1] font-semibold tracking-[-0.03em] group-hover:text-primary md:text-4xl">
              {t(`${nextCase.key}.title`)}
            </span>
            <span className="mt-3 block max-w-[65ch] text-base leading-[1.6] text-black/70">{t(`${nextCase.key}.summary`)}</span>
          </span>
          <span aria-hidden="true" className="text-3xl text-primary transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>

      <ProjectCTA maxWidth="max-w-[1120px]" />
    </PageShell>
  );
}

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#FAF8F2] px-5 text-[#1C1C18] md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1120px] gap-4 border-b border-black/15 py-14 md:py-20 lg:grid-cols-12 lg:gap-10">
        <SectionLabel>{label}</SectionLabel>

        <div className="lg:col-span-9">
          <h2 className="max-w-3xl text-3xl leading-[1.1] font-semibold tracking-[-0.03em] md:text-4xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

// Sticky on desktop so readers keep their place while scrolling through a long section.
function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-lg leading-[1.2] font-semibold tracking-[-0.02em] lg:sticky lg:top-28 lg:col-span-3 lg:self-start lg:pt-1.5 lg:text-xl ${dark ? "text-[#FF4F00]" : "text-primary"}`}
    >
      <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-[#FF4F00]" />
      {children}
    </p>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-[65ch] text-lg leading-[1.65] text-black/75">{children}</p>;
}

function PointList({ items }: { items: { title: string; description: string }[] }) {
  return (
    <ul className="mt-8 border-t border-black/15">
      {items.map((point) => (
        <li key={point.title} className="grid gap-1 border-b border-black/15 py-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6">
          <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.015em]">{point.title}</h3>
          <p className="text-base leading-[1.6] text-black/70">{point.description}</p>
        </li>
      ))}
    </ul>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-black/60">{label}</dt>
      <dd className="mt-1 text-base leading-[1.4] font-medium">{value}</dd>
    </div>
  );
}
