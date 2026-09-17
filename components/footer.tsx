"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const id = useLocale() === "id";
  const year = new Date().getFullYear();
  const nav = [
    { n: "01", label: "Overview", href: "/" },
    { n: "02", label: id ? "Hasil Kerja" : "Work", href: "/work" },
    { n: "03", label: id ? "Layanan" : "Services", href: "/services" },
    { n: "04", label: "Studio", href: "/studio" },
    { n: "05", label: "Start a Project", href: "/start-a-project" },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-[#1c1c18] bg-[#f1eee7] pt-16 pb-6 md:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 -bottom-6 left-0 overflow-hidden opacity-[0.06]">
        <span className="giant-word block text-center text-[16vw] whitespace-nowrap text-[#1c1c18]">RISENDEV</span>
      </div>
      <div className="relative z-10 w-full px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-4 text-[#a93100]">[Manifesto Studio]</p>
            <p className="max-w-xl font-[family-name:var(--font-geist-sans)] text-2xl font-medium tracking-tight md:text-4xl">
              {id ? "Software yang dibuat untuk menyelesaikan masalah nyata." : "Software built to solve real problems."}
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5c4037]">
              {id
                ? "Website dan sistem bisnis yang fokus pada kebutuhan nyata, mudah digunakan, dan siap dikembangkan seiring kebutuhan bisnis."
                : "Websites and business systems focused on real needs, ease of use, and room to grow with the business."}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-emerald-500" aria-hidden="true" />
              <span className="eyebrow">{id ? "Terbuka untuk diskusi project baru" : "Open for new project discussions"}</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4 text-[#5c4037]">[Index Halaman]</p>
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.n}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-2 text-xs font-semibold tracking-[0.06em] text-[#5c4037] uppercase transition-colors hover:text-[#a93100]"
                  >
                    <span>
                      {item.n} {item.label}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex items-center justify-between py-2 text-xs font-semibold tracking-[0.06em] text-[#5c4037] uppercase transition-colors hover:text-[#a93100]"
                >
                  <span>{id ? "Privasi" : "Privacy"}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-4 text-[#5c4037]">[Studio]</p>
            <Image
              src="/img/font.png"
              alt="RisenDev — Build, Develop, Grow"
              width={220}
              height={73}
              loading="lazy"
              className="h-auto w-40 object-contain mix-blend-multiply"
            />
            <p className="mt-3 text-sm leading-relaxed text-[#5c4037]">
              Indonesia
              <br />
              {id ? "Tersedia untuk proyek remote." : "Available for remote projects."}
            </p>
            <Link href="/start-a-project" className="btn-forge mt-5">
              {id ? "Mulai Diskusi" : "Start a Project"} <span aria-hidden="true">↗</span>
            </Link>
            <p className="eyebrow mt-4 text-[#5c4037]">{id ? "Ceritakan kebutuhan Anda" : "Tell us what you need"}</p>
          </div>
        </div>
        <p className="mt-12 border-t border-[#1c1c18] pt-5 text-[11px] tracking-[0.06em] text-[#5c4037] uppercase">
          © {year} RisenDev. {id ? "Seluruh hak cipta dilindungi." : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
