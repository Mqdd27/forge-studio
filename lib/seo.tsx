import type { Metadata } from "next";

const siteName = "RisenDev";

export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  image,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = `/${locale}${path}`;
  const socialTitle = `${title} | ${siteName}`;
  const images = [image ?? `/${locale}/opengraph-image`];
  const id = locale === "id";

  return {
    title,
    description,
    alternates: { canonical: url, languages: { en: `/en${path}`, id: `/id${path}`, "x-default": `/en${path}` } },
    openGraph: {
      type: "website",
      siteName,
      title: socialTitle,
      description,
      url,
      locale: id ? "id_ID" : "en_US",
      alternateLocale: [id ? "en_US" : "id_ID"],
      images,
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images },
  };
}

export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
