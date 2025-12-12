import quizWorker from "./quiz";
import previewWorker from "./preview";
import reportWorker from "./report";
import auditWorker from "./audit";
import cleanupWorker from "./cleanup";

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/quiz")) return quizWorker.fetch(request, env);
    if (url.pathname.startsWith("/preview")) return previewWorker.fetch(request, env);
    if (url.pathname.startsWith("/report")) return reportWorker.fetch(request, env);
    if (url.pathname.startsWith("/audit")) return auditWorker.fetch(request, env);

    return new Response("Not found", { status: 404 });
  },

  async scheduled(event: ScheduledEvent, env: any, ctx: ExecutionContext) {
    return cleanupWorker.scheduled(event, env, ctx);
  }
};
