// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*', '/admin/:path*'],
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Пример защиты от POST-запросов на GET-only endpoints
  if (pathname.startsWith('/api') && request.method !== 'GET') {
    return new NextResponse('Method Not Allowed', { status: 405 })
  }

  // Пример: ограничение доступа по User-Agent
  const userAgent = request.headers.get('user-agent') || ''
  if (userAgent.includes('curl') || userAgent.includes('bot')) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // for udates

  return NextResponse.next()
}
