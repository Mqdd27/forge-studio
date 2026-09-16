"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function PageError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const id = useLocale() === "id";
  return (
    <main className="border-t border-[#111111] bg-[#FCF9F2] px-5 py-24 text-center md:px-12">
      <p className="eyebrow text-[#A93100]">RisenDev</p>
      <h1 className="mx-auto mt-3 max-w-xl font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight uppercase sm:text-4xl">
        {id ? "Halaman belum dapat dimuat." : "This page could not be loaded."}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-[15px] text-[#5F5E5E]">
        {id ? "Silakan coba kembali atau kembali ke beranda." : "Please try again or return to the homepage."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={reset} className="btn-forge">
          {id ? "Coba kembali" : "Try again"}
        </button>
        <Link href="/" className="btn-ghost">
          {id ? "Kembali ke Beranda" : "Back to Home"}
        </Link>
      </div>
    </main>
  );
}
