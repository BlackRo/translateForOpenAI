
import { ref } from 'vue'

export default function () {

    const checkRunStatus_activeName = ref('Python');

    const checkRunStatus_node = '```js \n'
    +'const run = await openai.beta.threads.runs.retrieve( \n'
    +'  thread.id, \n'
    +'  run.id \n'
    +'); \n'
 

    const checkRunStatus_python = '```python \n'
    +'run = client.beta.threads.runs.retrieve( \n'
    +'  thread_id=thread.id, \n'
    +'  run_id=run.id \n'
    +') \n'

  

    const checkRunStatus_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/runs/run_abc123  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
 
    return {
       checkRunStatus_activeName,
       checkRunStatus_node,
       checkRunStatus_python,
       checkRunStatus_curl
    }
}