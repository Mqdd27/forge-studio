import Link from "next/link";
import Image from "next/image";

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F2EFE8] p-6 text-[#111111] antialiased">
      <main className="flex max-w-lg flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center border border-[#111111] bg-[#FFFDF7]">
          <Image src="/img/logo.png" alt="RisenDev" width={40} height={40} className="object-contain mix-blend-multiply" />
        </div>
        <p className="eyebrow mb-3 text-[#A93100]">404 / Not found</p>
        <h1 className="font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight uppercase sm:text-5xl">
          This page isn&apos;t in the system.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#5F5E5E]">
          The page you are looking for might have moved, or doesn&apos;t exist.
        </p>
        <Link href="/en" className="btn-forge mt-8">
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </Link>
      </main>
    </div>
  );
}
