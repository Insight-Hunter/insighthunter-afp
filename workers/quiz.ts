export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const { contributorId, role, domain, riskTolerance } = await request.json();

    await env.DB.prepare(
      "INSERT INTO contributors (id, role, domain, risk_tolerance) VALUES (?, ?, ?, ?)"
    ).bind(contributorId, role, domain, riskTolerance).run();

    await env.DB.prepare(
      "INSERT INTO audit_logs (contributor_id, action, details) VALUES (?, ?, ?)"
    ).bind(contributorId, "QUIZ_SUBMIT", JSON.stringify({ role, domain, riskTolerance })).run();

    return new Response("Contributor profile saved", { status: 200 });
  }
};
