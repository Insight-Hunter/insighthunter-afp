import { json, err } from "../utils/response";
import { verifyAccessJwt, requireRole, actorId } from "../utils/auth";
import { logAudit } from "../utils/audit";
import { generateCompanyReportPDF } from "../utils/pdf";
import { putReport } from "../utils/r2";

export default async function report(request: Request, env: any) {
  try {
    const payload = await verifyAccessJwt(request, env);
    requireRole(payload, "company");
    const body = await request.json();
    const companyId = body.companyId || payload.companyId;
    const now = new Date();
    const fileKey = `reports/${companyId}/${now.toISOString()}.pdf`;

    const pdfBytes = await generateCompanyReportPDF({
      companyId,
      role: body.role || "Treasurer",
      domain: body.domain || "Liquidity",
      riskTolerance: body.riskTolerance || "Moderate",
      metrics: body.metrics || { decisionVelocity: "12 ms", exposureIndex: "0.2", confidenceScore: "92%" },
      date: now.toDateString()
    });

    await putReport(env, fileKey, pdfBytes);
    await env.DB.prepare(
      "INSERT INTO reports (company_id, file_key, created_at) VALUES (?, ?, ?)"
    ).bind(companyId, fileKey, now.toISOString()).run();

    await logAudit(env, "REPORT_GENERATED", actorId(payload), { companyId, fileKey });

    return json({ ok: true, fileKey });
  } catch (e: any) {
    return err(e.message || "Failed to generate report", 400);
  }
}
