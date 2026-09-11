import { DesignText } from "@/components/ui/design-text";
import { WorkList } from "@/components/work-list";
import { ProjectCTA } from "@/components/design/project-cta";
export function WorkDesign() {
  return (
    <main className="stitch-page stitch-work">
      <section className="st-section st-tone">
        <div className="st-container">
          <p className="st-label">
            <DesignText>{"Portfolio"}</DesignText>
          </p>
          <h1>
            <DesignText>{"Selected Work"}</DesignText>
          </h1>
          <p className="st-lead">
            <DesignText>{"Web applications and systems built around real business and operational needs."}</DesignText>
          </p>
        </div>
      </section>
      <div className="st-container st-work-list">
        <WorkList />
      </div>
      <ProjectCTA />
    </main>
  );
}
