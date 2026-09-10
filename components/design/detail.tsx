import { Link } from "../../i18n/navigation";
import { DesignText } from "./primitives";

export function DesignDetail({
  item,
  kind,
  locale,
}: {
  item: { title: string; description: string; category: string };
  kind: "work" | "insights";
  locale: string;
}) {
  return (
    <main className="mx-auto min-h-[65vh] max-w-[1200px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Link href={`/${kind}`} className="text-xs font-semibold text-accent">
        ← {locale === "id" ? "Kembali" : "Back"}
      </Link>
      <div className="mt-12 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          <DesignText>{item.category}</DesignText>
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          <DesignText>{item.title}</DesignText>
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-grey">
          <DesignText>{item.description}</DesignText>
        </p>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-grey">
            {locale === "id"
              ? "Detail lengkap akan tersedia setelah dipublikasikan."
              : "The full write-up will be available once published."}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            {locale === "id" ? "Diskusikan proyek serupa" : "Discuss a similar project"}
          </Link>
        </div>
      </div>
    </main>
  );
}
