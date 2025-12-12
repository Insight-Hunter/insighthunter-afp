import { json, err } from "../utils/response";
import { verifyAccessJwt, requireRole } from "../utils/auth";

export default async function adminReports(request: Request, env: any) {
  try {
    const payload = await verifyAccessJwt(request, env);
    requireRole(payload, "admin");

    const result = await env.DB.prepare(
      "SELECT company_id AS companyId, MAX(created_at) AS lastReportDate FROM reports GROUP BY company_id"
    ).all();

    return json(result.results || []);
  } catch (e: any) {
    return err(e.message || "Failed to list reports", 400);
  }
}
