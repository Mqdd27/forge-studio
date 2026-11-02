import type { Metadata } from "next";

import { siteUrl } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: { default: "RisenDev", template: "%s | RisenDev" },

  description: "RisenDev — independent digital studio building websites, business systems, and web applications based on real needs.",

  applicationName: "RisenDev",
  icons: { icon: "/img/logo.png", apple: "/img/logo.png" },

  authors: [{ name: "RisenDev" }],

  creator: "RisenDev",

  publisher: "RisenDev",

  formatDetection: { email: false, address: false, telephone: false },
};

// <html> lives in app/[locale]/layout.tsx so the server-rendered lang matches the route.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
