import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function NotFound() {
  const locale = useLocale();
  const id = locale === "id";

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#fcf9f2] px-6 py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center border border-[#1c1c18] bg-white">
        <Image src="/img/logo.png" alt="RisenDev" width={40} height={40} className="object-contain mix-blend-multiply" />
      </div>
      <p className="mb-3 font-sans text-[0.6875rem] leading-[0.875rem] font-medium tracking-[0.08em] text-[#a93100] uppercase">
        404 / {id ? "Halaman tidak ditemukan" : "Not found"}
      </p>
      <h1 className="max-w-xl font-sans text-3xl font-semibold tracking-tight uppercase sm:text-5xl">
        {id ? "Halaman ini tidak ada di sistem." : "This page isn't in the system."}
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-[#5c4037]">
        {id
          ? "Halaman yang Anda tuju mungkin telah dipindahkan atau belum tersedia."
          : "The page you are looking for might have moved, or doesn't exist."}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-[0.6rem] border-0 bg-primary px-6 py-4 text-xs leading-4 font-semibold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:-translate-y-px hover:bg-inverse-surface hover:text-inverse-on-surface"
      >
        <span aria-hidden="true">←</span>
        <span>{id ? "Kembali ke Beranda" : "Back to Home"}</span>
      </Link>
    </main>
  );
}
