"use client";
import { useState, useEffect } from "react";

type Report = { companyId: string; lastReportDate: string };

export default function AdminReportHistory() {
  const [contributorId, setContributorId] = useState("");
  const [reports, setReports] = useState<Report[]>([]);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReports() {
      const res = await fetch("/api/admin/reports", { credentials: "include" });
      if (!res.ok) return;
      const data = await res.json();
      setReports(data);
    }
    loadReports();
  }, []);

  async function getSignedUrl(companyId: string) {
    setError(null); setSignedUrl(null);
    const res = await fetch("/api/report-signed-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ companyId })
    });
    if (!res.ok) { setError(await res.text()); return; }
    const data = await res.json();
    setSignedUrl(data.url);
  }

  async function getSignedUrlFromInput() {
    if (!contributorId) return;
    await getSignedUrl(contributorId);
  }

  return (
    <section className="section-card">
      <h3>Company Report History</h3>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input placeholder="Company ID (e.g., c-001)" value={contributorId}
               onChange={(e) => setContributorId(e.target.value)} />
        <button onClick={getSignedUrlFromInput}>Get signed URL</button>
      </div>

      <table>
        <thead>
          <tr><th>Company ID</th><th>Last Report</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.companyId}>
              <td>{r.companyId}</td>
              <td>{r.lastReportDate}</td>
              <td><button onClick={() => getSignedUrl(r.companyId)}>Download</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {signedUrl && (<p><a href={signedUrl} target="_blank" rel="noreferrer">Open PDF</a></p>)}
      {error && (<p style={{ color: "red" }}>{error}</p>)}
    </section>
  );
}
