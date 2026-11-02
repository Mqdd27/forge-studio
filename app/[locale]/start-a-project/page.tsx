import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ContactDesign } from "@/components/design/contact";
import { pageMetadata } from "@/lib/seo";
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const id = params.locale === "id";
  return pageMetadata({
    locale: params.locale,
    path: "/start-a-project",
    title: id ? "Mulai Proyek" : "Start a Project",
    description: id
      ? "Mulai proyek website, aplikasi web, atau sistem bisnis bersama RisenDev. Ceritakan apa yang ingin Anda bangun, tingkatkan, atau selesaikan."
      : "Start a website, web application, or business system project with RisenDev. Tell us what you want to build, improve, or solve.",
  });
}
export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <ContactDesign />;
}
