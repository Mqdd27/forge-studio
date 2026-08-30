import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../../data/site";
import { WorkVisual } from "../../../components/visual";

const slugs = ["nexus-analytics", "globalfreight", "stripe-erp"];
export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const index = slugs.indexOf(params.slug);
  if (index < 0) return notFound();
  const item = cases[index];
  return <main>
    <section className="container case-hero"><div className="eyebrow">{item.category} / Case study</div><h1>{item.title}</h1><p>{item.summary}</p><WorkVisual type={item.visual} /></section>
    <div className="container case-body">
      <CaseSection number="01" title="Business context was scattered across too many tools." text="The team needed a more dependable way to see what was happening, make decisions, and move work forward without manual reconciliation." />
      <CaseSection number="02" title="A focused system built around the daily workflow." text="We mapped the key operational moments, then designed and engineered a clear interface that gave the team one shared source of truth." />
      <CaseSection number="03" title="Simple foundations, ready for the next stage." text="Modular services, clear data boundaries, and a delivery process that kept feedback close to the work." />
      <section className="case-result"><div className="eyebrow">04 / Result</div><h2>Less operational noise. More room for useful work.</h2><p>The finished system gave the team better visibility and a calmer, more consistent way to operate.</p></section>
    </div>
    <section className="closing"><div className="container"><h2>Have a similar challenge?</h2><Link className="btn btn-primary" href="/contact">Start a Project</Link></div></section>
  </main>;
}

function CaseSection({ number, title, text }: { number: string; title: string; text: string }) { return <section><div className="eyebrow">{number} /</div><h2>{title}</h2><p>{text}</p></section>; }
