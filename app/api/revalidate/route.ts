import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const tags = new Set(["works"]);

// Called by forge-cms after every Works/Media save or delete.
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  const given = Buffer.from(request.headers.get("x-revalidate-secret") ?? "");
  if (!secret || given.length !== Buffer.byteLength(secret) || !timingSafeEqual(given, Buffer.from(secret)))
    return NextResponse.json({ code: "forbidden" }, { status: 403 });
  const body = await request.json().catch(() => null);
  if (!tags.has(body?.tag)) return NextResponse.json({ code: "invalid" }, { status: 400 });
  revalidateTag(body.tag);
  return NextResponse.json({ revalidated: body.tag });
}
