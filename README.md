# Forge Studio

Company profile website for Forge Studio, built with Next.js App Router and the Stitch design system.

## Run locally

```bash
npm install
npm run dev
```

The site uses `/en` and `/id` prefixes, for example `/id/services` and `/en/contact`.

`npm run dev` uses port 3000 explicitly so a second invocation fails instead of sharing the same development cache on another port. Production builds use `.next`; development uses `.next-dev`. If a separate development instance is needed, give it its own cache, for example `FORGE_DEV_DIST_DIR=.next-dev-review npx next dev --port 3001`.

## Verification

Run `npm run build` for compilation and type checks. With the development server running, run `npm run check:routes` to check every content route in both languages, local assets, internal links, locale consistency, and missing routes. Set `AUDIT_BASE_URL` to check a different local server.
