import { PageShell } from "@/components/ui/page-shell";
import { workCardData } from "@/data/work-presentation";
import { cases } from "@/data/site";
import { capabilities, processSteps } from "@/data/studio";
import { WorkCard } from "@/components/work-card";
import { Link } from "@/i18n/navigation";
import { DesignText as T } from "@/components/ui/design-text";
import { DesignIcon } from "@/components/ui/design-icon";
import { ServiceCards } from "@/components/design/services";
import { ProjectCTA } from "@/components/design/project-cta";
// import { WorkVisual } from "@/components/visual";
import Image from "next/image";

export function HomeDesign() {
  return (
    <PageShell>
      <section className="py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-7 px-5 md:grid-cols-2 md:gap-[clamp(24px,3vw,48px)] md:px-[clamp(20px,3vw,56px)]">
          <div>
            <p data-hero-reveal className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
              <T>{"Independent Web Development Studio"}</T>
            </p>
            <h1 data-hero-reveal>
              <T>{"Web applications built around real business needs."}</T>
            </h1>
            <p data-hero-reveal className="mt-[18px] mb-6 max-w-[68ch] text-base text-[#574b45]">
              <T>
                {
                  "From custom business systems to improvements for existing applications, Forge Studio turns requirements and workflows into practical web software."
                }
              </T>
            </p>
            <div data-hero-reveal className="flex flex-wrap gap-4 max-[359px]:flex-col">
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border border-[#b43d09] bg-[#c34810] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a63409] motion-reduce:transition-none"
                href="/start-a-project"
              >
                <T>{"Start a Project"}</T>
              </Link>
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border border-[#b43d09] border-[#d0c3b7]! bg-[#c34810] bg-white! px-5 py-3 text-sm font-semibold text-[#26201c]! text-white transition-colors hover:bg-[#a63409] hover:bg-[#f1e8df]! motion-reduce:transition-none"
                href="/work"
              >
                <T>{"View Our Work"}</T>
              </Link>
            </div>
          </div>
          <figure
            data-hero-reveal
            className="m-0 overflow-hidden rounded-xl border border-[#d7c4b6] bg-white shadow-sm [&_figcaption]:px-3 [&_figcaption]:py-1.5 [&_figcaption]:text-right [&_figcaption]:text-[10px] [&_figcaption]:text-[#786c64]"
          >
            <Image
              src="/img/hero.png"
              alt=""
              width={1050}
              height={1050}
              className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </figure>

          {/* <figure data-hero-reveal className="m-0 overflow-hidden rounded-xl border border-[#d7c4b6] bg-white shadow-sm [&_figcaption]:px-3 [&_figcaption]:py-1.5 [&_figcaption]:text-right [&_figcaption]:text-[10px] [&_figcaption]:text-[#786c64]">
            <div className="flex justify-between gap-4 bg-[#f0eded] px-4 py-2 text-[10px] text-[#756c65] [&>span:first-child]:text-[#d9d4d0]">
              <span aria-hidden="true">● ● ●</span>
              <span>Forge Studio</span>
              <span />
            </div>
            <div className="h-[260px] md:h-[clamp(260px,23vw,370px)]">
              <WorkVisual type="bars" project="stockOpname" />
              <Image
                src="/img/hero.png"
                alt=""
                width={1050}
                height={1050}
                className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption>
              <T>{"Project illustration"}</T>
            </figcaption>
          </figure> */}
        </div>
      </section>
      <section className="bg-[#f1e8df] py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:[&>div]:max-w-[60%] md:[&>p]:max-w-[44%]">
            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
                <T>{"Context"}</T>
              </p>
              <h2>
                <T>{"Still managing important workflows manually?"}</T>
              </h2>
            </div>
            <p>
              <T>
                {
                  "Spreadsheets, chats and repetitive admin work can work at first. When the process becomes harder to track, a focused web application can make it simpler."
                }
              </T>
            </p>
          </div>
          <div data-stagger className="grid grid-cols-1 gap-9 md:grid-cols-3">
            {[
              ["Manual Workflow", "Disjointed spreadsheets, manual handoffs and missed updates.", "inventory_2"],
              ["Web Application", "A custom system shaped around your operational needs.", "web_window"],
              ["Easier to Manage", "Central data, shared access and a clearer workflow.", "check_circle"],
            ].map(([title, desc, icon], i) => (
              <div
                className="relative rounded-xl bg-white p-5 [&_h3]:mt-2 [&_p]:mt-2 [&_p]:text-[13px] [&_p]:text-[#574b45] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-1/2 [&:not(:last-child)]:after:-bottom-7 [&:not(:last-child)]:after:text-[#b43d09] [&:not(:last-child)]:after:content-['↓'] md:[&:not(:last-child)]:after:top-1/2 md:[&:not(:last-child)]:after:-right-6 md:[&:not(:last-child)]:after:bottom-auto md:[&:not(:last-child)]:after:content-['→'] [&>svg]:mr-2.5 [&>svg]:inline-block [&>svg]:size-4 [&>svg]:text-[#953900]"
                key={title}
              >
                <DesignIcon name={icon} />
                <span className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">0{i + 1}</span>
                <h3>
                  <T>{title}</T>
                </h3>
                <p>
                  <T>{desc}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
            <T>{"Our services"}</T>
          </p>
          <h2>
            <T>{"What we can help you build."}</T>
          </h2>
          <ServiceCards />
        </div>
      </section>
      <section className="bg-[#f1e8df] py-8 md:py-[clamp(32px,3.2vw,48px)]" id="work">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:[&>div]:max-w-[60%] md:[&>p]:max-w-[44%]">
            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
                <T>{"Portfolio"}</T>
              </p>
              <h2>
                <T>{"Selected Work"}</T>
              </h2>
            </div>
            <Link
              className="inline-flex min-h-11 items-center gap-2 text-[13px] text-[#a63409] hover:underline hover:underline-offset-4"
              href="/work"
            >
              <T>{"View all case studies"}</T> →
            </Link>
          </div>
          <div
            data-stagger
            className="grid grid-cols-1 items-stretch gap-5 min-[600px]:grid-cols-2 lg:grid-cols-3 [&_h3]:text-[21px] [&_p]:text-[#574b45]"
          >
            {cases
              .filter((x) => ["idxStocks", "odooWageOvertime", "stockOpname"].includes(x.key))
              .map((item) => (
                <WorkCard key={item.key} item={workCardData(item)} />
              ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
            <T>{"How we work"}</T>
          </p>
          <h2>
            <T>{"A straightforward way to work together."}</T>
          </h2>
          <div
            data-stagger
            className="mt-6 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 lg:grid-cols-4 [&_article>span]:mb-1.5 [&_article>span]:block [&_article>span]:text-[22px] [&_article>span]:font-semibold [&_article>span]:text-[#bc3e0b] [&_p]:mt-2 [&_p]:text-[13px] [&_p]:text-[#574b45] [&>article]:rounded-lg [&>article]:bg-white [&>article]:p-6"
          >
            {processSteps.map(([title, desc], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>
                  <T>{title}</T>
                </h3>
                <p>
                  <T>{desc}</T>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#202b30]! bg-[#f1e8df] py-8 md:py-[clamp(32px,3.2vw,48px)] [&_div>div>div]:border [&_div>div>div]:border-[#45545a] [&_div>div>div]:bg-[#2f3d43] [&_div>div>div]:text-white [&_h2]:text-white [&_p]:text-white [&_svg]:text-[#ff9b65]!">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
            <T>{"Capabilities"}</T>
          </p>
          <h2>
            <T>{"Web development, end to end."}</T>
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 lg:grid-cols-4 [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-[#953900] [&>div]:flex [&>div]:items-center [&>div]:gap-2.5 [&>div]:rounded-lg [&>div]:bg-white [&>div]:p-[18px] [&>div]:text-[13px]">
            {capabilities.map((value) => (
              <div key={value}>
                <DesignIcon name="check" />
                <T>{value}</T>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <div className="rounded-xl bg-white p-5 md:p-8 [&>p]:max-w-[85ch] [&>p:not(:first-child)]:mt-4 [&>p:not(:first-child)]:mb-2">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
              <T>{"About us"}</T>
            </p>
            <h2>
              <T>{"About Forge Studio"}</T>
            </h2>
            <p>
              <T>
                {
                  "Forge Studio is an independent web development studio focused on building practical web applications and business systems."
                }
              </T>
            </p>
            <Link
              className="inline-flex min-h-11 items-center gap-2 text-[13px] text-[#a63409] hover:underline hover:underline-offset-4"
              href="/about"
            >
              <T>{"More About Forge"}</T> →
            </Link>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </PageShell>
  );
}
