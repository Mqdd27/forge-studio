import type { MetadataRoute } from "next";
import { cases, siteUrl } from "../data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/work", "/about", "/start-a-project", "/privacy-policy", ...cases.map((item) => `/work/${item.slug}`)];
  return ["en", "id"].flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: !path ? 1 : path === "/work" || path === "/services" ? 0.9 : 0.7,
      alternates: { languages: { en: `${siteUrl}/en${path}`, id: `${siteUrl}/id${path}` } },
    })),
  );
}
