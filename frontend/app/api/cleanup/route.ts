import { NextResponse } from "next/server";

export async function POST() {
  // Optional: implement a Worker endpoint to run cleanup immediately
  // For demo, we call the audit route after cleanup to refresh logs
  const res = await fetch(`${process.env.WORKER_BASE_URL}/audit`);
  return NextResponse.json({ ok: res.ok });
}
