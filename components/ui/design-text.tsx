import { getLocale } from "next-intl/server";
import translations from "@/messages/design-id.json";

const idMap = translations as Record<string, string>;

/**
 * Bilingual bridge for the editorial copy that lives inline in the design
 * sections. Children must be the English source string; the Indonesian
 * counterpart comes from messages/design-id.json.
 *
 * Server-only on purpose: the 30KB mapping never reaches the browser bundle.
 */
export async function DesignText({ children }: { children: string }) {
  if ((await getLocale()) !== "id") return <>{children}</>;
  const translated = idMap[children];
  if (!translated && process.env.NODE_ENV !== "production") {
    console.warn(`[design-text] missing Indonesian translation: ${JSON.stringify(children)}`);
  }
  return <>{translated ?? children}</>;
}
