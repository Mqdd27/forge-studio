import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, siteUrl } from "../../../data/site";
import { WorkVisual } from "../../../components/visual";

type Props = { params: { slug: string } };

export function generateStaticParams() { return cases.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const item = cases.find((caseStudy) => caseStudy.slug === params.slug);
  if (!item) return {};
  const description = `${item.title}: ${item.summary}`;
  return { title: item.title, description, alternates: { canonical: `/work/${item.slug}` }, openGraph: { type: "article", url: `${siteUrl}/work/${item.slug}`, title: `${item.title} | Forge Studio`, description } };
}

export default function CaseStudy({ params }: Props) {
  const item = cases.find((caseStudy) => caseStudy.slug === params.slug);
  if (!item) return notFound();
  const url = `${siteUrl}/work/${item.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: item.title, description: item.description, url, creator: { "@type": "Organization", name: "Forge Studio", url: siteUrl }, about: item.scope };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="container case-hero"><div className="eyebrow">{item.category} / Case study</div><h1>{item.title}</h1><p>{item.summary}</p><WorkVisual type={item.visual} /></section>
    <div className="container case-body">
      <CaseSection number="01" title="Problem" text={item.problem} />
      <CaseSection number="02" title="Solution" text={item.solution} />
      <CaseSection number="03" title="Engineering approach" text={item.engineering} />
      <section className="case-result"><div className="eyebrow">04 / Scope</div><h2>What the project covers.</h2><ul>{item.scope.map((scope) => <li key={scope}>{scope}</li>)}</ul>{item.facts.length > 0 && <><div className="eyebrow case-subheading">Verified project details</div><ul>{item.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></>}{item.stack.length > 0 && <><div className="eyebrow case-subheading">Technology</div><div className="tags">{item.stack.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div></>}{item.repositoryUrl ? <a className="text-link" href={item.repositoryUrl} target="_blank" rel="noreferrer">View repository →</a> : <p>Implementation details, screenshots, and outcomes can be added as they are cleared for publication.</p>}</section>
    </div>
    <section className="closing"><div className="container"><h2>Have a similar challenge?</h2><Link className="btn btn-primary" href="/contact">Start a Project</Link></div></section>
  </main>;
}

function CaseSection({ number, title, text }: { number: string; title: string; text: string }) { return <section><div className="eyebrow">{number} /</div><h2>{title}</h2><p>{text}</p></section>; }
