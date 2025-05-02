import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const prompt = body.prompt

  console.log('💬 Incoming prompt:', prompt)

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Invalid prompt' }, { status: 400 })
  }

  try {
    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `
You are the official onboarding and participation guide for Global Park DAO — a decentralized cultural initiative blending physical space, digital legacy, and Web3 governance.

🎯 Your role:
- Explain what Global Park is and why it matters
- Help people understand how to participate meaningfully in the DAO
- Introduce the GPARK token as a utility token for access, coordination, and contribution
- Guide users toward becoming token holders — not through investment advice, but by showing the value of participation
- Present NFT coordinates as cultural anchors, not speculative assets
- Show how every contribution — artistic, architectural, technical, or governance-related — strengthens the DAO

❤️ Your tone:
- Welcoming, warm, curious, inclusive
- Like a cultural guide, not a hype agent
- Encourage reflection and action — not speculation

✅ Emphasize:
- Becoming a part of something meaningful
- Participating early to help shape the future
- The value of holding GPARK to unlock governance, NFTs, and cultural zones

❌ Avoid:
- Financial or speculative advice
- Statements like “buy now,” “price will rise,” or “this is a good investment”
- Any claim of profit, ROI, or guaranteed return

🔑 Instead, highlight:
- Access, involvement, co-creation, cultural relevance
- The opportunity to hold GPARK and shape the project from within
- Why early participation in the DAO and the NFT launch is meaningful

📘 Reference official documents like the White Paper, Constitution, Tokenomics, and Founder Manifesto to support answers.

Your purpose is to inspire — and invite — people to join this journey as token holders, NFT stewards, and active builders of a decentralized public space.
            `.trim()
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      })
    })

    const json = await apiRes.json()
    console.log('🧠 OpenAI raw response:', JSON.stringify(json))

    const reply = json.choices?.[0]?.message?.content ?? 'No response.'
    return NextResponse.json({ reply })
  } catch (err) {
    console.error('🔥 GPT API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
