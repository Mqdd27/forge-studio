"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

export function ProjectCTA({ maxWidth = "max-w-[1440px]" }: { maxWidth?: string }) {
  const id = useLocale() === "id";

  return (
    <section className="bg-[#FAF8F2] px-5 py-20 text-[#1C1C18] md:px-10 md:py-24 lg:px-16">
      <div className={`mx-auto ${maxWidth} border-t border-black/15 pt-10`}>
        <p className="text-sm font-semibold text-primary">{id ? "Mari berdiskusi" : "Let's talk"}</p>

        <h2 className="mt-4 max-w-4xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl lg:text-6xl">
          {id ? "Punya sistem atau workflow yang ingin dibuat lebih baik?" : "Have a system or workflow that could work better?"}
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-lg leading-[1.65] text-black/70 md:col-span-8">
            {id
              ? "Ceritakan kebutuhan atau kendala operasional Anda. Kami akan membantu menerjemahkannya menjadi solusi digital yang jelas dan praktis."
              : "Tell us about the need or operational challenge. We'll help turn it into a clear and practical digital solution."}
          </p>

          <div className="md:col-span-4 md:text-right">
            <Link
              href="/start-a-project"
              className="group inline-flex items-center gap-10 bg-[#1C1C18] px-6 py-4 text-xs font-semibold tracking-[0.1em] text-white uppercase transition-colors hover:bg-primary"
            >
              {id ? "Mulai Diskusi" : "Start a Project"}

              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
