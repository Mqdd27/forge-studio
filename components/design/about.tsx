import { PageShell } from "@/components/ui/page-shell";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { DesignText as T } from "@/components/ui/design-text";
import { ProjectCTA } from "@/components/design/project-cta";

const principles = [
  [
    "01",
    "Efficiency & cost saving",
    "Practical solutions, not useless features",
    "We never force complicated tech that's expensive to maintain. We build what your business truly needs so it's easy to run and cheap to keep.",
  ],
  [
    "02",
    "Full control",
    "Full ownership without lock-in",
    "The entire system, code, and servers are 100% yours from day one. No hidden license fees, no subscription traps.",
  ],
  [
    "03",
    "User friendly",
    "Matched to what staff & customers really need",
    "Systems designed to be friendly and easy for your daily staff — in store, warehouse, or office — so work gets faster with fewer mistakes.",
  ],
  [
    "04",
    "Fast response",
    "Easy communication & quick replies",
    "You talk directly with the team building the system. Questions and blockers get answered in minutes, with no ticket-queue bureaucracy.",
  ],
] as const;

const roles = [
  [
    "Role 01",
    "System & Security Architect",
    "Keeps the system stable, safe from data leaks, and standing strong when transactions surge.",
    [
      "Database protected with automatic backups",
      "Fast systems that survive visitor spikes",
      "Secure access with current protection standards",
    ],
  ],
  [
    "Role 02",
    "Business Logic & Flow Developer",
    "Turns your manual business flows into automatic systems that are accurate and fast.",
    ["Manual steps become one-click flows", "Validation that prevents human error", "Reports ready without retyping"],
  ],
  [
    "Role 03",
    "Interface & Experience Designer",
    "Makes complex systems feel simple for staff and customers on any device.",
    ["Staff learn it in about 15 minutes", "Clear screens, no confusing menus", "Works well on phones and desktops"],
  ],
] as const;

