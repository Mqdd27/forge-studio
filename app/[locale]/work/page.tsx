import type { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { WorkDesign } from "@/components/design/work";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "WorkPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${locale}/work`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/work", id: "/id/work", "x-default": "/en/work" },
    },

    openGraph: {
      type: "website",
      title: `${title} | RisenDev`,
      description,
      url: path,
      siteName: "RisenDev",
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
    },

    twitter: { card: "summary_large_image", title: `${title} | RisenDev`, description },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <WorkDesign />;
}
