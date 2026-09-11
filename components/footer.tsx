"use client";

import { useTranslations } from "next-intl";

import { Link } from "../i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-alt">
      {/* MAIN FOOTER */}

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-12 pt-14 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-[72px] lg:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[minmax(0,2fr)_1fr_1fr_1fr] lg:gap-8">
          {/* BRAND */}

          <div className="border-b border-border pb-8 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:pb-0 lg:pr-8">
            <Link href="/" className="group inline-flex items-center gap-3 min-w-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink font-heading text-[10px] font-bold text-white transition-colors duration-200 group-hover:bg-accent">
                FS
              </span>

              <span className="min-w-0 font-heading text-[22px] font-bold leading-none tracking-[-0.04em] text-ink transition-colors group-hover:text-accent">
                Forge
                <span className="font-medium text-muted"> Studio</span>
              </span>
            </Link>

            <p className="mt-5 max-w-[340px] text-sm leading-[1.7] text-grey">{t("description")}</p>
          </div>

          {/* COMPANY */}

          <div>
            <FooterHeading>{t("company")}</FooterHeading>

            <div className="grid gap-2">
              <FooterLink href="/about">{t("about")}</FooterLink>

              <FooterLink href="/services">{t("services")}</FooterLink>

              <FooterLink href="/work">{t("work")}</FooterLink>
            </div>
          </div>

          {/* RESOURCES */}

          <div>
            <FooterHeading>{t("resources")}</FooterHeading>

            <div className="grid gap-2">
              <FooterLink href="/products">{t("products")}</FooterLink>

              <FooterLink href="/insights">{t("insights")}</FooterLink>

              <FooterLink href="/contact">{t("contact")}</FooterLink>
            </div>
          </div>

          {/* CONNECT */}

          <div>
            <FooterHeading>{t("connect")}</FooterHeading>

            <div className="grid gap-2">
              <ExternalLink href="https://linkedin.com">LinkedIn</ExternalLink>

              <ExternalLink href="https://github.com">GitHub</ExternalLink>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[64px] flex-col justify-center gap-2 border-t border-border py-4 text-[11px] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-xs">
          <span>{t("copyright")}</span>

          <span className="text-[10px] uppercase tracking-[0.08em] sm:text-[11px]">{t("studioLabel")}</span>
        </div>
      </div>
    </footer>
  );
}

/* FOOTER HEADING */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink sm:text-xs">{children}</span>;
}

/* INTERNAL FOOTER LINK */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="w-fit py-1.5 text-sm leading-relaxed text-grey transition-colors hover:text-accent">
      {children}
    </Link>
  );
}

/* EXTERNAL LINK */

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-2 py-1.5 text-sm text-grey transition-colors hover:text-accent"
    >
      <span>{children}</span>

      <span
        aria-hidden="true"
        className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  );
}
