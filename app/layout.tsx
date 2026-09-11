import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://forgestudio.dev"),

  title: { default: "Forge Studio", template: "%s | Forge Studio" },

  description: "Independent web development studio building practical web applications and business systems.",

  applicationName: "Forge Studio",
  icons: { icon: "/img/forge-icon.png", apple: "/img/forge-icon.png" },

  authors: [{ name: "Forge Studio" }],

  creator: "Forge Studio",

  publisher: "Forge Studio",

  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-pt-28 scroll-smooth bg-white motion-reduce:scroll-auto" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} min-h-screen min-w-0 overflow-x-hidden bg-[#ffffff] font-[family-name:var(--font-inter)] text-[#1f1f1f] antialiased [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-[#c34810] [&_a]:touch-manipulation [&_button]:touch-manipulation [&_h1]:font-[family-name:var(--font-manrope)] [&_h1]:text-pretty [&_h2]:font-[family-name:var(--font-manrope)] [&_h2]:text-pretty [&_h3]:font-[family-name:var(--font-manrope)] [&_p]:text-pretty`}
      >
        {children}
      </body>
    </html>
  );
}
