import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @param {string} phase @returns {import('next').NextConfig} */
const nextConfig = (phase) => ({
  async redirects() {
    return [
      ...["services", "work", "about", "start-a-project", "privacy-policy"].map((path) => ({
        source: `/${path}`,
        destination: `/en/${path}`,
        permanent: true,
      })),
      { source: "/contact", destination: "/en/start-a-project", permanent: true },
      { source: "/:locale(en|id)/contact", destination: "/:locale/start-a-project", permanent: true },
      { source: "/work/:slug", destination: "/en/work/:slug", permanent: true },
      { source: "/:locale(en|id)/products", destination: "/:locale/services", permanent: true },
      { source: "/:locale(en|id)/insights/:path*", destination: "/:locale", permanent: true },
      { source: "/products", destination: "/en/services", permanent: true },
      { source: "/insights/:path*", destination: "/en", permanent: true },
    ];
  },
  // Keep production builds from overwriting an active development server's chunks.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? process.env.FORGE_DEV_DIST_DIR || ".next-dev" : ".next",
});

export default (phase) => withNextIntl(nextConfig(phase));
