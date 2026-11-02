import type { Metadata } from "next";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { WorkDesign } from "@/components/design/work";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "WorkPage.metadata" });

  return pageMetadata({ locale, path: "/work", title: t("title"), description: t("description") });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <WorkDesign />;
}
