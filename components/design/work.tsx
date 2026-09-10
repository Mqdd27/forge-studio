import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon, FilterGrid, InquiryForm } from "./primitives";

export function WorkDesign() {
  return (
    <main className="design-page design-work flex-grow pt-16 pb-section-gap-lg px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto w-full">
      <header className="mb-16">
        <h1 className="font-display-mobile md:font-display text-display-mobile md:text-display text-ink mb-4">
          <DesignText>{"Selected Work"}</DesignText>
        </h1>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
          <DesignText>
            {
              "A collection of our recent engineering projects, demonstrating our approach to complex problem-solving and business-first software architecture."
            }
          </DesignText>
        </p>
      </header>
      <FilterGrid
        categories={["Business System", "SaaS", "Custom App", "Integration"]}
        items={[
          {
            category: "Business System",
            content: (
              <article
                className="work-card group border border-border p-6 bg-surface transition-all duration-300 flex flex-col h-full rounded cursor-pointer"
                data-category="Business System"
              >
                <div className="relative w-full aspect-video mb-6 overflow-hidden bg-surface-alt rounded">
                  <img
                    alt="Dashboard interface of an inventory management system"
                    className="w-full h-full object-cover transition-transform duration-500"
                    src="/img/design/inventory-overview.png"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full font-label text-label text-primary flex items-center space-x-1.5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span className="">
                      <DesignText>{"Business System"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-h3 text-h3 text-ink mb-2">
                    <DesignText>{"Multi-Site Inventory System"}</DesignText>
                  </h3>
                  <p className="font-body text-body text-secondary mb-4">
                    <DesignText>{"Centralizing spare-part inventory and movement across multiple operational locations."}</DesignText>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-secondary font-medium">
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Inventory"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Workflow"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Reporting"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link
                    className="text-primary font-label text-label group-hover:underline flex items-center"
                    href="/work/multi-site-inventory-system"
                  >
                    <DesignText>{"Read Case Study"}</DesignText>
                    <DesignIcon name="arrow_forward" className=" ml-1 text-[16px]" />
                  </Link>
                </div>
              </article>
            ),
          },
          {
            category: "SaaS",
            content: (
              <article
                className="work-card group border border-border p-6 bg-surface transition-all duration-300 flex flex-col h-full rounded cursor-pointer"
                data-category="SaaS"
              >
                <div className="relative w-full aspect-video mb-6 overflow-hidden bg-surface-alt rounded">
                  <img
                    alt="Point of sale tablet and laptop SaaS dashboard interface"
                    className="w-full h-full object-cover transition-transform duration-500"
                    src="/img/design/9750fd474357.png"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full font-label text-label text-primary flex items-center space-x-1.5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-status-live"></span>
                    <span className="">
                      <DesignText>{"SaaS"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-h3 text-h3 text-ink mb-2">
                    <DesignText>{"Point of Sale SaaS Platform"}</DesignText>
                  </h3>
                  <p className="font-body text-body text-secondary mb-4">
                    <DesignText>{"A multi-tenant POS platform designed for growing businesses."}</DesignText>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-secondary font-medium">
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"SaaS"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"POS"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Multi-Tenant"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link
                    className="text-primary font-label text-label group-hover:underline flex items-center"
                    href="/work/point-of-sale-saas-platform"
                  >
                    <DesignText>{"Read Case Study"}</DesignText>
                    <DesignIcon name="arrow_forward" className=" ml-1 text-[16px]" />
                  </Link>
                </div>
              </article>
            ),
          },
          {
            category: "Custom App",
            content: (
              <article
                className="work-card group border border-border p-6 bg-surface transition-all duration-300 flex flex-col h-full rounded cursor-pointer"
                data-category="Custom App"
              >
                <div className="relative w-full aspect-video mb-6 overflow-hidden bg-surface-alt rounded">
                  <img
                    alt="Real-time operational metric graphs and pipeline monitoring dashboard"
                    className="w-full h-full object-cover transition-transform duration-500"
                    src="/img/design/a1c18a2e073b.png"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full font-label text-label text-primary flex items-center space-x-1.5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="">
                      <DesignText>{"Custom App"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-h3 text-h3 text-ink mb-2">
                    <DesignText>{"Operational Monitoring System"}</DesignText>
                  </h3>
                  <p className="font-body text-body text-secondary mb-4">
                    <DesignText>{"Making business process and operational status easier to monitor from one system."}</DesignText>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-secondary font-medium">
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Dashboard"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Operations"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Reporting"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link
                    className="text-primary font-label text-label group-hover:underline flex items-center"
                    href="/work/operational-monitoring-system"
                  >
                    <DesignText>{"Read Case Study"}</DesignText>
                    <DesignIcon name="arrow_forward" className=" ml-1 text-[16px]" />
                  </Link>
                </div>
              </article>
            ),
          },
          {
            category: "Business System",
            content: (
              <article
                className="work-card group border border-border p-6 bg-surface transition-all duration-300 flex flex-col h-full rounded cursor-pointer"
                data-category="Business System"
              >
                <div className="relative w-full aspect-video mb-6 overflow-hidden bg-surface-alt rounded">
                  <img
                    alt="Calendar, scheduling and workflow approval system"
                    className="w-full h-full object-cover transition-transform duration-500"
                    src="/img/design/a3f805f394ef.png"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full font-label text-label text-primary flex items-center space-x-1.5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span className="">
                      <DesignText>{"Business System"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-h3 text-h3 text-ink mb-2">
                    <DesignText>{"Booking & Workflow Management System"}</DesignText>
                  </h3>
                  <p className="font-body text-body text-secondary mb-4">
                    <DesignText>
                      {"Streamlining customer reservations, internal team dispatch, and multi-stage approval pipelines."}
                    </DesignText>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-secondary font-medium">
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Booking"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Workflow Automation"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Resource Management"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link
                    className="text-primary font-label text-label group-hover:underline flex items-center"
                    href="/work/booking-workflow-management-system"
                  >
                    <DesignText>{"Read Case Study"}</DesignText>
                    <DesignIcon name="arrow_forward" className=" ml-1 text-[16px]" />
                  </Link>
                </div>
              </article>
            ),
          },
          {
            category: "Business System",
            content: (
              <article
                className="work-card group border border-border p-6 bg-surface transition-all duration-300 flex flex-col h-full rounded cursor-pointer"
                data-category="Business System"
              >
                <div className="relative w-full aspect-video mb-6 overflow-hidden bg-surface-alt rounded">
                  <img
                    alt="Financial and KPI executive dashboard charts"
                    className="w-full h-full object-cover transition-transform duration-500"
                    src="/img/design/d6f5f5f0f9c9.png"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full font-label text-label text-primary flex items-center space-x-1.5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span className="">
                      <DesignText>{"Business System"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-h3 text-h3 text-ink mb-2">
                    <DesignText>{"Business Reporting Dashboard"}</DesignText>
                  </h3>
                  <p className="font-body text-body text-secondary mb-4">
                    <DesignText>
                      {"Consolidating fragmented financial, sales, and operational data into automated executive reports."}
                    </DesignText>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-secondary font-medium">
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Executive Reporting"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Data Aggregation"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Analytics"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link
                    className="text-primary font-label text-label group-hover:underline flex items-center"
                    href="/work/business-reporting-dashboard"
                  >
                    <DesignText>{"Read Case Study"}</DesignText>
                    <DesignIcon name="arrow_forward" className=" ml-1 text-[16px]" />
                  </Link>
                </div>
              </article>
            ),
          },
          {
            category: "Integration",
            content: (
              <article
                className="work-card group border border-border p-6 bg-surface transition-all duration-300 flex flex-col h-full rounded cursor-pointer"
                data-category="Integration"
              >
                <div className="relative w-full aspect-video mb-6 overflow-hidden bg-surface-alt rounded">
                  <img
                    alt="Integration node map connecting enterprise databases and cloud APIs"
                    className="w-full h-full object-cover transition-transform duration-500"
                    src="/img/design/916fb75bf69f.png"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-3 py-1 rounded-full font-label text-label text-primary flex items-center space-x-1.5 border border-border">
                    <span className="w-2 h-2 rounded-full bg-status-beta"></span>
                    <span className="">
                      <DesignText>{"Integration"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-h3 text-h3 text-ink mb-2">
                    <DesignText>{"System Integration Project"}</DesignText>
                  </h3>
                  <p className="font-body text-body text-secondary mb-4">
                    <DesignText>
                      {
                        "Building fault-tolerant middleware pipelines to synchronize enterprise databases with external third-party services."
                      }
                    </DesignText>
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs text-secondary font-medium">
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Middleware"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"API Integration"}</DesignText>
                    </span>
                    <span className="text-outline-variant">
                      <DesignText>{"•"}</DesignText>
                    </span>
                    <span className="bg-surface-alt px-2 py-0.5 rounded border border-border/60 text-secondary">
                      <DesignText>{"Data Pipeline"}</DesignText>
                    </span>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link
                    className="text-primary font-label text-label group-hover:underline flex items-center"
                    href="/work/system-integration-project"
                  >
                    <DesignText>{"Read Case Study"}</DesignText>
                    <DesignIcon name="arrow_forward" className=" ml-1 text-[16px]" />
                  </Link>
                </div>
              </article>
            ),
          },
        ]}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-tablet lg:gap-gutter-desktop"
      />
    </main>
  );
}
