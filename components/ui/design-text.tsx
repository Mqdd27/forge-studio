"use client";

import { useLocale } from "next-intl";
import translations from "@/messages/design-id.json";

const idMap = translations as Record<string, string>;
const enMap = Object.fromEntries(
  Object.entries(idMap).map(([english, indonesian]) => [indonesian, english]),
) as Record<string, string>;

/**
 * Small bilingual bridge for editorial copy imported from the Stitch designs.
 * It accepts either the English source string or its Indonesian counterpart,
 * so legacy sections cannot leak Indonesian copy into /en (or vice versa).
 */
export function DesignText({ children }: { children: string }) {
  const locale = useLocale();

  if (locale === "id") {
    return <>{idMap[children] ?? children}</>;
  }

  return <>{enMap[children] ?? children}</>;
}
