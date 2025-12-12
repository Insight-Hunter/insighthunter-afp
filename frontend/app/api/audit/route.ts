import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.WORKER_BASE_URL}/audit`);
  if (!res.ok) return NextResponse.json({ error: "Worker error" }, { status: res.status });
  const logs = await res.json();
  return NextResponse.json(logs);
}
