import type { ReactNode } from "react";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main
      className={`min-w-0 bg-[#FCF9F2] text-[15px] leading-relaxed text-[#111111] [&_h1]:text-pretty [&_h2]:text-pretty [&_h3]:text-pretty [&_p]:text-pretty ${className}`}
    >
      {children}
    </main>
  );
}
