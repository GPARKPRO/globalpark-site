// app/api/gpt/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  try {
    const threadRes = await fetch('https://api.openai.com/v1/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    })
    const thread = await threadRes.json()

    await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        role: 'user',
        content: prompt,
      }),
    })

    const runRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        assistant_id: 'asst_btKKQIBXUCKmCQoZil0Rm52t',
        tools: [{ type: 'file_search' }],
        tool_resources: {
          file_search: {
            vector_store_ids: ['vs_6814f29554708191bfbcf66a787f7092'],
          },
        },
      }),
    })

    const run = await runRes.json()

    let status = run.status
    while (status === 'queued' || status === 'in_progress') {
      await new Promise((r) => setTimeout(r, 1000))
      const pollRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      })
      const pollData = await pollRes.json()
      status = pollData.status
    }

    const messagesRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    })

    const messagesData = await messagesRes.json()

    const assistantReply = messagesData.data.find(
      (msg: any) => msg.role === 'assistant'
    )

    const reply =
      assistantReply?.content?.[0]?.text?.value ??
      '⚠️ Assistant returned no textual response.'

    return NextResponse.json({ reply })
  } catch (err: any) {
    return NextResponse.json({ reply: '❌ Assistant crashed: ' + err.message }, { status: 500 })
  }
}
