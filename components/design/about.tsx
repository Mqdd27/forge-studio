import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { DesignText } from "@/components/ui/design-text";

const principles = [
  ["Understand before building.", "We start by understanding your team, your workflow, and the problem you need to solve."],
  ["Keep things practical.", "We choose solutions that fit your needs, without adding unnecessary complexity."],
  ["Build for the real world.", "We design software around the people who use it and the work they do every day."],
  ["Think beyond launch.", "We plan for maintenance, improvements, and the next stage of your business."],
];

export function AboutDesign() {
  return (
    <main className="stitch-page stitch-legacy design-page design-about about-page">
      <section className="section-full-width about-hero py-16 md:py-24">
        <div className="about-hero-grid">
          <div className="about-intro">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4">
              <DesignText>{"About Forge Studio"}</DesignText>
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink">
              <DesignText>{"Practical software, built for real work."}</DesignText>
            </h1>
            <p className="about-lead mt-6 text-base sm:text-lg leading-relaxed text-grey max-w-xl">
              <DesignText>
                {
                  "Forge Studio is an independent web development studio focused on building practical web applications and business systems."
                }
              </DesignText>
            </p>
            <Link
              href="/start-a-project"
              className="btn-primary group mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200"
            >
              <span>
                <DesignText>{"Start a Project"}</DesignText>
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <aside className="about-studio-card rounded-2xl border border-border bg-alt p-8 shadow-sm">
            <Image src="/img/forge-icon.png" alt="Forge Studio" width={64} height={64} className="rounded-xl object-contain shadow-sm" />
            <h2 className="font-heading text-2xl font-bold text-ink mt-6">Forge Studio</h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-grey">
              <DesignText>{"Practical thinking. Careful engineering. Clear communication."}</DesignText>
            </p>
            <div className="about-studio-note mt-6 border-t border-border/80 pt-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                <DesignText>{"Our focus"}</DesignText>
              </span>
              <p className="text-sm leading-relaxed text-grey">
                <DesignText>{"Web applications, business systems, and tools that make work simpler."}</DesignText>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-full-width about-principles bg-alt border-y border-border py-16 md:py-24">
        <div className="about-section-heading mb-12">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              <DesignText>{"How we work"}</DesignText>
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              <DesignText>{"Our Principles"}</DesignText>
            </h2>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-grey max-w-xl">
            <DesignText>{"A straightforward approach, from the first conversation to the software you use every day."}</DesignText>
          </p>
        </div>
        <div className="about-principle-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([title, description], index) => (
            <article
              className="about-principle rounded-xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-[#C8B7A6] hover:-translate-y-1"
              key={title}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-light font-mono text-xs font-bold text-accent mb-5">
                0{index + 1}
              </span>
              <h3 className="font-heading text-lg font-bold tracking-tight text-ink mb-3">
                <DesignText>{title}</DesignText>
              </h3>
              <p className="text-sm leading-relaxed text-grey">
                <DesignText>{description}</DesignText>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-full-width about-approach py-16 md:py-24">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            <DesignText>{"A shared understanding"}</DesignText>
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-ink max-w-md">
            <DesignText>{"You know your business. We help with the technology."}</DesignText>
          </h2>
        </div>
        <div className="about-approach-copy">
          <p className="text-base sm:text-lg leading-relaxed text-grey">
            <DesignText>
              {
                "You do not need a technical brief to start. Tell us what slows your team down, what feels difficult, or what you want to improve."
              }
            </DesignText>
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-grey">
            <DesignText>
              {"Together, we turn that into a clear plan: what to build, why it matters, and how it will support your day-to-day work."}
            </DesignText>
          </p>
          <Link href="/services" className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent">
            <span>
              <DesignText>{"Explore our services"}</DesignText>
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="section-full-width about-cta bg-alt border-t border-border py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              <DesignText>{"Start a conversation"}</DesignText>
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-ink max-w-xl">
              <DesignText>{"What would make work easier for your team?"}</DesignText>
            </h2>
          </div>
          <Link
            href="/start-a-project"
            className="btn-primary group inline-flex min-h-[50px] items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 self-start md:self-auto"
          >
            <span>
              <DesignText>{"Start a Project"}</DesignText>
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
