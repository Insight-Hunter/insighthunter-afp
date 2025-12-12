import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  const res = await fetch(`${process.env.WORKER_BASE_URL}/report`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)

export async function GET() {
  const res = await fetch(`${process.env.WORKER_BASE_URL}/admin-reports`, {
    credentials: "include"
  });
  const data = await res.json();
  return NextResponse.json(data);
  return NextResponse.json({ ok: res.ok });
}
