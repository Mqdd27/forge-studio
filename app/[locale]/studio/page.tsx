import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { AboutDesign } from "@/components/design/about";
import { pageMetadata } from "@/lib/seo";
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const id = params.locale === "id";
  return pageMetadata({
    locale: params.locale,
    path: "/studio",
    title: id ? "Tentang Studio" : "About the Studio",
    description: id
      ? "Cara kerja, prinsip, dan pendekatan RisenDev dalam membangun website, aplikasi web, dan sistem bisnis untuk kebutuhan nyata."
      : "How RisenDev works and the principles behind the websites, web applications, and business systems we build.",
  });
}
export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <AboutDesign />;
}
