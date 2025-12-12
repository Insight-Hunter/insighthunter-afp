// workers/reportSignedUrl.ts
import { verifyAccessJwt, requireRole, isSubject } from "./utils/auth";
import "./utils/presign";

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

    const auth = request.headers.get("Authorization");
    if (!auth?.startsWith("Bearer ")) return new Response("Unauthorized", { status: 401 });
    const token = auth.slice("Bearer ".length);
    const payload = await verifyAccessJwt(token, env);

    const { contributorId } = await request.json();
    const isAdmin = (payload.roles ?? []).includes("admin");
    if (!isAdmin && !isSubject(payload, contributorId)) {
      return new Response("Forbidden", { status: 403 });
    }

    // Build the object key and sign it
    const key = `reports/${contributorId}.pdf`;
    // Generate a signed URL with an expiration, using R2 presign
    // Cloudflare R2 supports presigned URLs via S3-compatible signing
    // Assuming env.R2 has a `createPresignedUrl` helper (or implement S3 v4 signing).
    const expiresInSeconds = 300; // 5 minutes
    const signed = await env.R2.createPresignedUrl({
      method: "GET",
      key,
      expiresIn: expiresInSeconds
    });

    // Audit the access
    await env.DB.prepare(
      "INSERT INTO audit_logs (contributor_id, action, details) VALUES (?, ?, ?)"
    ).bind(contributorId, "REPORT_SIGNED_URL", JSON.stringify({ by: payload.sub, ttl: expiresInSeconds })).run();

    return new Response(JSON.stringify({ url: signed.url, expiresIn: expiresInSeconds }), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
