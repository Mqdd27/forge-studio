"use client";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function PageError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const id = useLocale() === "id";
  return (
    <main className="forge-state">
      <p>FORGE STUDIO</p>
      <h1>{id ? "Halaman belum dapat dimuat." : "This page could not be loaded."}</h1>
      <p>{id ? "Silakan coba kembali atau kembali ke beranda." : "Please try again or return to the homepage."}</p>
      <div className="flex flex-wrap gap-4">
        <button onClick={reset} className="about-button btn-primary">
          {id ? "Coba kembali" : "Try again"}
        </button>
        <Link href="/" className="about-button btn-secondary">
          {id ? "Kembali ke Beranda" : "Back to Home"}
        </Link>
      </div>
    </main>
  );
}
