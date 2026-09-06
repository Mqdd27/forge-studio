import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { cases } from "../../../../data/site";
import { WorkVisual } from "../../../../components/visual";

const slugs = ["nexus-analytics", "globalfreight", "stripe-erp"] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function CaseStudy({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}) {
  const index = slugs.indexOf(params.slug as (typeof slugs)[number]);

  if (index < 0) {
    notFound();
  }

  const item = cases[index];

  // Ambil translation namespace Site
  const site = await getTranslations({
    locale: params.locale,
    namespace: "Site",
  });

  return (
    <main>
      {/* HERO */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pb-[72px] pt-[120px] sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {site(`cases.${item.key}.category`)} / Case study
        </div>

        <h1 className="mt-4 max-w-[850px] font-heading text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[clamp(48px,6vw,72px)]">
          {site(`cases.${item.key}.title`)}
        </h1>

        <p className="mt-5 max-w-[680px] text-lg leading-relaxed text-grey">
          {site(`cases.${item.key}.summary`)}
        </p>

        <div className="mt-10 aspect-video w-full max-w-[980px] sm:mt-14">
          <WorkVisual type={item.visual} />
        </div>
      </section>

      {/* CASE BODY */}
      <div className="mx-auto w-full max-w-[900px] px-4 pb-[88px] sm:px-6 sm:pb-28 lg:px-8">
        <CaseSection
          number="01"
          title="Business context was scattered across too many tools."
          text="The team needed a more dependable way to see what was happening, make decisions, and move work forward without manual reconciliation."
        />

        <CaseSection
          number="02"
          title="A focused system built around the daily workflow."
          text="We mapped the key operational moments, then designed and engineered a clear interface that gave the team one shared source of truth."
        />

        <CaseSection
          number="03"
          title="Simple foundations, ready for the next stage."
          text="Modular services, clear data boundaries, and a delivery process that kept feedback close to the work."
        />

        <section className="border-t border-border py-14 sm:py-16">
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            04 / Result
          </div>

          <h2 className="mt-4 max-w-[720px] font-heading text-[28px] font-semibold leading-[1.25] text-ink sm:text-[36px]">
            Less operational noise. More room for useful work.
          </h2>

          <p className="mt-5 max-w-[640px] text-base leading-relaxed text-grey">
            The finished system gave the team better visibility and a calmer,
            more consistent way to operate.
          </p>
        </section>
      </div>

      {/* CLOSING CTA */}
      <section className="bg-ink py-[72px] sm:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <h2 className="max-w-[650px] font-heading text-[30px] font-semibold leading-[1.2] text-white sm:text-4xl">
            Have a similar challenge?
          </h2>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-accent px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}

function CaseSection({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-t border-border py-14 sm:py-16">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
        {number} /
      </div>

      <h2 className="mt-4 max-w-[720px] font-heading text-[28px] font-semibold leading-[1.25] text-ink sm:text-[36px]">
        {title}
      </h2>

      <p className="mt-5 max-w-[640px] text-base leading-relaxed text-grey">
        {text}
      </p>
    </section>
  );
}
