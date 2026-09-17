import type { ReactNode } from "react";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main
      className={`min-w-0 bg-[#fcf9f2] text-[15px] leading-relaxed text-[#1c1c18] [&_h1]:text-pretty [&_h2]:text-pretty [&_h3]:text-pretty [&_p]:text-pretty ${className}`}
    >
      {children}
    </main>
  );
}
