
import { ref } from 'vue'

export default function () {

    const uploadRetrievalMessageLevel_activeName = ref('Python');

    const uploadRetrievalMessageLevel_node = '```js \n'
    +'const message = await openai.beta.threads.messages.create( \n'
    +'  thread.id, \n'
    +'  { \n'
    +'      role: "user", \n'
    +'      content: "I can not find in the PDF manual how to turn off this device.", \n'
    +'      file_ids: [file.id] \n'
    +'  } \n'
    +'); \n'
 

    const uploadRetrievalMessageLevel_python = '```python \n'
    +'message = client.beta.threads.messages.create( \n'
    +'  thread_id=thread.id, \n'
    +'  role="user", \n'
    +'  content="I can not find in the PDF manual how to turn off this device.", \n'
    +'  file_ids=[file.id] \n'
    +') \n'

  

    const uploadRetrievalMessageLevel_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/messages  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "role": "user", \n'
    +'      "content": "I can not find in the PDF manual how to turn off this device.", \n'
    +'      "file_ids": ["file_abc123"] \n'
    +'  }\' \n'
 
    return {
       uploadRetrievalMessageLevel_activeName,
       uploadRetrievalMessageLevel_node,
       uploadRetrievalMessageLevel_python,
       uploadRetrievalMessageLevel_curl
    }
}