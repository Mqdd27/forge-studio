import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesDesign } from "../../../components/design/services";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ServicesPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/services`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/services", id: "/id/services", "x-default": "/en/services" },
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

    twitter: {
      card: "summary_large_image",

      title: `${title} | Forge Studio`,

      description,
    },
  };
}

export default function Page() {
  return <ServicesDesign />;
}
