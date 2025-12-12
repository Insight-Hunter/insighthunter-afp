// frontend/app/admin/ReportHistory.tsx
"use client";
import { useState, useEffect } from "react";

type Report = {
  companyId: string;
  lastReportDate: string;
};

export default function AdminReportHistory() {
  const [contributorId, setContributorId] = useState("");
  const [reports, setReports] = useState<Report[]>([]);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load all reports for table
  useEffect(() => {
    async function loadReports() {
      const res = await fetch("/api/admin/reports", { credentials: "include" });
      if (!res.ok) return;
      const data = await res.json();
      setReports(data);
    }
    loadReports();
  }, []);

  // Get signed URL for a specific company
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

  // Manual input version
  async function getSignedUrlFromInput() {
    if (!contributorId) return;
    await getSignedUrl(contributorId);
  }

  return (
    <section>
      <h2>Company Report History</h2>

      {/* Manual input */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          placeholder="Company ID (e.g., c-001)"
          value={contributorId}
          onChange={(e) => setContributorId(e.target.value)}
        />
        <button onClick={getSignedUrlFromInput}>Get signed URL</button>
      </div>

      {/* Reports table */}
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

      {/* Download link + errors */}
      {signedUrl && (
        <p>
          <a href={signedUrl} target="_blank" rel="noreferrer">
            Open PDF
          </a>
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
}
