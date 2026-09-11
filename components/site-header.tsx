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
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-3 text-[#a63409] shadow-lg focus:translate-y-0"
      >
        {locale === "id" ? "Langsung ke konten" : "Skip to content"}
      </a>
      <progress
        value={progress}
        max={1}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[90] h-0.5 w-full appearance-none border-0 bg-transparent [&::-moz-progress-bar]:bg-[#c34810] [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-[#c34810]"
      />
      <header
        ref={header}
        className={`sticky top-0 z-70 px-2 py-2.5 transition-transform duration-300 ease-out focus-within:translate-y-0 motion-reduce:transition-none sm:px-4 lg:px-8 ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
        role={open ? "dialog" : undefined}
        aria-modal={open ? true : undefined}
        aria-label={open ? (locale === "id" ? "Menu navigasi" : "Navigation menu") : undefined}
      >
        <div
          className={`relative mx-auto grid min-h-16 max-w-[1736px] grid-cols-[1fr_auto] items-center gap-2 rounded-2xl border bg-white/95 px-2 py-2 backdrop-blur-lg sm:gap-4 sm:px-5 lg:grid-cols-[1fr_auto_1fr] ${scrolled ? "border-[#c8b8ac] shadow-lg shadow-stone-900/10" : "border-[#d9cfc7] shadow-sm"}`}
        >
          <Link
            href="/"
            aria-label="Forge Studio"
            className="flex items-center gap-1 justify-self-start font-[family-name:var(--font-manrope)] text-[13px] tracking-tight text-[#292421] min-[360px]:text-base sm:gap-2 sm:text-xl"
          >
            <Image
              src="/img/forge-icon.png"
              alt=""
              width={32}
              height={32}
              priority
              className="size-5 object-contain min-[360px]:size-7 sm:size-8"
            />
            <span className="font-bold">
              Forge<span className="ml-1 font-semibold">Studio</span>
            </span>
          </Link>
          <nav
            aria-label={locale === "id" ? "Navigasi utama" : "Main navigation"}
            className="hidden items-center gap-1 rounded-xl border border-[#eee5de] bg-[#f6f2ee] p-1 lg:flex"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`rounded-lg px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-[#eae0d6] hover:text-[#9d330a] ${isActive(href) ? "bg-white text-[#a63409] shadow-sm" : "text-[#63574f]"}`}
              >
                {t(label)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 justify-self-end sm:gap-3">
            <div className="flex rounded-lg border border-[#e3d8ce] bg-white p-0.5 text-[11px] font-semibold" aria-label="Language">
              {(["en", "id"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={locale === lang}
                  onClick={() => {
                    router.replace(pathname, { locale: lang });
                    setOpen(false);
                  }}
                  className={`min-h-10 min-w-7 cursor-pointer rounded-md uppercase transition-colors min-[360px]:min-w-9 ${locale === lang ? "bg-[#303b40] text-white" : "text-[#67594f] hover:bg-stone-100"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link
              href="/start-a-project"
              className="hidden min-h-11 items-center gap-2 rounded-lg bg-[#c34810] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#a63409] md:inline-flex"
            >
              {locale === "id" ? "Mulai Proyek" : "Start a Project"}
              <span aria-hidden="true">→</span>
            </Link>
            <button
              ref={menuButton}
              type="button"
              aria-label={locale === "id" ? (open ? "Tutup menu" : "Buka menu") : open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
              className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-[#daccc0] bg-[#f7f2ed] text-[#292421] lg:hidden"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={open ? "m5 5 14 14M5 19 19 5" : "M3 6h18M3 12h18M3 18h18"} />
              </svg>
            </button>
          </div>
          <nav
            id="mobile-navigation"
            aria-label={locale === "id" ? "Navigasi seluler" : "Mobile navigation"}
            aria-hidden={!open}
            className={`absolute inset-x-0 top-[calc(100%+8px)] max-h-[calc(100dvh-108px)] overflow-y-auto rounded-2xl border border-[#d9cfc7] bg-white p-5 shadow-xl transition-[opacity,transform,visibility] duration-300 motion-reduce:transition-none lg:hidden ${open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0"}`}
          >
            {links.map(([label, href]) => (
              <Link
                tabIndex={open ? 0 : -1}
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-16 items-center justify-between border-b border-[#eee4db] px-2 py-4 font-[family-name:var(--font-manrope)] text-2xl ${isActive(href) ? "text-[#a63409]" : "text-[#292421]"}`}
              >
                {t(label)}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
            <Link
              tabIndex={open ? 0 : -1}
              href="/start-a-project"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-between rounded-lg bg-[#c34810] px-4 py-3 font-semibold text-white"
            >
              {locale === "id" ? "Mulai Proyek" : "Start a Project"}
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
