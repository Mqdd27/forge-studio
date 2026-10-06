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
    <html
      lang="en"
      className="scroll-pt-24 overscroll-none scroll-smooth bg-surface text-on-surface motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <body
        className={`${sans.variable} ${mono.variable} min-h-screen min-w-0 overflow-x-hidden overscroll-none bg-[#F2EFE8] font-sans text-[0.9375rem] leading-6 tracking-[-0.005em] wrap-break-word text-[#1c1c18] antialiased selection:bg-primary selection:text-white motion-reduce:[&_*]:transition-none! [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-[#FF4F00] [&_a]:touch-manipulation [&_a]:transition-[color,background-color,border-color,opacity,transform,box-shadow] [&_a]:duration-[220ms] [&_a[href]]:cursor-pointer [&_article]:overflow-hidden [&_button]:touch-manipulation [&_button]:transition-[color,background-color,border-color,opacity,transform,box-shadow] [&_button]:duration-[220ms] motion-reduce:[&_button]:transform-none! [&_button:not(:disabled)]:cursor-pointer [&_h1]:font-sans [&_h1]:text-pretty [&_h2]:font-sans [&_h2]:text-pretty [&_h3]:font-sans [&_h3]:text-balance [&_p]:text-pretty`}
      >
        {children}
      </body>
    </html>
  );
}
