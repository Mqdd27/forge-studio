import type { MetadataRoute } from "next";
import { siteUrl } from "../data/site";
import { getWorks } from "../lib/cms";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await getWorks("en");
  const paths = ["", "/services", "/work", "/studio", "/start-a-project", "/privacy-policy", ...works.map((item) => `/work/${item.slug}`)];
  return ["en", "id"].flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: !path ? 1 : path === "/work" || path === "/services" ? 0.9 : 0.7,
      alternates: { languages: { en: `${siteUrl}/en${path}`, id: `${siteUrl}/id${path}` } },
    })),
  );
}
