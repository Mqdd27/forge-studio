# Forge Studio

Bilingual public website for an independent web development studio. Built with the existing Next.js App Router, next-intl, Inter/Manrope, and Tailwind utility styling.

## Run locally

```bash
npm install
npm run dev
```

Canonical pages use `/en` and `/id`: Home, Services, Work and case studies, About, Start a Project, and Privacy Policy. Unprefixed links redirect to English. `/contact` redirects to Start a Project; former Products/Insights URLs redirect to Services/Home.

Development uses port 3000 and `.next-dev`; production builds use `.next`. For an isolated development instance, use `FORGE_DEV_DIST_DIR=.next-dev-review npx next dev --port 3001`.

## Inquiry delivery

Copy `.env.example` to `.env.local` and configure the business-owned `INQUIRY_WEBHOOK_URL` before launch. The HTTPS destination receives JSON with `name`, `contact`, `projectType`, and `description`. It must accept and reliably deliver/store the inquiry before returning 2xx. Optional `INQUIRY_WEBHOOK_TOKEN` is a server-only bearer token. Never use `NEXT_PUBLIC_` for delivery credentials.

Without a destination the API returns 503 and the form reports that nothing was sent. It never fabricates success. The website does not store inquiry records. Delivery providers should be configured with a suitable retention policy and their details added to the privacy page before public launch.

Validation, a hidden spam field, bounded request bodies, same-origin checks, timeouts, and an in-memory attempt limit are included. Configure `INQUIRY_TRUSTED_IP_HEADER` only when a trusted reverse proxy overwrites that header. For multi-instance production hosting, enforce a shared rate limit at the proxy/platform; the in-process limit alone is not shared across instances or restarts.

## Portfolio content

`data/site.ts` retains the four supplied real projects. `data/work-presentation.ts` controls public categories, capability tags, and optional reviewed screenshots. Cards receive only public keys/slug/visual fields; the supplied personal repository URL is not rendered or passed to browser components.

No verified project screenshots were supplied. Existing abstract visuals are explicitly labeled illustrations. Add actual anonymized screenshots only after checking for client identities, people, domains, IPs, credentials, and confidential operational data. The detail template automatically displays reviewed screenshots when added.

Only verified official contact/social channels should be published. No generic or personal social profiles are displayed.

## Verification

```bash
npm run build
npm run check:inquiries
npm run check:routes
```

The production build includes type checks. Route checks require a running server (`AUDIT_BASE_URL` overrides localhost:3000). Inquiry tests mock delivery in memory and send no external messages.

## Code structure

- `app/`: App Router pages, layouts, metadata, and the inquiry route handler.
- `components/design/`: page content and composed sections.
- `components/ui/`: shared icon, translation, and filter components. Client boundaries are declared only where hooks or interaction require them.
- `components/`: shared navigation, footer, project cards, and page transitions.
- `hooks/`: reusable browser hooks, including live reduced-motion preferences.
- `data/`: typed service/project records and public presentation settings.
- `messages/` and `i18n/`: English/Indonesian content and locale routing.
- Styling uses Tailwind utilities directly in components. `components/ui/page-shell.tsx` shares page typography; `app/globals.css` contains only the Tailwind v4 import. There are no custom stylesheets.
- `scripts/`: route and inquiry verification.

Use `@/` imports for project source. Use Tailwind utilities for layout, responsive states, hover/focus, and component styling. Extract reusable React components instead of adding custom CSS selectors. Prettier automatically orders Tailwind classes. Build directories and incremental TypeScript caches are generated output, not source files.

Project screenshots use `next/image`: add a local public path, descriptive `alt`, and intrinsic `width`/`height` to `data/work-presentation.ts`. Remote sources require an explicit Next.js image configuration before use.

```bash
npm run check       # lint, types, formatting, and mocked inquiry tests
npm run build       # production compilation and static generation
npm run check:routes # requires the local development server
```

Page and scroll animations use the browser Web Animations API; no animation runtime dependency is required. The reduced-motion hook responds to preference changes while the page is open.

Styling is implemented with Tailwind utilities in TSX. The only CSS entry is `app/globals.css`, containing `@import "tailwindcss";`. Shared page typography lives in `components/ui/page-shell.tsx`. Fonts are supplied by next/font; page transitions use the Web Animations API with reduced-motion support.
