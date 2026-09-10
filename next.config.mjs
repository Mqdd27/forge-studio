import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @param {string} phase @returns {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Keep production builds from overwriting an active development server's chunks.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});

export default (phase) => withNextIntl(nextConfig(phase));
