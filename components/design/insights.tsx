import { Link } from "../../i18n/navigation";
import { DesignText, DesignIcon, FilterGrid, InquiryForm } from "./primitives";

export function InsightsDesign() {
  return (
    <main className="design-page design-insights pt-16 pb-section-gap-lg px-gutter-mobile md:px-gutter-desktop max-w-container-max mx-auto">
      <section className="mb-section-gap-sm md:mb-section-gap-lg max-w-2xl">
        <h1 className="font-display-mobile text-display-mobile md:font-display md:text-display mb-6">
          <DesignText>{"Insights"}</DesignText>
        </h1>
        <p className="font-body-lg text-body-lg text-secondary">
          <DesignText>
            {
              "Thoughts, technical deep dives, and observations on engineering, design, and business growth. We share what we learn building industrial-grade software."
            }
          </DesignText>
        </p>
      </section>
      <FilterGrid
        categories={["Business & Digitalization", "Engineering", "Build Journal", "Ideas"]}
        items={[
          {
            category: "Business & Digitalization",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Business & Digitalization"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Business & Digitalization"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"5 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"When does Excel become a bottleneck?"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {
                      "Exploring the tipping point where spreadsheet-based operational tracking breaks down and purpose-built software becomes necessary."
                    }
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/when-does-excel-become-a-bottleneck"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Business & Digitalization",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Business & Digitalization"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Business & Digitalization"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"6 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"5 signs your business may need its own internal system"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {
                      "Common operational bottlenecks, fragmented communication channels, and audit gaps that signal it's time to consolidate workflows."
                    }
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/5-signs-your-business-may-need-its-own-internal-system"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Business & Digitalization",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Business & Digitalization"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Business & Digitalization"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"4 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"You probably don't need custom software yet"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {
                      "Why off-the-shelf tools or simpler process adjustments often trump premature software engineering in early business stages."
                    }
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/you-probably-don-t-need-custom-software-yet"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Engineering",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Engineering"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Engineering"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"7 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"Why your API works in Postman but fails in the browser"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {"Demystifying CORS, preflight options requests, cookies with cross-origin credentials, and browser security contexts."}
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/why-your-api-works-in-postman-but-fails-in-the-browser"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Engineering",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Engineering"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Engineering"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"8 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"Why applications are fast locally but slow in production"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {
                      "Network latency, database connection pooling, cold starts, and unindexed queries under concurrent real-world traffic."
                    }
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/why-applications-are-fast-locally-but-slow-in-production"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Engineering",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Engineering"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Engineering"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"6 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"Why database indexes matter"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {"How execution plans change with scale, and how compound indexing avoids costly table scans as records grow."}
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/why-database-indexes-matter"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Build Journal",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Build Journal"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Build Journal"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"9 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"Building GrowPOS: Designing Multi-Tenant Architecture"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {"Architectural tradeoffs in multi-tenant data isolation, tenant routing, and shared database schema considerations."}
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/building-growpos-designing-multi-tenant-architecture"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Build Journal",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Build Journal"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Build Journal"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"7 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"Building a reliable billing workflow"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {"Idempotency keys, webhook event ordering, failure retries, and handling asynchronous transaction states."}
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/building-a-reliable-billing-workflow"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Ideas",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Ideas"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Ideas"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"5 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"Could this queue system be digital?"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {
                      "Analyzing physical ticket dispensers and waiting queues to identify where lightweight digital ticketing creates real customer value."
                    }
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/could-this-queue-system-be-digital"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
          {
            category: "Ideas",
            content: (
              <article
                className="group relative border border-border p-6 rounded DEFAULT transition-all duration-300 hover:border-primary group-hover:shadow-ambient flex flex-col h-full bg-surface"
                data-category="Ideas"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-surface-alt text-ink font-label text-label rounded-full border border-border">
                    <DesignText>{"Ideas"}</DesignText>
                  </span>
                  <span className="text-secondary font-small text-small">
                    <DesignText>{"5 min read"}</DesignText>
                  </span>
                </div>
                <h3 className="font-h3 text-h3 mb-3 text-ink group-hover:text-primary transition-colors">
                  <DesignText>{"What would a better laundry workflow look like?"}</DesignText>
                </h3>
                <p className="font-body text-body text-secondary mb-6 flex-grow">
                  <DesignText>
                    {
                      "Breaking down customer intake, garment tagging, wash cycle staging, and dispatch notifications into a seamless operation."
                    }
                  </DesignText>
                </p>
                <Link
                  className="inline-flex items-center text-primary font-label text-label hover:underline mt-auto"
                  href="/insights/what-would-a-better-laundry-workflow-look-like"
                >
                  <DesignText>{"Read article"}</DesignText>
                  <DesignIcon name="arrow_forward" className=" ml-1 text-sm" />
                </Link>
              </article>
            ),
          },
        ]}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-mobile md:gap-gutter-tablet lg:gap-gutter-desktop"
      />
    </main>
  );
}
