
import { ref } from 'vue'

export default function () {

    const passedFileThread_activeName = ref('Python');

    const passedFileThread_node = '```js \n'
    +'const thread = await openai.beta.threads.create({ \n'
    +'  messages: [ \n'
    +'      { \n'
    +'          "role": "user", \n'
    +'          "content": "I need to solve the equation `3x + 11 = 14`. Can you help me?", \n'
    +'          "file_ids": [file.id] \n'
    +'      } \n'
    +'  ] \n'
    +'}); \n'
 

    const passedFileThread_python = '```python \n'
    +'thread = client.beta.threads.create( \n'
    +'  messages=[ \n'
    +'      { \n'
    +'          "role": "user", \n'
    +'          "content": "I need to solve the equation `3x + 11 = 14`. Can you help me?", \n'
    +'          "file_ids": [file.id] \n'
    +'      } \n'
    +'  ] \n'
    +') \n'

  

    const passedFileThread_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/messages  \\ \n'
    +'  -u :$OPENAI_API_KEY  \\ \n'
    +'  -H \'Content-Type: application/json\' \\  \n'
    +'  -H \'OpenAI-Beta: assistants=v1\' \\  \n'
    +'  -d \'{ \n'
    +'      "role": "user", \n'
    +'      "content": "I need to solve the equation `3x + 11 = 14`. Can you help me?", \n'
    +'      "file_ids": ["file_123abc456"] \n'
    +'  }\' \n'
 
    return {
       passedFileThread_activeName,
       passedFileThread_node,
       passedFileThread_python,
       passedFileThread_curl
    }
}