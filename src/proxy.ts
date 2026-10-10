import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get(
    "better-auth.session_token"
  )?.value;

  const { pathname } = request.nextUrl;

  if (
    (pathname.startsWith("/profile") ||
      pathname.startsWith("/products")) &&
    !sessionCookie
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*"],
};