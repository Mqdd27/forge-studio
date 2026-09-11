import Link from "next/link";
import Image from "next/image";

export default function RootNotFound() {
  return (
    <div className="forge-state-shell">
      <div className="flex min-h-screen items-center justify-center bg-[#FDFCFB] p-6 text-[#1F1F1F] antialiased">
        <main className="flex max-w-lg flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E3DDD5] bg-[#F7F4F0] shadow-sm">
            <Image src="/img/forge-icon.png" alt="Forge Studio" width={40} height={40} className="rounded-lg object-contain" />
          </div>

          <p className="mb-3 font-mono text-xs font-semibold tracking-wider text-[#B5501A] uppercase">404 / NOT FOUND</p>

          <h1 className="text-3xl font-bold tracking-tight text-[#1F1F1F] sm:text-5xl">Looks like this page wasn&apos;t forged yet.</h1>

          <p className="mt-4 text-base leading-relaxed text-[#595959] sm:text-lg">
            The page you are looking for might have moved, or doesn&apos;t exist.
          </p>

          <Link
            href="/en"
            className="group mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#B5501A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#8F3F14]"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
              ←
            </span>
            <span>Back to Home</span>
          </Link>
        </main>
      </div>
    </div>
  );
}
