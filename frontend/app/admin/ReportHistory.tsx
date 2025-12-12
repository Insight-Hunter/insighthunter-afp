// frontend/app/admin/ReportHistory.tsx
"use client";
import { useState } from "react";

export default function ReportHistory() {
  const [contributorId, setContributorId] = useState("");
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  async function getSignedUrl() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/report-signed-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Cloudflare Access will set cookie; if using header, forward it here
        Authorization: typeof window !== "undefined" ? (window as any).CF_TOKEN ?? "" : ""
      },
      body: JSON.stringify({ contributorId })
    });
    const data = await res.json();
    setSignedUrl(data.url);
  }

  return (
    <section>
      <h2>Report history</h2>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          placeholder="Contributor ID (e.g., c-001)"
          value={contributorId}
          onChange={(e) => setContributorId(e.target.value)}
        />
        <button onClick={getSignedUrl}>Get signed URL</button>
        {signedUrl && (
          <a href={signedUrl} target="_blank" rel="noreferrer">
            Download report
          </a>
        )}
      </div>
    </section>
  );
}

