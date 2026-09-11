import Link from "next/link";
import { WorkVisual } from "./visual";
import type { cases } from "../data/site";

export function WorkCard({ item }: { item: (typeof cases)[number] }) {
  return <Link href={`/work/${item.slug}`} className="card case-card">
    <WorkVisual type={item.visual} />
    <div className="content"><div className="tags"><span className="tag accent">{item.category}</span><span className="tag">Case study</span></div><h3>{item.title}</h3><p>{item.summary}</p></div>
  </Link>;
}
