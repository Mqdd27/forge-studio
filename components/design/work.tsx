import { PageShell } from "@/components/ui/page-shell";
import { DesignText } from "@/components/ui/design-text";
import { WorkList } from "@/components/work-list";
import { ProjectCTA } from "@/components/design/project-cta";
export function WorkDesign() {
  return (
    <PageShell>
      <section className="bg-[#f1e8df] py-8 md:py-[clamp(32px,3.2vw,48px)]">
        <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.09em] text-[#a63409] uppercase">
            <DesignText>{"Portfolio"}</DesignText>
          </p>
          <h1>
            <DesignText>{"Selected Work"}</DesignText>
          </h1>
          <p className="mt-[18px] mb-6 max-w-[68ch] text-base text-[#574b45]">
            <DesignText>{"Web applications and systems built around real business and operational needs."}</DesignText>
          </p>
        </div>
      </section>
      <div className="mx-auto w-full max-w-[1800px] px-5 pt-8 pb-12 md:px-[clamp(20px,3vw,56px)] [&>section]:p-0">
        <WorkList />
      </div>
      <ProjectCTA />
    </PageShell>
  );
}
