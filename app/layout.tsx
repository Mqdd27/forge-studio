import type { Metadata } from "next";
import { siteUrl } from "../data/site";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Forge Studio | Software That Solves Real Problems", template: "%s | Forge Studio" },
  description: "Independent software engineering studio building custom web applications, business automation, and SaaS products.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: siteUrl, siteName: "Forge Studio", title: "Forge Studio | Software That Solves Real Problems", description: "Independent software engineering studio building custom web applications, business automation, and SaaS products." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Forge Studio", url: siteUrl, description: "Independent software engineering studio building custom web applications, business automation, and SaaS products.", serviceType: ["Custom web application development", "SaaS development", "Business automation", "API and system integration"] };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader />{children}<Footer /></body></html>;
}
