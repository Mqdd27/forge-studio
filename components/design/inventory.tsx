import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon, FilterGrid, InquiryForm } from "./primitives";

export function InventoryDesign() {
  return (
    <main className="design-page design-inventory flex-grow">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-4">
        <nav className="flex items-center gap-2 text-sm text-grey">
          <Link href="/work" className="hover:text-ink flex items-center gap-1.5 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <DesignText>{"Back to Selected Work"}</DesignText>
          </Link>
          <span className="text-border">
            <DesignText>{"/"}</DesignText>
          </span>
          <span className="text-grey-light">
            <DesignText>{"Business System"}</DesignText>
          </span>
          <span className="text-border">
            <DesignText>{"/"}</DesignText>
          </span>
          <span className="text-ink font-medium">
            <DesignText>{"Multi-Site Inventory System"}</DesignText>
          </span>
        </nav>
      </div>
      <section className="section-full-width max-w-[1200px] mx-auto px-6 pt-6 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-surface-alt border border-border text-accent mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <DesignText>{"Business System Case Study"}</DesignText>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.15] mb-6">
            <DesignText>{"Multi-Site Inventory System"}</DesignText>
          </h1>
          <p className="text-lg md:text-xl text-grey leading-relaxed mb-8">
            <DesignText>
              {
                "Centralizing spare-part inventory, movement tracking, and dispatch approval pipelines across multiple operational locations into a single, reliable web application."
              }
            </DesignText>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-border my-6">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-grey-light mb-1">
              <DesignText>{"System Type"}</DesignText>
            </span>
            <span className="text-base font-semibold text-ink">
              <DesignText>{"Business System"}</DesignText>
            </span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-grey-light mb-1">
              <DesignText>{"Domain"}</DesignText>
            </span>
            <span className="text-base font-semibold text-ink">
              <DesignText>{"Inventory & Logistics"}</DesignText>
            </span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-grey-light mb-1">
              <DesignText>{"Capabilities"}</DesignText>
            </span>
            <span className="text-base font-semibold text-ink">
              <DesignText>{"Inventory · Workflow · Reporting"}</DesignText>
            </span>
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-grey-light mb-1">
              <DesignText>{"Deployment"}</DesignText>
            </span>
            <span className="text-base font-semibold text-ink">
              <DesignText>{"Private Cloud Web App"}</DesignText>
            </span>
          </div>
        </div>
        <div className="mt-10 rounded-xl overflow-hidden border border-border bg-surface-alt shadow-sm">
          <div className="bg-[#F0ECE6] px-4 py-2.5 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E57373]"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFB74D]"></span>
              <span className="w-3 h-3 rounded-full bg-[#81C784]"></span>
              <span className="ml-2 text-xs font-mono text-grey-light">
                <DesignText>{"app.internal.operations/inventory-overview"}</DesignText>
              </span>
            </div>
            <span className="text-xs font-medium text-grey">
              <DesignText>{"Live Operational Dashboard View"}</DesignText>
            </span>
          </div>
          <img
            src="/img/design/inventory-overview.png"
            alt="Multi-Site Inventory Management Web Application Dashboard"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
      </section>
      <section className="bg-surface-alt border-t border-border py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                <DesignText>{"01. The Problem"}</DesignText>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
                <DesignText>{"Disconnected stock records across remote sites"}</DesignText>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-grey text-base md:text-lg leading-relaxed">
              <p className="">
                <DesignText>
                  {
                    "As physical operations expanded across multiple regional warehouses and maintenance hubs, tracking stock availability became increasingly unstable. Each site operated with local spreadsheets, manual logbooks, and messaging threads for urgent component requests."
                  }
                </DesignText>
              </p>
              <p className="">
                <DesignText>
                  {
                    "Central management lacked real-time visibility into actual inventory levels. Critical parts were frequently recorded as available when already reserved or physically moved to a different depot, causing unexpected operational downtime, duplicate procurement purchases, and conflicting transfer logs."
                  }
                </DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width max-w-[1200px] mx-auto px-6 py-20 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
              <DesignText>{"02. Workflow Bottleneck"}</DesignText>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
              <DesignText>{"Where the legacy workflow broke down"}</DesignText>
            </h2>
            <p className="text-grey mt-4 text-sm leading-relaxed">
              <DesignText>
                {"Process bottlenecks before transitioning from fragmented spreadsheets to a centralized business system."}
              </DesignText>
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-surface">
              <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-accent mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                <DesignText>{"Spreadsheet Version Conflicts"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Warehouse managers updated separate copies of stock balance files, resulting in conflicting item quantities and missed stock requisitions."
                  }
                </DesignText>
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-accent mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                <DesignText>{"Untracked Stock Transfers"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Parts in transit between sites disappeared from active visibility for days, with approvals handled over informal messaging channels."
                  }
                </DesignText>
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-accent mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                <DesignText>{"Discrepancy In Audits"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Quarterly physical cycle counts routinely discovered significant variations between recorded numbers and physical shelf inventory."
                  }
                </DesignText>
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <div className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-accent mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                <DesignText>{"Delayed Reorder Cycles"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Procurement teams received replenishment notifications only after safety thresholds were already breached, slowing ongoing operations."
                  }
                </DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-alt border-t border-border py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                <DesignText>{"03. The Solution"}</DesignText>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
                <DesignText>{"A unified system for multi-site inventory and transfer governance"}</DesignText>
              </h2>
              <p className="text-grey text-base md:text-lg leading-relaxed mb-6">
                <DesignText>
                  {
                    "Forge Studio designed and engineered a dedicated internal web application that standardizes inventory items, automates site-to-site transfer workflows, and enforces role-based approvals."
                  }
                </DesignText>
              </p>
              <p className="text-grey text-base leading-relaxed">
                <DesignText>
                  {
                    "Instead of forcing operations into generic third-party SaaS tools with unnecessary bloat, the custom system maps directly to the operational team's physical dispatch rules, batch codes, and warehouse hierarchy."
                  }
                </DesignText>
              </p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="text-base font-bold text-ink mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <DesignText>{"Single Source of Inventory Truth"}</DesignText>
                </h4>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {
                      "Centralized database model providing instant stock lookup, status tags (In Stock, Reserved, In Transit, Low Stock), and multi-warehouse filtering."
                    }
                  </DesignText>
                </p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="text-base font-bold text-ink mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <DesignText>{"Structured Stock Transfer Pipelines"}</DesignText>
                </h4>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {
                      "Multi-stage digital approval chain (Requested → Dispatched → Received → Verified) eliminating informal communication gaps."
                    }
                  </DesignText>
                </p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="text-base font-bold text-ink mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <DesignText>{"Granular Audit Log & Movement History"}</DesignText>
                </h4>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {
                      "Every quantity adjustment and inter-site dispatch is immutably logged with timestamp, user account, batch number, and rationale."
                    }
                  </DesignText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width max-w-[1200px] mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
            <DesignText>{"04. Capabilities"}</DesignText>
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
            <DesignText>{"Core system capabilities"}</DesignText>
          </h2>
          <p className="text-grey text-base leading-relaxed">
            <DesignText>{"Engineered to support daily warehouse floor execution as well as operational oversight."}</DesignText>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent font-semibold mb-3">
                <DesignText>{"01 / DISCOVERY & DATA"}</DesignText>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                <DesignText>{"Multi-Location Stock Matrix"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Instant visibility into on-hand, reserved, and safety stock thresholds across central depots and field satellite storage."
                  }
                </DesignText>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-grey-light">
              <DesignText>{"SKU categorization, batch tracking & barcode indexing"}</DesignText>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent font-semibold mb-3">
                <DesignText>{"02 / WORKFLOW AUTOMATION"}</DesignText>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                <DesignText>{"Stock Transfer Workflows"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {"Formal requisition, manager authorization, and receiving sign-off with automatic inventory state balance adjustments."}
                </DesignText>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-grey-light">
              <DesignText>{"Two-stage dispatch verification & transit logging"}</DesignText>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent font-semibold mb-3">
                <DesignText>{"03 / GOVERNANCE & SECURITY"}</DesignText>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                <DesignText>{"Role & Site Access Control"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Custom permission boundaries ensuring warehouse staff can only access and update stock records for their designated facility."
                  }
                </DesignText>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-grey-light">
              <DesignText>{"Granular permissions: Admin, Depot Lead, Field Tech"}</DesignText>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent font-semibold mb-3">
                <DesignText>{"04 / AUDIT COMPLIANCE"}</DesignText>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                <DesignText>{"Cycle Count Reconciliation"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Guided digital inventory counts with real-time variance calculation, discrepancy flags, and supervisor approval requirement."
                  }
                </DesignText>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-grey-light">
              <DesignText>{"CSV export, discrepancy reporting & balance adjustment"}</DesignText>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent font-semibold mb-3">
                <DesignText>{"05 / MONITORING"}</DesignText>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                <DesignText>{"Low Stock & Reorder Alerts"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Automated threshold warnings that alert procurement leads before critical maintenance parts reach replenishment cutoff points."
                  }
                </DesignText>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-grey-light">
              <DesignText>{"Configurable reorder minimums per warehouse location"}</DesignText>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-accent font-semibold mb-3">
                <DesignText>{"06 / REPORTING"}</DesignText>
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">
                <DesignText>{"Operational Movement Analytics"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {"Aggregated reporting on inventory turnover speed, inter-site logistics frequency, and item usage history over time."}
                </DesignText>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-grey-light">
              <DesignText>{"Exportable operational summaries and audit trails"}</DesignText>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-alt border-t border-border py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
              <DesignText>{"05. Product Interface"}</DesignText>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
              <DesignText>{"Interface engineered for operational accuracy"}</DesignText>
            </h2>
            <p className="text-grey text-base leading-relaxed">
              <DesignText>
                {"Every screen was designed for dense tabular data clarity, rapid filtering, and error-free warehouse execution."}
              </DesignText>
            </p>
          </div>
          <div className="mb-14">
            <div className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm mb-4">
              <div className="bg-[#F0ECE6] px-4 py-2 border-b border-border flex items-center justify-between text-xs text-grey">
                <span className="font-mono">
                  <DesignText>{"LogiSync / Inventory Operations / Audit & Transfer Workflow"}</DesignText>
                </span>
                <span className="">
                  <DesignText>{"Stock Transfer & Audit View"}</DesignText>
                </span>
              </div>
              <img
                src="/img/design/inventory-audit.png"
                alt="Stock Transfer Workflow and Audit Interface Screen"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 px-2">
              <h4 className="text-base font-bold text-ink">
                <DesignText>{"Stock Transfer Workflow & Audit Grid"}</DesignText>
              </h4>
              <p className="text-sm text-grey">
                <DesignText>{"Displays multi-warehouse transfer staging, batch validation, and variance approval statuses."}</DesignText>
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-xl overflow-hidden border border-border bg-surface shadow-sm mb-4">
              <div className="bg-[#F0ECE6] px-4 py-2 border-b border-border flex items-center justify-between text-xs text-grey">
                <span className="font-mono">
                  <DesignText>{"LogiFlow / Dashboard / Multi-Site Inventory Overview"}</DesignText>
                </span>
                <span className="">
                  <DesignText>{"Executive Overview View"}</DesignText>
                </span>
              </div>
              <img
                src="/img/design/inventory-overview.png"
                alt="Multi-Site Inventory Overview Dashboard Screen"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 px-2">
              <h4 className="text-base font-bold text-ink">
                <DesignText>{"Central Warehouse Overview & Low Stock Matrix"}</DesignText>
              </h4>
              <p className="text-sm text-grey">
                <DesignText>{"Aggregates regional stock levels, fulfillment status, and critical stock threshold alerts."}</DesignText>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width max-w-[1200px] mx-auto px-6 py-20 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
              <DesignText>{"06. System Architecture"}</DesignText>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
              <DesignText>{"Built with engineering discipline"}</DesignText>
            </h2>
            <p className="text-grey text-sm leading-relaxed">
              <DesignText>
                {"Software architecture designed for data integrity, strict auditability, and minimal maintenance friction."}
              </DesignText>
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-base font-bold text-ink mb-2">
                <DesignText>{"Atomic Database Transactions"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Stock transfers between locations utilize ACID-compliant relational transactions. A transfer cannot deduct items from Warehouse A unless the corresponding pending receipt record is guaranteed in Warehouse B, preventing phantom balance drift."
                  }
                </DesignText>
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-base font-bold text-ink mb-2">
                <DesignText>{"Append-Only Inventory Ledger Pattern"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Instead of mutating stock counts directly in place, stock changes are stored as immutable ledger balance events (Receipt, Reservation, Transfer, Write-off, Adjustment). This preserves a 100% auditable history."
                  }
                </DesignText>
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="text-base font-bold text-ink mb-2">
                <DesignText>{"Role-Based Access Control (RBAC)"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed">
                <DesignText>
                  {
                    "Multi-tenant site scoping ensures warehouse operators only possess read/write authority for their specific physical hub, with central administrative privileges restricted to operations directors."
                  }
                </DesignText>
              </p>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-grey font-mono">
              <span className="font-semibold text-ink font-sans uppercase tracking-wider">
                <DesignText>{"Architecture Stack:"}</DesignText>
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-alt border border-border">
                <DesignText>{"Laravel Backend"}</DesignText>
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-alt border border-border">
                <DesignText>{"Vue.js Client"}</DesignText>
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-alt border border-border">
                <DesignText>{"PostgreSQL"}</DesignText>
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-alt border border-border">
                <DesignText>{"Redis Queue"}</DesignText>
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-alt border border-border">
                <DesignText>{"Docker"}</DesignText>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-alt border-t border-border py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
                <DesignText>{"07. Practical Outcome"}</DesignText>
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">
                <DesignText>{"Operational impact in production"}</DesignText>
              </h2>
              <p className="text-grey text-sm leading-relaxed">
                <DesignText>{"Qualitative operational improvements following rollout across central and satellite depots."}</DesignText>
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-surface">
                <h3 className="text-base font-bold text-ink mb-2">
                  <DesignText>{"Real-Time Centralized Visibility"}</DesignText>
                </h3>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {
                      "Operations teams can instantly identify exact component locations across all warehouses without manual phone calls or file consolidation."
                    }
                  </DesignText>
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-surface">
                <h3 className="text-base font-bold text-ink mb-2">
                  <DesignText>{"Elimination of Discrepancies"}</DesignText>
                </h3>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {"Inter-warehouse stock movements are verified by both sending and receiving leads, ending untracked transit losses."}
                  </DesignText>
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-surface">
                <h3 className="text-base font-bold text-ink mb-2">
                  <DesignText>{"Faster Requisition Approvals"}</DesignText>
                </h3>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {
                      "Standardized approval queues shortened spare-part turnaround time between maintenance requests and physical dispatch."
                    }
                  </DesignText>
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-surface">
                <h3 className="text-base font-bold text-ink mb-2">
                  <DesignText>{"Complete Audit Compliance"}</DesignText>
                </h3>
                <p className="text-sm text-grey leading-relaxed">
                  <DesignText>
                    {
                      "Every quantity adjustment produces an unalterable audit log, streamlining annual financial and operational inventory reviews."
                    }
                  </DesignText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-full-width max-w-[1200px] mx-auto px-6 py-20 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
              <DesignText>{"Related Systems"}</DesignText>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
              <DesignText>{"Other engineered projects"}</DesignText>
            </h2>
          </div>
          <Link href="/work" className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-1">
            <DesignText>{"View all selected work"}</DesignText>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-alt border border-border text-ink">
                  <DesignText>{"SaaS"}</DesignText>
                </span>
                <span className="text-xs text-grey-light">
                  <DesignText>{"SaaS Development"}</DesignText>
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">
                <DesignText>{"Point of Sale SaaS Platform"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed mb-6">
                <DesignText>
                  {"A multi-tenant POS platform designed for growing businesses requiring unified transaction logging and store sync."}
                </DesignText>
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 rounded text-xs bg-surface-alt border border-border text-grey">
                  <DesignText>{"SaaS"}</DesignText>
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-surface-alt border border-border text-grey">
                  <DesignText>{"POS"}</DesignText>
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-surface-alt border border-border text-grey">
                  <DesignText>{"Multi-Tenant"}</DesignText>
                </span>
              </div>
            </div>
            <Link
              href="/work/point-of-sale-saas-platform"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors gap-1.5"
            >
              <DesignText>{"Read Case Study"}</DesignText>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex flex-col justify-between hover:border-accent/50 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-alt border border-border text-ink">
                  <DesignText>{"Custom App"}</DesignText>
                </span>
                <span className="text-xs text-grey-light">
                  <DesignText>{"Custom Web Applications"}</DesignText>
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">
                <DesignText>{"Operational Monitoring System"}</DesignText>
              </h3>
              <p className="text-sm text-grey leading-relaxed mb-6">
                <DesignText>
                  {"Making business process and operational status easier to monitor and alert from a single centralized web dashboard."}
                </DesignText>
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 rounded text-xs bg-surface-alt border border-border text-grey">
                  <DesignText>{"Dashboard"}</DesignText>
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-surface-alt border border-border text-grey">
                  <DesignText>{"Operations"}</DesignText>
                </span>
                <span className="px-2 py-0.5 rounded text-xs bg-surface-alt border border-border text-grey">
                  <DesignText>{"Reporting"}</DesignText>
                </span>
              </div>
            </div>
            <Link
              href="/work/operational-monitoring-system"
              className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors gap-1.5"
            >
              <DesignText>{"Read Case Study"}</DesignText>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section id="contact" className="section-full-width max-w-[1200px] mx-auto px-6 pb-20">
        <div className="bg-[#1F1F1F] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-[#2E2E2E]">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
              <DesignText>{"Have a process that feels unnecessarily complicated?"}</DesignText>
            </h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              <DesignText>
                {"Let's explore whether purpose-built business software can streamline your team's workflows and operations."}
              </DesignText>
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold text-white bg-accent hover:bg-accent-dark transition-colors shadow-sm"
            >
              <DesignText>{"Start a Project"}</DesignText>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
