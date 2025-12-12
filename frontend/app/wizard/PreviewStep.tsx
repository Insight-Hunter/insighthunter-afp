export default function PreviewStep({
  profile,
  onNext
}: {
  profile: any;
  onNext: () => void;
}) {
  async function seedPreview() {
    const simulation = { velocity: 12, exposure: 0.2, role: profile.role };
    await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/preview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contributorId: profile.contributorId ?? profile.id, simulation })
    });
    onNext();
  }

  return (
    <div className="step-card">
      <h2>Simulation preview</h2>
      <p>Velocity: 12 ms · Exposure: 0.2</p>
      <button onClick={seedPreview}>Proceed to report</button>
    </div>
  );
}
