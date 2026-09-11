import type { ReactNode } from "react";

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main
      className={`min-w-0 bg-[#fcf9f8] text-sm leading-relaxed text-[#1b1b1c] [&_h1]:max-w-[26ch] [&_h1]:text-[clamp(34px,3.7vw,60px)] [&_h1]:leading-[1.18] [&_h1]:font-semibold [&_h1]:tracking-tight [&_h2]:text-[clamp(28px,3vw,36px)] [&_h2]:leading-tight [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:leading-snug [&_h3]:font-semibold [&_p]:leading-relaxed ${className}`}
    >
      {children}
    </main>
  );
}
