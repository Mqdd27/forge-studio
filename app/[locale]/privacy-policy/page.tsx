import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PrivacyDesign } from "@/components/design/privacy";
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const id = params.locale === "id";
  const title = id ? "Kebijakan Privasi" : "Privacy Policy";
  const description = id
    ? "Cara Forge Studio menangani informasi inquiry proyek."
    : "How Forge Studio handles project inquiry information.";
  const path = `/${params.locale}/privacy-policy`;
  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: "/en/privacy-policy", id: "/id/privacy-policy" } },
    openGraph: { type: "website", title, description, url: path },
  };
}
export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <PrivacyDesign />;
}
