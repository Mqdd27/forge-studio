import { getTranslations } from "next-intl/server";
import { cases } from "@/data/site";
import { workPresentation, workCardData } from "@/data/work-presentation";
import { WorkCard } from "@/components/work-card";
import { FilterGrid } from "@/components/ui/filter-grid";

export async function WorkList() {
  const t = await getTranslations("WorkPage.filters");
  const categories = ["webApplication", "businessSystem", "existingSystem"] as const;
  const items = cases.map((item, i) => ({
    id: item.key,
    category: t(workPresentation[item.key].category),
    content: <WorkCard item={workCardData(item)} index={i} />,
  }));
  return (
    <section className="mx-auto w-full px-5 pb-16 md:px-12">
      <FilterGrid
        categories={categories.map((key) => t(key))}
        items={items}
        className="mt-8 grid grid-cols-1 gap-px border border-[#111111] bg-[#111111] min-[540px]:grid-cols-2 lg:grid-cols-3"
      />
    </section>
  );
}
