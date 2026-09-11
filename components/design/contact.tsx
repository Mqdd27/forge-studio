"use client";

import { useLocale } from "next-intl";
import { DesignText, DesignIcon, InquiryForm } from "./primitives";
import translations from "../../messages/design-id.json";

const field = "w-full border border-border rounded-lg p-3 text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";
const label = "flex flex-col gap-2 text-xs font-medium uppercase tracking-wide";
const services = [
  "Custom Web Application",
  "Business System",
  "SaaS",
  "Automation",
  "Integration",
  "Existing System Improvement",
  "Maintenance",
  "SEO Friendly",
  "Not Sure Yet",
];

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mb-4 border-b border-border pb-2 text-lg font-medium">
      <DesignText>{children}</DesignText>
    </h2>
  );
}

function Choices({ name, options }: { name: string; options: string[] }) {
  return (
    <div className={`grid grid-cols-2 gap-2 ${name === "project-type" ? "sm:grid-cols-4" : ""}`}>
      {options.map((option) => (
        <label key={option} className="relative cursor-pointer">
          <input type="radio" name={name} value={option} className="peer sr-only" required={name === "project-type"} />
          <span className="flex h-full min-h-12 items-center justify-center rounded-lg border border-border p-3 text-center text-xs transition-colors hover:border-accent peer-checked:border-accent peer-checked:bg-accent-light peer-checked:text-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2">
            <DesignText>{option}</DesignText>
          </span>
        </label>
      ))}
    </div>
  );
}

