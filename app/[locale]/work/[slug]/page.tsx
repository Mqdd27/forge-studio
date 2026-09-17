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
  const id = params.locale === "id";
  const order = cases.findIndex((c) => c.slug === item.slug);
  const code = `F-${String(order + 1).padStart(2, "0")}`;
  const facts = item.facts.map((value, index) => ({ value, index })).filter(({ index }) => t.has(`${item.key}.facts.${index}`));

  return (
    <PageShell>
      <section className="w-full bg-surface px-margin py-space-md md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-md">
          <div className="flex items-center justify-between pb-space-xs">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-label-md tracking-wider text-primary uppercase transition-colors hover:text-on-surface"
            >
              ← {id ? "KEMBALI KE SEMUA PORTOFOLIO" : "BACK TO ALL WORK"}
            </Link>
            <div className="font-label-sm tracking-widest text-on-surface-variant uppercase">
              [ {id ? "ARSIP REKAYASA" : "ENGINEERING ARCHIVE"} // {code} ]
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 bg-surface-container-low px-space-md py-space-sm shadow-sm md:grid-cols-4">
            <div>
              <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">// PROJECT</span>
              <p className="font-headline-sm font-semibold">
                {String(order + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
              </p>
            </div>
            <div>
              <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">{`// ${id ? "KATEGORI" : "CATEGORY"}`}</span>
              <p className="font-body-md font-medium">{t(`${item.key}.category`)}</p>
            </div>
            <div>
              <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">// STACK</span>
              <p className="font-body-sm">{item.stack.slice(0, 4).join(" · ")}</p>
            </div>
            <div>
              <span className="font-label-sm tracking-widest text-on-surface-variant uppercase">{`// ${id ? "CAKUPAN" : "SCOPE"}`}</span>
              <p className="font-body-sm">
                {item.scope.length} {id ? "fitur/cakupan terdokumentasi" : "documented scope items"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface px-margin pt-space-md pb-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-lg">
          <div className="grid grid-cols-1 items-end gap-gutter-desktop lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 font-label-md tracking-widest text-primary uppercase">
                <span className="h-2 w-2 bg-primary" /> {id ? "STUDI KASUS" : "CASE STUDY"} / {t(`${item.key}.category`)}
              </div>
              <h1 className="text-display-lg-mobile md:text-display-lg mt-3 font-display-lg tracking-tight uppercase">
                {t(`${item.key}.title`)}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body-lg leading-relaxed text-on-surface-variant">{t(`${item.key}.summary`)}</p>
            </div>
          </div>
          <div className="w-full overflow-hidden bg-inverse-surface p-space-md text-inverse-on-surface shadow-xl md:p-space-lg">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-space-sm">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-primary" />
                <span className="font-label-md tracking-wider text-surface-dim uppercase">PROJECT SYSTEM // {code}</span>
              </div>
              <span className="bg-primary px-2 py-0.5 font-label-sm font-semibold text-on-primary">DOCUMENTED PORTFOLIO</span>
            </div>
            <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
              <div className="flex min-h-[320px] flex-col justify-between bg-surface/10 p-space-md lg:col-span-8">
                <span className="font-label-sm tracking-widest text-primary-fixed uppercase">{`// ${id ? "GAMBARAN PROYEK" : "PROJECT OVERVIEW"}`}</span>
                <p className="max-w-3xl font-headline-md text-inverse-on-surface">{t(`${item.key}.description`)}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <span key={s} className="border border-surface-dim/25 px-3 py-1 font-label-sm text-surface-dim">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:col-span-4">
                {item.scope.slice(0, 5).map((_, i) => (
                  <div key={i} className="bg-surface/10 p-3">
                    <span className="font-label-sm text-primary-fixed">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-1 font-body-sm text-surface-dim">{t(`${item.key}.scope.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-inverse-surface px-margin py-space-xl text-inverse-on-surface md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto max-w-7xl">
          <span className="font-label-sm tracking-widest text-primary-fixed uppercase">{`// ${id ? "TAHAP 01 : ANALISIS HAMBATAN" : "PHASE 01 : PROBLEM ANALYSIS"}`}</span>
          <h2 className="mt-3 max-w-4xl font-headline-lg">“{t(`${item.key}.problem`)}”</h2>
        </div>
      </section>

      <section className="w-full bg-surface px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter-desktop lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-label-sm tracking-widest text-primary uppercase">{`// ${id ? "TAHAP 02 : REKAYASA SISTEM" : "PHASE 02 : SYSTEM ENGINEERING"}`}</span>
            <h2 className="mt-3 font-display-lg-mobile tracking-tight uppercase md:font-display-lg">
              {id ? "SOLUSI YANG DIBANGUN" : "THE BUILT SOLUTION"}
            </h2>
          </div>
          <div className="flex flex-col gap-space-md lg:col-span-7">
            <div className="bg-surface-container p-space-md">
              <h3 className="font-headline-md">{t(`${item.key}.solution`)}</h3>
              <p className="mt-4 font-body-md leading-relaxed text-on-surface-variant">{t(`${item.key}.engineering`)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto flex max-w-7xl flex-col gap-space-lg">
          <div>
            <span className="font-label-sm tracking-widest text-primary uppercase">{`// ${id ? "TAHAP 03 : KAPABILITAS UTAMA" : "PHASE 03 : KEY CAPABILITIES"}`}</span>
            <h2 className="mt-2 font-headline-lg">{id ? "Fitur dan cakupan yang terdokumentasi" : "Documented features and scope"}</h2>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {item.scope.map((_, i) => (
              <div key={i} className="min-h-[180px] bg-surface p-space-md">
                <div className="flex justify-between">
                  <span className="font-label-sm font-semibold text-primary">[ {String(i + 1).padStart(2, "0")} ]</span>
                  <span className="font-label-sm text-on-surface-variant">{code}</span>
                </div>
                <p className="mt-8 font-headline-sm">{t(`${item.key}.scope.${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-inverse-surface px-margin py-space-xl text-inverse-on-surface md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter-desktop lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-label-sm tracking-widest text-primary-fixed uppercase">{`// ${id ? "TAHAP 04 : ENGINEERING" : "PHASE 04 : ENGINEERING"}`}</span>
            <h2 className="mt-2 font-headline-lg">Technical Stack</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <span key={s} className="border border-surface-dim/30 px-3 py-2 font-label-md">
                  {s}
                </span>
              ))}
            </div>
            {facts.length > 0 && (
              <div className="mt-8 flex flex-col gap-2">
                {facts.map(({ value, index }) => (
                  <div key={value} className="bg-surface/5 p-4 font-body-sm text-surface-dim">
                    {t(`${item.key}.facts.${index}`)}
                  </div>
                ))}
              </div>
            )}
            {item.repositoryUrl && (
              <a
                href={item.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex font-label-md text-primary-fixed uppercase underline underline-offset-4"
              >
                {id ? "Lihat repositori" : "View repository"} ↗
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary-container px-margin py-space-xl md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto max-w-7xl">
          <span className="font-label-sm tracking-widest uppercase">{`// ${id ? "TAHAP 05 : HASIL" : "PHASE 05 : OUTCOME"}`}</span>
          <h2 className="mt-4 max-w-5xl font-display-lg-mobile tracking-tight uppercase md:font-display-lg">{t(`${item.key}.outcome`)}</h2>
        </div>
      </section>
      <ProjectCTA locale={params.locale} />
    </PageShell>
  );
}
