import quizWorker from "./quiz";
import previewWorker from "./preview";
import auditWorker from "./audit";

import report from "./routes/report";
import reportSignedUrl from "./routes/reportSignedUrl";
import adminReports from "./routes/adminReports";
import adminCleanup from "./routes/adminCleanup";

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Core report lifecycle
    if (url.pathname === "/report" && request.method === "POST") {
      return report(request, env);
    }
    if (url.pathname === "/report-signed-url" && request.method === "POST") {
      return reportSignedUrl(request, env);
    }
    if (url.pathname === "/admin-reports" && request.method === "GET") {
      return adminReports(request, env);
    }
    if (url.pathname === "/admin-cleanup" && request.method === "POST") {
      return adminCleanup(request, env);
    }

    // Wizard-related routes (mounted workers)
    if (url.pathname.startsWith("/quiz")) {
      return quizWorker.fetch(request, env, ctx);
    }
    if (url.pathname.startsWith("/preview")) {
      return previewWorker.fetch(request, env, ctx);
    }
    if (url.pathname.startsWith("/audit")) {
      return auditWorker.fetch(request, env, ctx);
    }

    // Manual CRON trigger (optional)
    if (url.pathname === "/cron-cleanup" && request.method === "POST") {
      return adminCleanup(request, env);
    }

    return new Response("Not Found", { status: 404 });
  },

  // Nightly scheduled cleanup from wrangler.toml [triggers].crons
  async scheduled(event: ScheduledEvent, env: any, ctx: ExecutionContext) {
    // Reuse the adminCleanup handler. Construct a POST Request with default days or pass via query.
    const req = new Request("https://worker.internal/admin-cleanup?days=90", { method: "POST" });
    const res = await adminCleanup(req, env);
    // Optionally wait on side effects
    ctx.waitUntil(Promise.resolve());
    return res;
  }
};
