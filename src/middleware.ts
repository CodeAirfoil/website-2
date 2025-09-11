import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'airfoil2024'

export function middleware(request: NextRequest) {
  // Skip middleware for API routes, static files, and authentication routes
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/favicon') ||
    request.nextUrl.pathname === '/auth' ||
    request.nextUrl.pathname === '/coming-soon'
  ) {
    return NextResponse.next()
  }

  // Check if user has valid session
  const authCookie = request.cookies.get('site-auth')
  
  if (!authCookie || authCookie.value !== 'authenticated') {
    // Redirect to coming soon page if not authenticated
    return NextResponse.redirect(new URL('/coming-soon', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
