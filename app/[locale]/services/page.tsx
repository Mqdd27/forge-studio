import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesDesign } from "@/components/design/services";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ServicesPage.metadata" });
  return pageMetadata({ locale: params.locale, path: "/services", title: t("title"), description: t("description") });
}

export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <ServicesDesign />;
}
