import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    if (request.nextUrl.origin === 'http://localhost:3000') {
      return NextResponse.rewrite(new URL(request.nextUrl.pathname.slice(5), 'http://127.0.0.1:5000'))
    } else {
      return NextResponse.rewrite(new URL(request.nextUrl.pathname.slice(5), 'https://better-billboard.onrender.com'))
    }
  }
}
 
export const config = {
  matcher: '/api/:path*',
}
 
// // See "Matching Paths" below to learn more
// export const config = {
// }