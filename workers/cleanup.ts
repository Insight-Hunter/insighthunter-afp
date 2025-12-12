export default {
  async scheduled(_event: ScheduledEvent, env: any, _ctx: ExecutionContext) {
    const keys = await env.KV.list({ prefix: "preview:" });
    for (const key of keys.keys) {
      await env.KV.delete(key.name);
    }

    const list = await env.R2.list({ prefix: "reports/" });
    const now = Date.now();
    for (const obj of list.objects) {
      const ageDays =
        obj.uploaded ? (now - new Date(obj.uploaded).getTime()) / (1000 * 60 * 60 * 24) : 0;
      if (ageDays > 30) {
        await env.R2.delete(obj.key);
      }
    }

    await env.DB.prepare(
      "INSERT INTO audit_logs (contributor_id, action, details) VALUES (?, ?, ?)"
    ).bind("SYSTEM", "CLEANUP", "Nightly cleanup executed").run();
  }
};
