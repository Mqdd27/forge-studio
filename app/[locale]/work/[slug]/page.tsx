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
  const facts = item.facts.map((value,index)=>({value,index})).filter(({index})=>t.has(`${item.key}.facts.${index}`));

  return <PageShell>
    <section className="w-full bg-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-md">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-xs"><Link href="/work" className="inline-flex items-center gap-2 font-label-md uppercase tracking-wider text-primary hover:text-on-surface transition-colors">← {id?'KEMBALI KE SEMUA PORTOFOLIO':'BACK TO ALL WORK'}</Link><div className="font-label-sm uppercase tracking-widest text-on-surface-variant">[ {id?'ARSIP REKAYASA':'ENGINEERING ARCHIVE'} // {code} ]</div></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 bg-surface-container-low px-space-md py-space-sm shadow-sm">
          <div><span className="font-label-sm uppercase tracking-widest text-on-surface-variant">// PROJECT</span><p className="font-headline-sm font-semibold">{String(order+1).padStart(2,'0')} / {String(cases.length).padStart(2,'0')}</p></div>
          <div><span className="font-label-sm uppercase tracking-widest text-on-surface-variant">{`// ${id?'KATEGORI':'CATEGORY'}`}</span><p className="font-body-md font-medium">{t(`${item.key}.category`)}</p></div>
          <div><span className="font-label-sm uppercase tracking-widest text-on-surface-variant">// STACK</span><p className="font-body-sm">{item.stack.slice(0,4).join(' · ')}</p></div>
          <div><span className="font-label-sm uppercase tracking-widest text-on-surface-variant">{`// ${id?'CAKUPAN':'SCOPE'}`}</span><p className="font-body-sm">{item.scope.length} {id?'fitur/cakupan terdokumentasi':'documented scope items'}</p></div>
        </div>
      </div>
    </section>

    <section className="w-full bg-surface px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-md pb-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end"><div className="lg:col-span-8"><div className="inline-flex items-center gap-2 text-primary font-label-md uppercase tracking-widest"><span className="w-2 h-2 bg-primary"/> {id?'STUDI KASUS':'CASE STUDY'} / {t(`${item.key}.category`)}</div><h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase tracking-tight mt-3">{t(`${item.key}.title`)}</h1></div><div className="lg:col-span-4"><p className="font-body-lg text-on-surface-variant leading-relaxed">{t(`${item.key}.summary`)}</p></div></div>
        <div className="w-full bg-inverse-surface text-inverse-on-surface p-space-md md:p-space-lg shadow-xl overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-space-sm"><div className="flex items-center gap-3"><span className="w-3 h-3 bg-primary"/><span className="font-label-md uppercase tracking-wider text-surface-dim">PROJECT SYSTEM // {code}</span></div><span className="bg-primary text-on-primary px-2 py-0.5 font-label-sm font-semibold">DOCUMENTED PORTFOLIO</span></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter"><div className="lg:col-span-8 bg-surface/10 p-space-md flex flex-col justify-between min-h-[320px]"><span className="font-label-sm uppercase tracking-widest text-primary-fixed">{`// ${id?'GAMBARAN PROYEK':'PROJECT OVERVIEW'}`}</span><p className="font-headline-md text-inverse-on-surface max-w-3xl">{t(`${item.key}.description`)}</p><div className="flex flex-wrap gap-2">{item.stack.map(s=><span key={s} className="border border-surface-dim/25 px-3 py-1 font-label-sm text-surface-dim">{s}</span>)}</div></div><div className="lg:col-span-4 flex flex-col gap-2">{item.scope.slice(0,5).map((_,i)=><div key={i} className="bg-surface/10 p-3"><span className="font-label-sm text-primary-fixed">{String(i+1).padStart(2,'0')}</span><p className="font-body-sm text-surface-dim mt-1">{t(`${item.key}.scope.${i}`)}</p></div>)}</div></div>
        </div>
      </div>
    </section>

    <section className="w-full bg-inverse-surface text-inverse-on-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl"><div className="max-w-7xl mx-auto"><span className="font-label-sm uppercase tracking-widest text-primary-fixed">{`// ${id?'TAHAP 01 : ANALISIS HAMBATAN':'PHASE 01 : PROBLEM ANALYSIS'}`}</span><h2 className="font-headline-lg max-w-4xl mt-3">“{t(`${item.key}.problem`)}”</h2></div></section>

    <section className="w-full bg-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop"><div className="lg:col-span-5"><span className="font-label-sm uppercase tracking-widest text-primary">{`// ${id?'TAHAP 02 : REKAYASA SISTEM':'PHASE 02 : SYSTEM ENGINEERING'}`}</span><h2 className="font-display-lg-mobile md:font-display-lg uppercase tracking-tight mt-3">{id?'SOLUSI YANG DIBANGUN':'THE BUILT SOLUTION'}</h2></div><div className="lg:col-span-7 flex flex-col gap-space-md"><div className="p-space-md bg-surface-container"><h3 className="font-headline-md">{t(`${item.key}.solution`)}</h3><p className="font-body-md text-on-surface-variant mt-4 leading-relaxed">{t(`${item.key}.engineering`)}</p></div></div></div></section>

    <section className="w-full bg-surface-container-low px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl"><div className="max-w-7xl mx-auto flex flex-col gap-space-lg"><div><span className="font-label-sm uppercase tracking-widest text-primary">{`// ${id?'TAHAP 03 : KAPABILITAS UTAMA':'PHASE 03 : KEY CAPABILITIES'}`}</span><h2 className="font-headline-lg mt-2">{id?'Fitur dan cakupan yang terdokumentasi':'Documented features and scope'}</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">{item.scope.map((_,i)=><div key={i} className="bg-surface p-space-md min-h-[180px]"><div className="flex justify-between"><span className="font-label-sm text-primary font-semibold">[ {String(i+1).padStart(2,'0')} ]</span><span className="font-label-sm text-on-surface-variant">{code}</span></div><p className="font-headline-sm mt-8">{t(`${item.key}.scope.${i}`)}</p></div>)}</div></div></section>

    <section className="w-full bg-inverse-surface text-inverse-on-surface px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop"><div className="lg:col-span-5"><span className="font-label-sm uppercase tracking-widest text-primary-fixed">{`// ${id?'TAHAP 04 : ENGINEERING':'PHASE 04 : ENGINEERING'}`}</span><h2 className="font-headline-lg mt-2">Technical Stack</h2></div><div className="lg:col-span-7"><div className="flex flex-wrap gap-2">{item.stack.map(s=><span key={s} className="border border-surface-dim/30 px-3 py-2 font-label-md">{s}</span>)}</div>{facts.length>0&&<div className="mt-8 flex flex-col gap-2">{facts.map(({value,index})=><div key={value} className="bg-surface/5 p-4 text-surface-dim font-body-sm">{t(`${item.key}.facts.${index}`)}</div>)}</div>}{item.repositoryUrl&&<a href={item.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex mt-8 text-primary-fixed font-label-md uppercase underline underline-offset-4">{id?'Lihat repositori':'View repository'} ↗</a>}</div></div></section>

    <section className="w-full bg-primary-container px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl"><div className="max-w-7xl mx-auto"><span className="font-label-sm uppercase tracking-widest">{`// ${id?'TAHAP 05 : HASIL':'PHASE 05 : OUTCOME'}`}</span><h2 className="font-display-lg-mobile md:font-display-lg uppercase tracking-tight max-w-5xl mt-4">{t(`${item.key}.outcome`)}</h2></div></section>
    <ProjectCTA locale={params.locale}/>
  </PageShell>;
}
