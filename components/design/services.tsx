import { PageShell } from "@/components/ui/page-shell";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/site";
import { DesignText } from "@/components/ui/design-text";
import { DesignIcon } from "@/components/ui/design-icon";
import { ProjectCTA } from "@/components/design/project-cta";

export function ServiceCards() {
  return (
    <div data-stagger className="mt-6 grid grid-cols-1 gap-4 min-[540px]:grid-cols-2 lg:grid-cols-4">
      {services.map((item, index) => (
        <article
          className="flex flex-col rounded-xl border border-t-[3px] border-[#dfcfc2] border-t-[#c34810] bg-white p-6 transition-colors hover:border-[#cfbaaa] motion-reduce:transition-none [&>a]:mt-auto [&>p]:mt-2.5 [&>p]:mb-5 [&>p]:text-[13px] [&>p]:text-[#574b45] [&>svg]:mb-[18px] [&>svg]:size-10 [&>svg]:rounded-lg [&>svg]:bg-[#c34810] [&>svg]:p-2 [&>svg]:text-white"
          key={item.key}
        >
          <DesignIcon name={["web_window", "inventory_2", "sync", "security"][index]} />
          <h3>
            <DesignText>{item.title}</DesignText>
          </h3>
          <p>
            <DesignText>{item.description}</DesignText>
          </p>
          <Link
            className="inline-flex min-h-11 items-center gap-2 text-[13px] text-[#a63409] hover:underline hover:underline-offset-4"
            href={`/services#${item.key}`}
          >
            <DesignText>{"Learn more"}</DesignText>
            <span aria-hidden="true"> →</span>
            <span className="sr-only">
              {" "}
              — <DesignText>{item.title}</DesignText>
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}
export function ServicesDesign() {
  return (
    <PageShell>
      <section className="bg-[#f1e8df] py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-6 px-5 md:grid-cols-[1.5fr_1fr] md:px-[clamp(20px,3vw,56px)] lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
              <DesignText>{"Our services"}</DesignText>
            </p>
            <h1>
              <DesignText>{"Web development services built around real business needs."}</DesignText>
            </h1>
            <p className="mt-[18px] mb-6 max-w-[68ch] text-base text-[#574b45]">
              <DesignText>
                {
                  "From new applications to existing systems, Forge Studio helps businesses build, improve, deploy, and maintain web-based software."
                }
              </DesignText>
            </p>
          </div>
          <aside className="rounded-xl bg-white p-6 [&_p]:text-[13px]">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
              <DesignText>{"Engineering focus"}</DesignText>
            </p>
            <p>
              <DesignText>{"Practical applications, clear structure and ongoing support throughout the development lifecycle."}</DesignText>
            </p>
            <span className="inline-flex min-h-11 items-center gap-2 text-[13px] text-[#a63409] hover:underline hover:underline-offset-4">
              <DesignText>{"Built around your needs"}</DesignText>
            </span>
          </aside>
        </div>
      </section>
      <section className="py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
            <DesignText>{"Core disciplines"}</DesignText>
          </p>
          <h2>
            <DesignText>{"Our services"}</DesignText>
          </h2>
          <div data-stagger className="mt-6 grid grid-cols-1 gap-6 min-[540px]:grid-cols-2">
            {services.map((item, index) => (
              <article
                id={item.key}
                key={item.key}
                className="flex scroll-mt-28 flex-col rounded-xl border border-[#f0eae5] bg-white p-6 md:p-8 [&_h3]:text-xl [&_h3]:uppercase [&>a]:mt-auto [&>p]:my-3.5"
              >
                <div className="mb-4 flex justify-between [&_svg]:size-5">
                  <span className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">0{index + 1}</span>
                  <DesignIcon name={["web_window", "inventory_2", "sync", "security"][index]} />
                </div>
                <h3>
                  <DesignText>{item.title}</DesignText>
                </h3>
                <p>
                  <DesignText>{item.description}</DesignText>
                </p>
                <p className="text-[11px] uppercase">
                  <DesignText>{"Common use cases"}</DesignText>
                </p>
                <ul className="mb-7 flex list-none flex-wrap gap-1.5 p-0 [&>li]:rounded-sm [&>li]:bg-[#f0eded] [&>li]:px-2 [&>li]:py-1 [&>li]:text-xs">
                  {item.useCases.map((v) => (
                    <li key={v}>
                      <DesignText>{v}</DesignText>
                    </li>
                  ))}
                </ul>
                <Link
                  className="inline-flex min-h-11 items-center gap-2 text-[13px] text-[#a63409] hover:underline hover:underline-offset-4"
                  href="/start-a-project"
                >
                  <DesignText>{"Discuss Your Project →"}</DesignText>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f1e8df] py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-4 px-5 min-[360px]:grid-cols-2 md:px-[clamp(20px,3vw,56px)] lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
              <DesignText>{"Delivery principles"}</DesignText>
            </p>
            <h3>
              <DesignText>{"Built with care."}</DesignText>
            </h3>
          </div>
          {["Clear scope", "Maintainable applications", "Deployment & support"].map((v) => (
            <div className="rounded-lg bg-white p-5 [&_h3]:text-base [&_svg]:mb-2.5 [&_svg]:size-5 [&_svg]:text-[#953900]" key={v}>
              <DesignIcon name="check_circle" />
              <h3>
                <DesignText>{v}</DesignText>
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
            <DesignText>{"Supporting capabilities"}</DesignText>
          </p>
          <h2>
            <DesignText>{"Web development, end to end."}</DesignText>
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 lg:grid-cols-4 [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-[#953900] [&>div]:flex [&>div]:items-center [&>div]:gap-2.5 [&>div]:rounded-lg [&>div]:bg-white [&>div]:p-[18px] [&>div]:text-[13px]">
            {["API Integration", "Database Design", "Payment Integration", "Authentication & Roles", "Backup & Maintenance"].map((v) => (
              <div key={v}>
                <DesignIcon name="check" />
                <DesignText>{v}</DesignText>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </PageShell>
  );
}
