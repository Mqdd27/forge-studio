import type { MetadataRoute } from "next";
import { cases, siteUrl } from "../data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/products", "/about", "/insights", "/contact"];
  return [...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : route === "/work" || route === "/services" ? 0.9 : 0.7 })), ...cases.map((item) => ({ url: `${siteUrl}/work/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))];
}
