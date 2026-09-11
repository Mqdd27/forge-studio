import { PageShell } from "@/components/ui/page-shell";
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
    <PageShell>
      <section className="px-5 py-10 py-16 md:px-[max(3vw,calc((100%-1688px)/2))] md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">
              <DesignText>{"About Forge Studio"}</DesignText>
            </p>
            <h1 className="font-[family-name:var(--font-manrope)] text-4xl font-bold tracking-tight text-[#1f1f1f] sm:text-5xl md:text-6xl">
              <DesignText>{"Practical software, built for real work."}</DesignText>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#595959] sm:text-lg">
              <DesignText>
                {
                  "Forge Studio is an independent web development studio focused on building practical web applications and business systems."
                }
              </DesignText>
            </p>
            <Link
              href="/start-a-project"
              className="group mt-8 inline-flex min-h-[50px] items-center gap-2 rounded-lg rounded-xl bg-[#c34810] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#a63409]"
            >
              <span>
                <DesignText>{"Start a Project"}</DesignText>
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <aside className="rounded-2xl border border-[#e3ddd5] bg-[#f7f4f0] p-8 shadow-sm">
            <Image src="/img/forge-icon.png" alt="Forge Studio" width={64} height={64} className="rounded-xl object-contain shadow-sm" />
            <h2 className="mt-6 font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#1f1f1f]">Forge Studio</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#595959] sm:text-base">
              <DesignText>{"Practical thinking. Careful engineering. Clear communication."}</DesignText>
            </p>
            <div className="mt-6 border-t border-[#e3ddd5]/80 pt-6">
              <span className="mb-2 block font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">
                <DesignText>{"Our focus"}</DesignText>
              </span>
              <p className="text-sm leading-relaxed text-[#595959]">
                <DesignText>{"Web applications, business systems, and tools that make work simpler."}</DesignText>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#e3ddd5] bg-[#f7f4f0] px-5 py-10 py-16 md:px-[max(3vw,calc((100%-1688px)/2))] md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">
              <DesignText>{"How we work"}</DesignText>
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[#1f1f1f] sm:text-4xl">
              <DesignText>{"Our Principles"}</DesignText>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#595959] sm:text-lg">
            <DesignText>{"A straightforward approach, from the first conversation to the software you use every day."}</DesignText>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([title, description], index) => (
            <article
              className="rounded-xl border border-[#e3ddd5] bg-[#ffffff] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8B7A6]"
              key={title}
            >
              <span className="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#f4efea] font-mono text-xs font-bold text-[#b5501a]">
                0{index + 1}
              </span>
              <h3 className="mb-3 font-[family-name:var(--font-manrope)] text-lg font-bold tracking-tight text-[#1f1f1f]">
                <DesignText>{title}</DesignText>
              </h3>
              <p className="text-sm leading-relaxed text-[#595959]">
                <DesignText>{description}</DesignText>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 px-5 py-10 py-16 md:grid-cols-2 md:px-[max(3vw,calc((100%-1688px)/2))] md:py-24">
        <div>
          <p className="mb-2 font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">
            <DesignText>{"A shared understanding"}</DesignText>
          </p>
          <h2 className="max-w-md font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[#1f1f1f] sm:text-4xl">
            <DesignText>{"You know your business. We help with the technology."}</DesignText>
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-[#595959] sm:text-lg">
            <DesignText>
              {
                "You do not need a technical brief to start. Tell us what slows your team down, what feels difficult, or what you want to improve."
              }
            </DesignText>
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#595959] sm:text-lg">
            <DesignText>
              {"Together, we turn that into a clear plan: what to build, why it matters, and how it will support your day-to-day work."}
            </DesignText>
          </p>
          <Link href="/services" className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#b5501a]">
            <span>
              <DesignText>{"Explore our services"}</DesignText>
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="border-t border-[#e3ddd5] bg-[#f7f4f0] px-5 py-10 py-16 md:px-[max(3vw,calc((100%-1688px)/2))] md:py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">
              <DesignText>{"Start a conversation"}</DesignText>
            </p>
            <h2 className="max-w-xl font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-[#1f1f1f] sm:text-4xl">
              <DesignText>{"What would make work easier for your team?"}</DesignText>
            </h2>
          </div>
          <Link
            href="/start-a-project"
            className="group inline-flex min-h-[50px] items-center gap-2 self-start rounded-lg rounded-xl bg-[#c34810] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#a63409] md:self-auto"
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
    </PageShell>
  );
}
