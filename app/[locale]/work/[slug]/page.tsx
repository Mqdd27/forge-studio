import { PageShell } from "@/components/ui/page-shell";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { cases } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { ProjectCTA } from "@/components/design/project-cta";

export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }): Promise<Metadata> {
  const item = cases.find((item) => item.slug === params.slug);
  if (!item) return {};
  const t = await getTranslations({ locale: params.locale, namespace: "Site.cases" });
  const title = t(`${item.key}.title`);
  const description = t(`${item.key}.summary`);
  const path = `/${params.locale}/work/${item.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: `/en/work/${item.slug}`, id: `/id/work/${item.slug}` } },
    openGraph: { type: "article", title, description, url: path },
    twitter: { card: "summary", title, description },
  };
}

export default async function CaseStudy({ params }: { params: { slug: string; locale: string } }) {
  setRequestLocale(params.locale);
  const item = cases.find((item) => item.slug === params.slug);
  if (!item) notFound();
  const t = await getTranslations({ locale: params.locale, namespace: "Site.cases" });
  const facts = item.facts.map((value, index) => ({ value, index })).filter(({ index }) => t.has(`${item.key}.facts.${index}`));
  const id = params.locale === "id";
  const order = cases.findIndex((c) => c.slug === item.slug);
  const code = `F-${String(order + 1).padStart(2, "0")}`;

  return (
    <PageShell>
      <div className="border-b border-[#111111] px-5 pt-10 pb-12 md:px-12 md:pt-14 md:pb-16">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#A93100] uppercase"
        >
          <span className="transition-transform duration-150 group-hover:-translate-x-1" aria-hidden="true">
            ←
          </span>
          <span>{id ? "Kembali ke semua portofolio" : "Back to all work"}</span>
        </Link>
        <p className="eyebrow mt-6 text-[#A93100]">
          [ {id ? "Arsip rekayasa" : "Engineering archive"} {"//"} {code} ]
        </p>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h1 className="font-[family-name:var(--font-geist-sans)] text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:col-span-9 md:text-6xl">
            {t(`${item.key}.title`)}
          </h1>
          <dl className="grid content-start gap-px border border-[#111111] bg-[#111111] md:col-span-3">
            <div className="bg-[#FFFDF7] px-4 py-3">
              <dt className="eyebrow text-[#5F5E5E]">{id ? "Layanan" : "Service"}</dt>
              <dd className="mt-1 text-sm font-semibold">{t(`${item.key}.category`)}</dd>
            </div>
            <div className="bg-[#FFFDF7] px-4 py-3">
              <dt className="eyebrow text-[#5F5E5E]">Stack</dt>
              <dd className="mt-1 text-sm font-semibold">{item.stack.slice(0, 3).join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-[#5C4037] md:text-lg">{t(`${item.key}.summary`)}</p>
        <p className="mt-2 max-w-[65ch] text-[15px] leading-relaxed text-[#5F5E5E]">{t(`${item.key}.description`)}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12">
        <aside className="border-b border-[#111111] px-5 py-8 md:col-span-3 md:border-r md:border-b-0 md:px-8">
          <div className="md:sticky md:top-28">
            <p className="eyebrow text-[#5F5E5E]">{id ? "Di halaman ini" : "On this page"}</p>
            <nav aria-label={id ? "Isi studi kasus" : "Case study contents"} className="mt-4 flex flex-col">
              {[
                ["problem", id ? "01 — Hambatan" : "01 — Problem"],
                ["solution", id ? "02 — Rekayasa" : "02 — Solution"],
                ["features", id ? "03 — Fitur" : "03 — Features"],
                ["technical", id ? "04 — Teknis" : "04 — Technical"],
                ["outcome", id ? "05 — Hasil" : "05 — Outcome"],
              ].map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="border-t border-[#111111]/20 py-2.5 text-xs font-semibold tracking-[0.06em] uppercase transition-colors last:border-b hover:text-[#A93100]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="md:col-span-9">
          <section id="problem" className="scroll-mt-28 border-b border-[#111111] px-5 py-10 md:px-10 md:py-14">
            <p className="eyebrow text-[#A93100]">{id ? "// Tahap 01 : Analisis hambatan" : "// Phase 01: Problem analysis"}</p>
            <h2 className="mt-2 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
              {id ? "Masalah" : "Problem"}
            </h2>
            <p className="mt-4 max-w-[62ch] border-l-2 border-[#FF4F00] pl-4 font-[family-name:var(--font-geist-sans)] text-lg leading-snug font-medium tracking-tight md:text-xl">
              “{t(`${item.key}.problem`)}”
            </p>
          </section>

          <section id="solution" className="scroll-mt-28 border-b border-[#111111] bg-[#F6F3EC] px-5 py-10 md:px-10 md:py-14">
            <p className="eyebrow text-[#A93100]">{id ? "// Tahap 02 : Rekayasa sistem" : "// Phase 02: System engineering"}</p>
            <h2 className="mt-2 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
              {id ? "Solusi" : "Solution"}
            </h2>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed md:text-base">{t(`${item.key}.solution`)}</p>
            <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#5F5E5E]">{t(`${item.key}.engineering`)}</p>
          </section>

          <section id="features" className="scroll-mt-28 border-b border-[#111111] px-5 py-10 md:px-10 md:py-14">
            <p className="eyebrow text-[#A93100]">{id ? "// Tahap 03 : Cakupan" : "// Phase 03: Scope"}</p>
            <h2 className="mt-2 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
              {id ? "Fitur utama" : "Key features"}
            </h2>
            <ul className="mt-6 list-none space-y-0 border border-[#111111] p-0">
              {item.scope.map((value, index) => (
                <li key={value} className="flex gap-4 border-b border-[#111111]/15 p-4 last:border-b-0">
                  <span className="eyebrow text-[#A93100]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[15px]">{t(`${item.key}.scope.${index}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="technical"
            className="scroll-mt-28 border-b border-[#111111] bg-[#111111] px-5 py-10 text-[#F3F0E9] md:px-10 md:py-14"
          >
            <p className="eyebrow text-[#FF4F00]">{id ? "// Tahap 04 : Gambaran teknis" : "// Phase 04: Technical overview"}</p>
            <h2 className="mt-2 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
              {id ? "Teknis" : "Technical"}
            </h2>
            {item.stack.length > 0 && (
              <ul className="mt-6 flex list-none flex-wrap gap-1.5 p-0">
                {item.stack.map((value) => (
                  <li key={value} className="border border-[#F3F0E9]/35 px-2.5 py-1 font-mono text-xs">
                    {value}
                  </li>
                ))}
              </ul>
            )}
            {facts.length > 0 && (
              <ul className="mt-6 list-none space-y-2 p-0">
                {facts.map(({ value, index }) => (
                  <li key={value} className="border-l-2 border-[#FF4F00] pl-3 text-sm text-[#B9B5AE]">
                    {t(`${item.key}.facts.${index}`)}
                  </li>
                ))}
              </ul>
            )}
            {item.repositoryUrl && (
              <a
                href={item.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-[#FF4F00] uppercase underline underline-offset-4"
              >
                {id ? "Lihat repositori" : "View repository"} ↗
              </a>
            )}
          </section>

          <section id="outcome" className="scroll-mt-28 px-5 py-10 md:px-10 md:py-14">
            <p className="eyebrow text-[#A93100]">{id ? "// Tahap 05 : Hasil" : "// Phase 05: Outcome"}</p>
            <h2 className="mt-2 font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight uppercase md:text-3xl">
              {id ? "Hasil" : "Outcome"}
            </h2>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed md:text-base">{t(`${item.key}.outcome`)}</p>
          </section>
        </div>
      </div>

      <ProjectCTA locale={params.locale} />
    </PageShell>
  );
}
