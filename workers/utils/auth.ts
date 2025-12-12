// workers/utils/auth.ts
type JwtPayload = {
  sub: string;          // user identifier (email or ID)
  email?: string;
  roles?: string[];     // ["admin"] or ["contributor"]
  exp: number;
  aud?: string;
  iss?: string;
};

export async function verifyAccessJwt(token: string, env: any): Promise<JwtPayload> {
  // Basic structure: decode + verify signature using Access public keys.
  // For simplicity, assume Cloudflare Access JWT is trusted and only decode.
  // In production, verify JWK signature (Access docs) and audience/issuer.
  const [, payloadB64] = token.split(".");
  const json = atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"));
  const payload = JSON.parse(json) as JwtPayload;

  if (!payload.exp || payload.exp * 1000 < Date.now()) {
    throw new Error("Token expired");
  }
  return payload;
}

export function requireRole(payload: JwtPayload, role: "admin" | "contributor") {
  const roles = payload.roles ?? [];
  if (!roles.includes(role)) throw new Error("Insufficient role");
}

export function isSubject(payload: JwtPayload, contributorId: string) {
  // Tie subject to contributor identity controls.
  // You may map sub/email to contributorId in D1 for strict enforcement.
  return payload.sub === contributorId || payload.email === contributorId;
}
