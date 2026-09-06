import { getTranslations } from "next-intl/server";

import { Link } from "../../../i18n/navigation";
import { PageIntro } from "../../../components/page-intro";
import { products } from "../../../data/site";

export default async function Products({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ProductsPage",
  });

  const site = await getTranslations({
    locale: params.locale,
    namespace: "Site",
  });

  return (
    <main>
      <PageIntro eyebrow={t("intro.eyebrow")} title={t("intro.title")}>
        <p>{t("intro.description")}</p>
      </PageIntro>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-4 px-4 pb-[72px] sm:grid-cols-2 sm:gap-6 sm:px-6 sm:pb-28 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:pb-32">
        {products.map((item) => {
          const isComingSoon = item.status === "comingSoon";

          return (
            <article
              key={item.key}
              className="
                flex min-h-[280px] flex-col rounded-lg border
                border-border bg-surface p-6
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-accent
                hover:shadow-[0_8px_24px_rgba(181,80,26,0.06)]
              "
            >
              <div className="mb-7 flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded bg-ink font-heading text-sm font-bold text-white">
                  FS
                </div>

                <span
                  className={`
                    inline-flex rounded-full px-2.5 py-[5px]
                    text-[11px] font-semibold uppercase
                    tracking-[0.06em]

                    ${
                      item.status === "beta"
                        ? "bg-[#FBF3DD] text-warning"
                        : item.status === "live"
                          ? "bg-[#EAF4EA] text-success"
                          : "bg-[#F0F0F0] text-muted"
                    }
                  `}
                >
                  {site(`productStatus.${item.status}`)}
                </span>
              </div>

              <h2 className="mb-2 font-heading text-xl font-semibold text-ink">
                {item.name}
              </h2>

              <p className="mb-[18px] min-h-[45px] text-sm text-grey">
                {site(`products.${item.key}.tagline`)}
              </p>

              <span className="mb-6 inline-flex w-max rounded-full bg-alt px-2.5 py-[5px] text-[11px] font-semibold uppercase tracking-[0.05em] text-grey">
                {site(`products.${item.key}.category`)}
              </span>

              <Link
                href={isComingSoon ? "/contact" : "/contact"}
                className="
                  mt-auto text-xs font-semibold uppercase
                  tracking-[0.06em] text-accent
                  transition hover:underline
                "
              >
                {isComingSoon
                  ? site("productStatus.notify")
                  : site("productStatus.visit")}
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
