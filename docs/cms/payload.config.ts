import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Works } from "./collections/Works";
import { Media } from "./collections/Media";
import { Inquiries } from "./collections/Inquiries";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI } }),
  editor: lexicalEditor(),
  localization: { locales: ["en", "id"], defaultLocale: "en", fallback: true },
  collections: [{ slug: "users", auth: true, fields: [] }, Works, Media, Inquiries],
  typescript: { outputFile: "payload-types.ts" },
});
