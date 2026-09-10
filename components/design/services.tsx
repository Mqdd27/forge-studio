import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon, FilterGrid, InquiryForm } from "./primitives";

export function ServicesDesign() {
  return (
    <main className="design-page design-services pb-section-gap-lg">
      <section className="section-full-width mx-auto max-w-[1200px] py-16 md:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
          <DesignText>{"Our services"}</DesignText>
        </p>
        <h1 className="max-w-4xl font-heading font-bold">
          <DesignText>{"Software that makes your business easier to run."}</DesignText>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey">
          <DesignText>
            {
              "From replacing repetitive tasks to connecting your existing tools, we help you choose and build the right solution. You bring the business problem. We work through the technology together."
            }
          </DesignText>
        </p>
      </section>
      <section className="section-full-width py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="font-h2 text-h2 text-ink">
                <DesignText>{"Custom Web Applications"}</DesignText>
              </h2>
            </div>
            <p className="font-body text-body text-secondary">
              <DesignText>
                {
                  "Tailored web applications designed from the ground up to solve specific operational bottlenecks, automate complex workflows, and scale seamlessly with your growing enterprise."
                }
              </DesignText>
            </p>
            <Link className="btn-secondary px-6 py-3 w-max mt-4 font-label text-label uppercase flex items-center gap-2" href="/contact">
              <DesignText>{"Discuss your project"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-[16px]" />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="dashboard_customize" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Internal Dashboards"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Centralized hubs for data visualization and management tailored to your team's specific needs."}</DesignText>
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="storefront" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Client Portals"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Secure, branded interfaces for your customers to interact with your services and data."}</DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="font-h2 text-h2 text-ink">
                <DesignText>{"Business Systems"}</DesignText>
              </h2>
            </div>
            <p className="font-body text-body text-secondary">
              <DesignText>
                {"Purpose-built internal systems that help teams manage operations, data and workflows from one place."}
              </DesignText>
            </p>
            <Link className="btn-secondary px-6 py-3 w-max mt-4 font-label text-label uppercase flex items-center gap-2" href="/contact">
              <DesignText>{"Discuss your project"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-[16px]" />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="inventory_2" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Inventory & Warehouse Management"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Centralized stock tracking, multi-location logistics, and catalog controls."}</DesignText>
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="calendar_month" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Booking & Operational Tools"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Custom reservation engines, scheduling calendars, and staff management."}</DesignText>
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="fact_check" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Approval Workflows"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Multi-tier approval routing, automated triggers, and policy enforcement."}</DesignText>
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="monitoring" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Dashboards & Reporting"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Operational visibility, KPI tracking, and real-time business reports."}</DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-7 order-2 md:order-1 mt-8 md:mt-0">
            <img
              className="w-full h-auto rounded-lg border border-border object-cover bg-surface-alt aspect-video"
              src="/img/design/96e5a5b2b1c5.png"
              alt="A highly detailed, professional isometric 3D rendering of a modern cloud server infrastructure and data nodes connected by glowing lines. The style is clean, corporate minimalism with a bright white background, subtle grey shadows, and striking orange accent colors representing active data streams. The mood is secure, scalable, and technologically advanced."
              loading="lazy"
            />
          </div>
          <div className="md:col-span-5 order-1 md:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="font-h2 text-h2 text-ink">
                <DesignText>{"SaaS Development"}</DesignText>
              </h2>
            </div>
            <p className="font-body text-body text-secondary">
              <DesignText>
                {
                  "End-to-end development of robust, scalable Software-as-a-Service platforms. We handle multi-tenant architecture, complex subscription logic, and enterprise-grade security."
                }
              </DesignText>
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check_circle" className=" text-primary text-[18px]" />
                <DesignText>{"Multi-tenant architecture design"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check_circle" className=" text-primary text-[18px]" />
                <DesignText>{"Subscription billing & Stripe integration"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check_circle" className=" text-primary text-[18px]" />
                <DesignText>{"Scalable cloud deployment models"}</DesignText>
              </li>
            </ul>
            <Link className="btn-secondary px-6 py-3 w-max mt-4 font-label text-label uppercase flex items-center gap-2" href="/contact">
              <DesignText>{"Discuss your project"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-[16px]" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-full-width py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="font-h2 text-h2 text-ink">
                <DesignText>{"Business Automation"}</DesignText>
              </h2>
            </div>
            <p className="font-body text-body text-secondary">
              <DesignText>
                {
                  "Transform manual, repetitive tasks into reliable, automated background processes. We build custom scripts and integrations that reduce human error and increase operational velocity."
                }
              </DesignText>
            </p>
            <Link className="btn-secondary px-6 py-3 w-max mt-4 font-label text-label uppercase flex items-center gap-2" href="/contact">
              <DesignText>{"Discuss your project"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-[16px]" />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="autorenew" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Workflow Scripts"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Custom Node.js or Python scripts to process data and trigger actions across systems."}</DesignText>
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="document_scanner" className=" text-primary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Document Processing"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Automated parsing, generating, and routing of invoices, reports, and contracts."}</DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-7 order-2 md:order-1 mt-8 md:mt-0">
            <img
              className="w-full h-auto rounded-lg border border-border object-cover bg-surface-alt aspect-video"
              src="/img/design/a590c5bd15b2.png"
              alt="A highly detailed abstract digital illustration representing API data flow. Multiple minimalist white rectangular blocks representing software systems are connected by glowing orange conduits in a stark white and light grey environment. The aesthetic is clean, precise, and corporate, emphasizing seamless integration and structured data architecture without any clutter."
              loading="lazy"
            />
          </div>
          <div className="md:col-span-5 order-1 md:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="font-h2 text-h2 text-ink">
                <DesignText>{"API & System Integration"}</DesignText>
              </h2>
            </div>
            <p className="font-body text-body text-secondary">
              <DesignText>
                {
                  "Connect disparate software systems to ensure a single source of truth. We build custom middleware and robust APIs to synchronize data across CRM, ERP, and bespoke platforms."
                }
              </DesignText>
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check_circle" className=" text-primary text-[18px]" />
                <DesignText>{"Custom REST & GraphQL APIs"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check_circle" className=" text-primary text-[18px]" />
                <DesignText>{"Legacy system modernization"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check_circle" className=" text-primary text-[18px]" />
                <DesignText>{"Third-party service orchestration"}</DesignText>
              </li>
            </ul>
            <Link className="btn-secondary px-6 py-3 w-max mt-4 font-label text-label uppercase flex items-center gap-2" href="/contact">
              <DesignText>{"Discuss your project"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-[16px]" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-full-width py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <h2 className="font-h2 text-h2 text-ink">
                <DesignText>{"DevOps & Deployment"}</DesignText>
              </h2>
            </div>
            <p className="font-body text-body text-secondary">
              <DesignText>
                {
                  "Establish reliable, automated CI/CD pipelines and configure secure cloud infrastructure. We ensure your applications are highly available, easily scalable, and consistently monitored."
                }
              </DesignText>
            </p>
            <Link className="btn-secondary px-6 py-3 w-max mt-4 font-label text-label uppercase flex items-center gap-2" href="/contact">
              <DesignText>{"Discuss your project"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-[16px]" />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="cloud_sync" className=" text-tertiary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"CI/CD Pipelines"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"Automated testing and deployment workflows for rapid, safe iteration."}</DesignText>
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-lg border border-border">
              <DesignIcon name="memory" className=" text-tertiary mb-4 text-3xl" />
              <h3 className="font-h3 text-h3 text-ink mb-2">
                <DesignText>{"Cloud Infrastructure"}</DesignText>
              </h3>
              <p className="font-small text-small text-secondary">
                <DesignText>{"AWS and Vercel architectures optimized for cost, security, and performance."}</DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width py-24 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-h1 text-h1 text-ink mb-4">
            <DesignText>{"Maintenance & Support"}</DesignText>
          </h2>
          <p className="font-body text-body text-secondary">
            <DesignText>
              {
                "Beyond initial development, we provide ongoing technical partnerships to ensure your software remains secure, performant, and aligned with evolving business needs."
              }
            </DesignText>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface p-8 rounded-lg border border-border interactive-card flex flex-col">
            <h3 className="font-h3 text-h3 text-ink mb-2">
              <DesignText>{"Basic Care"}</DesignText>
            </h3>
            <p className="font-small text-small text-secondary mb-6 plan-description">
              <DesignText>{"Essential security updates, uptime monitoring, and minor bug fixes."}</DesignText>
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"24/7 Uptime Monitoring"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Monthly Security Patches"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Email Support (48h SLA)"}</DesignText>
              </li>
            </ul>
            <Link className="plan-action btn-secondary w-full py-3 font-label text-label uppercase" href="/contact">
              <DesignText>{"Select Plan"}</DesignText>
            </Link>
          </div>
          <div className="bg-surface-alt p-8 rounded-lg border border-primary relative flex flex-col shadow-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-surface px-3 py-1 rounded-full font-label text-label uppercase tracking-wider whitespace-nowrap">
              <DesignText>{"Most Popular"}</DesignText>
            </div>
            <h3 className="font-h3 text-h3 text-ink mb-2">
              <DesignText>{"Business Care"}</DesignText>
            </h3>
            <p className="font-small text-small text-secondary mb-6 plan-description">
              <DesignText>{"Proactive maintenance, performance optimization, and dedicated support hours."}</DesignText>
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Everything in Basic Care"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Weekly Dependency Updates"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"10 Hours Custom Dev / Month"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Priority Slack Channel"}</DesignText>
              </li>
            </ul>
            <Link className="plan-action btn-primary w-full py-3 font-label text-label uppercase" href="/contact">
              <DesignText>{"Select Plan"}</DesignText>
            </Link>
          </div>
          <div className="bg-surface p-8 rounded-lg border border-border interactive-card flex flex-col">
            <h3 className="font-h3 text-h3 text-ink mb-2">
              <DesignText>{"Continuous Dev"}</DesignText>
            </h3>
            <p className="font-small text-small text-secondary mb-6 plan-description">
              <DesignText>{"A dedicated engineering fraction focused on feature iteration and scale."}</DesignText>
            </p>
            <ul className="flex flex-col gap-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Full Technical Partnership"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Agile Sprint Planning"}</DesignText>
              </li>
              <li className="flex items-start gap-2 font-small text-small text-ink">
                <DesignIcon name="check" className=" text-primary text-[16px]" />
                <DesignText>{"Architectural Reviews"}</DesignText>
              </li>
            </ul>
            <Link className="plan-action btn-secondary w-full py-3 font-label text-label uppercase" href="/contact">
              <DesignText>{"Contact Us"}</DesignText>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
