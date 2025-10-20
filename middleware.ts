import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/i18n.config";
import Negotiator from "negotiator";
import { match as matchLocal } from "@formatjs/intl-localematcher";

function getLoacale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = Array.from(i18n.locales);
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocal(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale =
    i18n.locales.every((locale) => !pathname.startsWith(`/${locale}`)) &&
    pathname.startsWith("/_next");

  if (pathnameIsMissingLocale) {
    const locale = getLoacale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
