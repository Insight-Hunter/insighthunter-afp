export async function logAudit(env: any, eventType: string, actor: string, meta?: any) {
  await env.DB.prepare(
    "INSERT INTO audit_logs (event_type, actor, meta, timestamp) VALUES (?, ?, ?, ?)"
  ).bind(eventType, actor, JSON.stringify(meta || {}), new Date().toISOString()).run();
}
