import Link from "next/link";
import { WorkVisual } from "./visual";
import type { cases } from "../data/site";
export function WorkCard({item,index}:{item:(typeof cases)[number];index:number}){return <Link href={`/work/${index===0?"nexus-analytics":index===1?"globalfreight":"stripe-erp"}`} className="card case-card"><WorkVisual type={item.visual}/><div className="content"><div className="tags"><span className="tag accent">{item.category}</span><span className="tag">Case study</span></div><h3>{item.title}</h3><p>{item.summary}</p></div></Link>}
