// Mirrors data/site.ts `cases` + data/work-presentation.ts + messages/*.json `Site.cases.<key>`.
// contentCount is gone: the frontend uses each points array's length instead.
import type { CollectionConfig, Field } from "payload";

const points = (name: string): Field => ({
  name,
  type: "array",
  localized: true,
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
  ],
});

const section = (name: string, pointsName: string): Field[] => [
  { name: `${name}Title`, type: "text", localized: true, required: true },
  { name, type: "textarea", localized: true, required: true },
  points(pointsName),
];

export const Works: CollectionConfig = {
  slug: "works",
  admin: { useAsTitle: "title", defaultColumns: ["title", "status", "category", "order"] },
  versions: { drafts: true },
  access: { read: ({ req: { user } }) => (user ? true : { _status: { equals: "published" } }) },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", localized: true, required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true, admin: { position: "sidebar" } },
    { name: "order", type: "number", defaultValue: 0, admin: { position: "sidebar" } },
    { name: "status", type: "select", required: true, options: ["active", "development", "completed"], admin: { position: "sidebar" } },
    {
      name: "category",
      type: "select",
      required: true,
      options: ["webApplication", "businessSystem", "existingSystem", "internalTool"],
      admin: { position: "sidebar" },
    },
    { name: "summary", type: "textarea", localized: true, required: true },
    { name: "overview", type: "textarea", localized: true, required: true },
    { name: "role", type: "text", localized: true },
    { name: "tags", type: "text", hasMany: true, localized: true },
    { name: "stack", type: "text", hasMany: true },
    { name: "images", type: "upload", relationTo: "media", hasMany: true },
    ...section("challenge", "challengePoints"),
    ...section("solution", "solutionPoints"),
    { name: "capabilitiesTitle", type: "text", localized: true, required: true },
    points("capabilities"),
    ...section("engineering", "engineeringPoints"),
    { name: "outcomeTitle", type: "text", localized: true, required: true },
    { name: "outcome", type: "textarea", localized: true, required: true },
  ],
};
