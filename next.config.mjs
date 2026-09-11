import { fileURLToPath } from "node:url";
import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @param {string} phase @returns {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Keep production builds from overwriting an active development server's chunks.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? process.env.FORGE_DEV_DIST_DIR || ".next-dev" : ".next",
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /node_modules[\\/]framer-motion[\\/]dist[\\/]es[\\/].*\.mjs$/,
        enforce: "pre",
        use: fileURLToPath(new URL("./loaders/strip-motion-source-map.cjs", import.meta.url)),
      });
    }
    return config;
  },
});

export default (phase) => withNextIntl(nextConfig(phase));
