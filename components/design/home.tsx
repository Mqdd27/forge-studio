import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon, FilterGrid, InquiryForm } from "./primitives";

export function HomeDesign() {
  return (
    <main className="design-page design-home">
      <section className="section-full-width py-16 md:py-24 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto flex flex-col items-center text-center">
        <h1 className="font-display text-4xl md:text-[60px] md:leading-[1.12] text-ink max-w-4xl tracking-tight mb-6 font-extrabold">
          <DesignText>{"We build software that solves real business problems."}</DesignText>
        </h1>
        <p className="font-body text-base md:text-lg text-secondary max-w-2xl mb-9 leading-relaxed">
          <DesignText>
            {
              "We build web applications and business tools that reduce manual work, bring your data together, and help your team grow. From the first idea to everyday use."
            }
          </DesignText>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            className="inline-flex items-center justify-center bg-[#B5501A] text-white px-8 py-3.5 rounded-lg hover:bg-[#8F3F14] transition-colors font-label text-label tracking-wider uppercase shadow-sm"
            href="/contact"
          >
            <DesignText>{"Start a Project"}</DesignText>
          </Link>
          <Link
            className="inline-flex items-center justify-center border border-[#1F1F1F] text-[#1F1F1F] bg-transparent px-8 py-3.5 rounded-lg hover:bg-[#F4EFEA] transition-colors font-label text-label tracking-wider uppercase"
            href="/work"
          >
            <DesignText>{"View Our Work"}</DesignText>
          </Link>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-16 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="mb-10 max-w-2xl">
          <span className="text-[#B5501A] font-semibold text-xs uppercase tracking-widest block mb-2 font-mono">
            <DesignText>{"Problems We Solve"}</DesignText>
          </span>
          <h2 className="font-h2 text-2xl md:text-3xl text-ink font-bold mb-3">
            <DesignText>{"Technology should make work simpler."}</DesignText>
          </h2>
          <p className="font-body text-secondary text-sm md:text-base">
            <DesignText>{"We turn repetitive, disconnected and manual processes into systems that are easier to manage."}</DesignText>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border border-[#E3DDD5] p-6 rounded-xl bg-white hover:border-[#B5501A] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <DesignIcon name="table_chart" className=" text-[#B5501A] text-2xl" />
                <span className="bg-[#F4EFEA] text-[#B5501A] font-semibold text-xs px-2.5 py-1 rounded-full">
                  <DesignText>{"Centralized System"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-lg font-bold text-ink mb-2">
                <DesignText>{"Scattered Data"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                <DesignText>{"Business information spread across spreadsheets, chats and disconnected tools."}</DesignText>
              </p>
            </div>
          </div>
          <div className="border border-[#E3DDD5] p-6 rounded-xl bg-white hover:border-[#B5501A] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <DesignIcon name="repeat" className=" text-[#B5501A] text-2xl" />
                <span className="bg-[#F4EFEA] text-[#B5501A] font-semibold text-xs px-2.5 py-1 rounded-full">
                  <DesignText>{"Workflow Automation"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-lg font-bold text-ink mb-2">
                <DesignText>{"Manual Operations"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                <DesignText>{"Repetitive administrative work consuming valuable time."}</DesignText>
              </p>
            </div>
          </div>
          <div className="border border-[#E3DDD5] p-6 rounded-xl bg-white hover:border-[#B5501A] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <DesignIcon name="visibility_off" className=" text-[#B5501A] text-2xl" />
                <span className="bg-[#F4EFEA] text-[#B5501A] font-semibold text-xs px-2.5 py-1 rounded-full">
                  <DesignText>{"Dashboard & Reporting"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-lg font-bold text-ink mb-2">
                <DesignText>{"Limited Visibility"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                <DesignText>{"Operational information is difficult to monitor in real time."}</DesignText>
              </p>
            </div>
          </div>
          <div className="border border-[#E3DDD5] p-6 rounded-xl bg-white hover:border-[#B5501A] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <DesignIcon name="hub" className=" text-[#B5501A] text-2xl" />
                <span className="bg-[#F4EFEA] text-[#B5501A] font-semibold text-xs px-2.5 py-1 rounded-full">
                  <DesignText>{"API & System Integration"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-lg font-bold text-ink mb-2">
                <DesignText>{"Disconnected Systems"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                <DesignText>{"Existing software and services don't communicate with each other."}</DesignText>
              </p>
            </div>
          </div>
          <div className="border border-[#E3DDD5] p-6 rounded-xl bg-white hover:border-[#B5501A] transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <DesignIcon name="alt_route" className=" text-[#B5501A] text-2xl" />
                <span className="bg-[#F4EFEA] text-[#B5501A] font-semibold text-xs px-2.5 py-1 rounded-full">
                  <DesignText>{"Custom Software"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-lg font-bold text-ink mb-2">
                <DesignText>{"Growing Complexity"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                <DesignText>{"Processes that worked for a small team no longer scale with operational demand."}</DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="mb-12">
          <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-3">
            <DesignText>{"What We Build"}</DesignText>
          </h2>
          <p className="font-body text-secondary max-w-2xl text-sm md:text-base">
            <DesignText>{"Specialized engineering services tailored for complex business needs."}</DesignText>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface">
            <DesignIcon name="web" className=" text-[#B5501A] mb-4 block text-3xl" />
            <h3 className="font-h3 text-lg font-bold text-ink mb-2">
              <DesignText>{"Custom Web Applications"}</DesignText>
            </h3>
            <p className="font-body text-secondary mb-6 text-sm">
              <DesignText>{"Tailored applications built from the ground up to fit your exact operational requirements."}</DesignText>
            </p>
            <Link
              className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold"
              href="/services"
            >
              <DesignText>{"Learn more"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-sm" />
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface">
            <DesignIcon name="account_tree" className=" text-[#B5501A] mb-4 block text-3xl" />
            <h3 className="font-h3 text-lg font-bold text-ink mb-2">
              <DesignText>{"Business Systems"}</DesignText>
            </h3>
            <p className="font-body text-secondary mb-6 text-sm">
              <DesignText>
                {"Internal systems including inventory, warehouse, booking, approval workflows, and operational management tools."}
              </DesignText>
            </p>
            <Link
              className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold"
              href="/services"
            >
              <DesignText>{"Learn more"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-sm" />
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface">
            <DesignIcon name="rocket_launch" className=" text-[#B5501A] mb-4 block text-3xl" />
            <h3 className="font-h3 text-lg font-bold text-ink mb-2">
              <DesignText>{"SaaS Development"}</DesignText>
            </h3>
            <p className="font-body text-secondary mb-6 text-sm">
              <DesignText>{"Scalable multi-tenant architectures engineered for high performance, security, and growth."}</DesignText>
            </p>
            <Link
              className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold"
              href="/services"
            >
              <DesignText>{"Learn more"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-sm" />
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface">
            <DesignIcon name="automation" className=" text-[#B5501A] mb-4 block text-3xl" />
            <h3 className="font-h3 text-lg font-bold text-ink mb-2">
              <DesignText>{"Business Process Automation"}</DesignText>
            </h3>
            <p className="font-body text-secondary mb-6 text-sm">
              <DesignText>{"Streamline internal processes with custom automated scripts, queues, and task workflows."}</DesignText>
            </p>
            <Link
              className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold"
              href="/services"
            >
              <DesignText>{"Learn more"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-sm" />
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface">
            <DesignIcon name="api" className=" text-[#B5501A] mb-4 block text-3xl" />
            <h3 className="font-h3 text-lg font-bold text-ink mb-2">
              <DesignText>{"API & System Integration"}</DesignText>
            </h3>
            <p className="font-body text-secondary mb-6 text-sm">
              <DesignText>{"Connecting disparate systems, third-party APIs, and legacy databases into unified data pipelines."}</DesignText>
            </p>
            <Link
              className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold"
              href="/services"
            >
              <DesignText>{"Learn more"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-sm" />
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface">
            <DesignIcon name="settings_suggest" className=" text-[#B5501A] mb-4 block text-3xl" />
            <h3 className="font-h3 text-lg font-bold text-ink mb-2">
              <DesignText>{"DevOps & Infrastructure"}</DesignText>
            </h3>
            <p className="font-body text-secondary mb-6 text-sm">
              <DesignText>{"Robust infrastructure setup, CI/CD pipelines, containerization, and cloud migration services."}</DesignText>
            </p>
            <Link
              className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold"
              href="/services"
            >
              <DesignText>{"Learn more"}</DesignText>
              <DesignIcon name="arrow_forward" className=" text-sm" />
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl hover:border-[#B5501A] hover:shadow-[0_4px_16px_rgba(181,80,26,0.06)] transition-all group bg-surface md:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <DesignIcon name="build" className=" text-[#B5501A] text-3xl mt-1" />
                <div>
                  <h3 className="font-h3 text-lg font-bold text-ink mb-1">
                    <DesignText>{"Maintenance & Support"}</DesignText>
                  </h3>
                  <p className="font-body text-secondary text-sm">
                    <DesignText>
                      {"Modernizing and maintaining mission-critical systems for continuous stability and performance."}
                    </DesignText>
                  </p>
                </div>
              </div>
              <Link
                className="text-[#B5501A] font-label text-label group-hover:underline inline-flex items-center gap-1 font-semibold whitespace-nowrap"
                href="/services"
              >
                <DesignText>{"Learn more"}</DesignText>
                <DesignIcon name="arrow_forward" className=" text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto bg-surface-alt border-y border-border">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-2">
              <DesignText>{"Selected Work"}</DesignText>
            </h2>
            <p className="font-body text-secondary text-sm md:text-base">
              <DesignText>{"Real-world solutions engineered for impact."}</DesignText>
            </p>
          </div>
          <Link className="hidden md:inline-flex items-center gap-1 text-[#B5501A] font-semibold text-sm hover:underline" href="/work">
            <DesignText>{"View all case studies →"}</DesignText>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            className="group block cursor-pointer bg-white rounded-xl border border-border overflow-hidden p-4 hover:border-[#B5501A] transition-all"
            href="/work/multi-site-inventory-system"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-border mb-4 bg-surface-alt">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src="/img/design/inventory-overview.png"
                alt="Multi-Site Inventory System dashboard"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="bg-[#F4EFEA] text-[#B5501A] px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Inventory"}</DesignText>
              </span>
              <span className="bg-surface-variant text-secondary px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Workflow"}</DesignText>
              </span>
              <span className="bg-surface-variant text-secondary px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Reporting"}</DesignText>
              </span>
            </div>
            <h3 className="font-h3 text-base md:text-lg font-bold text-ink mb-1.5">
              <DesignText>{"Multi-Site Inventory System"}</DesignText>
            </h3>
            <p className="font-body text-secondary text-sm mb-4">
              <DesignText>{"Centralizing spare-part inventory and movement across multiple operational locations."}</DesignText>
            </p>
            <span className="text-[#B5501A] text-xs font-semibold group-hover:underline inline-flex items-center gap-1">
              <DesignText>{"View case study →"}</DesignText>
            </span>
          </Link>
          <Link
            className="group block cursor-pointer bg-white rounded-xl border border-border overflow-hidden p-4 hover:border-[#B5501A] transition-all"
            href="/work/point-of-sale-saas-platform"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-border mb-4 bg-surface-alt">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src="/img/design/f1fdd6f763d4.png"
                alt="Point of Sale SaaS Platform interface"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="bg-[#F4EFEA] text-[#B5501A] px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"SaaS"}</DesignText>
              </span>
              <span className="bg-surface-variant text-secondary px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"POS"}</DesignText>
              </span>
              <span className="bg-surface-variant text-secondary px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Multi-Tenant"}</DesignText>
              </span>
            </div>
            <h3 className="font-h3 text-base md:text-lg font-bold text-ink mb-1.5">
              <DesignText>{"Point of Sale SaaS Platform"}</DesignText>
            </h3>
            <p className="font-body text-secondary text-sm mb-4">
              <DesignText>{"A multi-tenant POS platform designed for growing businesses."}</DesignText>
            </p>
            <span className="text-[#B5501A] text-xs font-semibold group-hover:underline inline-flex items-center gap-1">
              <DesignText>{"View case study →"}</DesignText>
            </span>
          </Link>
          <Link
            className="group block cursor-pointer bg-white rounded-xl border border-border overflow-hidden p-4 hover:border-[#B5501A] transition-all"
            href="/work/operational-monitoring-system"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-border mb-4 bg-surface-alt">
              <img
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                src="/img/design/910f8da64850.png"
                alt="Operational Monitoring System screen"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="bg-[#F4EFEA] text-[#B5501A] px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Dashboard"}</DesignText>
              </span>
              <span className="bg-surface-variant text-secondary px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Operations"}</DesignText>
              </span>
              <span className="bg-surface-variant text-secondary px-2 py-0.5 rounded font-medium text-[11px]">
                <DesignText>{"Reporting"}</DesignText>
              </span>
            </div>
            <h3 className="font-h3 text-base md:text-lg font-bold text-ink mb-1.5">
              <DesignText>{"Operational Monitoring System"}</DesignText>
            </h3>
            <p className="font-body text-secondary text-sm mb-4">
              <DesignText>{"Making business process and operational status easier to monitor from one system."}</DesignText>
            </p>
            <span className="text-[#B5501A] text-xs font-semibold group-hover:underline inline-flex items-center gap-1">
              <DesignText>{"View case study →"}</DesignText>
            </span>
          </Link>
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link className="inline-flex items-center gap-1 text-[#B5501A] font-semibold text-sm hover:underline" href="/work">
            <DesignText>{"View all case studies →"}</DesignText>
          </Link>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto bg-surface-alt">
        <div className="mb-12">
          <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-3">
            <DesignText>{"How we work."}</DesignText>
          </h2>
          <p className="font-body text-secondary max-w-2xl text-sm md:text-base">
            <DesignText>{"A practical process from understanding the problem to supporting the system after launch."}</DesignText>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
          <div className="flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#B5501A] pl-4 md:pl-0 md:pt-4">
            <span className="font-mono text-[#B5501A] font-bold text-sm tracking-wider mb-2">
              <DesignText>{"01 Discover"}</DesignText>
            </span>
            <p className="text-ink font-semibold text-sm mb-1">
              <DesignText>{"Discovery & Audit"}</DesignText>
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              <DesignText>{"Understand the problem and current workflow."}</DesignText>
            </p>
          </div>
          <div className="flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#B5501A] pl-4 md:pl-0 md:pt-4">
            <span className="font-mono text-[#B5501A] font-bold text-sm tracking-wider mb-2">
              <DesignText>{"02 Define"}</DesignText>
            </span>
            <p className="text-ink font-semibold text-sm mb-1">
              <DesignText>{"Architecture"}</DesignText>
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              <DesignText>{"Turn requirements into a clear scope and solution."}</DesignText>
            </p>
          </div>
          <div className="flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#B5501A] pl-4 md:pl-0 md:pt-4">
            <span className="font-mono text-[#B5501A] font-bold text-sm tracking-wider mb-2">
              <DesignText>{"03 Build"}</DesignText>
            </span>
            <p className="text-ink font-semibold text-sm mb-1">
              <DesignText>{"Engineering"}</DesignText>
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              <DesignText>{"Design and develop the system iteratively."}</DesignText>
            </p>
          </div>
          <div className="flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#B5501A] pl-4 md:pl-0 md:pt-4">
            <span className="font-mono text-[#B5501A] font-bold text-sm tracking-wider mb-2">
              <DesignText>{"04 Validate"}</DesignText>
            </span>
            <p className="text-ink font-semibold text-sm mb-1">
              <DesignText>{"Testing"}</DesignText>
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              <DesignText>{"Test, review and improve with real feedback."}</DesignText>
            </p>
          </div>
          <div className="flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#B5501A] pl-4 md:pl-0 md:pt-4">
            <span className="font-mono text-[#B5501A] font-bold text-sm tracking-wider mb-2">
              <DesignText>{"05 Launch"}</DesignText>
            </span>
            <p className="text-ink font-semibold text-sm mb-1">
              <DesignText>{"Deployment"}</DesignText>
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              <DesignText>{"Deploy the application into production."}</DesignText>
            </p>
          </div>
          <div className="flex flex-col border-l-2 md:border-l-0 md:border-t-2 border-[#B5501A] pl-4 md:pl-0 md:pt-4">
            <span className="font-mono text-[#B5501A] font-bold text-sm tracking-wider mb-2">
              <DesignText>{"06 Support"}</DesignText>
            </span>
            <p className="text-ink font-semibold text-sm mb-1">
              <DesignText>{"Monitoring"}</DesignText>
            </p>
            <p className="text-secondary text-xs leading-relaxed">
              <DesignText>{"Maintain, monitor and continue improving the system."}</DesignText>
            </p>
          </div>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="mb-10">
          <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-3">
            <DesignText>{"Built with engineering in mind."}</DesignText>
          </h2>
          <p className="font-body text-secondary max-w-2xl text-sm md:text-base">
            <DesignText>{"Reliable software requires more than a good-looking interface."}</DesignText>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="layers" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Scalable Architecture"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="lock" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Secure Authentication"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="badge" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Role & Permission Management"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="database" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Database Design"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="swap_horiz" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"API Integration"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="monitoring" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Monitoring"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="backup" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Automated Backup"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-4 rounded-lg bg-surface flex items-center gap-3">
            <DesignIcon name="cloud_done" className=" text-[#B5501A] text-xl" />
            <span className="text-ink font-semibold text-sm">
              <DesignText>{"Production Deployment"}</DesignText>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-border/60">
          <span className="text-xs uppercase tracking-wider font-mono text-secondary mr-2 font-semibold">
            <DesignText>{"Core Technologies:"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"Laravel"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"Vue"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"React / Next.js"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"MySQL"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"PostgreSQL"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"Redis"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"Docker"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"Nginx"}</DesignText>
          </span>
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-alt border border-border text-ink">
            <DesignText>{"Cloudflare"}</DesignText>
          </span>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-2">
              <DesignText>{"Products we're building."}</DesignText>
            </h2>
            <p className="font-body text-secondary text-sm md:text-base">
              <DesignText>{"Software products built from problems we encounter in the real world."}</DesignText>
            </p>
          </div>
          <Link className="text-[#B5501A] font-semibold text-sm hover:underline hidden md:inline-flex items-center gap-1" href="/products">
            <DesignText>{"See all products →"}</DesignText>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between hover:border-[#B5501A] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-green-100 text-green-800 font-bold">
                  <DesignText>{"LIVE"}</DesignText>
                </span>
                <span className="text-xs text-secondary font-medium">
                  <DesignText>{"Retail Tech"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-xl font-bold text-ink mb-2">
                <DesignText>{"GrowPOS"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                <DesignText>
                  {"Cloud-based point of sale and inventory management for rapidly scaling retail and food & beverage businesses."}
                </DesignText>
              </p>
            </div>
            <Link className="text-[#B5501A] font-semibold text-sm hover:underline inline-flex items-center gap-1" href="/products">
              <DesignText>{"Visit product →"}</DesignText>
            </Link>
          </div>
          <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between hover:border-secondary/40 transition-all opacity-95">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                  <DesignText>{"IN RESEARCH"}</DesignText>
                </span>
                <span className="text-xs text-secondary font-medium">
                  <DesignText>{"Operations"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-xl font-bold text-ink mb-2">
                <DesignText>{"FieldCoord"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                <DesignText>{"Operational workflow coordination and field dispatch tool built for mid-sized teams."}</DesignText>
              </p>
            </div>
            <span className="text-secondary text-sm font-medium">
              <DesignText>{"Coming soon"}</DesignText>
            </span>
          </div>
          <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between hover:border-secondary/40 transition-all opacity-95">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                  <DesignText>{"UPCOMING"}</DesignText>
                </span>
                <span className="text-xs text-secondary font-medium">
                  <DesignText>{"Business Systems"}</DesignText>
                </span>
              </div>
              <h3 className="font-h3 text-xl font-bold text-ink mb-2">
                <DesignText>{"AuditLog OS"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                <DesignText>{"Internal audit trail and compliance reporting system born from enterprise client needs."}</DesignText>
              </p>
            </div>
            <span className="text-secondary text-sm font-medium">
              <DesignText>{"Coming soon"}</DesignText>
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <Link className="text-[#B5501A] font-semibold text-sm hover:underline inline-flex items-center gap-1" href="/products">
            <DesignText>{"See all products →"}</DesignText>
          </Link>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto border-t border-border">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-2">
              <DesignText>{"Insights."}</DesignText>
            </h2>
            <p className="font-body text-secondary text-sm md:text-base">
              <DesignText>{"Ideas, lessons and things we learn while building software."}</DesignText>
            </p>
          </div>
          <Link className="text-[#B5501A] font-semibold text-sm hover:underline hidden md:inline-flex items-center gap-1" href="/insights">
            <DesignText>{"Explore Insights →"}</DesignText>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <article className="border border-border p-6 rounded-xl bg-surface hover:border-[#B5501A] transition-all flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-[#B5501A] uppercase tracking-wider font-semibold block mb-3">
                <DesignText>{"Business & Digitalization"}</DesignText>
              </span>
              <h3 className="font-h3 text-lg font-bold text-ink group-hover:text-[#B5501A] transition-colors mb-3">
                <DesignText>{"When does Excel become a bottleneck?"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                <DesignText>
                  {"Recognizing when manual spreadsheets begin costing your operations more time and errors than custom software."}
                </DesignText>
              </p>
            </div>
            <Link
              className="text-[#B5501A] font-semibold text-sm group-hover:underline inline-flex items-center gap-1"
              href="/insights/when-does-excel-become-a-bottleneck"
            >
              <DesignText>{"Read article →"}</DesignText>
            </Link>
          </article>
          <article className="border border-border p-6 rounded-xl bg-surface hover:border-[#B5501A] transition-all flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-[#B5501A] uppercase tracking-wider font-semibold block mb-3">
                <DesignText>{"Engineering"}</DesignText>
              </span>
              <h3 className="font-h3 text-lg font-bold text-ink group-hover:text-[#B5501A] transition-colors mb-3">
                <DesignText>{"Why your API works in Postman but fails in the browser"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                <DesignText>
                  {"A deep dive into CORS headers, authentication cookie lifecycles, and front-end request pipeline quirks."}
                </DesignText>
              </p>
            </div>
            <Link
              className="text-[#B5501A] font-semibold text-sm group-hover:underline inline-flex items-center gap-1"
              href="/insights/why-your-api-works-in-postman-but-fails-in-the-browser"
            >
              <DesignText>{"Read article →"}</DesignText>
            </Link>
          </article>
          <article className="border border-border p-6 rounded-xl bg-surface hover:border-[#B5501A] transition-all flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-[#B5501A] uppercase tracking-wider font-semibold block mb-3">
                <DesignText>{"Build Journal"}</DesignText>
              </span>
              <h3 className="font-h3 text-lg font-bold text-ink group-hover:text-[#B5501A] transition-colors mb-3">
                <DesignText>{"Building GrowPOS: Designing Multi-Tenant Architecture"}</DesignText>
              </h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                <DesignText>
                  {"Lessons learned partitioning database schemas, tenant isolation, and transaction reliability at scale."}
                </DesignText>
              </p>
            </div>
            <Link
              className="text-[#B5501A] font-semibold text-sm group-hover:underline inline-flex items-center gap-1"
              href="/insights/building-growpos-designing-multi-tenant-architecture"
            >
              <DesignText>{"Read article →"}</DesignText>
            </Link>
          </article>
        </div>
        <div className="md:hidden">
          <Link className="text-[#B5501A] font-semibold text-sm hover:underline inline-flex items-center gap-1" href="/insights">
            <DesignText>{"Explore Insights →"}</DesignText>
          </Link>
        </div>
      </section>
      <section className="section-full-width py-section-gap-sm md:py-20 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto bg-surface-alt border-y border-border">
        <div className="max-w-4xl">
          <h2 className="font-h2 text-2xl md:text-3xl font-bold text-ink mb-4">
            <DesignText>{"Small studio. Hands-on work."}</DesignText>
          </h2>
          <p className="font-body text-secondary text-base md:text-lg mb-8 leading-relaxed">
            <DesignText>
              {
                "Forge Studio is an independent software studio focused on designing and engineering practical digital products for real business problems."
              }
            </DesignText>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-white border border-border flex items-start gap-3">
              <DesignIcon name="check_circle" className=" text-[#B5501A] text-xl mt-0.5" />
              <span className="font-semibold text-ink text-sm">
                <DesignText>{"Understand before building."}</DesignText>
              </span>
            </div>
            <div className="p-4 rounded-lg bg-white border border-border flex items-start gap-3">
              <DesignIcon name="check_circle" className=" text-[#B5501A] text-xl mt-0.5" />
              <span className="font-semibold text-ink text-sm">
                <DesignText>{"Keep things practical."}</DesignText>
              </span>
            </div>
            <div className="p-4 rounded-lg bg-white border border-border flex items-start gap-3">
              <DesignIcon name="check_circle" className=" text-[#B5501A] text-xl mt-0.5" />
              <span className="font-semibold text-ink text-sm">
                <DesignText>{"Build for the real world."}</DesignText>
              </span>
            </div>
            <div className="p-4 rounded-lg bg-white border border-border flex items-start gap-3">
              <DesignIcon name="check_circle" className=" text-[#B5501A] text-xl mt-0.5" />
              <span className="font-semibold text-ink text-sm">
                <DesignText>{"Think beyond launch."}</DesignText>
              </span>
            </div>
          </div>
          <Link
            className="inline-flex items-center gap-1.5 text-white bg-[#1F1F1F] hover:bg-black px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            href="/about"
          >
            <DesignText>{"About Forge"}</DesignText>
            <DesignIcon name="arrow_forward" className=" text-sm" />
          </Link>
        </div>
      </section>
      <section className="section-full-width py-16 md:py-24 px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto">
        <div className="bg-[#1F1F1F] text-white p-8 md:p-14 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-h2 text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              <DesignText>{"Have a process that feels unnecessarily complicated?"}</DesignText>
            </h2>
            <p className="text-[#dbdad9] text-base leading-relaxed">
              <DesignText>{"Let's explore whether software can make it better."}</DesignText>
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              className="inline-flex items-center justify-center bg-[#B5501A] text-white px-8 py-3.5 rounded-lg hover:bg-[#8F3F14] transition-colors font-label text-sm tracking-wider uppercase font-semibold"
              href="/contact"
            >
              <DesignText>{"Start a Project"}</DesignText>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
