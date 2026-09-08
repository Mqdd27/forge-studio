import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { notFound } from "next/navigation";

import { SiteHeader } from "../../components/site-header";
import { Footer } from "../../components/footer";
import { PageTransition } from "../../components/page-transition";
import { MotionProvider } from "../../components/motion-provider";
import { LocaleHtml } from "../../components/locale-html";

import { routing } from "../../i18n/routing";

/* STATIC LOCALES */

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* METADATA */

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    return {};
  }

  const isIndonesian = locale === "id";

  const title = isIndonesian
    ? "Forge Studio | Software untuk Menyelesaikan Masalah Nyata"
    : "Forge Studio | Software That Solves Real Problems";

  const description = isIndonesian
    ? "Studio software independen yang membangun produk digital andal untuk membantu bisnis menyelesaikan permasalahan nyata."
    : "Independent software engineering studio building reliable digital products for businesses.";

  return {
    title: { default: title, template: "%s | Forge Studio" },

    description,

    alternates: {
      canonical: `/${locale}`,

      languages: { en: "/en", id: "/id", "x-default": "/en" },
    },

    openGraph: {
      type: "website",

      siteName: "Forge Studio",

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

/* LOCALE LAYOUT */

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;

  params: { locale: string };
}) {
  const { locale } = params;

  /* VALIDATE LOCALE */

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  /* NEXT-INTL REQUEST LOCALE */

  setRequestLocale(locale);

  /* LOAD TRANSLATIONS */

  const messages = (await import(`../../messages/${locale}.json`)).default;

  /* RENDER */

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleHtml locale={locale} />

      <MotionProvider>
        <SiteHeader />

        <div className="min-w-0 overflow-x-clip">
          <PageTransition>{children}</PageTransition>
        </div>

        <Footer />
      </MotionProvider>
    </NextIntlClientProvider>
  );
}
