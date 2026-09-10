"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "../i18n/navigation";

const links = [
  ["home", "/"],
  ["services", "/services"],
  ["work", "/work"],
  ["products", "/products"],
  ["insights", "/insights"],
  ["about", "/about"],
] as const;

export function SiteHeader() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };
  return (
    <>
      <a href="#main-content" className="skip-link">
        {locale === "id" ? "Langsung ke konten" : "Skip to content"}
      </a>
      <header ref={header} className={`floating-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" aria-label="Forge Studio" className="header-brand flex shrink-0 items-center gap-2.5">
            <Image src="/img/forge-icon.png" alt="" width={44} height={44} priority className="rounded-lg object-contain" />
            <span className="brand-name font-heading text-lg font-bold tracking-tight sm:text-xl">Forge Studio</span>
          </Link>
          <nav
            aria-label={locale === "id" ? "Navigasi utama" : "Main navigation"}
            className="desktop-navigation hidden items-center gap-1 lg:flex"
          >
            {links.map(([label, href]) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2.5 text-sm font-medium transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-grey"
                  }`}
                >
                  {t(label)}
                </Link>
              );
            })}
          </nav>{" "}
          <div className="header-actions flex items-center gap-2">
            <div className="language-switch flex text-[11px] font-semibold" aria-label="Language">
              {(["en", "id"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={locale === lang}
                  onClick={() => {
                    router.replace(pathname, { locale: lang });
                    setOpen(false);
                  }}
                  className={`min-h-11 min-w-8 rounded-full uppercase ${locale === lang ? "text-accent" : "text-muted"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="hidden rounded-lg bg-accent px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-accent-dark md:inline-flex"
            >
              {locale === "id" ? "Mulai Proyek" : "Start a Project"}
            </Link>
            <button
              ref={menuButton}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-border lg:hidden"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={open ? "m5 5 14 14M5 19 19 5" : "M3 6h18M3 12h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation grid gap-1 lg:hidden">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm hover:bg-alt">
                {t(label)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white"
            >
              {locale === "id" ? "Mulai Proyek" : "Start a Project"}
            </Link>
          </nav>
        )}
      </header>
      <div className="header-spacer" aria-hidden="true" />
    </>
  );
}
