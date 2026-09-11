"use client";

import { PageShell } from "@/components/ui/page-shell";

import { FormEvent, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const fieldClass =
  "w-full rounded-xl border border-[#e3ddd5]/80 bg-[#ffffff] px-4 py-3.5 text-base text-[#1f1f1f] outline-none transition-all duration-200 placeholder:text-[#8c8c8c] focus:border-[#b5501a] focus:ring-4 focus:ring-[#b5501a]/15";
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
    <PageShell className="py-8 md:py-[clamp(32px,3.2vw,48px)] [&_form]:rounded-xl [&_form]:border-[#eee8e3] [&_form]:bg-white [&_form]:p-5 [&_form]:shadow-none md:[&_form]:p-6 lg:[&_form]:p-8 [&_form>button]:justify-self-start [&_form>button]:rounded-lg sm:[&_form>button]:w-auto [&_input]:text-base [&_select]:text-base [&_textarea]:text-base">
      <div className="mx-auto w-full max-w-[1800px] px-5 md:px-[clamp(20px,3vw,56px)]">
        <header className="mb-8 [&_h1]:max-w-none [&>p:last-child]:max-w-[90ch] [&>p:last-child]:text-base">
          <p className="mb-3 font-mono text-xs font-semibold tracking-wider text-[#b5501a] uppercase">
            {id ? "MEMULAI PROYEK" : "START A PROJECT"}
          </p>
          <h1 className="font-[family-name:var(--font-manrope)] text-4xl font-bold tracking-tight text-[#1f1f1f] sm:text-5xl">
            {id ? "Ceritakan proyek Anda." : "Tell us about your project."}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#595959] sm:text-lg">
            {id
              ? "Baik memulai dari ide maupun meningkatkan aplikasi yang sudah ada, ceritakan apa yang Anda butuhkan."
              : "Whether you are starting from an idea or improving an existing application, tell us what you need."}
          </p>
        </header>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr]">
          <div>
            {status === "success" ? (
              <section role="status" className="rounded-2xl border border-[#CED9C4] bg-[#F4F7F2] p-8 shadow-sm md:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#E2ECDA] text-lg font-bold text-[#3A5729]">
                  ✓
                </div>
                <h2 className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#1f1f1f] sm:text-3xl">
                  {id ? "Terima kasih telah menghubungi kami." : "Thanks for reaching out."}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#595959]">
                  {id
                    ? "Kami akan meninjau proyek Anda dan menghubungi Anda untuk membahas langkah berikutnya."
                    : "We will review your project and contact you to discuss the next step."}
                </p>
                <button
                  type="button"
                  className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#d0c3b7] bg-white px-5 px-6 py-3 text-sm font-semibold text-[#26201c] hover:bg-[#f1e8df]"
                  onClick={() => setStatus("idle")}
                >
                  {id ? "Kirim inquiry lain" : "Send another inquiry"}
                </button>
              </section>
            ) : (
              <form
                onSubmit={submit}
                className="grid gap-6 rounded-2xl border border-[#e3ddd5] bg-[#ffffff] p-7 shadow-sm sm:p-10"
                aria-busy={status === "loading"}
              >
                <div className="grid gap-6">
                  <label className="grid gap-2 text-sm font-semibold text-[#1f1f1f]">
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
                  <label className="grid gap-2 text-sm font-semibold text-[#1f1f1f]">
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
                <label className="grid gap-2 text-sm font-semibold text-[#1f1f1f]">
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
                <label className="grid gap-2 text-sm font-semibold text-[#1f1f1f]">
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
                  <span id="description-help" className="text-xs leading-relaxed font-normal text-[#8c8c8c]">
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
                <p className="text-xs leading-relaxed text-[#8c8c8c]">
                  {id
                    ? "Informasi ini digunakan untuk menanggapi inquiry proyek Anda. "
                    : "This information is used to respond to your project inquiry. "}
                  <Link href="/privacy-policy" className="text-[#b5501a] underline hover:text-[#8f3f14]">
                    {id ? "Kebijakan Privasi" : "Privacy Policy"}
                  </Link>
                </p>
                <p id="inquiry-error" role="alert" className={error ? "text-sm font-medium text-[#B3261E]" : "sr-only"}>
                  {error}
                </p>
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="group relative inline-flex min-h-[50px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg rounded-xl bg-[#c34810] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#a63409] disabled:cursor-wait disabled:opacity-80 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <span>{id ? "Mengirim…" : "Sending…"}</span>
                      <span className="absolute right-0 bottom-0 left-0 h-[2px] animate-pulse bg-[#f4efea]" />
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
          <aside className="mt-2 grid gap-6 md:mt-0 [&_h2]:text-2xl [&_h3]:text-base [&_li]:flex [&_li]:gap-4 [&_li>span]:grid [&_li>span]:size-[30px] [&_li>span]:shrink-0 [&_li>span]:place-items-center [&_li>span]:rounded-md [&_li>span]:bg-white [&_li>span]:text-[#953900] [&_ol]:mt-6 [&_ol]:grid [&_ol]:list-none [&_ol]:gap-7 [&_p]:mt-1.5 [&_p]:text-sm [&>section]:rounded-xl [&>section]:bg-[#f6f3f2] [&>section]:p-5 md:[&>section]:p-7">
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
            <section className="bg-white!">
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
    </PageShell>
  );
}
