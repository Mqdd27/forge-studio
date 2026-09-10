"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../i18n/navigation";
import type { products } from "../data/site";

export function ProductCard({ item }: { item: (typeof products)[number] }) {
  const tProducts = useTranslations("Site.products");

  const tStatus = useTranslations("Site.productStatus");

  const isComingSoon = item.status === "comingSoon";

  const statusClass =
    item.status === "live" ? "bg-green-50 text-success" : item.status === "beta" ? "bg-[#FBF3DD] text-warning" : "bg-[#F0F0F0] text-muted";

  return (
    <article className="flex h-full min-h-[250px] min-w-0 flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-200 sm:min-h-[270px] sm:p-6 lg:min-h-[290px] lg:hover:-translate-y-0.5 lg:hover:border-accent lg:hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]">
      {/* HEADER */}

      <div className="mb-6 flex items-start justify-between gap-4">
        {/* <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-ink font-heading text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">
          FS
        </div> */}
        <Image src={"/img/forge-icon.png"} alt="Forge Studio" width={60} height={60} priority className=" object-fill" />

        <span
          className={`inline-flex max-w-[150px] rounded-full px-2.5 py-[5px] text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.05em] sm:text-[10px] ${statusClass}`}
        >
          {tStatus(item.status)}
        </span>
      </div>

      {/* CONTENT */}

      <h3 className="mb-2 break-words font-heading text-lg font-semibold leading-snug text-ink sm:text-xl">{item.name}</h3>

      <p className="mb-[18px] text-sm leading-[1.7] text-grey">{tProducts(`${item.key}.tagline`)}</p>

      <span className="mb-6 inline-flex w-fit max-w-full rounded-full bg-alt px-2.5 py-[5px] text-[10px] font-semibold uppercase leading-tight tracking-[0.05em] text-grey">
        {tProducts(`${item.key}.category`)}
      </span>

      {/* ACTION */}

      <Link
        href="/contact"
        className="mt-auto inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-accent transition-all hover:underline sm:text-xs"
      >
        {isComingSoon ? tStatus("notify") : <span>{tProducts("learnMore")}</span>}
      </Link>
    </article>
  );
}
