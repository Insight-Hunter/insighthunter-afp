"use client";
import { useState } from "react";

export default function CleanupControls() {
  const [status, setStatus] = useState<string>("");

  async function triggerCleanup() {
    const res = await fetch("/api/cleanup", { method: "POST" });
    setStatus(res.ok ? "Cleanup triggered" : "Cleanup failed");
  }

  return (
    <section>
      <h2>Cleanup controls</h2>
      <button onClick={triggerCleanup}>Run cleanup now</button>
      <p>{status}</p>
    </section>
  );
}
