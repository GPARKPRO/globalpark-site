import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body

  console.log('💬 Incoming prompt:', prompt)
  console.log('🔑 API Key Present:', !!process.env.OPENAI_API_KEY)

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Invalid prompt' })
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
            content: `You are the official onboarding and participation guide for Global Park DAO...` // сокращено для примера
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    })

    const json = await apiRes.json()
    console.log('🧠 OpenAI raw response:', JSON.stringify(json))

    const reply = json.choices?.[0]?.message?.content ?? 'No response.'

    res.status(200).json({ reply })
  } catch (error) {
    console.error('🔥 GPT API error:', error)
    res.status(500).json({ error: 'Error connecting to GPT API' })
  }
}
