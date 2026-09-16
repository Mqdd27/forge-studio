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
      <div className="filter-tabs" aria-label={locale === "id" ? "Kategori proyek" : "Project categories"}>
        {["All", ...categories].map((category) => {
          const isActive = active === category;
          return (
            <button key={category} type="button" aria-pressed={isActive} onClick={() => setActive(category)} className="filter-tab">
              <DesignText>{category}</DesignText>
            </button>
          );
        })}
      </div>
      <div className={className} aria-live="polite">
        {active !== "All" && !items.some((item) => item.category === active) && (
          <div className="col-span-full border border-dashed border-[#111111]/40 bg-[#F6F3EC]/50 p-12 text-center text-sm text-[#5F5E5E]">
            <p>{locale === "id" ? "Belum ada proyek dalam kategori ini." : "No projects in this category yet."}</p>
          </div>
        )}
        {items.map((item, i) =>
          active === "All" || active === item.category ? (
            <div className="h-full min-w-0" key={item.id}>
              {item.content}
              <span className="sr-only">{i}</span>
            </div>
          ) : null,
        )}
      </div>
    </>
  );
}
