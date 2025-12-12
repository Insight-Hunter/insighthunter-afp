// workers/adminReports.ts
import { verifyAccessJwt, requireRole } from "./utils/auth";

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const auth = request.headers.get("Authorization") || "";
    const token = auth.startsWith("Bearer ") ? auth.slice("Bearer ".length) : "";
    if (!token) return new Response("Unauthorized", { status: 401 });

    const payload = await verifyAccessJwt(token, env);
    requireRole(payload, "admin");

    const rows = await env.DB.prepare(
      "SELECT contributor_id AS companyId, MAX(created_at) AS lastReportDate FROM reports GROUP BY contributor_id"
    ).all();

    return new Response(JSON.stringify(rows.results), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
