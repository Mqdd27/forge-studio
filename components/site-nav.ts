// Single source of truth for the site navigation: header (desktop + mobile) and footer.
export const siteNav = [
  { href: "/", index: "01", en: "Home", id: "Home" },
  { href: "/work", index: "02", en: "Portfolio", id: "Portofolio" },
  { href: "/services", index: "03", en: "Services", id: "Layanan" },
  { href: "/studio", index: "04", en: "About", id: "Tentang" },
  { href: "/start-a-project", index: "05", en: "Start a Project", id: "Mulai Project" },
] as const;

export const navLabel = (item: (typeof siteNav)[number], locale: string) => (locale === "id" ? item.id : item.en);
