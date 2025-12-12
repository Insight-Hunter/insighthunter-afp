export default function ReportStep({
  profile,
  onFinish
}: {
  profile: any;
  onFinish: () => void;
}) {
  async function generate() {
    await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/report`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contributorId: profile.contributorId ?? profile.id,
        profile: {
          role: profile.role,
          domain: profile.domain,
          risk_tolerance: profile.riskTolerance
        }
      })
    });
    onFinish();
  }

  return (
    <div className="step-card">
      <h2>Generate report</h2>
      <p>Your branded PDF will be saved to secure storage.</p>
      <button onClick={generate}>Generate</button>
    </div>
  );
}
