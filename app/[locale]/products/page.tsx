import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { PageIntro } from "../../../components/page-intro";
import { ProductCard } from "../../../components/product-card";
import { products } from "../../../data/site";

/* METADATA */

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "ProductsPage.metadata" });

  const title = t("title");
  const description = t("description");

  const path = `/${params.locale}/products`;

  return {
    title,
    description,

    alternates: {
      canonical: path,

      languages: { en: "/en/products", id: "/id/products", "x-default": "/en/products" },
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

/* PRODUCTS */

export default async function Products({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "ProductsPage" });

  return (
    <main className="min-w-0 overflow-x-clip">
      {/* INTRO */}

      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      {/* PRODUCTS GRID */}

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 sm:gap-5 sm:px-6 sm:pb-20 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:pb-28 xl:pb-32">
        {products.map((item) => (
          <ProductCard key={item.key} item={item} />
        ))}
      </section>
    </main>
  );
}
