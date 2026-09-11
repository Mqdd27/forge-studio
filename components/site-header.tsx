"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname, useRouter } from "../i18n/navigation";

const links = [
  ["home", "/"],
  ["services", "/services"],
  ["work", "/work"],
  ["products", "/products"],
  ["about", "/about"],
  ["insights", "/insights"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function changeLanguage(newLocale: "en" | "id") {
    router.replace(pathname, {
      locale: newLocale,
    });

    setOpen(false);
  }

  return (
    <header className="fixed top-0 z-20 h-20 w-full border-b border-border bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-[28px] font-bold leading-none tracking-[-0.04em] text-ink transition-colors duration-200 hover:text-accent"
        >
          Forge Studio
        </Link>

        <nav
          className={`
            ${
              open
                ? "absolute left-0 right-0 top-[79px] flex flex-col border-b border-border bg-white px-4 pb-5 pt-3"
                : "hidden"
            }

            md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0
          `}
        >
          {links.map(([label, href]) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`
                  group relative py-3.5 text-sm transition-colors duration-200 md:py-0

                  ${
                    active
                      ? "font-semibold text-accent"
                      : "font-medium text-grey hover:text-accent"
                  }
                `}
              >
                {t(label)}

                <span
                  className={`
                    absolute bottom-2 left-0 h-[2px] bg-accent transition-all duration-300
                    md:-bottom-[10px]

                    ${
                      active
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }
                  `}
                />
              </Link>
            );
          })}

          <div className="mt-3 flex items-center gap-2 border-t border-border pt-4 md:hidden">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`
                rounded-md px-3 py-2 text-xs font-semibold transition
                ${
                  locale === "en"
                    ? "bg-accent text-white"
                    : "bg-alt text-grey hover:text-accent"
                }
              `}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("id")}
              className={`
                rounded-md px-3 py-2 text-xs font-semibold transition
                ${
                  locale === "id"
                    ? "bg-accent text-white"
                    : "bg-alt text-grey hover:text-accent"
                }
              `}
            >
              ID
            </button>
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`
              mt-3 inline-flex min-h-12 items-center justify-center rounded-lg
              px-6 text-xs font-semibold uppercase tracking-[0.08em]
              text-white transition-all duration-200
              hover:-translate-y-px
              md:hidden

              ${
                pathname === "/contact"
                  ? "bg-accent-dark shadow-[0_0_0_3px_rgba(181,80,26,0.12)]"
                  : "bg-accent hover:bg-accent-dark"
              }
            `}
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-lg border border-border bg-alt p-1">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`
                rounded-md px-2.5 py-1.5 text-[11px] font-semibold transition-all
                ${
                  locale === "en"
                    ? "bg-white text-accent shadow-sm"
                    : "text-grey hover:text-accent"
                }
              `}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("id")}
              className={`
                rounded-md px-2.5 py-1.5 text-[11px] font-semibold transition-all
                ${
                  locale === "id"
                    ? "bg-white text-accent shadow-sm"
                    : "text-grey hover:text-accent"
                }
              `}
            >
              ID
            </button>
          </div>

          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`
              hidden min-h-[42px] items-center justify-center rounded-lg
              px-[18px] text-xs font-semibold uppercase tracking-[0.08em]
              text-white transition-all duration-200
              hover:-translate-y-px
              md:inline-flex

              ${
                pathname === "/contact"
                  ? "bg-accent-dark shadow-[0_0_0_3px_rgba(181,80,26,0.12)]"
                  : "bg-accent hover:bg-accent-dark"
              }
            `}
          >
            {t("contact")}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center border-0 bg-transparent text-2xl text-ink md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
