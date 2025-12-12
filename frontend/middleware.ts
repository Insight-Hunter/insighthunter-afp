// frontend/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const isAdminRoute = url.pathname.startsWith("/admin");

  if (!isAdminRoute) return NextResponse.next();

  const token = req.headers.get("Authorization") || req.cookies.get("CF_Authorization")?.value;
  if (!token) {
    // Redirect to Cloudflare Access login page configured for your app
    url.pathname = "/"; // or an Access auth endpoint
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"]
};
