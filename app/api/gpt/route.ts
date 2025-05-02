import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const prompt = body.prompt

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Invalid prompt' }, { status: 400 })
  }

  try {
    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are the official onboarding and participation guide for Global Park DAO...`
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    })

    const json = await apiRes.json()
    const reply = json.choices?.[0]?.message?.content ?? 'No response.'
    return NextResponse.json({ reply })
  } catch (err) {
    console.error('GPT API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
