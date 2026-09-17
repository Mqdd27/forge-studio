import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
// Must stay in sync with projectTypes in components/design/contact.tsx.
const types: Record<string, true> = { customWeb: true, catalogWeb: true, businessSystems: true, inventory: true, posBooking: true };
const attempts = new Map<string, { count: number; until: number }>();
const reply = (code: string, status: number) => NextResponse.json({ code }, { status });

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin && origin !== process.env.NEXT_PUBLIC_SITE_URL) return reply("forbidden", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply("invalid", 415);
  if (Number(request.headers.get("content-length") || 0) > 16000) return reply("invalid", 413);
  const now = Date.now();
  attempts.forEach((value, key) => {
    if (value.until < now) attempts.delete(key);
  });
  // Only use a client-IP header if a trusted reverse proxy overwrites it.
  const ipHeader = process.env.INQUIRY_TRUSTED_IP_HEADER;
  const ip = ipHeader ? request.headers.get(ipHeader) || "shared" : "shared";
  const limit = ipHeader ? 5 : 30;
  const bucket = attempts.get(ip) || { count: 0, until: now + 10 * 60 * 1000 };
  if (bucket.count >= limit || attempts.size > 10000) return reply("rate_limited", 429);
  bucket.count += 1;
  attempts.set(ip, bucket);
  let data;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("invalid", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) {
        await reader.cancel();
        return reply("invalid", 413);
      }
      chunks.push(value);
    }
    data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return reply("invalid", 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return reply("invalid", 400);
  if (data.website) return reply("invalid", 400);
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const contact = typeof data.contact === "string" ? data.contact.trim() : "";
  const description = typeof data.description === "string" ? data.description.trim() : "";
  if (
    !name ||
    name.length > 120 ||
    contact.length > 254 ||
    (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && !/^\+?[\d\s().-]{8,25}$/.test(contact)) ||
    types[data.projectType] !== true ||
    description.length < 10 ||
    description.length > 6000
  )
    return reply("invalid", 400);
  const destination = process.env.INQUIRY_WEBHOOK_URL;
  if (!destination) return reply("unavailable", 503);
  try {
    if (new URL(destination).protocol !== "https:") return reply("unavailable", 503);
    const response = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INQUIRY_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({ name, contact, projectType: data.projectType, description }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) return reply("delivery_failed", 502);
    return reply("sent", 200);
  } catch {
    return reply("delivery_failed", 502);
  }
}