export function ContactDesign() {
  const locale = useLocale();
  const t = (text: string) => (locale === "id" ? ((translations as Record<string, string>)[text] ?? text) : text);
  return (
    <main className="design-page design-contact mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <section className="mx-auto mb-14 max-w-3xl text-center">
        <h1 className="font-heading font-bold">
          <DesignText>{"Tell us what you're trying to solve."}</DesignText>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-secondary">
          <DesignText>{"You don't need to know the technical solution yet. Tell us about the problem, workflow or idea."}</DesignText>
        </p>
      </section>
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[2.1fr_1fr]">
        <div className="min-w-0 rounded-lg border border-border bg-surface p-5 sm:p-8 lg:p-10">
          <InquiryForm className="space-y-8">
            <section>
              <Heading>1. Your Information</Heading>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={label}>
                  <span>
                    <DesignText>{"Name"}</DesignText> <span className="text-accent">*</span>
                  </span>
                  <input className={field} name="name" autoComplete="name" placeholder="Jane Doe" required />
                </label>
                <label className={label}>
                  <span>
                    <DesignText>{"Email"}</DesignText> <span className="text-accent">*</span>
                  </span>
                  <input className={field} type="email" name="contact" autoComplete="email" placeholder="jane@company.com" required />
                </label>
                <label className={label}>
                  <DesignText>{"Company / Organization (optional)"}</DesignText>
                  <input className={field} name="company" autoComplete="organization" placeholder="Acme Corp" />
                </label>
                <label className={label}>
                  <DesignText>{"WhatsApp (optional)"}</DesignText>
                  <input className={field} type="tel" name="whatsapp" autoComplete="tel" placeholder="+62 812-3456-7890" />
                </label>
              </div>
            </section>
            <fieldset>
              <legend className="mb-4 w-full border-b border-border pb-2 text-lg font-medium">
                <DesignText>{"2. What do you need help with?"}</DesignText>
              </legend>
              <p className="mb-3 text-sm text-secondary">
                <DesignText>{"Select the option that best describes your needs:"}</DesignText>
              </p>
              <Choices name="project-type" options={services} />
            </fieldset>
            <section>
              <Heading>3. Project Problem</Heading>
              <label className={label}>
                <span>
                  <DesignText>{"What are you trying to solve?"}</DesignText> <span className="text-accent">*</span>
                </span>
                <textarea
                  className={field}
                  name="description"
                  required
                  rows={5}
                  placeholder={t("Describe the core problem, bottleneck, or business initiative you're addressing...")}
                />
              </label>
              <p className="mt-3 text-sm text-secondary">
                <DesignText>{"Tell us about the problem, workflow or idea. Technical details are not required."}</DesignText>
              </p>
            </section>
            <section>
              <Heading>4. Current Workflow</Heading>
              <label className={label}>
                <DesignText>{"How are you handling this today? (optional)"}</DesignText>
                <textarea
                  className={field}
                  name="workflow"
                  rows={3}
                  placeholder={t("E.g., Currently tracked in shared Google Sheets and WhatsApp groups...")}
                />
              </label>
              <p className="mt-3 text-sm text-secondary">
                <DesignText>{"Excel, WhatsApp, paper forms, an existing system, or something else."}</DesignText>
              </p>
            </section>
            <div className="grid gap-6 sm:grid-cols-2">
              <section>
                <Heading>5. Budget</Heading>
                <label className={label}>
                  <DesignText>{"Estimated Budget (optional)"}</DesignText>
                  <select name="budget" defaultValue="" className={field}>
                    {["Select budget range", "Under Rp10m", "Rp10m–Rp25m", "Rp25m–Rp50m", "Rp50m+", "Not Sure Yet"].map((option, i) => (
                      <option key={option} value={i === 0 ? "" : option}>
                        {t(option)}
                      </option>
                    ))}
                  </select>
                </label>
              </section>
              <fieldset>
                <legend className="mb-4 w-full border-b border-border pb-2 text-lg font-medium">
                  <DesignText>{"6. Timeline"}</DesignText>
                </legend>
                <p className="mb-2 text-xs uppercase tracking-wide">
                  <DesignText>{"Target Timeline (optional)"}</DesignText>
                </p>
                <Choices name="timeline" options={["ASAP", "1–2 months", "3–6 months", "Flexible"]} />
              </fieldset>
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark sm:w-auto"
            >
              <DesignText>{"Prepare Project Brief"}</DesignText>
              <DesignIcon name="arrow_forward" />
            </button>
            <p className="text-xs text-secondary">
              <DesignText>{"Opens an email draft with your project brief, ready for you to send."}</DesignText>
            </p>
          </InquiryForm>
        </div>
        <aside className="space-y-6">
          <div className="rounded-lg border border-border bg-surface-alt p-7">
            <h2 className="mb-4 flex items-center gap-3 text-lg font-medium">
              <DesignIcon name="schedule" className="text-accent" />
              <DesignText>{"Response Expectation"}</DesignText>
            </h2>
            <p className="text-sm leading-relaxed text-secondary">
              <DesignText>
                {
                  "We review all serious inquiries thoroughly. Expect a response from an engineering lead within 1–2 business days to schedule an initial consultation."
                }
              </DesignText>
            </p>
          </div>
          <div className="rounded-lg border border-border p-7">
            <h2 className="mb-4 text-lg font-medium">
              <DesignText>{"Problem-First Approach"}</DesignText>
            </h2>
            <p className="text-sm leading-relaxed text-secondary">
              <DesignText>
                {
                  "You don't need wireframes or technical specs. We start by unpacking the actual operational friction or business opportunity, then advise whether custom software is the right move."
                }
              </DesignText>
            </p>
          </div>
          <div className="rounded-lg border border-border p-7">
            <h2 className="text-lg font-medium">
              <DesignText>{"Direct Channels"}</DesignText>
            </h2>
            <p className="mb-5 mt-1 text-sm text-secondary">
              <DesignText>{"Prefer a quick informal check first?"}</DesignText>
            </p>
            <div className="flex items-start gap-3">
              <DesignIcon name="mail" className="text-secondary" />
              <div className="min-w-0">
                <p className="text-xs uppercase">
                  <DesignText>{"Email"}</DesignText>
                </p>
                <a href="mailto:hello@forgestudio.dev" className="break-all text-sm hover:text-accent hover:underline">
                  hello@forgestudio.dev
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
