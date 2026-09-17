"use client";

import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

export function ProjectCTA() {
  const id = useLocale() === "id";

  return (
    <section className="bg-[#FAF8F2] px-5 py-20 text-[#1C1C18] md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1440px] border-t border-black/15 pt-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* MARKER */}

          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#FF4F00]" />

              <span className="text-[10px] font-semibold tracking-[0.16em] text-black/40 uppercase">
                {id ? "Proyek Berikutnya" : "Next Project"}
              </span>
            </div>
          </div>

          {/* CONTENT */}

          <div className="lg:col-span-9">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#FF4F00] uppercase">
              // {id ? "Mari berdiskusi" : "Let's talk"}
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl leading-[1] font-semibold tracking-[-0.045em] md:text-5xl lg:text-6xl">
              {id ? "Punya sistem atau workflow yang ingin dibuat lebih baik?" : "Have a system or workflow that could work better?"}
            </h2>

            <div className="mt-10 grid gap-8 border-t border-black/15 pt-7 md:grid-cols-12 md:items-end">
              <p className="max-w-xl text-base leading-[1.7] text-black/55 md:col-span-7">
                {id
                  ? "Ceritakan kebutuhan atau kendala operasional Anda. Kami akan membantu menerjemahkannya menjadi solusi digital yang jelas dan praktis."
                  : "Tell us about the need or operational challenge. We'll help turn it into a clear and practical digital solution."}
              </p>

              <div className="md:col-span-5 md:text-right">
                <Link
                  href="/start-a-project"
                  className="group inline-flex items-center gap-10 bg-[#1C1C18] px-6 py-4 text-[10px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#FF4F00]"
                >
                  {id ? "Mulai Diskusi" : "Start a Project"}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
