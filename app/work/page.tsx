"use client";

import { useState } from "react";
import { PageIntro } from "../../components/page-intro";
import { cases } from "../../data/site";
import { WorkCard } from "../../components/work-card";

const filters = ["All", "Custom App", "SaaS", "Automation", "Integration"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? cases : cases.filter((item) => item.category === filter);

  return <main><PageIntro eyebrow="Selected work" title="Built around the problem, not the technology."><p>A selection of software projects built for real operational needs.</p></PageIntro><div className="container work-main"><div className="filters" role="tablist" aria-label="Filter projects">{filters.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div>{shown.length ? <div className="grid-3">{shown.map((item) => <WorkCard item={item} key={item.slug} />)}</div> : <div className="empty">No projects in this category yet. <a href="/contact">Talk to us about your challenge →</a></div>}</div></main>;
}
