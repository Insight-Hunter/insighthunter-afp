"use client";
import { useState } from "react";

export default function CompanyDashboard() {
  const [companyId, setCompanyId] = useState("c-001");
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function downloadLatest() {
    setError(null); setUrl(null);
    const res = await fetch("/api/report-signed-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ companyId })
    });
    if (!res.ok) { setError(await res.text()); return; }
    const data = await res.json();
    setUrl(data.url);
  }

  return (
    <section className="section-card">
      <h2>Company Dashboard</h2>
      <p>Company ID</p>
      <input value={companyId} onChange={(e) => setCompanyId(e.target.value)} />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={downloadLatest}>Download Latest Report</button>
      </div>
      {url && (<p><a href={url} target="_blank" rel="noreferrer">Open PDF</a></p>)}
      {error && (<p style={{ color: "red" }}>{error}</p>)}
    </section>,

    <section className="section-card">
     <h2>Company Snapshot</h2>
     <p>Role: Treasurer</p>
     <p>Domain: Liquidity</p>
     <p>Risk tolerance: Moderate</p>
     <p>Last report: Dec 12 <button>Download</button></p>
   </section>

   <section className="section-card">
    <h3>Recent Activity</h3>
    <ul>
     <li>✓ Quiz submitted</li>
     <li>✓ Preview seeded</li>
     <li>✓ Report generated</li>
    </ul>
   </section>

    
  );
}
