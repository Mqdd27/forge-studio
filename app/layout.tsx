import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

const sans = GeistSans;
const mono = GeistMono;

export const metadata: Metadata = {
  metadataBase: new URL("https://risendev.dev"),

  title: { default: "RisenDev", template: "%s | RisenDev" },

  description: "RisenDev — independent digital studio building websites, business systems, and web applications based on real needs.",

  applicationName: "RisenDev",
  icons: { icon: "/img/logo.png", apple: "/img/logo.png" },

  authors: [{ name: "RisenDev" }],

  creator: "RisenDev",

  publisher: "RisenDev",

  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-pt-28 scroll-smooth motion-reduce:scroll-auto" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} min-h-screen min-w-0 overflow-x-hidden bg-[#F2EFE8] font-[family-name:var(--font-geist-sans)] text-[#1c1c18] antialiased [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-[#FF4F00] [&_a]:touch-manipulation [&_button]:touch-manipulation [&_h1]:font-[family-name:var(--font-geist-sans)] [&_h1]:text-pretty [&_h2]:font-[family-name:var(--font-geist-sans)] [&_h2]:text-pretty [&_h3]:font-[family-name:var(--font-geist-sans)] [&_p]:text-pretty`}
      >
        {children}
      </body>
    </html>
  );
}
