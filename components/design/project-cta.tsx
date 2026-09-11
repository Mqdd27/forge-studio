import { Link } from "@/i18n/navigation";
import { DesignText } from "@/components/ui/design-text";
import { DesignIcon } from "@/components/ui/design-icon";
export function ProjectCTA() {
  return (
    <section className="bg-[#f1e8df] py-8">
      <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
        <div className="flex flex-col flex-wrap items-start justify-between gap-5 rounded-xl bg-[#252c30] p-6 text-white md:p-8 lg:flex-row lg:items-center [&_a]:shrink-0 [&_h2]:text-[28px] [&_h2]:text-white [&_p]:text-[#dce0e2] [&>svg]:hidden">
          <DesignIcon name="mail" />
          <h2>
            <DesignText>{"Have a web project in mind?"}</DesignText>
          </h2>
          <p>
            <DesignText>{"Tell us what you are trying to build or improve."}</DesignText>
          </p>
          <Link
            href="/start-a-project"
            className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg border border-[#b43d09] bg-[#c34810] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a63409] motion-reduce:transition-none"
          >
            <DesignText>{"Start a Project"}</DesignText>
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
