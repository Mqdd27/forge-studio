import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { LocaleHtml } from "@/components/locale-html";

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

  const title = isIndonesian ? "RisenDev | Software untuk Menyelesaikan Masalah Nyata" : "RisenDev | Software That Solves Real Problems";

  const description = isIndonesian
    ? "Studio pengembangan web independen yang membangun aplikasi web praktis dan sistem bisnis."
    : "Independent web development studio building practical web applications and business systems.";

  return {
    title: { default: title, template: "%s | RisenDev" },

    description,

    alternates: {
      canonical: `/${locale}`,

      languages: { en: "/en", id: "/id", "x-default": "/en" },
    },

    openGraph: {
      type: "website",

      siteName: "RisenDev",

      title,

      description,

      locale: locale === "id" ? "id_ID" : "en_US",

      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],

      url: `/${locale}`,
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,
    },
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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleHtml locale={locale} />

      <SiteHeader />

      <div id="main-content" tabIndex={-1} className="min-w-0 overflow-x-clip">
        <PageTransition>{children}</PageTransition>
      </div>

      <Footer />
    </NextIntlClientProvider>
  );
}
