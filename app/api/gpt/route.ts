// app/api/gpt/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()

  const assistantId = 'asst_btKKQIBXUCKmCQoZil0Rm52t'
  const openaiKey = process.env.OPENAI_API_KEY

  if (!openaiKey) {
    return NextResponse.json({ reply: '❌ Missing API Key' }, { status: 500 })
  }

  try {
    const threadRes = await fetch('https://api.openai.com/v1/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiKey}`,
        'OpenAI-Beta': 'assistants=v1',
      },
    })

    const thread = await threadRes.json()

    await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiKey}`,
        'OpenAI-Beta': 'assistants=v1',
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
        Authorization: `Bearer ${openaiKey}`,
        'OpenAI-Beta': 'assistants=v1',
      },
      body: JSON.stringify({
        assistant_id: assistantId,
      }),
    })

    const run = await runRes.json()

    let status = run.status
    let runId = run.id

    while (status === 'queued' || status === 'in_progress') {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const statusCheck = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${runId}`, {
        headers: {
          Authorization: `Bearer ${openaiKey}`,
          'OpenAI-Beta': 'assistants=v1',
        },
      })
      const statusData = await statusCheck.json()
      status = statusData.status
    }

    const messagesRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        'OpenAI-Beta': 'assistants=v1',
      },
    })

    const messagesData = await messagesRes.json()
    const lastMessage = messagesData.data?.find((msg: any) => msg.role === 'assistant')
    const reply = lastMessage?.content?.[0]?.text?.value || 'No reply.'

    return NextResponse.json({ reply })
  } catch (err: any) {
    return NextResponse.json({ reply: `❌ Error: ${err.message || 'Unknown error'}` }, { status: 500 })
  }
}
