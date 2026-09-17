import Image from "next/image";
export default function Loading() {
  return (
    <main className="mx-auto max-w-[1800px] px-5 py-12 md:px-[3vw]" role="status" aria-label="Loading page" aria-busy="true">
      <div className="mb-8 flex items-center gap-3" aria-hidden="true">
        <Image src="/img/logo.png" alt="" width={32} height={32} className="mix-blend-multiply" />
        <span />
      </div>
      <div className="mb-6 h-3 w-28 rounded bg-[#eee7df] motion-safe:animate-pulse" />
      <div className="mb-3 h-10 w-3/4 rounded bg-[#eee7df] motion-safe:animate-pulse" />
      <div className="mb-3 h-10 w-1/2 rounded bg-[#eee7df] motion-safe:animate-pulse" />
      <div className="mt-6 mb-10 h-3 w-2/3 rounded bg-[#eee7df] motion-safe:animate-pulse" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="space-y-4 rounded-xl border border-[#e3ddd5] bg-white p-6">
            <div className="h-3 rounded bg-[#eee7df] motion-safe:animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-[#eee7df] motion-safe:animate-pulse" />
          </div>
        ))}
      </div>
    </main>
  );
}
