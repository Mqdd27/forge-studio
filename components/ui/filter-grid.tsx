"use client";
import { useLocale } from "next-intl";
import { type ReactNode, useState } from "react";
import { DesignText } from "@/components/ui/design-text";
export function FilterGrid({
  categories,
  items,
  className,
}: {
  categories: string[];
  items: { id: string; category: string; content: ReactNode }[];
  className: string;
}) {
  const locale = useLocale();
  const [active, setActive] = useState("All");
  return (
    <>
      <div
        className="project-filters mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border/70 pb-3"
        aria-label={locale === "id" ? "Kategori proyek" : "Project categories"}
      >
        {["All", ...categories].map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={`relative min-h-10 pb-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                isActive ? "text-accent font-bold" : "text-grey hover:text-ink"
              }`}
            >
              <DesignText>{category}</DesignText>
              {isActive && <span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-accent" />}
            </button>
          );
        })}
      </div>
      <div className={`project-grid ${className}`} aria-live="polite">
        {active !== "All" && !items.some((item) => item.category === active) && (
          <div className="empty-projects col-span-full rounded-xl border border-dashed border-border bg-alt/50 p-12 text-center text-sm text-grey">
            <p>{locale === "id" ? "Belum ada proyek dalam kategori ini." : "No projects in this category yet."}</p>
          </div>
        )}
        {items.map((item) =>
          active === "All" || active === item.category ? (
            <div className="min-w-0 h-full" key={item.id}>
              {item.content}
            </div>
          ) : null,
        )}
      </div>
    </>
  );
}
