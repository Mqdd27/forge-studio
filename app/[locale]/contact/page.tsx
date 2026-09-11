"use client";

import { FormEvent, useState } from "react";

import { PageIntro } from "../../../components/page-intro";

const labelClass =
  "grid gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-ink";

const fieldClass =
  "w-full resize-y rounded-lg border border-border bg-white p-3 font-sans text-base font-normal normal-case tracking-normal text-ink outline-none transition focus:border-accent focus:ring-3 focus:ring-[rgba(181,80,26,0.12)]";

const primaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-lg border border-ink px-6 text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-accent-light";

const textLink =
  "text-xs font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline";

const eyebrow = "text-xs font-semibold uppercase tracking-[0.12em] text-accent";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <PageIntro
        eyebrow="Start a project"
        title="Let’s make the next step practical."
      >
        <p>
          Tell us what you are working through. We will reply with a clear next
          step, usually within 1–2 business days.
        </p>
      </PageIntro>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-14 px-4 pb-[72px] sm:px-6 md:grid-cols-[2fr_1fr] md:gap-16 md:pb-32 lg:px-8">
        {/* FORM */}
        <div className="rounded-lg border border-border bg-surface p-6 transition-all duration-200 md:p-10">
          {sent ? (
            <div>
              <span className={eyebrow}>Message received</span>

              <h2 className="my-4 font-heading text-[32px] font-semibold leading-[1.25] text-ink">
                Thank you for reaching out.
              </h2>

              <p className="mb-7 max-w-[620px] text-grey">
                We will review the details and get back to you. The usual next
                step is a short discovery conversation, followed by a practical
                proposal.
              </p>

              <button
                type="button"
                className={secondaryButton}
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-[22px]">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Doe" />

                <Field
                  label="Email or WhatsApp"
                  name="contact"
                  placeholder="jane@company.com"
                />
              </div>

              <Field
                label="Company name (optional)"
                name="company"
                placeholder="Acme Corp"
                required={false}
              />

              <label className={labelClass}>
                What do you need help with?
                <select
                  name="service"
                  required
                  defaultValue=""
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Custom App">Custom App</option>

                  <option value="SaaS">SaaS</option>

                  <option value="Automation">Automation</option>

                  <option value="Integration">Integration</option>

                  <option value="Maintenance">Maintenance</option>

                  <option value="Other">Other</option>
                </select>
              </label>

              <label className={labelClass}>
                Tell us about the project
                <textarea
                  name="description"
                  required
                  minLength={20}
                  placeholder="What is happening today, and what would a better outcome look like?"
                  rows={6}
                  className={fieldClass}
                />
              </label>

              <div className="mt-2 flex flex-col items-start gap-[18px] sm:flex-row sm:items-center">
                <button className={primaryButton} type="submit">
                  Send inquiry →
                </button>

                <span className="text-xs text-grey">
                  We typically reply within 1–2 business days.
                </span>
              </div>
            </form>
          )}
        </div>

        {/* ASIDE */}
        <aside>
          <div className={eyebrow}>Prefer direct contact?</div>

          <h2 className="my-4 font-heading text-[28px] font-semibold leading-[1.25] text-ink">
            Start with a short conversation.
          </h2>

          <p className="mb-5 text-sm text-grey">
            Share the shape of the problem over email. We can work from there
            without a long sales process.
          </p>

          <a className={textLink} href="mailto:hello@forgestudio.dev">
            hello@forgestudio.dev →
          </a>

          <div className="mt-16 grid gap-3.5 border-t border-border pt-5">
            <span className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
              What happens next
            </span>

            <div className="text-sm text-grey">
              <b className="mr-3 font-semibold text-accent">01</b>
              Discovery call
            </div>

            <div className="text-sm text-grey">
              <b className="mr-3 font-semibold text-accent">02</b>
              Practical proposal
            </div>

            <div className="text-sm text-grey">
              <b className="mr-3 font-semibold text-accent">03</b>
              Build and handover
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className={labelClass}>
      {label}

      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className={fieldClass}
      />
    </label>
  );
}
