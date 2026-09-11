import { Link } from "@/i18n/navigation";
import { services } from "@/data/site";
import { DesignText } from "@/components/ui/design-text";
import { DesignIcon } from "@/components/ui/design-icon";
import { ProjectCTA } from "@/components/design/project-cta";

export function ServiceCards() {
  return (
    <div data-stagger className="st-service-grid">
      {services.map((item, index) => (
        <article className="st-service-card" key={item.key}>
          <DesignIcon name={["web_window", "inventory_2", "sync", "security"][index]} />
          <h3>
            <DesignText>{item.title}</DesignText>
          </h3>
          <p>
            <DesignText>{item.description}</DesignText>
          </p>
          <Link className="st-text-link" href={`/services#${item.key}`}>
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
    <main className="stitch-page stitch-services">
      <section className="st-section st-tone">
        <div className="st-container st-services-intro">
          <div>
            <p className="st-label">
              <DesignText>{"Our services"}</DesignText>
            </p>
            <h1>
              <DesignText>{"Web development services built around real business needs."}</DesignText>
            </h1>
            <p className="st-lead">
              <DesignText>
                {
                  "From new applications to existing systems, Forge Studio helps businesses build, improve, deploy, and maintain web-based software."
                }
              </DesignText>
            </p>
          </div>
          <aside className="st-note">
            <p className="st-label">
              <DesignText>{"Engineering focus"}</DesignText>
            </p>
            <p>
              <DesignText>{"Practical applications, clear structure and ongoing support throughout the development lifecycle."}</DesignText>
            </p>
            <span className="st-text-link">
              <DesignText>{"Built around your needs"}</DesignText>
            </span>
          </aside>
        </div>
      </section>
      <section className="st-section">
        <div className="st-container">
          <p className="st-label">
            <DesignText>{"Core disciplines"}</DesignText>
          </p>
          <h2>
            <DesignText>{"Our services"}</DesignText>
          </h2>
          <div data-stagger className="st-discipline-grid">
            {services.map((item, index) => (
              <article id={item.key} key={item.key} className="st-discipline">
                <div className="st-discipline-top">
                  <span className="st-label">0{index + 1}</span>
                  <DesignIcon name={["web_window", "inventory_2", "sync", "security"][index]} />
                </div>
                <h3>
                  <DesignText>{item.title}</DesignText>
                </h3>
                <p>
                  <DesignText>{item.description}</DesignText>
                </p>
                <p className="st-small-label">
                  <DesignText>{"Common use cases"}</DesignText>
                </p>
                <ul className="st-tags">
                  {item.useCases.map((v) => (
                    <li key={v}>
                      <DesignText>{v}</DesignText>
                    </li>
                  ))}
                </ul>
                <Link className="st-text-link" href="/start-a-project">
                  <DesignText>{"Discuss Your Project →"}</DesignText>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="st-section st-tone">
        <div className="st-container st-principles">
          <div>
            <p className="st-label">
              <DesignText>{"Delivery principles"}</DesignText>
            </p>
            <h3>
              <DesignText>{"Built with care."}</DesignText>
            </h3>
          </div>
          {["Clear scope", "Maintainable applications", "Deployment & support"].map((v) => (
            <div className="st-principle" key={v}>
              <DesignIcon name="check_circle" />
              <h3>
                <DesignText>{v}</DesignText>
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className="st-section">
        <div className="st-container">
          <p className="st-label">
            <DesignText>{"Supporting capabilities"}</DesignText>
          </p>
          <h2>
            <DesignText>{"Web development, end to end."}</DesignText>
          </h2>
          <div className="st-capabilities">
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
    </main>
  );
}
