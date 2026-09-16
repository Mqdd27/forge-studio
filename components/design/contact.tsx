"use client";

import { PageShell } from "@/components/ui/page-shell";

import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const fieldClass = "field-sharp";

const projectTypes = [
  ["customWeb", "Company Profile Website", "Website Company Profile"],
  ["businessSystems", "Catalog Website", "Website Katalog"],
  ["existingSystems", "Business System", "Sistem Bisnis"],
  ["maintenance", "Inventory / Warehouse", "Inventory / Warehouse"],
  ["unsure", "POS / Booking / Dashboard", "POS / Booking / Dashboard"],
] as const;

const budgets = ["< Rp5 jt", "Rp5–10 jt", "Rp10–25 jt", "Rp25–50 jt", "> Rp50 jt"] as const;
const timelines = ["ASAP", "1–2 bln", "2–3 bln", "3+ bln"] as const;

export function ContactDesign() {
  const id = useLocale() === "id";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && !/^\+?[\d\s().-]{8,25}$/.test(contact)) {
      setError(id ? "Masukkan alamat email atau nomor WhatsApp yang valid." : "Enter a valid email address or WhatsApp number.");
      setStatus("error");
      return;
    }
    const picked = data.getAll("projectType").map(String).filter(Boolean);
    if (picked.length === 0) {
      setError(id ? "Pilih minimal satu tipe proyek." : "Select at least one project type.");
      setStatus("error");
      return;
    }
    const company = String(data.get("company") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const timeline = String(data.get("timeline") || "").trim();
    let description = String(data.get("description") || "").trim();
    const extras: string[] = [];
    if (picked.length > 1) extras.push(`${id ? "Tipe lain" : "Also"}: ${picked.slice(1).join(", ")}`);
    if (company) extras.push(`${id ? "Bisnis" : "Company"}: ${company}`);
    if (budget) extras.push(`Budget: ${budget}`);
    if (timeline) extras.push(`${id ? "Target" : "Timeline"}: ${timeline}`);
    if (extras.length > 0) description += `\n\n[${extras.join(" | ")}]`;

    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: String(data.get("name") || ""), contact, projectType: picked[0], description }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        if (result.code === "unavailable")
          throw new Error(
            id
              ? "Pengiriman inquiry belum tersedia. Informasi Anda belum terkirim; silakan coba kembali nanti."
              : "Inquiry delivery is not available yet. Your information has not been sent; please try again later.",
          );
        if (response.status === 429)
          throw new Error(
            id
              ? "Terlalu banyak percobaan. Tunggu beberapa menit sebelum mencoba lagi."
              : "Too many attempts. Wait a few minutes before trying again.",
          );
        throw new Error(
          id
            ? "Inquiry belum dapat dikirim. Periksa isian Anda dan coba lagi."
            : "Your inquiry could not be sent. Check your details and try again.",
        );
      }
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(
        error instanceof Error && error.name !== "TimeoutError" && error.name !== "TypeError"
          ? error.message
          : id
            ? "Koneksi terputus atau pengiriman belum terkonfirmasi. Isian Anda tetap tersimpan di halaman ini."
            : "The connection was interrupted or delivery was not confirmed. Your entries are still on this page.",
      );
    }
  }

  return (
    <PageShell>
      <section className="border-b border-[#111111] px-5 pt-12 pb-14 md:px-12 md:pt-20 md:pb-20">
        <p className="eyebrow text-[#A93100]">{"// 04. Initiation protocol"}</p>
        <h1 className="mt-3 max-w-[16ch] font-[family-name:var(--font-geist-sans)] text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:text-7xl">
          {id ? "Ceritakan apa yang ingin Anda buat." : "Tell us what you want to build."}
        </h1>
        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[#5C4037] md:text-lg">
          {id
            ? "Tidak perlu punya spesifikasi teknis. Ceritakan saja bisnis Anda, masalahnya, atau sistem seperti apa yang ingin dibuat."
            : "No technical spec needed. Just tell us your business, the problem, or what kind of system you want."}
        </p>
        <div className="mt-6 flex flex-col gap-3 border border-[#111111] bg-[#FFFDF7] p-5 sm:flex-row sm:items-center md:max-w-3xl">
          <div>
            <p className="eyebrow text-[#A93100]">{id ? "// Fast path" : "// Fast path"}</p>
            <p className="mt-1 text-sm">
              {id ? "Lebih suka WhatsApp langsung? Hubungi technical lead kami:" : "Prefer WhatsApp? Reach our technical lead:"}
            </p>
            <p className="mt-1 font-[family-name:var(--font-geist-sans)] text-xl font-semibold">+62 812 3456 7890 ↗</p>
            <p className="text-xs text-[#5F5E5E]">{id ? "Senin — Sabtu, 09.00–18.00 WIB" : "Mon — Sat, 09.00–18.00 WIB"}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-12 md:py-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {status === "success" ? (
              <section role="status" className="border border-[#111111] bg-[#FFFDF7] p-8 md:p-10">
                <p className="eyebrow text-emerald-700">
                  ✓ {id ? "Data terkirim ke pipeline RisenDev" : "Data sent to the RisenDev pipeline"}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-2xl font-semibold tracking-tight md:text-3xl">
                  {id ? "Terima kasih telah menghubungi kami." : "Thanks for reaching out."}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#5F5E5E]">
                  {id
                    ? "Kami akan menganalisis kebutuhan Anda dan menghubungi dalam waktu 24 jam kerja."
                    : "We will analyze your needs and contact you within 24 working hours."}
                </p>
                <button type="button" className="btn-ghost mt-6" onClick={() => setStatus("idle")}>
                  {id ? "Kirim inquiry lain" : "Send another inquiry"}
                </button>
              </section>
            ) : (
              <form onSubmit={submit} aria-busy={status === "loading"} className="border border-[#111111] bg-[#FFFDF7]">
                <div className="flex items-center justify-between border-b border-[#111111] px-5 py-3">
                  <p className="eyebrow">[RisenDev Form_v2]</p>
                  <p className="eyebrow text-[#A93100]">{id ? "Respon < 24 jam" : "Reply < 24h"}</p>
                </div>
                <div className="grid gap-6 p-5 md:p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.06em] uppercase">
                      <span>
                        {id ? "Nama lengkap *" : "Full name *"} <span className="text-[#A93100]">[wajib]</span>
                      </span>
                      <input
                        name="name"
                        autoComplete="name"
                        required
                        maxLength={120}
                        className={fieldClass}
                        placeholder={id ? "Nama Anda" : "Your name"}
                      />
                    </label>
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.06em] uppercase">
                      <span>
                        {id ? "Email / WhatsApp *" : "Email / WhatsApp *"} <span className="text-[#A93100]">[wajib]</span>
                      </span>
                      <input
                        name="contact"
                        required
                        maxLength={254}
                        className={fieldClass}
                        placeholder="email@example.com / +628..."
                        aria-describedby="inquiry-error"
                      />
                    </label>
                  </div>
                  <label className="grid gap-2 text-xs font-semibold tracking-[0.06em] uppercase">
                    <span>
                      {id ? "Nama bisnis / perusahaan" : "Business / company name"} <span className="text-[#5F5E5E]">[opsional]</span>
                    </span>
                    <input
                      name="company"
                      autoComplete="organization"
                      maxLength={160}
                      className={fieldClass}
                      placeholder={id ? "PT / CV / Toko Anda" : "Your company"}
                    />
                  </label>
                  <fieldset className="grid gap-3">
                    <legend className="text-xs font-semibold tracking-[0.06em] uppercase">
                      {id ? "Tipe proyek * [pilih satu atau lebih]" : "Project type * [pick one or more]"}
                    </legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {projectTypes.map(([value, en, ind]) => (
                        <label
                          key={value}
                          className="flex cursor-pointer items-center gap-3 border border-[#111111] bg-[#F6F3EC] px-4 py-3 text-sm font-medium has-checked:bg-[#111111] has-checked:text-[#FFFDF7]"
                        >
                          <input type="checkbox" name="projectType" value={value} className="check-sharp" />
                          {id ? ind : en}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <label className="grid gap-2 text-xs font-semibold tracking-[0.06em] uppercase">
                    <span>
                      {id ? "Ceritakan kebutuhan Anda *" : "Describe your needs *"}{" "}
                      <span className="text-[#5F5E5E]">[detail operasional]</span>
                    </span>
                    <textarea
                      name="description"
                      required
                      minLength={10}
                      maxLength={6000}
                      rows={5}
                      className={`${fieldClass} min-h-[160px]`}
                      placeholder={
                        id
                          ? "Jelaskan alur kerja, pengguna, atau sistem yang ingin dibangun..."
                          : "Describe the workflows, users, or systems you want to build..."
                      }
                    />
                  </label>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <fieldset className="grid content-start gap-2">
                      <legend className="text-xs font-semibold tracking-[0.06em] uppercase">
                        {id ? "Estimasi budget" : "Budget estimate"} <span className="text-[#5F5E5E]">[opsional]</span>
                      </legend>
                      {budgets.map((b) => (
                        <label key={b} className="flex cursor-pointer items-center gap-3 text-sm">
                          <input type="radio" name="budget" value={b} className="check-sharp" /> {b}
                        </label>
                      ))}
                    </fieldset>
                    <fieldset className="grid content-start gap-2">
                      <legend className="text-xs font-semibold tracking-[0.06em] uppercase">
                        {id ? "Target waktu peluncuran" : "Target launch time"} <span className="text-[#5F5E5E]">[opsional]</span>
                      </legend>
                      {timelines.map((t) => (
                        <label key={t} className="flex cursor-pointer items-center gap-3 text-sm">
                          <input type="radio" name="timeline" value={t} className="check-sharp" /> {t}
                        </label>
                      ))}
                    </fieldset>
                  </div>
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Website
                      <input name="website" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>
                  <p className="text-xs leading-relaxed text-[#5F5E5E]">
                    {id
                      ? "Informasi yang dikirim hanya digunakan untuk membahas kebutuhan proyek Anda. "
                      : "Submitted information is only used to discuss your project needs. "}
                    <Link href="/privacy-policy" className="text-[#A93100] underline">
                      {id ? "Kebijakan Privasi" : "Privacy Policy"}
                    </Link>
                  </p>
                  <p id="inquiry-error" role="alert" className={error ? "text-sm font-medium text-[#B3261E]" : "sr-only"}>
                    {error}
                  </p>
                  <button disabled={status === "loading"} type="submit" className="btn-forge justify-center px-8! py-4! text-sm!">
                    {status === "loading" ? (
                      id ? (
                        "Mengirim…"
                      ) : (
                        "Sending…"
                      )
                    ) : (
                      <>
                        {id ? "Kirim proyek" : "Send project"} <span aria-hidden="true">↗</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          <aside className="grid gap-px border border-[#111111] bg-[#111111] lg:col-span-5">
            <div className="bg-[#111111] p-6 text-[#F3F0E9]">
              <p className="eyebrow text-[#FF4F00]">{id ? "// Post-submit protocol" : "// Post-submit protocol"}</p>
              <h2 className="mt-2 font-[family-name:var(--font-geist-sans)] text-xl font-medium tracking-tight">
                {id ? "Setelah dikirim, apa berikutnya?" : "What happens after you send?"}
              </h2>
            </div>
            {[
              [
                id ? "Kami baca kebutuhan Anda" : "We read your needs",
                id
                  ? "Mempelajari model bisnis, bottleneck, dan ekspektasi teknis sistem."
                  : "We study the business model, bottlenecks, and technical expectations.",
              ],
              [
                id ? "Kami hubungi untuk diskusi" : "We call for discovery",
                id
                  ? "Sesi eksplorasi via WhatsApp atau Google Meet untuk verifikasi alur lapangan."
                  : "A discovery session via WhatsApp or Google Meet to verify field workflows.",
              ],
              [
                id ? "Scope dan solusi ditentukan" : "Scope and solution set",
                id
                  ? "Menyaring fitur esensial yang berdampak nyata, membuang kompleksitas kosong."
                  : "We filter for high-impact essentials and cut empty complexity.",
              ],
              [
                id ? "Proposal & estimasi disiapkan" : "Proposal & estimate ready",
                id
                  ? "Rencana jelas dengan tahapan, timeline, dan biaya transparan."
                  : "A clear plan with milestones, timeline, and transparent cost.",
              ],
            ].map(([title, desc], i) => (
              <div key={title} className="flex gap-4 bg-[#F6F3EC] p-5">
                <span className="font-[family-name:var(--font-geist-sans)] text-xl font-semibold text-[#A93100]">0{i + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold tracking-[0.04em] uppercase">{title}</h3>
                  <p className="mt-1 text-sm text-[#5F5E5E]">{desc}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
