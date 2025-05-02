// middleware.ts

import { NextRequest, NextResponse } from 'next/server'

const RATE_LIMIT = 10; // max 10 req
const WINDOW_TIME = 60 * 1000; // per 60 seconds
const ipCache = new Map<string, { count: number; last: number }>();

export function middleware(request: NextRequest) {
  const ip = request.ip ?? 'global';
  const now = Date.now();

  const entry = ipCache.get(ip);
  if (entry && now - entry.last < WINDOW_TIME) {
    if (entry.count >= RATE_LIMIT) {
      return new NextResponse('Too many requests', { status: 429 });
    } else {
      entry.count++;
    }
  } else {
    ipCache.set(ip, { count: 1, last: now });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
}
