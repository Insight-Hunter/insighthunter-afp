"use client";
import { useState } from "react";

export default function CleanupControls() {
  const [days, setDays] = useState(90);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function cleanup() {
    setError(null); setResult(null);
    const res = await fetch(`/api/admin/cleanup?days=${days}`, {
      method: "POST",
      credentials: "include"
    });
    if (!res.ok) { setError(await res.text()); return; }
    const data = await res.json();
    setResult(`Deleted: ${data.deleted} (cutoff ${data.cutoff})`);
  }

  return (
    <section className="section-card">
      <h3>Cleanup Controls</h3>
      <p>Delete reports older than N days.</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input type="number" value={days} onChange={(e) => setDays(Number(e.target.value))} />
        <button onClick={cleanup}>Run cleanup</button>
      </div>
      {result && <p>{result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
}
