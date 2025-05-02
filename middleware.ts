import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*', '/admin/:path*'],
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Разрешаем POST только для /api/gpt
  if (pathname.startsWith('/api') && request.method !== 'GET') {
    if (pathname !== '/api/gpt') {
      return new NextResponse('Method Not Allowed', { status: 405 })
    }
  }

  // Блокировка простых ботов по User-Agent
  const userAgent = request.headers.get('user-agent') || ''
  if (userAgent.toLowerCase().includes('curl') || userAgent.toLowerCase().includes('bot')) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  return NextResponse.next()
}
