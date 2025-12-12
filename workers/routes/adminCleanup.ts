import { json, err } from "../utils/response";
import { verifyAccessJwt, requireRole, actorId } from "../utils/auth";
import { logAudit } from "../utils/audit";

export default async function adminCleanup(request: Request, env: any) {
  try {
    const payload = await verifyAccessJwt(request, env);
    // Allow CRON (no auth header) or admin manual trigger
    const isCron = request.headers.get("cf-worker") === "cron" || request.headers.get("User-Agent")?.includes("Cloudflare-Workers-Cron");
    if (!isCron) requireRole(payload, "admin");

    const days = Number(new URL(request.url).searchParams.get("days") ?? 90);
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    const old = await env.DB.prepare(
      "SELECT file_key FROM reports WHERE created_at < ?"
    ).bind(cutoff).all<{ file_key: string }>();

    let deleted = 0;
    for (const row of old.results || []) {
      await env.R2.delete(row.file_key);
      deleted++;
    }
    await env.DB.prepare("DELETE FROM reports WHERE created_at < ?").bind(cutoff).run();

    await logAudit(env, "REPORT_CLEANUP", isCron ? "cron" : actorId(payload), { days, deleted });
    return json({ ok: true, deleted, cutoff });
  } catch (e: any) {
    return err(e.message || "Cleanup failed", 400);
  }
}
