import { json, err } from "../utils/response";
import { verifyAccessJwt, requireCompanyAccess, actorId } from "../utils/auth";
import { logAudit } from "../utils/audit";
import { presign } from "../utils/r2";

export default async function reportSignedUrl(request: Request, env: any) {
  try {
    const payload = await verifyAccessJwt(request, env);
    const body = await request.json();
    const companyId = body.companyId || body.contributorId || payload.companyId;

    requireCompanyAccess(payload, companyId);

    const row = await env.DB.prepare(
      "SELECT file_key FROM reports WHERE company_id = ? ORDER BY created_at DESC LIMIT 1"
    ).bind(companyId).first<{ file_key: string }>();
    if (!row) return err("No reports found", 404);

    const url = await presign(env, row.file_key, 300);
    await logAudit(env, "REPORT_SIGNED_URL", actorId(payload), { companyId, fileKey: row.file_key });
    return json({ url });
  } catch (e: any) {
    return err(e.message || "Failed to get signed URL", 400);
  }
}
