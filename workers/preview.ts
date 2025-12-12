export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const { contributorId, simulation } = await request.json();

    await env.KV.put(`preview:${contributorId}`, JSON.stringify(simulation), { expirationTtl: 86400 });

    await env.DB.prepare(
      "INSERT INTO audit_logs (contributor_id, action, details) VALUES (?, ?, ?)"
    ).bind(contributorId, "PREVIEW_SEED", JSON.stringify(simulation)).run();

    return new Response("Preview seeded", { status: 200 });
  }
};
