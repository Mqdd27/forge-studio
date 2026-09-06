import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { SiteHeader } from "../../components/site-header";
import { Footer } from "../../components/footer";
import { PageTransition } from "../../components/page-transition";
import { MotionProvider } from "../../components/motion-provider";

import { routing } from "../../i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MotionProvider>
        <SiteHeader />

        <PageTransition>{children}</PageTransition>

        <Footer />
      </MotionProvider>
    </NextIntlClientProvider>
  );
}
