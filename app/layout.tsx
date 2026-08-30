import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: { default: "Forge Studio | Software That Solves Real Problems", template: "%s | Forge Studio" },
  description: "Independent software engineering studio building reliable digital products for businesses."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<Footer /></body></html>;
}
