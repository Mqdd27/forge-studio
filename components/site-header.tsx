"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export function SiteHeader() {
  const locale = useLocale();
  const id = locale === "id";
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  const links = [
    { label: id ? "Overview" : "Overview", href: "/", index: "01" },
    { label: id ? "Hasil Kerja" : "Work", href: "/work", index: "02" },
    { label: id ? "Layanan" : "Services", href: "/services", index: "03" },
    { label: id ? "Studio" : "Studio", href: "/about", index: "04" },
  ] as const;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] -translate-y-24 bg-[#111111] px-4 py-3 text-xs font-semibold tracking-widest text-[#FFFDF7] uppercase focus:translate-y-0"
      >
        {id ? "Langsung ke konten" : "Skip to content"}
      </a>
      <header
        ref={header}
        className={`fixed inset-x-0 top-0 z-50 border-b border-[#111111] bg-[#FCF9F2]/95 backdrop-blur-md ${scrolled ? "shadow-none" : ""}`}
      >
        <div className="flex h-16 w-full items-center justify-between px-5 md:h-20 md:px-12">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="RisenDev" className="group flex items-center gap-2">
              <Image src="/img/logo.png" alt="" width={32} height={32} priority className="h-8 w-auto object-contain mix-blend-multiply" />
              <span className="text-xs font-semibold tracking-[0.08em] uppercase transition-colors group-hover:text-[#A93100]">
                RisenDev
              </span>
            </Link>
            {/* <span className="hidden text-[11px] font-medium tracking-[0.08em] text-[#5F5E5E] uppercase xl:inline-block">
              [Edisi Rekayasa Sistem 2026]
            </span> */}
          </div>

          <nav aria-label={id ? "Navigasi utama" : "Main navigation"} className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`text-xs font-semibold tracking-[0.06em] uppercase transition-colors ${
                  isActive(l.href) ? "text-[#A93100]" : "text-[#5C4037] hover:text-[#111111]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/start-a-project"
              className={`text-xs font-semibold tracking-[0.06em] uppercase transition-colors ${
                isActive("/start-a-project") ? "text-[#A93100]" : "text-[#5C4037] hover:text-[#111111]"
              }`}
            >
              {id ? "Start a Project" : "Start a Project"}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* <div className="hidden items-center gap-2 bg-[#F1EEE7] px-3 py-1.5 sm:flex" aria-label="Availability">
              <span className="h-2 w-2 animate-pulse bg-emerald-500" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-[0.08em] uppercase">{id ? "Beroperasi penuh" : "Available"}</span>
            </div> */}
            <div className="flex border border-[#E5E2DB] bg-white p-0.5 text-[11px] font-semibold" aria-label="Language">
              {(["en", "id"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={locale === lang}
                  onClick={() => router.replace(pathname, { locale: lang })}
                  className={`min-h-9 min-w-8 cursor-pointer px-1 uppercase transition-colors ${
                    locale === lang ? "bg-[#111111] text-white" : "text-[#67594f] hover:bg-stone-100"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link href="/start-a-project" className="btn-forge hidden py-2.5! md:inline-flex">
              {id ? "Mulai Project" : "Start a Project"}
              <span aria-hidden="true">↗</span>
            </Link>
            <button
              ref={menuButton}
              type="button"
              aria-label={id ? (open ? "Tutup menu" : "Buka menu") : open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
              className="grid size-10 cursor-pointer place-items-center border border-[#111111] bg-[#F6F3EC] text-[#111111] lg:hidden"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={open ? "m5 5 14 14M5 19 19 5" : "M3 6h18M3 12h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label={id ? "Navigasi seluler" : "Mobile navigation"}
          aria-hidden={!open}
          className={`absolute inset-x-0 top-full max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-[#111111] bg-[#FCF9F2] transition-[opacity,transform,visibility] duration-200 lg:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <p className="eyebrow px-5 pt-5 text-[#5F5E5E]">{"// Indeks Navigasi"}</p>
          {[...links, { label: id ? "Start a Project" : "Start a Project", href: "/start-a-project", index: "05" }].map((l) => (
            <Link
              tabIndex={open ? 0 : -1}
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`flex items-center justify-between border-t border-[#E5E2DB] px-5 py-4 text-2xl font-medium tracking-tight ${
                isActive(l.href) ? "text-[#A93100]" : "text-[#111111]"
              }`}
            >
              <span>
                <span className="mr-3 align-middle text-[11px] font-semibold tracking-[0.08em] text-[#5F5E5E]">[{l.index}]</span>
                {l.label}
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <div className="border-t border-[#E5E2DB] px-5 py-4">
            <p className="text-[11px] tracking-[0.08em] text-[#5F5E5E] uppercase">Indonesia — Available for remote projects.</p>
            <Link
              tabIndex={open ? 0 : -1}
              href="/start-a-project"
              onClick={() => setOpen(false)}
              className="btn-forge mt-3 w-full justify-center"
            >
              {id ? "Mulai Project" : "Start a Project"} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </header>
      <div aria-hidden="true" className="h-16 md:h-20" />
    </>
  );
}
