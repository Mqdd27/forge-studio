"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname, useRouter } from "../i18n/navigation";

/* NAVIGATION */

const links = [
  ["home", "/"],
  ["services", "/services"],
  ["work", "/work"],
  ["products", "/products"],
  ["about", "/about"],
  ["insights", "/insights"],
] as const;

/* SITE HEADER */

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations("Navigation");

  /* SCROLL STATE */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* CLOSE MENU AFTER NAVIGATION */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* BODY SCROLL LOCK */

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ESCAPE KEY */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  /* HELPERS */

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function changeLanguage(newLocale: "en" | "id") {
    if (locale === newLocale) {
      setOpen(false);
      return;
    }

    router.replace(pathname, { locale: newLocale });

    setOpen(false);
  }

  const currentLanguage = locale === "en" ? t("englishName") : t("indonesianName");

  /* RENDER */

  return (
    <>
      {/* HEADER */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? `px-2 pt-2 min-[375px]:px-3 min-[375px]:pt-3 sm:px-5 sm:pt-4` : `px-0 pt-0`
        }`}
      >
        {/* NAVBAR SHELL */}

        <div
          className={`mx-auto w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? `max-w-[1240px] rounded-xl border border-black/[0.07] bg-white/[0.92] shadow-[0_14px_45px_rgba(31,31,31,0.08)] backdrop-blur-xl sm:rounded-2xl`
              : `max-w-none border-b border-border/80 bg-white/[0.88] backdrop-blur-md`
          }`}
        >
          {/* INNER GRID */}

          <div
            className={`mx-auto grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center transition-all duration-500 lg:grid-cols-[210px_minmax(0,1fr)_210px] xl:grid-cols-[220px_minmax(0,1fr)_220px] ${
              scrolled
                ? `h-[62px] max-w-[1200px] px-3 min-[375px]:px-4 sm:h-[66px] sm:px-5 lg:h-[68px] lg:px-6 xl:px-7`
                : `h-[72px] max-w-[1280px] px-3 min-[375px]:px-4 sm:h-20 sm:px-6 lg:px-8`
            }`}
          >
            {/* BRAND */}

            <div className="min-w-0">
              <Link href="/" aria-label={t("homeAria")} className="group flex min-w-0 items-center gap-3 sm:gap-3.5">
                {/* LOGO */}
                <span
                  className={`relative grid shrink-0 place-items-center overflow-hidden transition-all duration-500 ${
                    scrolled ? `h-10 w-10 sm:h-11 sm:w-11` : `h-11 w-11 sm:h-13 sm:w-13`
                  }`}
                >
                  <Image
                    src="/img/forge-icon-nobg.png"
                    alt="Forge Studio"
                    width={512}
                    height={512}
                    priority
                    className="h-full w-full object-contain"
                  />
                </span>

                {/* BRAND NAME */}
                <span
                  className={`min-w-0 truncate font-heading font-bold leading-none tracking-[-0.045em] text-ink transition-colors duration-300 group-hover:text-accent ${
                    scrolled ? `text-[17px] min-[375px]:text-[18px] sm:text-[19px]` : `text-[18px] min-[375px]:text-[19px] sm:text-[22px]`
                  }`}
                >
                  Forge
                  <span className="font-medium text-muted"> Studio</span>
                </span>
              </Link>
            </div>
            {/* DESKTOP NAVIGATION */}

            <nav aria-label={t("primaryNavigation")} className="hidden h-full min-w-0 items-center justify-center lg:flex">
              <div className="flex min-w-0 items-center justify-center gap-0.5 xl:gap-1">
                {links.map(([label, href]) => {
                  const active = isActive(href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative flex min-h-[40px] items-center justify-center whitespace-nowrap rounded-lg px-2.5 text-[12px] transition-all duration-200 xl:px-3 xl:text-[13px] ${
                        active ? `bg-alt font-semibold text-ink` : `font-medium text-grey hover:bg-alt/70 hover:text-ink`
                      }`}
                    >
                      {t(label)}

                      <span
                        aria-hidden="true"
                        className={`absolute bottom-[5px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                          active ? `w-4 opacity-100` : `w-0 opacity-0 group-hover:w-2 group-hover:opacity-50`
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* DESKTOP ACTIONS */}

            <div className="hidden items-center justify-end gap-2 lg:flex xl:gap-3">
              {/* LANGUAGE SWITCHER */}

              <div className="flex shrink-0 items-center rounded-lg border border-border bg-alt/70 p-[3px]">
                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  aria-label={t("switchEnglish")}
                  aria-pressed={locale === "en"}
                  className={`rounded-md px-2 py-1.5 text-[9px] font-bold tracking-[0.04em] transition-all duration-200 xl:px-2.5 xl:text-[10px] ${
                    locale === "en" ? `bg-white text-accent shadow-[0_1px_4px_rgba(0,0,0,0.08)]` : `text-muted hover:text-ink`
                  }`}
                >
                  {t("english")}
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("id")}
                  aria-label={t("switchIndonesian")}
                  aria-pressed={locale === "id"}
                  className={`rounded-md px-2 py-1.5 text-[9px] font-bold tracking-[0.04em] transition-all duration-200 xl:px-2.5 xl:text-[10px] ${
                    locale === "id" ? `bg-white text-accent shadow-[0_1px_4px_rgba(0,0,0,0.08)]` : `text-muted hover:text-ink`
                  }`}
                >
                  {t("indonesian")}
                </button>
              </div>

              {/* CTA */}

              <Link
                href="/contact"
                aria-current={pathname === "/contact" ? "page" : undefined}
                className={`group relative inline-flex min-h-[40px] shrink-0 items-center justify-center overflow-hidden rounded-lg px-3 text-[9px] font-semibold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(181,80,26,0.20)] xl:min-h-[42px] xl:px-4 xl:text-[10px] ${pathname === "/contact" ? "bg-accent-dark" : "bg-accent"}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full bg-accent-dark transition-transform duration-300 ease-out group-hover:translate-y-0"
                />

                <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap xl:gap-2">
                  {t("contact")}

                  <span
                    aria-hidden="true"
                    className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 xl:text-sm"
                  >
                    ↗
                  </span>
                </span>
              </Link>
            </div>

            {/* MOBILE / TABLET ACTIONS */}

            <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 lg:hidden">
              {/* QUICK LANGUAGE */}

              <button
                type="button"
                onClick={() => changeLanguage(locale === "en" ? "id" : "en")}
                aria-label={locale === "en" ? t("switchIndonesian") : t("switchEnglish")}
                className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-border bg-white/70 px-2 text-[9px] font-bold text-grey transition-colors hover:bg-alt hover:text-accent sm:h-10 sm:min-w-10 sm:px-2.5 sm:text-[10px]"
              >
                {locale === "en" ? t("indonesian") : t("english")}
              </button>

              {/* HAMBURGER */}

              <button
                type="button"
                aria-label={open ? t("closeNavigation") : t("openNavigation")}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen((current) => !current)}
                className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/70 transition-colors hover:bg-alt sm:h-10 sm:w-10"
              >
                <span
                  aria-hidden="true"
                  className={`absolute h-[1.5px] w-[17px] bg-ink transition-all duration-300 sm:w-[18px] ${open ? "rotate-45" : "-translate-y-[5px]"}`}
                />

                <span
                  aria-hidden="true"
                  className={`absolute h-[1.5px] bg-ink transition-all duration-300 ${
                    open ? `w-0 opacity-0` : `w-[17px] opacity-100 sm:w-[18px]`
                  }`}
                />

                <span
                  aria-hidden="true"
                  className={`absolute h-[1.5px] w-[17px] bg-ink transition-all duration-300 sm:w-[18px] ${open ? "-rotate-45" : "translate-y-[5px]"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET MENU */}

        <div
          id="mobile-navigation"
          aria-hidden={!open}
          className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            open
              ? `pointer-events-auto mt-2 max-h-[calc(100dvh-90px)] w-[calc(100%-1rem)] translate-y-0 opacity-100 sm:w-[calc(100%-2rem)]`
              : `pointer-events-none mt-0 max-h-0 w-[calc(100%-1rem)] -translate-y-3 overflow-hidden opacity-0 sm:w-[calc(100%-2rem)]`
          }`}
        >
          <div className="max-h-[calc(100dvh-90px)] overflow-y-auto rounded-xl border border-black/[0.07] bg-white/[0.97] p-2.5 shadow-[0_20px_60px_rgba(31,31,31,0.14)] backdrop-blur-xl sm:rounded-2xl sm:p-3">
            {/* MOBILE NAVIGATION */}

            <nav aria-label={t("mobileNavigation")} className="grid gap-1">
              {links.map(([label, href], index) => {
                const active = isActive(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? 0 : -1}
                    className={`group flex min-h-[48px] items-center justify-between rounded-lg px-3 transition-all duration-200 sm:min-h-[54px] sm:rounded-xl sm:px-4 ${
                      active ? `bg-accent-light text-accent` : `text-ink hover:bg-alt`
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <span
                        aria-hidden="true"
                        className={`w-5 shrink-0 text-[9px] font-semibold sm:w-6 sm:text-[10px] ${active ? "text-accent" : "text-muted"}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 truncate font-heading text-[15px] font-semibold sm:text-[17px]">{t(label)}</span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-sm transition-all duration-200 ${
                        active
                          ? `translate-x-0 text-accent opacity-100`
                          : `-translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100`
                      }`}
                    >
                      ↗
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE FOOTER */}

            <div className="mt-3 border-t border-border px-1 pb-1 pt-4">
              {/* LANGUAGE */}

              <div className="mb-4 flex items-center justify-between gap-4 px-2">
                <div className="min-w-0">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                    {t("language")}
                  </span>

                  <span className="mt-1 block truncate text-[11px] text-grey sm:text-xs">{currentLanguage}</span>
                </div>

                {/* LANGUAGE BUTTONS */}

                <div className="flex shrink-0 rounded-lg border border-border bg-alt p-1">
                  <button
                    type="button"
                    onClick={() => changeLanguage("en")}
                    aria-label={t("switchEnglish")}
                    aria-pressed={locale === "en"}
                    tabIndex={open ? 0 : -1}
                    className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition-all sm:px-3 sm:text-[11px] ${
                      locale === "en" ? `bg-white text-accent shadow-sm` : `text-grey hover:text-ink`
                    }`}
                  >
                    {t("english")}
                  </button>

                  <button
                    type="button"
                    onClick={() => changeLanguage("id")}
                    aria-label={t("switchIndonesian")}
                    aria-pressed={locale === "id"}
                    tabIndex={open ? 0 : -1}
                    className={`rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition-all sm:px-3 sm:text-[11px] ${
                      locale === "id" ? `bg-white text-accent shadow-sm` : `text-grey hover:text-ink`
                    }`}
                  >
                    {t("indonesian")}
                  </button>
                </div>
              </div>

              {/* CTA */}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                aria-current={pathname === "/contact" ? "page" : undefined}
                className="group flex min-h-[48px] w-full items-center justify-between rounded-lg bg-accent px-4 text-[10px] font-semibold uppercase tracking-[0.07em] text-white transition-all hover:bg-accent-dark sm:min-h-[52px] sm:rounded-xl sm:px-5 sm:text-xs"
              >
                {t("contact")}

                <span
                  aria-hidden="true"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 sm:text-base"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* BACKDROP */}

      <button
        type="button"
        aria-label={t("closeNavigation")}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/10 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`
        }`}
      />
    </>
  );
}
