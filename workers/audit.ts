export default {
  async fetch(_request: Request, env: any): Promise<Response> {
    const result = await env.DB.prepare(
      "SELECT id, contributor_id, action, details, created_at FROM audit_logs ORDER BY created_at DESC"
    ).all();

    return new Response(JSON.stringify(result.results), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
