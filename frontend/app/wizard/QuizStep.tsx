export default function QuizStep({ onComplete }: { onComplete: (data: any) => void }) {
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      contributorId: (form.get("id") as string) || `c-${crypto.randomUUID()}`,
      role: form.get("role"),
      domain: form.get("domain"),
      riskTolerance: form.get("riskTolerance")
    };

    await fetch(`${process.env.NEXT_PUBLIC_WORKER_BASE_URL}/quiz`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    onComplete(payload);
  }

  return (
    <form onSubmit={submit} className="step-card">
      <h2>Contributor profile</h2>
      <input name="id" type="hidden" />
      <label>Role<input name="role" placeholder="Treasurer" required /></label>
      <label>Domain<input name="domain" placeholder="Liquidity" required /></label>
      <label>Risk tolerance<input name="riskTolerance" placeholder="Moderate" required /></label>
      <button type="submit">Continue</button>
    </form>
  );
}
