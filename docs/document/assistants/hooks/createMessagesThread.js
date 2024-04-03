
import { ref } from 'vue'

export default function () {

    const createMessagesThread_activeName = ref('Python');

    const createMessagesThread_node = '```js \n'
    +'const thread = await openai.beta.threads.create({ \n'
    +'  messages: [ \n'
    +'      { \n'
    +'          "role": "user", \n'
    +'          "content": "Create 3 data visualizations based on the trends in this file.", \n'
    +'          "file_ids": [file.id] \n'
    +'      } \n'
    +'  ] \n'
    +'}); \n'
 

    const createMessagesThread_python = '```python \n'
    +'thread = client.beta.threads.create( \n'
    +'  messages=[ \n'
    +'      { \n'
    +'          "role": "user", \n'
    +'          "content": "Create 3 data visualizations based on the trends in this file.", \n'
    +'          "file_ids": [file.id] \n'
    +'      } \n'
    +'  ] \n'
    +') \n'

  

    const createMessagesThread_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "messages": [ \n'
    +'          { \n'
    +'              "role": "user", \n'
    +'              "content": "Create 3 data visualizations based on the trends in this file.", \n'
    +'              "file_ids": ["file-wB6RM6wHdA49HfS2DJ9fEyrH"] \n'
    +'          } \n'
    +'      ] \n'
    +'   }\' \n'
 
    return {
       createMessagesThread_activeName,
       createMessagesThread_node,
       createMessagesThread_python,
       createMessagesThread_curl
    }
}