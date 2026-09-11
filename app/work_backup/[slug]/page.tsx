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
  return {
    title: item.title,
    description,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: { type: "article", url: `${siteUrl}/work/${item.slug}`, title: `${item.title} | Forge Studio`, description }
  };
}

export default function CaseStudy({ params }: Props) {
  const item = cases.find((caseStudy) => caseStudy.slug === params.slug);
  if (!item) return notFound();

  const url = `${siteUrl}/work/${item.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    url,
    creator: { "@type": "Organization", name: "Forge Studio", url: siteUrl },
    about: item.scope
  };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <article className="case-study">
      <header className="container case-header">
        <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link href="/work">Work</Link><span>/</span><span>{item.title}</span></nav>
        <div className="case-header-copy"><div className="tags"><span className="tag accent">{item.category}</span><span className="tag">Case study</span></div><h1>{item.title}</h1><p>{item.summary}</p></div>
        <div className="case-visual"><WorkVisual type={item.visual} /></div>
      </header>

      <div className="container case-layout">
        <aside className="case-aside"><span className="label">Project overview</span><dl><div><dt>Category</dt><dd>{item.category}</dd></div>{item.stack.length > 0 && <div><dt>Stack</dt><dd>{item.stack.slice(0, 3).join(", ")}</dd></div>}{item.repositoryUrl && <div><dt>Source</dt><dd><a href={item.repositoryUrl} target="_blank" rel="noreferrer">GitHub ↗</a></dd></div>}</dl></aside>
        <div className="case-content">
          <CaseSection number="01" title="Problem" text={item.problem} />
          <CaseSection number="02" title="Solution" text={item.solution} />
          <CaseSection number="03" title="Engineering approach" text={item.engineering} />
          <section className="case-section case-scope"><div className="eyebrow">04 / Scope</div><h2>What the project covers.</h2><ul>{item.scope.map((scope) => <li key={scope}>{scope}</li>)}</ul></section>
          {item.facts.length > 0 && <section className="case-section"><div className="eyebrow">05 / Project details</div><h2>Built for a complete research workflow.</h2><ul>{item.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></section>}
          {item.stack.length > 0 && <section className="case-section"><div className="eyebrow">Technology</div><div className="tags">{item.stack.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div></section>}
        </div>
      </div>
    </article>
    <section className="closing"><div className="container"><div className="eyebrow">Have a similar challenge?</div><h2>Let’s make the next step practical.</h2><Link className="btn btn-primary" href="/contact">Start a Project</Link></div></section>
  </main>;
}

function CaseSection({ number, title, text }: { number: string; title: string; text: string }) { return <section className="case-section"><div className="eyebrow">{number} /</div><h2>{title}</h2><p>{text}</p></section>; }
