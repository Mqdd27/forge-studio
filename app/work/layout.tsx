import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Software Projects",
  description: "Explore selected Forge Studio projects: dashboards, AI-assisted tools, custom Odoo modules, and operational applications.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Selected Software Projects | Forge Studio", description: "Explore selected Forge Studio projects: dashboards, AI-assisted tools, custom Odoo modules, and operational applications." }
};

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
