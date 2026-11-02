import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HomeDesign } from "@/components/design/home";
import { siteUrl } from "@/data/site";
import { JsonLd, pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Home.metadata" });
  return pageMetadata({ locale: params.locale, title: t("title"), description: t("description") });
}

export default async function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: "Home.metadata" });
  const url = `${siteUrl}/${params.locale}`;

  return (
    <>
      <JsonLd
        data={{
          "@graph": [
            { "@type": "WebSite", name: "RisenDev", url, inLanguage: params.locale },
            {
              "@type": "ProfessionalService",
              name: "RisenDev",
              url,
              logo: `${siteUrl}/img/logo.png`,
              image: `${siteUrl}/${params.locale}/opengraph-image`,
              description: t("description"),
              areaServed: { "@type": "Country", name: "Indonesia" },
            },
          ],
        }}
      />
      <HomeDesign />
    </>
  );
}
