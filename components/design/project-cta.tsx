import { Link } from "@/i18n/navigation";

export function ProjectCTA({ locale }: { locale?: string }) {
  const id = locale !== "en";
  return (
    <section className="w-full border-t border-[#1c1c18] bg-[#FF4F00] px-5 py-14 text-[#1c1c18] md:px-12 md:py-20">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-3 opacity-90">[Inisiasi Rekayasa Sistem // Kuota Q2 2026]</p>
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight uppercase md:text-5xl">
            {id ? "Punya tantangan sistem atau alur kerja yang ingin dibereskan?" : "Have a system or workflow challenge to fix?"}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-90 md:text-lg">
            {id
              ? "Ceritakan kendala operasional bisnis Anda. Kami beri solusi yang jelas, realistis, dan hemat anggaran — tanpa komplikasi teknis yang membingungkan."
              : "Tell us about your operational bottleneck. We reply with a clear, realistic, budget-conscious solution — no confusing technical jargon."}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
          <Link href="/start-a-project" className="btn-ink px-8! py-4! text-sm!">
            {id ? "Mulai Diskusi Proyek" : "Start a Project"} <span aria-hidden="true">↗</span>
          </Link>
          <span className="eyebrow opacity-80">{id ? "Respon maksimal 1x24 jam kerja" : "Replies within 24 working hours"}</span>
        </div>
      </div>
    </section>
  );
}
