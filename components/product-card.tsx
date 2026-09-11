"use client";

import { useTranslations } from "next-intl";
import type { products } from "../data/site";

export function ProductCard({ item }: { item: (typeof products)[number] }) {
  const tProducts = useTranslations("Site.products");
  const tStatus = useTranslations("Site.productStatus");

  // Pengecekan status disesuaikan dengan nilai di data/site.ts ("beta", "comingSoon", "live")
  const statusClass =
    item.status === "beta"
      ? "bg-[#FBF3DD] text-warning"
      : item.status === "live"
        ? "bg-[#EAF4EA] text-success"
        : "bg-[#F0F0F0] text-muted";

  return (
    <article className="flex min-h-[280px] flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]">
      <div className="mb-7 flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded bg-ink font-heading text-sm font-bold text-white">
          FS
        </div>

        <span
          className={`inline-flex rounded-full px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.06em] ${statusClass}`}
        >
          {tStatus(item.status)}
        </span>
      </div>

      <h3 className="mb-2 font-heading text-xl font-semibold text-ink">
        {item.name}
      </h3>

      <p className="mb-[18px] min-h-[45px] text-sm text-grey">
        {tProducts(`${item.key}.tagline`)}
      </p>

      <span className="mb-6 w-max inline-flex rounded-full bg-alt px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-grey">
        {tProducts(`${item.key}.category`)}
      </span>

      <a
        href="#"
        className="mt-auto text-xs font-semibold uppercase tracking-[0.06em] text-accent transition hover:underline"
      >
        {item.status === "comingSoon" ? tStatus("notify") : tStatus("visit")}
      </a>
    </article>
  );
}
