import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

/* FONTS */

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

/* BASE METADATA */

export const metadata: Metadata = {
  metadataBase: new URL("https://forgestudio.dev"),

  title: { default: "Forge Studio", template: "%s | Forge Studio" },

  description: "Independent software engineering studio building reliable digital products for businesses.",

  applicationName: "Forge Studio",

  authors: [{ name: "Forge Studio" }],

  creator: "Forge Studio",

  publisher: "Forge Studio",

  formatDetection: { email: false, address: false, telephone: false },
};

/* ROOT LAYOUT */

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-surface" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} min-h-screen min-w-0 overflow-x-hidden bg-surface font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
