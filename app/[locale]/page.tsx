import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HomeDesign } from "@/components/design/home";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Home.metadata" });

  const title = t("title");
  const description = t("description");

  return {
    title,
    description,

    alternates: {
      canonical: `/${params.locale}`,

      languages: { en: "/en", id: "/id", "x-default": "/en" },
    },

    openGraph: {
      type: "website",

      title: `${title} | RisenDev`,

      description,

      url: `/${params.locale}`,

      siteName: "RisenDev",

      locale: params.locale === "id" ? "id_ID" : "en_US",

      alternateLocale: params.locale === "id" ? ["en_US"] : ["id_ID"],
    },

    twitter: {
      card: "summary_large_image",

      title: `${title} | RisenDev`,

      description,
    },
  };
}

export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <HomeDesign />;
}
