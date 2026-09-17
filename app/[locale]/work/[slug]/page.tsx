import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageShell } from "@/components/ui/page-shell";
import { ProjectCTA } from "@/components/design/project-cta";
import { ProjectCarousel } from "@/components/design/project-carousel";

import { cases } from "@/data/site";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params;

  const item = cases.find((project) => project.slug === slug);

  if (!item) return {};

  const t = await getTranslations({ locale, namespace: "Site.cases" });

  return {
    title: t(`${item.key}.title`),
    description: t(`${item.key}.summary`),

    alternates: {
      canonical: `/${locale}/work/${item.slug}`,

      languages: { en: `/en/work/${item.slug}`, id: `/id/work/${item.slug}` },
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;

  setRequestLocale(locale);

  const item = cases.find((project) => project.slug === slug);

  if (!item) notFound();

  const t = await getTranslations({ locale, namespace: "Site.cases" });

  const id = locale === "id";

  const projectIndex = cases.findIndex((project) => project.slug === item.slug) + 1;

  const code = `F-${String(projectIndex).padStart(2, "0")}`;

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

  return (
    <PageShell>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#F6F3EC] px-5 pt-8 pb-12 text-[#1C1C18] md:px-10 md:pt-12 md:pb-16 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          {/* top meta */}

          <div className="flex items-center justify-between border-b border-black/15 pb-4">
            <Link href="/work" className="text-[10px] font-semibold tracking-[0.16em] uppercase transition-opacity hover:opacity-50">
              ← {id ? "Portofolio" : "Work"}
            </Link>

            <span className="text-[10px] font-semibold tracking-[0.16em] text-black/40 uppercase">{code}</span>
          </div>

          {/* title */}

          <div className="grid gap-10 py-12 lg:grid-cols-12 lg:items-end lg:py-16">
            <div className="lg:col-span-8">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">{t(`${item.key}.category`)}</p>

              <h1 className="max-w-[1000px] text-[clamp(3.8rem,8vw,7.5rem)] leading-[0.85] font-semibold tracking-[-0.065em] uppercase">
                {t(`${item.key}.title`)}
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-lg leading-[1.45] font-medium tracking-[-0.025em] md:text-xl">{t(`${item.key}.summary`)}</p>

              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-semibold tracking-[0.14em] text-black/45 uppercase">
                <span>{item.stack[0]}</span>

                <span>/</span>

                <span>{statusLabel}</span>

                <span>/</span>

                <span>{code}</span>
              </div>
            </div>
          </div>

          {/* imagery */}

          {item.images.length > 0 && (
            <ProjectCarousel images={item.images} title={t(`${item.key}.title`)} locale={locale} priority className="w-full" />
          )}
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <Section number="01" label={id ? "Gambaran" : "Overview"}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionEyebrow>{id ? "Tentang proyek" : "About the project"}</SectionEyebrow>

            <p className="mt-5 max-w-4xl text-3xl leading-[1.12] font-medium tracking-[-0.035em] md:text-4xl lg:text-5xl">
              {t(`${item.key}.overview`)}
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <div className="border-t border-black/15 pt-5">
              <MetaRow label={id ? "Kategori" : "Category"} value={t(`${item.key}.category`)} />

              <MetaRow label={id ? "Status" : "Status"} value={statusLabel} />

              <MetaRow label={id ? "Peran" : "Role"} value={t(`${item.key}.role`)} last />
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================
          CHALLENGE
      ====================================================== */}

      <Section number="02" label={id ? "Tantangan" : "Challenge"} muted>
        <SectionEyebrow>{id ? "Masalah utama" : "The problem"}</SectionEyebrow>

        <h2 className="mt-5 max-w-4xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl lg:text-6xl">
          {t(`${item.key}.challengeTitle`)}
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-[1.7] text-black/60 md:text-lg">{t(`${item.key}.challenge`)}</p>

        <div className="mt-14 border-t border-black/15">
          {Array.from({ length: item.contentCount.challenges }).map((_, index) => (
            <ContentRow
              key={index}
              number={index + 1}
              title={t(`${item.key}.challengePoints.${index}.title`)}
              description={t(`${item.key}.challengePoints.${index}.description`)}
            />
          ))}
        </div>
      </Section>

      {/* =====================================================
          SOLUTION
      ====================================================== */}

      <section className="bg-[#FF4F00] px-5 py-20 text-[#1C1C18] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
          <SectionMarker number="03" label={id ? "Solusi" : "Solution"} />

          <div className="lg:col-span-9">
            <SectionEyebrow dark>{id ? "Pendekatan" : "Approach"}</SectionEyebrow>

            <h2 className="mt-5 max-w-4xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl lg:text-6xl">
              {t(`${item.key}.solutionTitle`)}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-[1.7] text-black/70 md:text-lg">{t(`${item.key}.solution`)}</p>

            <div className="mt-14 border-t border-black/25">
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                {Array.from({ length: item.contentCount.solutions }).map((_, index) => (
                  <SolutionItem
                    key={index}
                    number={index + 1}
                    title={t(`${item.key}.solutionPoints.${index}.title`)}
                    description={t(`${item.key}.solutionPoints.${index}.description`)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <Section number="04" label={id ? "Kapabilitas" : "Capabilities"}>
        <SectionEyebrow>{id ? "Yang dibangun" : "What was built"}</SectionEyebrow>

        <h2 className="mt-5 max-w-3xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl">
          {t(`${item.key}.capabilitiesTitle`)}
        </h2>

        <div className="mt-14 border-t border-black/15">
          {Array.from({ length: item.contentCount.capabilities }).map((_, index) => (
            <ContentRow
              key={index}
              number={index + 1}
              title={t(`${item.key}.capabilities.${index}.title`)}
              description={t(`${item.key}.capabilities.${index}.description`)}
            />
          ))}
        </div>
      </Section>

      {/* =====================================================
          ENGINEERING
      ====================================================== */}

      <section className="bg-[#1C1C18] px-5 py-20 text-[#F6F3EC] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
          <SectionMarker number="05" label="Engineering" dark />

          <div className="lg:col-span-9">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#FF4F00] uppercase">
              // {id ? "Di balik sistem" : "Behind the system"}
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl lg:text-6xl">
              {t(`${item.key}.engineeringTitle`)}
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-[1.7] text-white/55 md:text-lg">{t(`${item.key}.engineering`)}</p>

            {/* engineering points */}

            <div className="mt-14 border-t border-white/15">
              {Array.from({ length: item.contentCount.engineering }).map((_, index) => (
                <EngineeringRow
                  key={index}
                  number={index + 1}
                  title={t(`${item.key}.engineeringPoints.${index}.title`)}
                  description={t(`${item.key}.engineeringPoints.${index}.description`)}
                />
              ))}
            </div>

            {/* stack */}

            <div className="mt-16">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/35 uppercase">// Technology</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/15 px-3 py-2 text-[11px] font-medium tracking-[0.02em] text-white/65"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOME
      ====================================================== */}

      <Section number="06" label={id ? "Hasil" : "Outcome"} muted>
        <SectionEyebrow>{id ? "Hasil proyek" : "Project outcome"}</SectionEyebrow>

        <div className="mt-5 grid gap-10 lg:grid-cols-12">
          <h2 className="max-w-4xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl lg:col-span-7">
            {t(`${item.key}.outcomeTitle`)}
          </h2>

          <div className="lg:col-span-5 lg:pt-1">
            <p className="max-w-xl text-base leading-[1.75] text-black/60 md:text-lg">{t(`${item.key}.outcome`)}</p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 bg-primary" />

              <span className="text-[9px] font-semibold tracking-[0.16em] text-black/40 uppercase">{code} / RisenDev</span>
            </div>
          </div>
        </div>
      </Section>

      <ProjectCTA />
    </PageShell>
  );
}

/* ============================================================
   COMPONENTS
============================================================ */

function Section({
  number,
  label,
  muted = false,
  children,
}: {
  number: string;
  label: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={`px-5 py-20 text-[#1C1C18] md:px-10 md:py-24 lg:px-16 ${muted ? "bg-[#EFEBE2]" : "bg-[#FAF8F2]"}`}>
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
        <SectionMarker number={number} label={label} />

        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

function SectionMarker({ number, label, dark = false }: { number: string; label: string; dark?: boolean }) {
  return (
    <div className="lg:col-span-3">
      <div className="flex items-center gap-3">
        <span className={`text-[10px] font-semibold tracking-[0.14em] ${dark ? "text-[#FF4F00]" : "text-primary"}`}>{number}</span>

        <span className={`h-px w-8 ${dark ? "bg-white/20" : "bg-black/20"}`} />

        <span className={`text-[10px] font-semibold tracking-[0.16em] uppercase ${dark ? "text-white/35" : "text-black/40"}`}>{label}</span>
      </div>
    </div>
  );
}

function SectionEyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${dark ? "text-black/65" : "text-primary"}`}>// {children}</p>
  );
}

function ContentRow({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="group grid gap-3 border-b border-black/15 py-6 md:grid-cols-12 md:items-start md:gap-6 md:py-7">
      <span className="text-[10px] font-semibold tracking-[0.12em] text-primary md:col-span-1">{String(number).padStart(2, "0")}</span>

      <h3 className="text-xl leading-[1.15] font-semibold tracking-[-0.025em] md:col-span-4 md:text-2xl">{title}</h3>

      <p className="max-w-xl text-sm leading-[1.65] text-black/55 md:col-span-6 md:text-base">{description}</p>

      <span className="hidden justify-self-end text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary md:block">
        ↗
      </span>
    </div>
  );
}

function EngineeringRow({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="grid gap-3 border-b border-white/15 py-6 md:grid-cols-12 md:items-start md:gap-6 md:py-7">
      <span className="text-[10px] font-semibold tracking-[0.12em] text-[#FF4F00] md:col-span-1">{String(number).padStart(2, "0")}</span>

      <h3 className="text-xl leading-[1.15] font-semibold tracking-[-0.025em] text-white md:col-span-4 md:text-2xl">{title}</h3>

      <p className="max-w-xl text-sm leading-[1.65] text-white/50 md:col-span-6 md:text-base">{description}</p>
    </div>
  );
}

function SolutionItem({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="border-b border-black/25 py-6 md:border-r md:px-5">
      <span className="text-[9px] font-semibold tracking-[0.14em] text-black/45">{String(number).padStart(2, "0")}</span>

      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em]">{title}</h3>

      <p className="mt-2 max-w-[220px] text-sm leading-[1.55] text-black/60">{description}</p>
    </div>
  );
}

function MetaRow({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`grid grid-cols-[90px_1fr] gap-5 py-3 ${!last ? "border-b border-black/10" : ""}`}>
      <span className="text-[9px] font-semibold tracking-[0.14em] text-black/35 uppercase">{label}</span>

      <span className="text-sm leading-[1.5] font-medium">{value}</span>
    </div>
  );
}
