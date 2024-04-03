
import { ref } from 'vue'

export default function () {

    const runSteps_activeName = ref('Python');

    const runSteps_node = '```js \n'
    +'const run = await openai.beta.threads.runs.create( \n'
    +'  thread.id, \n'
    +'  { assistant_id: assistant.id } \n'
    +'); \n'
 

    const runSteps_python = '```python \n'
    +'run = client.beta.threads.runs.create( \n'
    +'  thread_id=thread.id, \n'
    +'  assistant_id=assistant.id \n'
    +') \n'

  

    const runSteps_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/THREAD_ID/runs  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "assistant_id": "asst_ToSF7Gb04YMj8AMMm50ZLLtY" \n'
    +'  }\' \n'
 
    return {
       runSteps_activeName,
       runSteps_node,
       runSteps_python,
       runSteps_curl
    }
}