import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { companyId } = await request.json();

  const res = await fetch(`${process.env.WORKER_BASE_URL}/report-signed-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // forward Access cookie
    body: JSON.stringify({ contributorId: companyId })
  });

  if (!res.ok) return NextResponse.json({ error: "Worker error" }, { status: res.status });
  const data = await res.json();
  return NextResponse.json(data);
}
