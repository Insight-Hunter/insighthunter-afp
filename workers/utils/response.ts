export function json(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
export function err(message: string, status = 400): Response {
  return json({ error: message }, status);
}
