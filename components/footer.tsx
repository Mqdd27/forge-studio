"use client";

import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-alt pt-16 sm:pt-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8 lg:px-8 lg:pb-[72px]">
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4 font-heading text-2xl font-bold leading-none text-ink">
            Forge Studio
          </div>

          <p className="max-w-[320px] text-sm text-grey">{t("description")}</p>
        </div>

        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            {t("company")}
          </span>

          <Link
            href="/about"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            {t("about")}
          </Link>

          <Link
            href="/services"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            {t("services")}
          </Link>

          <Link
            href="/work"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            {t("work")}
          </Link>
        </div>

        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            {t("resources")}
          </span>

          <Link
            href="/products"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            {t("products")}
          </Link>

          <Link
            href="/insights"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            {t("insights")}
          </Link>

          <Link
            href="/contact"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            {t("contact")}
          </Link>
        </div>

        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
            {t("connect")}
          </span>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm text-grey transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border py-5 text-xs text-muted">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
