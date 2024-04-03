
import { ref } from 'vue'

export default function () {

    const runAssistant_activeName = ref('Python');

    const runAssistant_node = '```js \n'
    +'const run = await openai.beta.threads.runs.create( \n'
    +'  thread.id, \n'
    +'  { \n'
    +'      assistant_id: assistant.id, \n'
    +'      instructions: "Please address the user as Jane Doe. The user has a premium account." \n'
    +'  } \n'
    +'); \n'
 

    const runAssistant_python = '```python \n'
    +'run = client.beta.threads.runs.create( \n'
    +'  thread_id=thread.id, \n'
    +'  assistant_id=assistant.id, \n'
    +'  instructions="Please address the user as Jane Doe. The user has a premium account." \n'
    +') \n'

  

    const runAssistant_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads/thread_abc123/runs  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "assistant_id": "asst_abc123", \n'
    +'      "instructions": "Please address the user as Jane Doe. The user has a premium account." \n'
    +'  }\' \n'
 
    return {
       runAssistant_activeName,
       runAssistant_node,
       runAssistant_python,
       runAssistant_curl
    }
}