"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const links = [
  ["services", "/services"],
  ["work", "/work"],
  ["about", "/about"],
] as const;

export function SiteHeader() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastScrollY = useRef(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 48);

      if (currentY > 140 && currentY - lastScrollY.current > 8) {
        setHidden(true);
      } else if (lastScrollY.current - currentY > 6 || currentY <= 140) {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(1, Math.max(0, currentY / docHeight)));
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [document.getElementById("main-content"), document.querySelector("footer")].filter(
      (node): node is HTMLElement => node instanceof HTMLElement,
    );
    const previousInert = background.map((node) => node.inert);
    background.forEach((node) => {
      node.inert = true;
    });
    const focusFrame = requestAnimationFrame(() => header.current?.querySelector<HTMLElement>("#mobile-navigation a")?.focus());
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const controls = Array.from(header.current?.querySelectorAll<HTMLElement>("a[href],button") || []).filter(
        (node) => node.getClientRects().length > 0 && getComputedStyle(node).visibility !== "hidden",
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", trapFocus);
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((node, index) => {
        node.inert = previousInert[index];
      });
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", trapFocus);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
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
      <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header
        ref={header}
        className={`site-header forge-nav ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""} ${open ? "menu-is-open" : ""}`}
        role={open ? "dialog" : undefined}
        aria-modal={open ? true : undefined}
        aria-label={open ? (locale === "id" ? "Menu navigasi" : "Navigation menu") : undefined}
      >
        <div className="header-inner">
          <Link href="/" aria-label="Forge Studio" className="header-brand group flex shrink-0 items-center gap-1.5">
            <Image
              src="/img/forge-icon.png"
              alt=""
              width={44}
              height={44}
              priority
              className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="flex items-center">
              <span className="brand-name font-heading text-lg font-bold leading-none tracking-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                Forge
              </span>

              <span className="ml-1 font-heading font-semibold text-lg leading-none text-grey sm:text-2xl">Studio</span>
            </span>
          </Link>{" "}
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
                  className={`nav-link relative rounded-md px-3.5 py-2 text-[13px] font-medium transition-colors hover:text-accent ${
                    active ? "font-semibold text-accent" : "text-grey"
                  }`}
                >
                  {t(label)}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="nav-active-dot absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                    />
                  )}
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
                  className={`min-h-11 min-w-11 cursor-pointer rounded-full uppercase transition-colors ${locale === lang ? "text-accent font-bold" : "text-muted hover:text-ink"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              href="/start-a-project"
              className="btn-primary group hidden min-h-[44px] items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 md:inline-flex"
            >
              <span>{locale === "id" ? "Mulai Proyek" : "Start a Project"}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
            <button
              ref={menuButton}
              type="button"
              aria-label={locale === "id" ? (open ? "Tutup menu" : "Buka menu") : open ? "Close menu" : "Open menu"}
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
        <nav
          id="mobile-navigation"
          aria-label={locale === "id" ? "Navigasi seluler" : "Mobile navigation"}
          aria-hidden={!open}
          className={`mobile-navigation grid gap-1 lg:hidden ${open ? "is-open" : ""}`}
        >
          {links.map(([label, href]) => {
            const active = isActive(href);

            return (
              <Link
                tabIndex={open ? 0 : -1}
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`justify-between rounded-lg px-4 py-3 text-sm transition-colors ${
                  active ? "bg-accent-light font-semibold text-accent" : "text-grey hover:bg-alt hover:text-accent"
                }`}
              >
                {t(label)}
                {active && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />}
              </Link>
            );
          })}
          <Link
            tabIndex={open ? 0 : -1}
            href="/start-a-project"
            onClick={() => setOpen(false)}
            aria-current={isActive("/start-a-project") ? "page" : undefined}
            className={`justify-between rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white ${
              isActive("/start-a-project") ? "ring-2 ring-accent ring-offset-2" : "hover:bg-accent-dark"
            }`}
          >
            {locale === "id" ? "Mulai Proyek" : "Start a Project"}
            {isActive("/start-a-project") && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />}
          </Link>
        </nav>
      </header>
      <div className="header-spacer" aria-hidden="true" />
    </>
  );
}
