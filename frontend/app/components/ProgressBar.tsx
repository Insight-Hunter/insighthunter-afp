// frontend/app/components/ProgressBar.tsx
"use client";
export default function ProgressBar({ step, total }: { step: number; total: number }) {
  const percent = (step / total) * 100;
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percent}%` }}></div>
    </div>
  );
}
