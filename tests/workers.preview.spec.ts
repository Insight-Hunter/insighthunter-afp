import { describe, it, expect, vi } from "vitest";
import previewWorker from "../workers/preview";

describe("preview worker", () => {
  it("stores simulation in KV and audits", async () => {
    const put = vi.fn();
    const env: any = {
      KV: { put },
      DB: { prepare: () => ({ bind: () => ({ run: async () => ({}) }) }) }
    };

    const req = new Request("http://localhost/preview", {
      method: "POST",
      body: JSON.stringify({
        contributorId: "c-123",
        simulation: { velocity: 12, exposure: 0.2 }
      }),
      headers: { "Content-Type": "application/json" }
    });

    const res = await previewWorker.fetch(req, env);
    expect(res.status).toBe(200);
    expect(put).toHaveBeenCalled();
  });
});
