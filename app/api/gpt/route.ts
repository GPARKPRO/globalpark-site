import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ reply: '🧠 Hello from GPT route!' })
}
