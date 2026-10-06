# Prompt: initialize forge-cms (Payload v3)

Paste everything below into a fresh agent session started in an empty folder (e.g. `~/Documents/projects/forge-cms`).

---

Build `forge-cms`, a standalone Payload CMS v3 app that serves content to the website `forge-studio` (Next.js 14 + next-intl, locales `en` / `id`, located at `../forge-studio`). This is a separate repo and a separate deployment. Do not modify `forge-studio` except where step 6 says so.

## Stack

- Payload v3 on its own Next.js app (use `npx create-payload-app@latest` with the **blank** template and the **Postgres** adapter). TypeScript strict.
- Postgres 16. Add a `docker-compose.yml` with only a `postgres` service for local dev.
- Package manager: npm.
- Media: local disk storage for now (`media/` dir, gitignored). Don't add S3 or other cloud storage plugins yet.

## Schema

The draft schema already exists. Copy these files from `../forge-studio/docs/cms/` and use them as the source of truth. Adjust them only to fix API errors against the installed Payload version:

- `payload.config.ts` (`users` auth, `localization` en/id with fallback, postgres)
- `collections/Works.ts` (portfolio cases, drafts enabled, public read = published only)
- `collections/Media.ts` (images with localized `alt`)
- `collections/Inquiries.ts` (contact form submissions, create allowed only with the bearer token)

Run `npm run generate:types` and make sure `payload-types.ts` is generated.

## Env (`.env.example` only, never commit real values)

```
DATABASE_URI=postgres://postgres:postgres@localhost:5432/forge_cms
PAYLOAD_SECRET=
INQUIRY_WEBHOOK_TOKEN=          # must equal forge-studio's INQUIRY_WEBHOOK_TOKEN
FORGE_REVALIDATE_URL=           # e.g. https://risendev.dev/api/revalidate
FORGE_REVALIDATE_SECRET=        # must equal forge-studio's REVALIDATE_SECRET
CORS_ORIGINS=http://localhost:3000,https://risendev.dev
```

Wire `CORS_ORIGINS` into `cors` and `csrf` in `payload.config.ts`.

## Tasks

1. **Scaffold** the app, add docker-compose, copy the schema, and get `npm run dev` working with the admin panel at `/admin`.
2. **Revalidation hook.** In `Works` (and `Media`), add `afterChange` + `afterDelete` hooks that `POST` to `FORGE_REVALIDATE_URL` with header `x-revalidate-secret: FORGE_REVALIDATE_SECRET` and body `{ "tag": "works" }`. If the env var is missing, skip the call. Failures must only `req.payload.logger.error` and never throw (a CMS save must not fail just because the site is down). For drafts, fire only when `doc._status === "published"`.
3. **Seed script** `src/seed.ts` (run with `npm run seed`, idempotent: upsert by `slug`) that imports the current content from `../forge-studio`:
   - `data/site.ts` → `cases` (key, slug, status, images, stack; array order becomes `order`)
   - `data/work-presentation.ts` → `category`, `tags` (en)
   - `messages/en.json` and `messages/id.json` → `Site.cases.<key>.*` for the `en` and `id` locales (title, summary, overview, role, challengeTitle/challenge/challengePoints, solutionTitle/solution/solutionPoints, capabilitiesTitle/capabilities, engineeringTitle/engineering/engineeringPoints, outcomeTitle/outcome). Ignore the `category` string there; it is derived from the select.
   - Upload each image from `../forge-studio/public/img/portofolio/...` into `media` with alt = `<title> screenshot <n>`, then link the uploads to the work.
   - Save each work as `_status: "published"`. Write `en` first, then update with `locale: "id"`.
   - Locale-aware arrays (points) are localized as a whole, so write the full `id` array in the `id` update.
4. **Inquiries endpoint check.** forge-studio's `INQUIRY_WEBHOOK_URL` will point at `https://<cms-domain>/api/inquiries`. It sends `POST` JSON `{ name, contact, projectType, description }` with `Authorization: Bearer <INQUIRY_WEBHOOK_TOKEN>` and treats any 2xx as success. Verify with curl: correct token → 201, wrong or missing token → 403, invalid `projectType` → 400.
5. **README**: setup, env, seed, deploy notes (Node host + managed Postgres + persistent volume for `media/`, or swap to an S3 storage adapter later).
6. **Integration notes for forge-studio.** Do not implement these. Write them to `docs/forge-studio-integration.md` as a plan:
   - Server-only fetch helper using `fetch(\`${CMS_URL}/api/works?locale=${locale}&depth=1&sort=order&limit=100\`, { next: { tags: ["works"] } })`. `CMS_URL`stays a server env var (not`NEXT_PUBLIC_`).
   - New route `app/api/revalidate/route.ts`: checks `x-revalidate-secret` against `REVALIDATE_SECRET`, then calls `revalidateTag(body.tag)`.
   - Replace `cases` / `workPresentation` / `Site.cases` usages. `contentCount.*` becomes the length of each points array. Keep `generateStaticParams` for `/work/[slug]` and fall back to `dynamicParams = true`.
   - Add the CMS media host to `images.remotePatterns` in `next.config.mjs`.
   - UI strings in `messages/*.json` (other than `Site.cases`) stay in the repo.

## Done when

- `npm run build` passes and `tsc --noEmit` is clean.
- `docker compose up -d && npm run seed` imports all 6 works with both locales and their images. Running it a second time creates no duplicates.
- `GET /api/works?locale=id` returns the Indonesian content without auth. Draft works are not returned without auth.
- The inquiry curl checks in task 4 pass.
- No secrets committed; `.env` is gitignored.
