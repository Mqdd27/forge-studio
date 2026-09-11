import { PageShell } from "@/components/ui/page-shell";
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
    <PageShell className="mx-auto w-full max-w-[1240px] px-6 py-12 sm:px-8 md:py-20 lg:px-10">
      <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#b5501a]">
        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
          ←
        </span>
        <span>{id ? "Semua portofolio" : "All work"}</span>
      </Link>
      <header className="mt-8 max-w-4xl">
        <p className="font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">{t(`${item.key}.category`)}</p>
        <h1 className="mt-3 font-[family-name:var(--font-manrope)] text-3xl leading-tight font-bold tracking-tight text-[#1f1f1f] sm:text-5xl md:text-6xl">
          {t(`${item.key}.title`)}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#595959] sm:text-xl">{t(`${item.key}.summary`)}</p>
        <p className="mt-3 text-base leading-relaxed text-[#595959]">{t(`${item.key}.description`)}</p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[160px_minmax(0,1fr)] lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="self-start md:sticky md:top-28">
          <p className="font-mono text-[11px] font-semibold tracking-wider text-[#8c8c8c] uppercase">
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
              <a key={key} href={`#${key}`} className="py-1 text-xs font-medium text-[#595959] transition-colors hover:text-[#b5501a]">
                {label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 [&_section]:scroll-mt-28">
          <div className="max-w-3xl">
            <div className="min-w-0">
              {(
                [
                  ["problem", id ? "Tantangan" : "Problem"],
                  ["solution", id ? "Solusi" : "Solution"],
                ] as const
              ).map(([key, label]) => (
                <section id={key} key={key} className="border-t border-[#e3ddd5] py-8">
                  <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold text-[#1f1f1f]">{label}</h2>
                  <p className="mt-4 text-base leading-relaxed text-[#595959] sm:text-lg">{t(`${item.key}.${key}`)}</p>
                </section>
              ))}
              <section id="features" className="border-t border-[#e3ddd5] py-8">
                <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold text-[#1f1f1f]">
                  {id ? "Fitur utama" : "Key features"}
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-[#595959]">
                  {item.scope.map((value, index) => (
                    <li key={value}>{t(`${item.key}.scope.${index}`)}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          {presentation.screenshots.length > 0 && (
            <section className="mt-8 border-t border-[#e3ddd5] py-8">
              <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold text-[#1f1f1f]">
                {id ? "Tampilan aplikasi" : "Screenshots"}
              </h2>
              <div className="mt-6 grid gap-6">
                {presentation.screenshots.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-xl border border-[#e3ddd5] bg-[#ffffff] shadow-md">
                    <div className="flex items-center gap-1.5 border-b border-[#e3ddd5]/70 bg-[#FBF9F7] px-4 py-2.5" aria-hidden="true">
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
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
          <details
            id="technical"
            className="scroll-mt-28 border-y border-[#e3ddd5] [&_summary]:flex [&_summary]:list-none [&_summary]:items-center [&_summary]:justify-between [&_summary]:gap-4 [&_summary]:after:content-['+'] open:[&_summary]:after:content-['−']"
          >
            <summary className="cursor-pointer py-6 select-none">
              <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold text-[#1f1f1f]">
                {id ? "Gambaran teknis" : "Technical overview"}
              </h2>
            </summary>{" "}
            <section className="mt-4 max-w-3xl border-t border-[#e3ddd5] py-8">
              <p className="text-base leading-relaxed text-[#595959] sm:text-lg">{t(`${item.key}.engineering`)}</p>{" "}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {item.stack.length > 0 && (
                  <section className="rounded-xl border border-[#e3ddd5] bg-[#ffffff] p-6">
                    <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#1f1f1f]">
                      {id ? "Teknologi" : "Technology stack"}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((value) => (
                        <li
                          key={value}
                          className="rounded border border-[#e3ddd5]/70 bg-[#f7f4f0] px-2.5 py-1 font-mono text-xs text-[#595959]"
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                {item.facts.length > 0 && (
                  <section className="rounded-xl border border-[#e3ddd5] bg-[#ffffff] p-6">
                    <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#1f1f1f]">
                      {id ? "Fakta proyek" : "Project facts"}
                    </h3>
                    <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-[#595959]">
                      {item.facts.map((value, index) => (
                        <li key={value}>{t(`${item.key}.facts.${index}`)}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </section>
          </details>
          <section id="outcome" className="max-w-3xl border-t border-[#e3ddd5] py-8">
            <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold text-[#1f1f1f]">{id ? "Hasil" : "Outcome"}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#595959] sm:text-lg">{t(`${item.key}.outcome`)}</p>
          </section>
        </div>
      </div>
      <div className="mt-12 border-t border-[#e3ddd5] pt-10">
        <Link
          href="/start-a-project"
          className="group inline-flex items-center gap-2 rounded-lg bg-[#c34810] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#a63409]"
        >
          <span>{id ? "Mulai Proyek" : "Start a Project"}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </PageShell>
  );
}
