import { test, expect } from "@playwright/test";

test("onboarding flow", async ({ page }) => {
  await page.goto("/wizard");
  await page.getByLabel("Role").fill("Treasurer");
  await page.getByLabel("Domain").fill("Liquidity");
  await page.getByLabel("Risk tolerance").fill("Moderate");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: "Proceed to report" }).click();
  await page.getByRole("button", { name: "Generate" }).click();
  await expect(page.getByText(/Onboarding complete/)).toBeVisible();
});
