import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = new URL(request.url);
  const days = url.searchParams.get("days") || "90";
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/admin-cleanup?days=${days}`, {
    method: "POST",
    credentials: "include"
  });
  const text = await res.text();
  if (!res.ok) return new NextResponse(text, { status: res.status });
  return NextResponse.json(JSON.parse(text));
}
