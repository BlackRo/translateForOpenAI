
import { ref } from 'vue'

export default function () {

    const createThread_activeName = ref('Python');

    const createThread_node = '```js \n'
    +'const thread = await openai.beta.threads.create(); \n'
 

    const createThread_python = '```python \n'
    +'thread = client.beta.threads.create() \n'

  

    const createThread_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'   -d \'\' \n'
 
    return {
       createThread_activeName,
       createThread_node,
       createThread_python,
       createThread_curl
    }
}