export function AboutDesign() {
  return (
    <PageShell>
      {/* MANIFESTO */}
      <section className="border-b border-[#111111] px-5 pt-12 pb-14 md:px-12 md:pt-20 md:pb-20">
        <div className="inline-flex items-center gap-2 bg-[#F1EEE7] px-3 py-1.5">
          <span className="h-2 w-2 bg-[#A93100]" aria-hidden="true" />
          <span className="eyebrow">
            <T>{"Technology & business-system development partner"}</T>
          </span>
        </div>
        <h1 className="mt-6 max-w-[20ch] font-[family-name:var(--font-geist-sans)] text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:text-7xl">
          <T>{"We build software the honest, simple, and durable way."}</T>
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="bg-[#F1EEE7] p-5 md:col-span-4">
            <p className="eyebrow text-[#A93100]">
              <T>{"[ Our approach ]"}</T>
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.06em] uppercase">
              <T>{"Business-focused technology partner"}</T>
            </p>
            <p className="mt-1 text-sm text-[#5F5E5E]">
              <T>{"Ready to support your daily operations without friction."}</T>
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-base leading-relaxed md:text-lg">
              <T>
                {
                  "RisenDev helps business owners build practical, tidy digital systems that directly resolve your operational friction. No convoluted bureaucracy, no wasted budget on useless features — we collaborate directly to ship solutions that really work."
                }
              </T>
            </p>
            <div className="mt-5 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] sm:grid-cols-2">
              <div className="bg-[#F6F3EC] p-4">
                <p className="text-xs font-semibold tracking-[0.06em] text-[#A93100] uppercase">
                  <T>{"Direct communication"}</T>
                </p>
                <p className="mt-1 text-sm">
                  <T>{"Consult directly with the people building the system."}</T>
                </p>
              </div>
              <div className="bg-[#F6F3EC] p-4">
                <p className="text-xs font-semibold tracking-[0.06em] text-[#A93100] uppercase">
                  <T>{"100% ownership"}</T>
                </p>
                <p className="mt-1 text-sm">
                  <T>{"All systems, data, and code belong to your business."}</T>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION METHOD */}
      <section className="border-b border-[#111111] bg-[#F6F3EC] px-5 py-14 md:px-12 md:py-20">
        <p className="eyebrow text-[#A93100]">
          <T>{"[ Collaboration method ]"}</T>
        </p>
        <div className="mt-3 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:col-span-7 md:text-4xl">
            <T>{"How we work: direct, fast & clear"}</T>
          </h2>
          <p className="text-[15px] leading-relaxed text-[#5F5E5E] md:col-span-5">
            <T>{"Compare the convoluted conventional agency flow with working directly alongside the RisenDev core team."}</T>
          </p>
        </div>
        <div className="mt-8 border border-[#111111] bg-[#FFFDF7] p-5 opacity-70 md:p-6">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <p className="eyebrow text-[#5F5E5E]">
              <T>{"[ Old model / generic agency ]"}</T>
            </p>
            <p className="eyebrow text-[#B3261E]">
              <T>{"Bloated costs & frequent miscommunication"}</T>
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-5">
            {[
              "You need a business solution",
              "Sales & account managers",
              "Middleman project managers",
              "Third-party vendors",
              "Bugs & delays",
            ].map((s, i) => (
              <div key={s} className="bg-[#F6F3EC] p-3">
                <p className="eyebrow text-[#5F5E5E]">
                  <T>{"Layer"}</T> {i}
                </p>
                <p className="mt-1 text-xs font-semibold">
                  <T>{s}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 border border-[#111111] bg-[#111111] p-5 text-[#F3F0E9] md:p-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-[#FF4F00]" aria-hidden="true" />
            <p className="eyebrow">
              <T>{"[ RisenDev direct model // result-focused ]"}</T>
            </p>
          </div>
          <ol className="mt-4 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-4">
            {["Understand the real problem", "Design the precise system", "Build & verify together", "Deploy, train & support"].map(
              (s, i) => (
                <li key={s} className="border border-[#F3F0E9]/25 p-3">
                  <p className="eyebrow text-[#FF4F00]">0{i + 1}</p>
                  <p className="mt-1 text-xs font-semibold">
                    <T>{s}</T>
                  </p>
                </li>
              ),
            )}
          </ol>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Nationwide reach", "All of Indonesia", "Responsive online coordination, tidy and reachable anytime."],
            ["Guarded quality", "Focus on 2–3 clients", "We limit projects so every business gets maximum attention."],
            ["Easy communication", "Direct solution talks", "Speak straight with the system designer, no middleman distortion."],
            ["100% ownership", "Full control in your hands", "All systems, databases, and account access handed over fully."],
          ].map(([k, v, d]) => (
            <div key={k} className="bg-[#FFFDF7] p-5">
              <p className="eyebrow text-[#5F5E5E]">
                [<T>{k}</T>]
              </p>
              <p className="mt-2 font-[family-name:var(--font-geist-sans)] text-lg font-medium tracking-tight">
                <T>{v}</T>
              </p>
              <p className="mt-1 text-sm text-[#5F5E5E]">
                <T>{d}</T>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DARK PRINCIPLES */}
      <section className="border-b border-[#111111] bg-[#111111] px-5 py-14 text-[#F3F0E9] md:px-12 md:py-20">
        <p className="eyebrow text-[#FF4F00]">
          <T>{"Our commitment to your business"}</T>
        </p>
        <h2 className="mt-3 max-w-[18ch] font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:text-5xl">
          <T>{"Working principles that guarantee your peace of mind."}</T>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px border border-[#F3F0E9]/25 bg-[#F3F0E9]/25 md:grid-cols-2">
          {principles.map(([n, tag, title, desc]) => (
            <div key={n} className="flex flex-col bg-[#111111] p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[#FF4F00]">[ {n} ]</span>
                <span className="eyebrow text-[#B9B5AE]">
                  <T>{tag}</T>
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-geist-sans)] text-xl font-medium tracking-tight uppercase md:text-2xl">
                <T>{title}</T>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#B9B5AE]">
                <T>{desc}</T>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-[#111111] px-5 py-14 md:px-12 md:py-20">
        <p className="eyebrow text-[#A93100]">
          <T>{"[ Dedicated core team ]"}</T>
        </p>
        <div className="mt-3 grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:col-span-8 md:text-4xl">
            <T>{"The core team guarding your system's success"}</T>
          </h2>
          <p className="text-[15px] text-[#5F5E5E] md:col-span-4">
            <T>{"Guided by a team blending technical reliability, business efficiency, and user ease."}</T>
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] lg:grid-cols-3">
          {roles.map(([role, title, desc, points]) => (
            <div key={role} className="flex flex-col bg-[#F1EEE7] p-6 md:p-8">
              <p className="eyebrow text-[#A93100]">
                <T>{role}</T>
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-geist-sans)] text-xl font-medium tracking-tight">
                <T>{title}</T>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5E5E]">
                <T>{desc}</T>
              </p>
              <ul className="mt-4 list-none space-y-2 p-0">
                {(points as readonly string[]).map((pt) => (
                  <li key={pt} className="bg-[#FFFDF7] p-2.5 text-sm">
                    <T>{pt}</T>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* HANDOVER & GUARANTEE */}
      <section className="border-b border-[#111111] bg-[#F6F3EC] px-5 py-14 md:px-12 md:py-20">
        <p className="eyebrow text-[#A93100]">
          <T>{"[ Post-release support ]"}</T>
        </p>
        <h2 className="mt-3 max-w-[20ch] font-[family-name:var(--font-geist-sans)] text-3xl font-medium tracking-tight uppercase md:text-4xl">
          <T>{"Peace-of-mind guarantee & full post-release support"}</T>
        </h2>
        <div className="mt-8 space-y-px border border-[#111111] bg-[#111111]">
          {[
            [
              "01",
              "Full 30-day hypercare",
              "Intensive technical support after launch. We stand by your team for the first 30 days so adoption runs smooth and the system stays stable.",
              "Status: active standby",
            ],
            [
              "02",
              "Video guides & practical SOPs",
              "Not thick confusing manuals. Short tutorial videos and concise steps so new staff learn the system in 15 minutes.",
              "Format: video & concise guides",
            ],
            [
              "03",
              "Clean handover & full rights",
              "All source code, databases, server access, and credentials are handed over documented — 100% yours, ready for any party to continue.",
              "Rights: 100% yours",
            ],
          ].map(([n, title, desc, badge]) => (
            <div key={n} className="grid grid-cols-1 gap-4 bg-[#FFFDF7] p-5 md:grid-cols-12 md:items-center md:p-6">
              <div className="flex items-start gap-4 md:col-span-9">
                <span className="font-[family-name:var(--font-geist-sans)] text-2xl font-semibold text-[#A93100]">{n}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-geist-sans)] text-lg font-medium tracking-tight uppercase">
                    <T>{title}</T>
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#5F5E5E]">
                    <T>{desc}</T>
                  </p>
                </div>
              </div>
              <p className="bg-[#F1EEE7] px-4 py-2 text-[11px] font-semibold tracking-[0.06em] uppercase md:col-span-3 md:text-center">
                <T>{badge}</T>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 border border-[#111111] bg-[#FFFDF7] p-6 md:flex-row md:items-center">
          <Image src="/img/logo.png" alt="RisenDev logo" width={56} height={56} className="object-contain mix-blend-multiply" />
          <div>
            <Image
              src="/img/font.png"
              alt="RisenDev — Build, Develop, Grow"
              width={220}
              height={73}
              className="h-auto w-44 object-contain mix-blend-multiply"
            />
            <p className="mt-2 text-sm text-[#5F5E5E]">
              <T>{"Practical thinking. Careful engineering. Clear communication."}</T>
            </p>
          </div>
          <Link href="/start-a-project" className="btn-forge md:ml-auto">
            <T>{"Start a Project"}</T> <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ProjectCTA />
    </PageShell>
  );
}
