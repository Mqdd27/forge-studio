import Image from "next/image";
export default function Loading() {
  return (
    <main className="page-loading" role="status" aria-label="Loading page" aria-busy="true">
      <div className="brand-loading-mark" aria-hidden="true">
        <Image src="/img/forge-icon.png" alt="" width={32} height={32} />
        <span />
      </div>
      <div className="loading-line loading-label" />
      <div className="loading-line loading-title" />
      <div className="loading-line loading-title short" />
      <div className="loading-line loading-copy" />
      <div className="loading-cards">
        {[0, 1, 2].map((item) => (
          <div key={item} className="loading-card">
            <div className="loading-line" />
            <div className="loading-line short" />
          </div>
        ))}
      </div>
    </main>
  );
}
