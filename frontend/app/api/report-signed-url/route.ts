import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/report-signed-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body)
  });
  const text = await res.text();
  if (!res.ok) return new NextResponse(text, { status: res.status });
  return NextResponse.json(JSON.parse(text));
}
