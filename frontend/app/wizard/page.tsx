"use client";
import { useState } from "react";
import QuizStep from "./QuizStep";
import PreviewStep from "./PreviewStep";
import ReportStep from "./ReportStep";
import ProgressBar from "./ProgressBar";
import "../../styles/globals.scss";

export default function WizardPage() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<any>({ id: `c-${crypto.randomUUID()}` });

  const steps = [
    <QuizStep onComplete={(data: any) => { setProfile({ ...profile, ...data }); setStep(1); }} />,
    <PreviewStep profile={profile} onNext={() => setStep(2)} />,
    <ReportStep profile={profile} onFinish={() => setStep(3)} />
  ];

  return (
    <div className="wizard-container dark-theme">
      <ProgressBar currentStep={step} totalSteps={steps.length} />
      {steps[step] ?? <p>Onboarding complete.</p>}
    </div>
  );
}
