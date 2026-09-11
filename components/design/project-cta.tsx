import { Link } from "@/i18n/navigation";
import { DesignText } from "@/components/ui/design-text";
import { DesignIcon } from "@/components/ui/design-icon";
export function ProjectCTA() {
  return (
    <section className="st-cta-section">
      <div className="st-container">
        <div className="st-cta">
          <DesignIcon name="mail" />
          <h2>
            <DesignText>{"Have a web project in mind?"}</DesignText>
          </h2>
          <p>
            <DesignText>{"Tell us what you are trying to build or improve."}</DesignText>
          </p>
          <Link href="/start-a-project" className="st-button">
            <DesignText>{"Start a Project"}</DesignText>
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
