"use client";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DesignText } from "@/components/ui/design-text";
export function Footer() {
  const t = useTranslations("Navigation");
  const id = useLocale() === "id";
  return (
    <footer className="stitch-footer">
      <div className="st-container">
        <div className="st-footer-top">
          <div>
            <Link className="st-footer-brand" href="/">
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
        <p className="st-copyright">© {new Date().getFullYear()} Forge Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
