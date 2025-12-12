import report from "./routes/report";
import reportSignedUrl from "./routes/reportSignedUrl";
import adminReports from "./routes/adminReports";
import adminCleanup from "./routes/adminCleanup";

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/report" && request.method === "POST") return report(request, env);
    if (url.pathname === "/report-signed-url" && request.method === "POST") return reportSignedUrl(request, env);
    if (url.pathname === "/admin-reports" && request.method === "GET") return adminReports(request, env);
    if (url.pathname === "/admin-cleanup" && request.method === "POST") return adminCleanup(request, env);

    // CRON trigger
    if (url.pathname === "/cron-cleanup" && request.method === "POST") return adminCleanup(request, env);

    return new Response("Not Found", { status: 404 });
  }
};
