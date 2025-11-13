"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();

  // cookieStore.set("token", "authToken");

  cookieStore.set({
    name: "token",
    value: "authToken",
  });

  if (cookieStore) {
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
