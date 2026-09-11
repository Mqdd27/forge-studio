import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { workPresentation } from "@/data/work-presentation";
import { cases } from "@/data/site";
import { Link } from "@/i18n/navigation";

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
  const presentation = workPresentation[item.key];
  const id = params.locale === "id";
  return (
    <main className="stitch-page stitch-legacy design-page design-case mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20 lg:px-10">
      <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
          ←
        </span>
        <span>{id ? "Semua portofolio" : "All work"}</span>
      </Link>
      <header className="mt-8 max-w-4xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">{t(`${item.key}.category`)}</p>
        <h1 className="mt-3 font-heading text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-ink">
          {t(`${item.key}.title`)}
        </h1>
        <p className="mt-5 text-lg sm:text-xl leading-relaxed text-grey">{t(`${item.key}.summary`)}</p>
        <p className="mt-3 text-base leading-relaxed text-grey">{t(`${item.key}.description`)}</p>
      </header>
      <div className="case-layout mt-12">
        <aside className="case-index">
          <p className="font-mono text-[11px] font-semibold tracking-wider text-muted uppercase">
            {id ? "Di halaman ini" : "On this page"}
          </p>
          <nav aria-label={id ? "Isi studi kasus" : "Case study contents"} className="mt-4 flex flex-col space-y-1">
            {[
              ["problem", id ? "Tantangan" : "Problem"],
              ["solution", id ? "Solusi" : "Solution"],
              ["features", id ? "Fitur utama" : "Key features"],
              ["technical", id ? "Gambaran teknis" : "Technical overview"],
              ["outcome", id ? "Hasil" : "Outcome"],
            ].map(([key, label]) => (
              <a key={key} href={`#${key}`} className="py-1 text-xs font-medium text-grey hover:text-accent transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="case-story">
          <div className="max-w-3xl">
            <div className="min-w-0">
              {(
                [
                  ["problem", id ? "Tantangan" : "Problem"],
                  ["solution", id ? "Solusi" : "Solution"],
                ] as const
              ).map(([key, label]) => (
                <section id={key} key={key} className="border-t border-border py-8">
                  <h2 className="font-heading text-2xl font-semibold text-ink">{label}</h2>
                  <p className="mt-4 leading-relaxed text-grey text-base sm:text-lg">{t(`${item.key}.${key}`)}</p>
                </section>
              ))}
              <section id="features" className="border-t border-border py-8">
                <h2 className="font-heading text-2xl font-semibold text-ink">{id ? "Fitur utama" : "Key features"}</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-grey text-base leading-relaxed">
                  {item.scope.map((value, index) => (
                    <li key={value}>{t(`${item.key}.scope.${index}`)}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          {presentation.screenshots.length > 0 && (
            <section className="mt-8 border-t border-border py-8">
              <h2 className="font-heading text-2xl font-semibold text-ink">{id ? "Tampilan aplikasi" : "Screenshots"}</h2>
              <div className="mt-6 grid gap-6">
                {presentation.screenshots.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-xl border border-border bg-surface shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-border/70 bg-[#FBF9F7] px-4 py-2.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-[#E06C75]/70" />
                      <span className="h-2 w-2 rounded-full bg-[#E5C07B]/70" />
                      <span className="h-2 w-2 rounded-full bg-[#98C379]/70" />
                    </div>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 767px) 100vw, 900px"
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
          <details id="technical" className="case-technical">
            <summary className="cursor-pointer py-6 select-none">
              <h2 className="font-heading text-2xl font-semibold text-ink">{id ? "Gambaran teknis" : "Technical overview"}</h2>
            </summary>{" "}
            <section className="mt-4 max-w-3xl border-t border-border py-8">
              <p className="leading-relaxed text-grey text-base sm:text-lg">{t(`${item.key}.engineering`)}</p>{" "}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {item.stack.length > 0 && (
                  <section className="rounded-xl border border-border bg-surface p-6">
                    <h3 className="font-heading text-lg font-semibold text-ink">{id ? "Teknologi" : "Technology stack"}</h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((value) => (
                        <li key={value} className="rounded border border-border/70 bg-alt px-2.5 py-1 font-mono text-xs text-grey">
                          {value}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                {item.facts.length > 0 && (
                  <section className="rounded-xl border border-border bg-surface p-6">
                    <h3 className="font-heading text-lg font-semibold text-ink">{id ? "Fakta proyek" : "Project facts"}</h3>
                    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-grey">
                      {item.facts.map((value, index) => (
                        <li key={value}>{t(`${item.key}.facts.${index}`)}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </section>
          </details>
          <section id="outcome" className="max-w-3xl border-t border-border py-8">
            <h2 className="font-heading text-2xl font-semibold text-ink">{id ? "Hasil" : "Outcome"}</h2>
            <p className="mt-4 leading-relaxed text-grey text-base sm:text-lg">{t(`${item.key}.outcome`)}</p>
          </section>
        </div>
      </div>
      <div className="mt-12 border-t border-border pt-10">
        <Link
          href="/start-a-project"
          className="btn-primary group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white"
        >
          <span>{id ? "Mulai Proyek" : "Start a Project"}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}
