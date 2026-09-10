import Image from "next/image";
import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon } from "./primitives";

const principles = [
  ["Understand before building.", "We start by understanding your team, your workflow, and the problem you need to solve."],
  ["Keep things practical.", "We choose solutions that fit your needs, without adding unnecessary complexity."],
  ["Build for the real world.", "We design software around the people who use it and the work they do every day."],
  ["Think beyond launch.", "We plan for maintenance, improvements, and the next stage of your business."],
];

export function AboutDesign() {
  return (
    <main className="design-page design-about about-page">
      <section className="section-full-width about-hero">
        <div className="about-hero-grid">
          <div className="about-intro">
            <p className="about-eyebrow">
              <DesignText>{"About Forge Studio"}</DesignText>
            </p>
            <h1>
              <DesignText>{"Small studio. Thoughtful software."}</DesignText>
            </h1>
            <p className="about-lead">
              <DesignText>
                {"We are an independent software studio helping businesses turn everyday challenges into reliable digital tools."}
              </DesignText>
            </p>
            <Link href="/contact" className="about-button btn-primary">
              <DesignText>{"Let's talk about your business"}</DesignText>
              <DesignIcon name="arrow_forward" />
            </Link>
          </div>
          <aside className="about-studio-card">
            <Image src="/img/forge-icon.png" alt="Forge Studio" width={72} height={72} className="rounded-2xl" />
            <h2>Forge Studio</h2>
            <p>
              <DesignText>{"Practical thinking. Careful engineering. Clear communication."}</DesignText>
            </p>
            <div className="about-studio-note">
              <span className="about-eyebrow">
                <DesignText>{"Our focus"}</DesignText>
              </span>
              <p>
                <DesignText>{"Web applications, business systems, and tools that make work simpler."}</DesignText>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-full-width about-principles bg-surface-alt border-y border-border">
        <div className="about-section-heading">
          <div>
            <p className="about-eyebrow">
              <DesignText>{"How we work"}</DesignText>
            </p>
            <h2>
              <DesignText>{"Our Principles"}</DesignText>
            </h2>
          </div>
          <p>
            <DesignText>{"A straightforward approach, from the first conversation to the software you use every day."}</DesignText>
          </p>
        </div>
        <div className="about-principle-grid">
          {principles.map(([title, description], index) => (
            <article className="about-principle" key={title}>
              <span className="about-principle-number">0{index + 1}</span>
              <h3>
                <DesignText>{title}</DesignText>
              </h3>
              <p>
                <DesignText>{description}</DesignText>
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-full-width about-approach">
        <div>
          <p className="about-eyebrow">
            <DesignText>{"A shared understanding"}</DesignText>
          </p>
          <h2>
            <DesignText>{"You know your business. We help with the technology."}</DesignText>
          </h2>
        </div>
        <div className="about-approach-copy">
          <p>
            <DesignText>
              {
                "You do not need a technical brief to start. Tell us what slows your team down, what feels difficult, or what you want to improve."
              }
            </DesignText>
          </p>
          <p>
            <DesignText>
              {"Together, we turn that into a clear plan: what to build, why it matters, and how it will support your day-to-day work."}
            </DesignText>
          </p>
          <Link href="/services" className="about-text-link">
            <DesignText>{"Explore our services"}</DesignText>
            <DesignIcon name="arrow_forward" />
          </Link>
        </div>
      </section>
      <section className="section-full-width about-cta bg-surface-alt border-t border-border">
        <div>
          <p className="about-eyebrow">
            <DesignText>{"Start a conversation"}</DesignText>
          </p>
          <h2>
            <DesignText>{"What would make work easier for your team?"}</DesignText>
          </h2>
        </div>
        <Link href="/contact" className="about-button btn-primary">
          <DesignText>{"Start a Project"}</DesignText>
          <DesignIcon name="arrow_forward" />
        </Link>
      </section>
    </main>
  );
}
