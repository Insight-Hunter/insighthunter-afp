"use client";
import { useState } from "react";

export default function CompanyDashboard({ companyId }: { companyId: string }) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  async function downloadReport() {
    const res = await fetch("/api/report-signed-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyId })
    });
    const data = await res.json();
    setSignedUrl(data.url);
  }

  return (
    <div className="dashboard-card">
      <h2>Company Snapshot</h2>
      <p>ID: {companyId}</p>
      <button onClick={downloadReport}>Download Latest Report</button>
      {signedUrl && (
        <a href={signedUrl} target="_blank" rel="noreferrer">
          Open PDF
        </a>
      )}
    </div>
  );
}
