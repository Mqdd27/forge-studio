import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function NotFound() {
  const locale = useLocale();
  const id = locale === "id";

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FCF9F2] px-6 py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center border border-[#111111] bg-[#FFFDF7]">
        <Image src="/img/logo.png" alt="RisenDev" width={40} height={40} className="object-contain mix-blend-multiply" />
      </div>
      <p className="eyebrow mb-3 text-[#A93100]">404 / {id ? "Halaman tidak ditemukan" : "Not found"}</p>
      <h1 className="max-w-xl font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight uppercase sm:text-5xl">
        {id ? "Halaman ini tidak ada di sistem." : "This page isn't in the system."}
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-[#5F5E5E]">
        {id
          ? "Halaman yang Anda tuju mungkin telah dipindahkan atau belum tersedia."
          : "The page you are looking for might have moved, or doesn't exist."}
      </p>
      <Link href="/" className="btn-forge mt-8">
        <span aria-hidden="true">←</span>
        <span>{id ? "Kembali ke Beranda" : "Back to Home"}</span>
      </Link>
    </main>
  );
}
