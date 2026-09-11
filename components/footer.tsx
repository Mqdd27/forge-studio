"use client";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DesignText } from "@/components/ui/design-text";
export function Footer() {
  const t = useTranslations("Navigation");
  const id = useLocale() === "id";
  return (
    <footer className="border-t border-[#eae5df] bg-white pt-10 text-sm text-[#1b1b1c] [&_a:hover]:text-[#953900] [&_nav]:flex [&_nav]:flex-wrap [&_nav]:gap-x-6 [&_nav]:gap-y-2 [&_nav_a]:inline-flex [&_nav_a]:min-h-11 [&_nav_a]:items-center [&_nav_a]:text-xs">
      <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
        <div className="flex flex-col items-start justify-between gap-5 pb-7 lg:flex-row lg:items-center lg:gap-8 [&_p]:mt-2 [&_p]:text-xs [&_p]:text-[#574b45]">
          <div>
            <Link className="font-[family-name:var(--font-manrope)] text-xl font-semibold" href="/">
              Forge Studio
            </Link>
            <p>
              <DesignText>{"Building Software That Solves Real Problems."}</DesignText>
            </p>
          </div>
          <nav aria-label={id ? "Navigasi footer" : "Footer navigation"}>
            {[
              ["services", "/services"],
              ["work", "/work"],
              ["about", "/about"],
            ].map(([label, href]) => (
              <Link key={href} href={href}>
                {t(label)}
              </Link>
            ))}
            <Link href="/start-a-project">
              <DesignText>{"Start a Project"}</DesignText>
            </Link>
            <Link href="/privacy-policy">
              <DesignText>{"Privacy Policy"}</DesignText>
            </Link>
          </nav>
        </div>
        <p className="border-t border-[#eee8e3] py-5 text-[11px] text-[#6a5d54]">
          © {new Date().getFullYear()} Forge Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
