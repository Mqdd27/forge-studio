// Target for forge-studio's INQUIRY_WEBHOOK_URL. The site already validates the payload
// ({ name, contact, projectType, description }) and sends `Authorization: Bearer <INQUIRY_WEBHOOK_TOKEN>`.
import type { CollectionConfig } from "payload";
import { timingSafeEqual } from "node:crypto";

const projectTypes = ["customWeb", "catalogWeb", "businessSystems", "inventory", "posBooking"]; // sync with components/design/contact.tsx

const validToken = (header: string | null) => {
  const expected = process.env.INQUIRY_WEBHOOK_TOKEN;
  if (!expected || !header) return false;
  const a = Buffer.from(header);
  const b = Buffer.from(`Bearer ${expected}`);
  return a.length === b.length && timingSafeEqual(a, b);
};

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  admin: { useAsTitle: "name", defaultColumns: ["name", "projectType", "handled", "createdAt"] },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    create: ({ req }) => Boolean(req.user) || validToken(req.headers.get("authorization")),
  },
  fields: [
    { name: "name", type: "text", required: true, maxLength: 120 },
    { name: "contact", type: "text", required: true, maxLength: 254 },
    { name: "projectType", type: "select", required: true, options: projectTypes },
    { name: "description", type: "textarea", required: true, minLength: 10, maxLength: 6000 },
    { name: "handled", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
  ],
};
