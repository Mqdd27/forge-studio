"use client";
import { useLocale } from "next-intl";
import translations from "@/messages/design-id.json";
export function DesignText({ children }: { children: string }) {
  const locale = useLocale();
  return <>{locale === "id" ? ((translations as Record<string, string>)[children] ?? children) : children}</>;
}
