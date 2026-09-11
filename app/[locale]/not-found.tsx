import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function NotFound() {
  const locale = useLocale();
  const id = locale === "id";

  return (
    <main className="forge-state flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-alt shadow-sm">
        <Image src="/img/forge-icon.png" alt="Forge Studio" width={40} height={40} className="rounded-lg object-contain" />
      </div>

      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-3">
        404 / {id ? "HALAMAN TIDAK DITEMUKAN" : "NOT FOUND"}
      </p>

      <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-ink max-w-xl">
        {id ? "Halaman ini belum ditempa." : "Looks like this page wasn't forged yet."}
      </h1>

      <p className="mt-4 text-base sm:text-lg leading-relaxed text-grey max-w-md">
        {id
          ? "Halaman yang Anda tuju mungkin telah dipindahkan atau belum tersedia."
          : "The page you are looking for might have moved, or doesn't exist."}
      </p>

      <Link
        href="/"
        className="btn-primary group mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
          ←
        </span>
        <span>{id ? "Kembali ke Beranda" : "Back to Home"}</span>
      </Link>
    </main>
  );
}
