import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { ContactDesign } from "@/components/design/contact";
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const id = params.locale === "id";
  const title = id ? "Mulai Proyek" : "Start a Project";
  const description = id
    ? "Ceritakan apa yang ingin Anda bangun, tingkatkan, atau selesaikan."
    : "Tell us what you want to build, improve, or solve.";
  const path = `/${params.locale}/start-a-project`;
  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: "/en/start-a-project", id: "/id/start-a-project" } },
    openGraph: { type: "website", title, description, url: path },
  };
}
export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  return <ContactDesign />;
}
