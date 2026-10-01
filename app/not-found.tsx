import Link from "next/link";
import Image from "next/image";

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F2EFE8] p-6 text-[#1c1c18] antialiased">
      <main className="flex max-w-lg flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center border border-[#1c1c18] bg-white">
          <Image src="/img/logo.png" alt="RisenDev" width={40} height={40} className="object-contain mix-blend-multiply" />
        </div>
        <p className="mb-3 font-sans text-[0.6875rem] leading-[0.875rem] font-medium tracking-[0.08em] text-[#a93100] uppercase">
          404 / Not found
        </p>
        <h1 className="font-sans text-3xl font-semibold tracking-tight uppercase sm:text-5xl">This page isn&apos;t in the system.</h1>
        <p className="mt-4 text-base leading-relaxed text-[#5c4037]">
          The page you are looking for might have moved, or doesn&apos;t exist.
        </p>
        <Link
          href="/en"
          className="mt-8 inline-flex items-center justify-center gap-[0.6rem] border-0 bg-primary px-6 py-4 text-xs leading-4 font-semibold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:-translate-y-px hover:bg-inverse-surface hover:text-inverse-on-surface"
        >
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </Link>
      </main>
    </div>
  );
}
