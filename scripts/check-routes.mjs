import { readFile } from "node:fs/promises";

const base = process.env.AUDIT_BASE_URL || "http://localhost:3000";
const content = JSON.parse(await readFile(new URL("../data/design-content.json", import.meta.url), "utf8"));
const work = ["nexus-analytics", "globalfreight", "stripe-erp", ...content.work.map((x) => x.slug)];
const insights = ["over-engineering", "designing-for-calm", "legacy-migrations", ...content.insights.map((x) => x.slug)];
const routes = [
  "/",
  ...["en", "id"].flatMap((locale) =>
    [
      "",
      "/services",
      "/work",
      "/products",
      "/insights",
      "/about",
      "/contact",
      ...work.map((x) => `/work/${x}`),
      ...insights.map((x) => `/insights/${x}`),
    ].map((path) => `/${locale}${path}`),
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
for (const path of ["/en/work/does-not-exist", "/id/insights/does-not-exist", "/fr/contact"]) {
  const { response, text } = await request(path);
  if (response.status !== 404 && !text.includes("NEXT_NOT_FOUND"))
    failures.push(`Missing route ${path}: expected 404, got ${response.status}`);
}
console.log(JSON.stringify({ pages: routes.length, assets: assets.size, internalLinks: links.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
