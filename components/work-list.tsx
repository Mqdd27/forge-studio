import { getTranslations } from "next-intl/server";
import { cases } from "@/data/site";
import { workPresentation, workCardData } from "@/data/work-presentation";
import { WorkCard } from "@/components/work-card";
import { FilterGrid } from "@/components/ui/filter-grid";

export async function WorkList() {
  const t = await getTranslations("WorkPage.filters");
  const categories = ["webApplication", "businessSystem", "existingSystem"] as const;
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 lg:px-8">
      <FilterGrid
        categories={categories.map((key) => t(key))}
        items={cases.map((item) => ({
          id: item.key,
          category: t(workPresentation[item.key].category),
          content: <WorkCard item={workCardData(item)} />,
        }))}
        className="grid grid-cols-1 gap-6 min-[540px]:grid-cols-2 min-[1600px]:grid-cols-4 lg:grid-cols-3"
      />
    </section>
  );
}
