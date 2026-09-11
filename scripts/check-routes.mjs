import { readFile } from "node:fs/promises";

const base = process.env.AUDIT_BASE_URL || "http://localhost:3000";
const site = await readFile(new URL("../data/site.ts", import.meta.url), "utf8");
const caseSection = site.split("export const cases = [")[1].split("] as const;")[0];
const work = [...caseSection.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const routes = [
  "/",
  ...["en", "id"].flatMap((locale) =>
    ["", "/services", "/work", "/about", "/start-a-project", "/privacy-policy", ...work.map((x) => `/work/${x}`)].map(
      (path) => `/${locale}${path}`,
    ),
  ),
];
const assets = new Set();
const links = new Set();
const failures = [];
async function request(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(60000) });
  const text = await response.text();
  return { response, text };
}
for (const path of routes) {
  try {
    const { response, text } = await request(path);
    if (!response.ok || !text.includes("<main") || /"digest":"(?!NEXT_NOT_FOUND)[^"]+"/.test(text))
      failures.push(`${path}: ${response.status} or render failure`);
    for (const match of text.matchAll(/<(script|link|img)\b[^>]*?\b(?:src|href)="([^"]+)"/g)) {
      const asset = match[2].replaceAll("&amp;", "&");
      if (asset.startsWith("/_next/") || asset.startsWith("/img/")) assets.add(asset);
    }
    if (text.includes("Mqdd27") || text.includes("hello@forgestudio.dev"))
      failures.push(`Unconfirmed or personal contact exposed on ${path}`);
    for (const match of text.matchAll(/<a\b[^>]*href="(\/(?!\/)[^"]*)"/g)) {
      const link = match[1].split(/[?#]/)[0];
      links.add(link);
      if (/^\/(en|id)(?:\/|$)/.test(path) && /^\/(en|id)(?:\/|$)/.test(link) && path.split("/")[1] !== link.split("/")[1])
        failures.push(`Wrong link locale on ${path}: ${link}`);
    }
    console.log(`${response.status} ${path}`);
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}
for (const asset of assets) {
  try {
    const { response, text } = await request(asset);
    if (!response.ok) failures.push(`Asset ${asset}: ${response.status}`);
    if (asset.includes("/chunks/") && /sourceMappingURL=LayoutGroupContext\.mjs\.map/.test(text))
      failures.push(`Broken source map in ${asset}`);
  } catch (error) {
    failures.push(`Asset ${asset}: ${error.message}`);
  }
}
for (const link of links) {
  if (routes.includes(link)) continue;
  const { response } = await request(link);
  if (!response.ok) failures.push(`Internal link ${link}: ${response.status}`);
}
for (const path of ["/en/work/does-not-exist", "/id/work/does-not-exist", "/fr/contact"]) {
  const { response, text } = await request(path);
  if (response.status !== 404 && !text.includes("NEXT_NOT_FOUND"))
    failures.push(`Missing route ${path}: expected 404, got ${response.status}`);
}
for (const [path, destination] of [
  ["/id/contact", "/id/start-a-project"],
  ["/en/contact", "/en/start-a-project"],
  ["/id/products", "/id/services"],
  ["/en/insights", "/en"],
  ["/start-a-project", "/en/start-a-project"],
  ["/work", "/en/work"],
]) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  const location = response.headers.get("location");
  if (![307, 308].includes(response.status) || !location || new URL(location, base).pathname !== destination)
    failures.push(`Legacy redirect ${path}: ${response.status} ${location}`);
}
const { text: sitemap } = await request("/sitemap.xml");
for (const locale of ["en", "id"])
  for (const slug of work) if (!sitemap.includes(`/${locale}/work/${slug}`)) failures.push(`Sitemap missing ${locale}/${slug}`);
if (/\/(products|insights|contact)</.test(sitemap)) failures.push("Sitemap contains retired routes");
console.log(JSON.stringify({ pages: routes.length, assets: assets.size, internalLinks: links.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
