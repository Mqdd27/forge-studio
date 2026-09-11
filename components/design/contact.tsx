"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const fieldClass =
  "w-full rounded-xl border border-border/80 bg-surface px-4 py-3.5 text-base text-ink outline-none transition-all duration-200 placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15";
const projectTypes = [
  ["customWeb", "Custom Web Application", "Aplikasi Web Custom"],
  ["businessSystems", "Business System", "Sistem Bisnis"],
  ["existingSystems", "Existing System Development", "Pengembangan Sistem yang Ada"],
  ["maintenance", "Maintenance / Deployment", "Pemeliharaan / Deployment"],
  ["unsure", "Not Sure Yet", "Belum Yakin"],
] as const;

export function ContactDesign() {
  const id = useLocale() === "id";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const data = new FormData(event.currentTarget);
    const contact = String(data.get("contact") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && !/^\+?[\d\s().-]{8,25}$/.test(contact)) {
      setError(id ? "Masukkan alamat email atau nomor WhatsApp yang valid." : "Enter a valid email address or WhatsApp number.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
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
    <main className="stitch-page stitch-contact st-section">
      <div className="st-container">
        <header className="st-contact-heading">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            {id ? "MEMULAI PROYEK" : "START A PROJECT"}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-ink">
            {id ? "Ceritakan proyek Anda." : "Tell us about your project."}
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-grey">
            {id
              ? "Baik memulai dari ide maupun meningkatkan aplikasi yang sudah ada, ceritakan apa yang Anda butuhkan."
              : "Whether you are starting from an idea or improving an existing application, tell us what you need."}
          </p>
        </header>
        <div className="st-contact-layout">
          <div>
            {status === "success" ? (
              <section role="status" className="rounded-2xl border border-[#CED9C4] bg-[#F4F7F2] p-8 md:p-10 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E2ECDA] text-[#3A5729] mb-6 font-bold text-lg">
                  ✓
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                  {id ? "Terima kasih telah menghubungi kami." : "Thanks for reaching out."}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-grey max-w-xl">
                  {id
                    ? "Kami akan meninjau proyek Anda dan menghubungi Anda untuk membahas langkah berikutnya."
                    : "We will review your project and contact you to discuss the next step."}
                </p>
                <button
                  type="button"
                  className="about-button btn-secondary mt-8 px-6 py-3 text-sm font-semibold"
                  onClick={() => setStatus("idle")}
                >
                  {id ? "Kirim inquiry lain" : "Send another inquiry"}
                </button>
              </section>
            ) : (
              <form
                onSubmit={submit}
                className="grid gap-6 rounded-2xl border border-border bg-surface p-7 sm:p-10 shadow-sm"
                aria-busy={status === "loading"}
              >
                <div className="grid gap-6">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    <span>{id ? "Nama" : "Name"}</span>
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      className={fieldClass}
                      placeholder={id ? "Nama Anda" : "Your name"}
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    <span>{id ? "Email atau WhatsApp" : "Email or WhatsApp"}</span>
                    <input
                      name="contact"
                      required
                      maxLength={254}
                      className={fieldClass}
                      placeholder={id ? "email@example.com / +628..." : "email@domain.com / +1..."}
                      aria-describedby="inquiry-error"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  <span>{id ? "Jenis Proyek" : "Project Type"}</span>
                  <select name="projectType" required defaultValue="" className={fieldClass}>
                    <option disabled value="">
                      {id ? "Pilih jenis proyek" : "Select a project type"}
                    </option>
                    {projectTypes.map(([value, en, ind]) => (
                      <option key={value} value={value}>
                        {id ? ind : en}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  <span>{id ? "Deskripsi Proyek" : "Project Description"}</span>
                  <textarea
                    name="description"
                    required
                    minLength={10}
                    maxLength={6000}
                    rows={5}
                    className={`${fieldClass} min-h-[160px]`}
                    placeholder={
                      id
                        ? "Jelaskan kebutuhan alur kerja, pengguna, atau sistem yang ingin dibangun..."
                        : "Describe the workflows, users, or systems you want to build or improve..."
                    }
                    aria-describedby="description-help"
                  />
                  <span id="description-help" className="font-normal text-xs leading-relaxed text-muted">
                    {id
                      ? "Ceritakan apa yang ingin Anda bangun, tingkatkan, atau selesaikan. Detail teknis tidak diperlukan."
                      : "Tell us what you are trying to build, improve, or solve. Technical details are not required."}
                  </span>
                </label>
                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <p className="text-xs leading-relaxed text-muted">
                  {id
                    ? "Informasi ini digunakan untuk menanggapi inquiry proyek Anda. "
                    : "This information is used to respond to your project inquiry. "}
                  <Link href="/privacy-policy" className="underline text-accent hover:text-accent-dark">
                    {id ? "Kebijakan Privasi" : "Privacy Policy"}
                  </Link>
                </p>
                <p id="inquiry-error" role="alert" className={error ? "text-sm font-medium text-[#B3261E]" : "sr-only"}>
                  {error}
                </p>
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="btn-primary group relative overflow-hidden inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 w-full sm:w-auto disabled:cursor-wait disabled:opacity-80"
                >
                  {status === "loading" ? (
                    <>
                      <span>{id ? "Mengirim…" : "Sending…"}</span>
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-light animate-pulse" />
                    </>
                  ) : (
                    <>
                      <span>{id ? "Kirim Inquiry Proyek" : "Send Project Inquiry"}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                        →
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          <aside className="st-contact-aside">
            <section>
              <h2>{id ? "Apa langkah berikutnya?" : "What happens next?"}</h2>
              <ol>
                {[
                  [
                    id ? "Meninjau kebutuhan" : "Review your requirements",
                    id
                      ? "Kami mempelajari kebutuhan, alur kerja, dan tujuan proyek Anda."
                      : "We review your requirements, workflows and project goals.",
                  ],
                  [
                    id ? "Diskusi lebih lanjut" : "Clarifying discussion",
                    id
                      ? "Kami membahas pertanyaan dan detail yang diperlukan untuk menentukan solusi."
                      : "We discuss the details needed to define the right solution.",
                  ],
                  [
                    id ? "Proposal yang jelas" : "Practical proposal",
                    id
                      ? "Anda mendapat rencana dengan lingkup pekerjaan dan tahapan yang jelas."
                      : "You receive a plan with a clear scope and milestones.",
                  ],
                ].map(([title, desc], i) => (
                  <li key={title}>
                    <span>{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <section className="st-contact-help">
              <h3>{id ? "Belum punya detail teknis?" : "No technical brief yet?"}</h3>
              <p>
                {id
                  ? "Cukup ceritakan masalah yang ingin diselesaikan. Kami membantu merumuskan langkah berikutnya."
                  : "Start with the problem you want to solve. We will help define the next step."}
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
