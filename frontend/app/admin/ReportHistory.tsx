// frontend/app/admin/ReportHistory.tsx
"use client";
import { useState, useEffect } from "react";

export default function ReportHistory() {
  const [contributorId, setContributorId] = useState("");
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

type Report = {
  companyId: string;
  lastReportDate: string;
};

export default function AdminReportHistory() {
  const [reports, setReports] = useState<Report[]>([]);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  
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

  useEffect(() => {
    // Fetch list of companies + reports from Worker
    async function loadReports() {
      const res = await fetch("/api/admin/reports", { credentials: "include" });
      if (!res.ok) return;
      const data = await res.json();
      setReports(data);
    }
    loadReports();
  }, []);

  async function getSignedUrl(companyId: string) {
    setError(null);
    setSignedUrl(null);
    const res = await fetch("/api/report-signed-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ companyId })
    });
    if (!res.ok) {
      setError(await res.text());
      return;
    }
    const data = await res.json();
    setSignedUrl(data.url);
  }

  return (
    <section>
      <h2>Company Report History</h2>
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Last Report</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.companyId}>
              <td>{r.companyId}</td>
              <td>{r.lastReportDate}</td>
              <td>
                <button onClick={() => getSignedUrl(r.companyId)}>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {signedUrl && (
        <a href={signedUrl} target="_blank" rel="noreferrer">
          Open PDF
        </a>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
}

