// Single source of truth for the site navigation: header (desktop + mobile) and footer.
export const siteNav = [
  { href: "/", index: "01", en: "Overview", id: "Ikhtisar" },
  { href: "/work", index: "02", en: "Work", id: "Hasil Kerja" },
  { href: "/services", index: "03", en: "Services", id: "Layanan" },
  { href: "/studio", index: "04", en: "Studio", id: "Studio" },
  { href: "/start-a-project", index: "05", en: "Start a Project", id: "Mulai Project" },
] as const;

export const navLabel = (item: (typeof siteNav)[number], locale: string) => (locale === "id" ? item.id : item.en);
