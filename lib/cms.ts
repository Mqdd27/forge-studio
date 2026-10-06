// Server-only: CMS_URL is never exposed to the browser. Client components get `WorkCard`s, not full works.
export type Point = { title: string; description: string };

export type Work = {
  slug: string;
  title: string;
  status: "active" | "development" | "completed";
  category: "webApplication" | "businessSystem" | "existingSystem" | "internalTool";
  summary: string;
  overview: string;
  role?: string | null;
  stack?: string[] | null;
  images?: { url: string; alt: string }[] | null;
  challengeTitle: string;
  challenge: string;
  challengePoints?: Point[] | null;
  solutionTitle: string;
  solution: string;
  solutionPoints?: Point[] | null;
  capabilitiesTitle: string;
  capabilities?: Point[] | null;
  engineeringTitle: string;
  engineering: string;
  engineeringPoints?: Point[] | null;
  outcomeTitle: string;
  outcome: string;
};

export async function getWorks(locale: string): Promise<Work[]> {
  if (!process.env.CMS_URL) throw new Error("CMS_URL is not set");
  const res = await fetch(`${process.env.CMS_URL}/api/works?locale=${locale}&depth=1&sort=order&limit=100`, { next: { tags: ["works"] } });
  if (!res.ok) throw new Error(`CMS ${res.status}`);
  return (await res.json()).docs;
}

export const workCard = (w: Work) => ({
  slug: w.slug,
  title: w.title,
  summary: w.summary,
  status: w.status,
  category: w.category,
  stack: w.stack ?? [],
  images: (w.images ?? []).map((image) => image.url),
});

export type WorkCard = ReturnType<typeof workCard>;
