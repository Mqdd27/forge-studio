# AGENTS.md — forge-cms (RisenDev)

Copy this file to `/Users/macbook/Documents/projects/forge-cms/AGENTS.md`.

## Directories

- This project (CMS): `/Users/macbook/Documents/projects/forge-cms`. Separate git repo, separate deployment.
- Website consuming it: `/Users/macbook/Documents/projects/forge-studio` (remote `git@github.com:Mqdd27/forge-studio.git`, CMS work on branch `feat/cms-migration`).
- Draft schema origin: `/Users/macbook/Documents/projects/forge-studio/docs/cms/`. Once copied here, the files in this repo are the source of truth.
- Do not edit `forge-studio` from a forge-cms session unless explicitly asked. Read it freely, e.g. for seeding.

## Domains

- Production site: `https://risencode.dev`
- Production CMS: `https://cms.risencode.dev` (admin at `/admin`, REST at `/api`)
- Local: site `http://localhost:3000`, CMS `http://localhost:3001`

## Persistent Memory

- Memory root: `/Users/macbook/Library/Mobile Documents/com~apple~CloudDocs/Obsidian Vault/AI Mem`
- Project memory: `Projects/forge-cms.md` (create it if missing). Read `Projects/forge.md` only when the task touches the website integration.
- Source code and actual server state are the source of truth. If memory disagrees, fix the memory.
- After finishing work, update `Current State` in place. Don't blindly append. Move stale facts to `History` only if still useful.
- Never store secrets (passwords, API keys, tokens, cookies, private keys, credentials).

## Stack & conventions

- Payload CMS v3 (its own Next.js app), Postgres 16 (`docker-compose.yml` for local), npm, TypeScript strict.
- Localization: locales `en`, `id`, default `en`, fallback on. Content fields are `localized: true`; non-language data (slug, stack, status, category, order) is not.
- Collections: `users` (auth), `works` (drafts on; public read = published only), `media` (public read, localized `alt`), `inquiries` (admin-only read; create requires `Authorization: Bearer $INQUIRY_WEBHOOK_TOKEN`).
- `inquiries` is the target of forge-studio's `INQUIRY_WEBHOOK_URL`. forge-studio sends `{ name, contact, projectType, description }` and treats any 2xx as delivered. Never return 2xx unless the record is stored. `projectType` options must stay in sync with `forge-studio/components/design/contact.tsx` and `forge-studio/app/api/inquiries/route.ts`.
- Works/Media `afterChange`/`afterDelete` hooks call `FORGE_REVALIDATE_URL` (`https://risencode.dev/api/revalidate`) with header `x-revalidate-secret`. A failure only logs; it never fails the save.
- Secrets stay in env (`.env` gitignored, `.env.example` committed with empty values): `DATABASE_URI`, `PAYLOAD_SECRET`, `INQUIRY_WEBHOOK_TOKEN`, `FORGE_REVALIDATE_URL`, `FORGE_REVALIDATE_SECRET`, `CORS_ORIGINS`.
- Never add personal GitHub/repository URLs to any publicly readable collection.
- Keep it minimal: no extra plugins, collections, or abstractions until needed.

## Verify

- `npm run build`, `npx tsc --noEmit`, `npm run generate:types` (commit `payload-types.ts`).
- `npm run seed` is idempotent (upsert by `slug`); running it twice creates no duplicates.
- Inquiry curl check: right token → 201, wrong or missing token → 403, bad `projectType` → 400.
