import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description: "Forge Studio designs and builds custom web applications, SaaS products, business automation, integrations, and ongoing software support.",
  alternates: { canonical: "/services" }
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
