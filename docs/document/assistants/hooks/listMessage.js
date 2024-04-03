
import { ref } from 'vue'

export default function () {

    const listMessage_activeName = ref('Python');

    const listMessage_node = '```js \n'
    +'const message = await openai.beta.threads.messages.create( \n'
    +'  thread.id, \n'
    +'  { \n'
    +'      role: "user", \n'
    +'      content: "I need to solve the equation `3x + 11 = 14`. Can you help me?" \n'
    +'  } \n'
    +'); \n'
 

    const listMessage_python = '```python \n'
    +'message = client.beta.threads.messages.create( \n'
    +'  thread_id=thread.id, \n'
    +'  role="user", \n'
    +'  content="I need to solve the equation `3x + 11 = 14`. Can you help me?" \n'
    +') \n'

  

    const listMessage_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/messages  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "role": "user", \n'
    +'      "content": "I need to solve the equation `3x + 11 = 14`. Can you help me?" \n'
    +'  }\' \n'
    return {
       listMessage_activeName,
       listMessage_node,
       listMessage_python,
       listMessage_curl
    }
}