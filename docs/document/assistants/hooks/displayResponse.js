
import { ref } from 'vue'

export default function () {

    const displayResponse_activeName = ref('Python');

    const displayResponse_node = '```js \n'
    +'const messages = await openai.beta.threads.messages.list( \n'
    +'  thread.id \n'
    +'); \n'
 

    const displayResponse_python = '```python \n'
    +'messages = client.beta.threads.messages.list( \n'
    +'  thread_id=thread.id \n'
    +') \n'

  

    const displayResponse_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/messages  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
 
    return {
       displayResponse_activeName,
       displayResponse_node,
       displayResponse_python,
       displayResponse_curl
    }
}