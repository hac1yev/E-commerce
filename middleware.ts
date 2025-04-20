import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const { url } = request;

    return NextResponse.redirect(new URL('/home', url));
}
 
export const config = {
  matcher: '/about/:path*',
}