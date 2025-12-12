import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WizardPage from "../frontend/app/wizard/page";

describe("WizardPage", () => {
  it("renders progress bar", () => {
    render(<WizardPage />);
    expect(screen.getByText(/Generate report/i)).toBeDefined();
  });
});
