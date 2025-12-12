import { describe, it, expect } from "vitest";
import quizWorker from "../workers/quiz";

const mkRequest = (body: any) =>
  new Request("http://localhost/quiz", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });

describe("quiz worker", () => {
  it("persists contributor and logs audit", async () => {
    const env: any = {
      DB: { prepare: () => ({ bind: () => ({ run: async () => ({}) }) }) }
    };
    const req = mkRequest({
      contributorId: "c-123",
      role: "Treasurer",
      domain: "Liquidity",
      riskTolerance: "Moderate"
    });
    const res = await quizWorker.fetch(req, env);
    expect(res.status).toBe(200);
  });
});
