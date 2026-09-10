import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InsightsDesign } from "../../../components/design/insights";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "InsightsPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/insights`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/insights", id: "/id/insights", "x-default": "/en/insights" },
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

/* INSIGHTS */

export default function Page() {
  return <InsightsDesign />;
}
