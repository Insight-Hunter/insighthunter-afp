import { err } from "./response";

type JwtPayload = {
  sub: string;
  email?: string;
  roles?: string[];
  companyId?: string;
  aud: string;
  iss: string;
};

export async function verifyAccessJwt(request: Request, env: any): Promise<JwtPayload> {
  // Expect Access cookie header; for simplicity, allow Authorization: Bearer <token> too.
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const accessJwt = token || getAccessCookie(request);
  if (!accessJwt) throw new Error("Missing Access JWT");

  // Minimal verification: fetch JWKS and verify signature & claims (pseudo)
  // In production, use a JWT verification library compatible with Workers.
  const payload = parseJwt(accessJwt); // assumes verified; replace with proper verify
  if (payload.iss !== env.ACCESS_ISSUER || payload.aud !== env.ACCESS_AUD) {
    throw new Error("Invalid issuer or audience");
  }
  return payload as JwtPayload;
}

function getAccessCookie(request: Request): string | null {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/CF_Authorization=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

// Minimal JWT parsing (no signature validation; replace with real verify)
function parseJwt(token: string): any {
  const [, payloadBase64] = token.split(".");
  return JSON.parse(atob(payloadBase64.replace(/-/g, "+").replace(/_/g, "/")));
}

export function requireRole(payload: JwtPayload, role: "admin" | "company") {
  const roles = payload.roles || [];
  if (!roles.includes(role)) throw new Error("Forbidden");
}

export function requireCompanyAccess(payload: JwtPayload, companyId: string) {
  const roles = payload.roles || [];
  if (roles.includes("admin")) return;
  if (payload.companyId !== companyId) throw new Error("Forbidden");
}

export function actorId(payload: JwtPayload): string {
  return payload.email || payload.sub || "unknown";
}
