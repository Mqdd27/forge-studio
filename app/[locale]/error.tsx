"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function PageError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const id = useLocale() === "id";
  return (
    <main className="border-t border-[#1c1c18] bg-[#fcf9f2] px-5 py-24 text-center md:px-12">
      <p className="font-sans text-[0.6875rem] leading-[0.875rem] font-medium tracking-[0.08em] text-[#a93100] uppercase">RisenDev</p>
      <h1 className="mx-auto mt-3 max-w-xl font-sans text-3xl font-semibold tracking-tight uppercase sm:text-4xl">
        {id ? "Halaman belum dapat dimuat." : "This page could not be loaded."}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-[15px] text-[#5c4037]">
        {id ? "Silakan coba kembali atau kembali ke beranda." : "Please try again or return to the homepage."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-[0.6rem] border-0 bg-primary px-6 py-4 text-xs leading-4 font-semibold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:-translate-y-px hover:bg-inverse-surface hover:text-inverse-on-surface"
        >
          {id ? "Coba kembali" : "Try again"}
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-[0.6rem] border border-on-surface bg-transparent px-6 py-4 text-xs leading-4 font-semibold tracking-[0.06em] text-on-surface uppercase transition-colors duration-200 hover:-translate-y-px hover:bg-inverse-surface hover:text-inverse-on-surface"
        >
          {id ? "Kembali ke Beranda" : "Back to Home"}
        </Link>
      </div>
    </main>
  );
}
