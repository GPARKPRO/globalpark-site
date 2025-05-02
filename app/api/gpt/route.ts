// app/api/gpt/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const question = body.prompt || ''

  // Простой ответ для отладки:
  return NextResponse.json({
    reply: `You asked: ${question}`,
  })
}
