
import { ref } from 'vue'

export default function () {

    const logsOfCodeInterpreter_activeName = ref('Python');

    const logsOfCodeInterpreter_node = '```js \n'
    +'const runSteps = await openai.beta.threads.runs.steps.list( \n'
    +'  thread.id, \n'
    +'  run.id \n'
    +'); \n'
 

    const logsOfCodeInterpreter_python = '```python \n'
    +'run_steps = client.beta.threads.runs.steps.list( \n'
    +'  thread_id=thread.id, \n'
    +'  run_id=run.id \n'
    +') \n'

  

    const logsOfCodeInterpreter_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/runs/RUN_ID/steps  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
 
    return {
       logsOfCodeInterpreter_activeName,
       logsOfCodeInterpreter_node,
       logsOfCodeInterpreter_python,
       logsOfCodeInterpreter_curl
    }
}