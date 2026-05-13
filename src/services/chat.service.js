export const chatService = {
  sendChat: async ({
    message,
    conversation_id,
    onChunk,
    signal,
  }) => {

    const response = await fetch(
      'http://31.97.220.225:3000/api/vanna/v2/chat_sse',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          conversation_id,
        }),
        signal,
      }
    )

    if (!response.body) {
      throw new Error('Stream not supported')
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()

      if (done) break

      buffer += decoder.decode(value, {
        stream: true,
      })

      const lines = buffer.split('\n')

      buffer = lines.pop() || ''

      for (const line of lines) {
        if (!line.startsWith('data:')) continue

        const jsonString = line.replace(/^data:\s*/, '').trim()

        if (jsonString === '[DONE]') {
          return
        }

        try {
          const parsed = JSON.parse(jsonString)

          onChunk?.(parsed)
        } catch (err) {
          console.error('SSE Parse Error', err)
        }
      }
    }
  },
}