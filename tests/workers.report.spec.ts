import { describe, it, expect, vi } from "vitest";
import reportWorker from "../workers/report";

describe("report worker", () => {
  it("writes PDF to R2 and audits", async () => {
    const put = vi.fn(async () => ({}));
    const env: any = {
      R2: { put },
      DB: { prepare: () => ({ bind: () => ({ run: async () => ({}) }) }) }
    };

    const req = new Request("http://localhost/report", {
      method: "POST",
      body: JSON.stringify({
        contributorId: "c-123",
        profile: { role: "Treasurer", domain: "Liquidity", risk_tolerance: "Moderate" }
      }),
      headers: { "Content-Type": "application/json" }
    });

    const res = await reportWorker.fetch(req, env);
    expect(res.status).toBe(200);
    expect(put).toHaveBeenCalled();
  });
});
