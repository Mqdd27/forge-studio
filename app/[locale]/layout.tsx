import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return {};
  }

  const isIndonesian = locale === "id";

  return {
    title: {
      default: isIndonesian ? "RisenDev | Software untuk Menyelesaikan Masalah Nyata" : "RisenDev | Software That Solves Real Problems",
      template: "%s | RisenDev",
    },

    description: isIndonesian
      ? "Studio pengembangan web independen yang membangun aplikasi web praktis dan sistem bisnis."
      : "Independent web development studio building practical web applications and business systems.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className="scroll-pt-24 overscroll-none scroll-smooth bg-surface text-on-surface motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen min-w-0 overflow-x-hidden overscroll-none bg-[#F2EFE8] font-sans text-[0.9375rem] leading-6 tracking-[-0.005em] wrap-break-word text-[#1c1c18] antialiased selection:bg-primary selection:text-white motion-reduce:[&_*]:transition-none! [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-[#FF4F00] [&_a]:touch-manipulation [&_a]:transition-[color,background-color,border-color,opacity,transform,box-shadow] [&_a]:duration-[220ms] [&_a[href]]:cursor-pointer [&_article]:overflow-hidden [&_button]:touch-manipulation [&_button]:transition-[color,background-color,border-color,opacity,transform,box-shadow] [&_button]:duration-[220ms] motion-reduce:[&_button]:transform-none! [&_button:not(:disabled)]:cursor-pointer [&_h1]:font-sans [&_h1]:text-pretty [&_h2]:font-sans [&_h2]:text-pretty [&_h3]:font-sans [&_h3]:text-balance [&_p]:text-pretty`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteHeader />

          <div id="main-content" tabIndex={-1} className="min-w-0 overflow-x-clip">
            <PageTransition>{children}</PageTransition>
          </div>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
