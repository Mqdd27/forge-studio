import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Forge Studio | Software That Solves Real Problems",
    template: "%s | Forge Studio",
  },
  description:
    "Independent software engineering studio building reliable digital products for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-surface" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} min-h-screen bg-surface font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
