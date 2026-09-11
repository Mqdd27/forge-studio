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
        className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-lg border border-b border-[#e3ddd5]/70 border-[#eee8e3] bg-white px-5 py-3 pb-3"
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
              className={`relative min-h-10 pb-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                isActive ? "font-bold text-[#b5501a]" : "text-[#595959] hover:text-[#1f1f1f]"
              }`}
            >
              <DesignText>{category}</DesignText>
              {isActive && <span aria-hidden="true" className="absolute right-0 bottom-0 left-0 h-[2px] rounded-full bg-[#b5501a]" />}
            </button>
          );
        })}
      </div>
      <div className={className} aria-live="polite">
        {active !== "All" && !items.some((item) => item.category === active) && (
          <div className="empty-projects col-span-full rounded-xl border border-dashed border-[#e3ddd5] bg-[#f7f4f0]/50 p-12 text-center text-sm text-[#595959]">
            <p>{locale === "id" ? "Belum ada proyek dalam kategori ini." : "No projects in this category yet."}</p>
          </div>
        )}
        {items.map((item) =>
          active === "All" || active === item.category ? (
            <div className="h-full min-w-0" key={item.id}>
              {item.content}
            </div>
          ) : null,
        )}
      </div>
    </>
  );
}
