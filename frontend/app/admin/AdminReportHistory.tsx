"use client";
import { useState, useEffect } from "react";

type Report = {
  companyId: string;
  lastReportDate: string;
};

export default function AdminReportHistory() {
  const [reports, setReports] = useState<Report[]>([]);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
