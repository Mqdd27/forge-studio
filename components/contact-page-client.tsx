"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

import { PageIntro } from "./page-intro";

/* =========================================================
   STYLES
========================================================= */

const labelClass =
  "grid min-w-0 gap-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-ink sm:text-xs";

const fieldClass =
  "w-full min-w-0 resize-y rounded-lg border border-border bg-white px-3.5 py-3 font-sans text-base font-normal normal-case tracking-normal text-ink outline-none transition duration-200 placeholder:text-muted focus:border-accent focus:ring-3 focus:ring-[rgba(181,80,26,0.12)]";

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-accent-dark sm:w-auto sm:text-xs lg:hover:-translate-y-px";

const secondaryButton =
  "inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-ink px-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-all duration-200 hover:bg-accent-light sm:w-auto sm:text-xs";

const textLink =
  "inline-flex max-w-full items-center gap-2 break-all text-[11px] font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline sm:text-xs";

const eyebrow =
  "text-[11px] font-semibold uppercase tracking-[0.12em] text-accent sm:text-xs";

/* =========================================================
   CONTACT PAGE CLIENT
========================================================= */

export function ContactPageClient() {
  const t = useTranslations("ContactPage");

  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    /*
     * Sementara hanya mengubah UI ke
     * success state.
     *
     * Nanti bagian ini akan diganti
     * dengan request ke API/backend.
     */

    setSent(true);
  }

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* =====================================================
          INTRO
      ====================================================== */}

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <section
        className="
          mx-auto

          grid
          w-full
          max-w-[1200px]

          grid-cols-1
          gap-12

          px-4
          pb-16

          sm:px-6
          sm:pb-20

          lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]
          lg:gap-16
          lg:px-8
          lg:pb-28

          xl:gap-20
          xl:pb-32
        "
      >
        {/* ===================================================
            FORM CARD
        ==================================================== */}

        <div
          className="
            min-w-0

            rounded-xl

            border
            border-border

            bg-surface

            p-5

            transition-all
            duration-200

            sm:p-7
            md:p-8
            lg:p-10
          "
        >
          {sent ? (
            /* ===============================================
                SUCCESS STATE
            ================================================ */

            <div className="max-w-[680px]">
              <span className={eyebrow}>{t("success.eyebrow")}</span>

              <h2
                className="
                  my-4

                  break-words

                  font-heading
                  text-[28px]
                  font-semibold

                  leading-[1.2]
                  tracking-[-0.025em]

                  text-ink

                  sm:text-[32px]
                "
              >
                {t("success.title")}
              </h2>

              <p
                className="
                  mb-7
                  max-w-[620px]

                  text-sm
                  leading-[1.8]

                  text-grey

                  sm:text-base
                  sm:leading-relaxed
                "
              >
                {t("success.description")}
              </p>

              <button
                type="button"
                className={secondaryButton}
                onClick={() => setSent(false)}
              >
                {t("success.another")}
              </button>
            </div>
          ) : (
            /* ===============================================
                FORM
            ================================================ */

            <form
              onSubmit={submit}
              className="
                grid
                min-w-0

                gap-5

                sm:gap-[22px]
              "
            >
              {/* =============================================
                  CONTACT INFO
              ============================================== */}

              <div
                className="
                  grid
                  min-w-0

                  grid-cols-1
                  gap-5

                  sm:grid-cols-2
                "
              >
                <Field
                  label={t("form.name")}
                  name="name"
                  placeholder={t("form.namePlaceholder")}
                  autoComplete="name"
                />

                <Field
                  label={t("form.contact")}
                  name="contact"
                  placeholder={t("form.contactPlaceholder")}
                  autoComplete="email"
                />
              </div>

              {/* =============================================
                  COMPANY
              ============================================== */}

              <Field
                label={t("form.company")}
                name="company"
                placeholder={t("form.companyPlaceholder")}
                required={false}
                autoComplete="organization"
              />

              {/* =============================================
                  SERVICE
              ============================================== */}

              <label className={labelClass}>
                {t("form.service")}

                <select
                  name="service"
                  required
                  defaultValue=""
                  className={fieldClass}
                >
                  <option value="" disabled>
                    {t("form.selectService")}
                  </option>

                  <option value="customApp">
                    {t("form.services.customApp")}
                  </option>

                  <option value="saas">{t("form.services.saas")}</option>

                  <option value="automation">
                    {t("form.services.automation")}
                  </option>

                  <option value="integration">
                    {t("form.services.integration")}
                  </option>

                  <option value="maintenance">
                    {t("form.services.maintenance")}
                  </option>

                  <option value="other">{t("form.services.other")}</option>
                </select>
              </label>

              {/* =============================================
                  DESCRIPTION
              ============================================== */}

              <label className={labelClass}>
                {t("form.description")}

                <textarea
                  name="description"
                  required
                  minLength={20}
                  placeholder={t("form.descriptionPlaceholder")}
                  rows={6}
                  className={fieldClass}
                />
              </label>

              {/* =============================================
                  SUBMIT
              ============================================== */}

              <div
                className="
                  mt-1

                  flex
                  flex-col
                  items-start

                  gap-3

                  sm:mt-2
                  sm:flex-row
                  sm:items-center
                  sm:gap-[18px]
                "
              >
                <button className={primaryButton} type="submit">
                  <span className="flex items-center gap-2">
                    {t("form.submit")}

                    <span aria-hidden="true">→</span>
                  </span>
                </button>

                <span
                  className="
                    max-w-[290px]

                    text-[11px]
                    leading-relaxed

                    text-grey

                    sm:text-xs
                  "
                >
                  {t("form.replyTime")}
                </span>
              </div>
            </form>
          )}
        </div>

        {/* ===================================================
            DIRECT CONTACT
        ==================================================== */}

        <aside
          className="
            min-w-0

            border-t
            border-border

            pt-10

            lg:border-t-0
            lg:pt-2
          "
        >
          <div className={eyebrow}>{t("direct.eyebrow")}</div>

          <h2
            className="
              my-4
              max-w-[420px]

              break-words

              font-heading
              text-[26px]
              font-semibold

              leading-[1.25]
              tracking-[-0.02em]

              text-ink

              sm:text-[28px]
            "
          >
            {t("direct.title")}
          </h2>

          <p
            className="
              mb-5
              max-w-[480px]

              text-sm
              leading-[1.75]

              text-grey
            "
          >
            {t("direct.description")}
          </p>

          <a className={textLink} href="mailto:hello@forgestudio.dev">
            <span>hello@forgestudio.dev</span>

            <span aria-hidden="true" className="shrink-0">
              →
            </span>
          </a>

          {/* ===============================================
              NEXT STEPS
          ================================================ */}

          <div
            className="
              mt-10

              grid
              gap-3.5

              border-t
              border-border

              pt-5

              sm:mt-12
              lg:mt-16
            "
          >
            <span
              className="
                mb-1.5

                text-[11px]
                font-semibold

                uppercase
                tracking-[0.12em]

                text-ink

                sm:text-xs
              "
            >
              {t("next.title")}
            </span>

            <NextStep number="01" title={t("next.discovery")} />

            <NextStep number="02" title={t("next.proposal")} />

            <NextStep number="03" title={t("next.build")} />
          </div>
        </aside>
      </section>
    </main>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  name,
  placeholder,
  required = true,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className={labelClass}>
      {label}

      <input
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}

/* =========================================================
   NEXT STEP
========================================================= */

function NextStep({ number, title }: { number: string; title: string }) {
  return (
    <div
      className="
        flex
        items-start
        gap-3

        text-sm
        leading-relaxed

        text-grey
      "
    >
      <b
        className="
          w-6
          shrink-0

          font-semibold
          text-accent
        "
      >
        {number}
      </b>

      <span className="min-w-0">{title}</span>
    </div>
  );
}
