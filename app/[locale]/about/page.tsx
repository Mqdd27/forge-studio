import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutDesign } from "@/components/design/about";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "AboutPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/about`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/about", id: "/id/about", "x-default": "/en/about" },
    },

    openGraph: {
      type: "website",
      title: `${title} | Forge Studio`,
      description,
      url: path,
      siteName: "Forge Studio",

      locale: params.locale === "id" ? "id_ID" : "en_US",

      alternateLocale: params.locale === "id" ? ["en_US"] : ["id_ID"],
    },

    twitter: { card: "summary_large_image", title: `${title} | Forge Studio`, description },
  };
}

export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <AboutDesign />;
}
