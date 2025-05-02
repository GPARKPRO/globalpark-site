// app/api/gpt/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'system', content: 'You are an assistant for the Global Park DAO. Answer briefly and clearly.' }, { role: 'user', content: prompt }],
      temperature: 0.7,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json({ reply: `❌ Error from OpenAI: ${text}` }, { status: res.status })
  }

  const data = await res.json()
  const reply = data.choices?.[0]?.message?.content || 'No reply.'

  return NextResponse.json({ reply })
}
