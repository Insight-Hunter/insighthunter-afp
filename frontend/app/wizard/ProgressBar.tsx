export default function ProgressBar({
  currentStep,
  totalSteps
}: {
  currentStep: number;
  totalSteps: number;
}) {
  const pct = Math.round(((currentStep + 1) / totalSteps) * 100);
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
