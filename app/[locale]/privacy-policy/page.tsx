import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PrivacyDesign } from "@/components/design/privacy";
import { pageMetadata } from "@/lib/seo";
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const id = params.locale === "id";
  return pageMetadata({
    locale: params.locale,
    path: "/privacy-policy",
    title: id ? "Kebijakan Privasi" : "Privacy Policy",
    description: id ? "Cara RisenDev menangani informasi inquiry proyek." : "How RisenDev handles project inquiry information.",
  });
}
export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <PrivacyDesign />;
}
