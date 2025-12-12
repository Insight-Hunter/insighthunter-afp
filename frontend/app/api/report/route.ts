import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/admin-reports`, {
    credentials: "include"
  });
  const text = await res.text();
  if (!res.ok) return new NextResponse(text, { status: res.status });
  return NextResponse.json(JSON.parse(text));
}
