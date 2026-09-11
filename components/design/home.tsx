import { workCardData } from "@/data/work-presentation";
import { cases } from "@/data/site";
import { capabilities, processSteps } from "@/data/studio";
import { WorkCard } from "@/components/work-card";
import { Link } from "@/i18n/navigation";
import { DesignText as T } from "@/components/ui/design-text";
import { DesignIcon } from "@/components/ui/design-icon";
import { ServiceCards } from "@/components/design/services";
import { ProjectCTA } from "@/components/design/project-cta";
import { WorkVisual } from "@/components/visual";

export function HomeDesign() {
  return (
    <main className="stitch-page stitch-home">
      <section className="st-section st-hero">
        <div className="st-container st-hero-grid">
          <div>
            <p data-hero-reveal className="st-label">
              <T>{"Independent Web Development Studio"}</T>
            </p>
            <h1 data-hero-reveal>
              <T>{"Web applications built around real business needs."}</T>
            </h1>
            <p data-hero-reveal className="st-lead">
              <T>
                {
                  "From custom business systems to improvements for existing applications, Forge Studio turns requirements and workflows into practical web software."
                }
              </T>
            </p>
            <div data-hero-reveal className="st-actions">
              <Link className="st-button" href="/start-a-project">
                <T>{"Start a Project"}</T>
              </Link>
              <Link className="st-button st-secondary" href="/work">
                <T>{"View Our Work"}</T>
              </Link>
            </div>
          </div>
          <figure data-hero-reveal className="st-hero-preview">
            <div className="st-browser-bar">
              <span aria-hidden="true">● ● ●</span>
              <span>Forge Studio</span>
              <span />
            </div>
            <div className="st-preview-screen">
              <WorkVisual type="bars" project="stockOpname" />
            </div>
            <figcaption>
              <T>{"Project illustration"}</T>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="st-section st-tone">
        <div className="st-container">
          <div className="st-section-heading">
            <div>
              <p className="st-label">
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
          <div data-stagger className="st-flow">
            {[
              ["Manual Workflow", "Disjointed spreadsheets, manual handoffs and missed updates.", "inventory_2"],
              ["Web Application", "A custom system shaped around your operational needs.", "web_window"],
              ["Easier to Manage", "Central data, shared access and a clearer workflow.", "check_circle"],
            ].map(([title, desc, icon], i) => (
              <div className="st-flow-step" key={title}>
                <DesignIcon name={icon} />
                <span className="st-label">0{i + 1}</span>
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
      <section className="st-section">
        <div className="st-container">
          <p className="st-label">
            <T>{"Our services"}</T>
          </p>
          <h2>
            <T>{"What we can help you build."}</T>
          </h2>
          <ServiceCards />
        </div>
      </section>
      <section className="st-section st-tone" id="work">
        <div className="st-container">
          <div className="st-section-heading">
            <div>
              <p className="st-label">
                <T>{"Portfolio"}</T>
              </p>
              <h2>
                <T>{"Selected Work"}</T>
              </h2>
            </div>
            <Link className="st-text-link" href="/work">
              <T>{"View all case studies"}</T> →
            </Link>
          </div>
          <div data-stagger className="st-featured-work">
            {cases
              .filter((x) => ["idxStocks", "odooWageOvertime", "stockOpname"].includes(x.key))
              .map((item) => (
                <WorkCard key={item.key} item={workCardData(item)} />
              ))}
          </div>
        </div>
      </section>
      <section className="st-section">
        <div className="st-container">
          <p className="st-label">
            <T>{"How we work"}</T>
          </p>
          <h2>
            <T>{"A straightforward way to work together."}</T>
          </h2>
          <div data-stagger className="st-process">
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
      <section className="st-section st-tone st-capability-section">
        <div className="st-container">
          <p className="st-label">
            <T>{"Capabilities"}</T>
          </p>
          <h2>
            <T>{"Web development, end to end."}</T>
          </h2>
          <div className="st-capabilities">
            {capabilities.map((value) => (
              <div key={value}>
                <DesignIcon name="check" />
                <T>{value}</T>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="st-section">
        <div className="st-container">
          <div className="st-about-panel">
            <p className="st-label">
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
            <Link className="st-text-link" href="/about">
              <T>{"More About Forge"}</T> →
            </Link>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </main>
  );
}
