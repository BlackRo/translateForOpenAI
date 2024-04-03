
import { ref } from 'vue'

export default function () {

    const runUseModel_activeName = ref('Python');

    const runUseModel_node = '```js \n'
    +'const run = await openai.beta.threads.runs.create( \n'
    +'  thread.id, \n'
    +'  { \n'
    +'      assistant_id: assistant.id, \n'
    +'      model: "gpt-4-1106-preview", \n'
    +'      instructions: "New instructions that override the Assistant instructions", \n'
    +'      tools: [{"type": "code_interpreter"}, {"type": "retrieval"}] \n'
    +'  } \n'
    +'); \n'
 

    const runUseModel_python = '```python \n'
    +'run = client.beta.threads.runs.create( \n'
    +'  thread_id=thread.id, \n'
    +'  assistant_id=assistant.id, \n'
    +'  model="gpt-4-1106-preview", \n'
    +'  instructions="New instructions that override the Assistant instructions", \n'
    +'  tools=[{"type": "code_interpreter"}, {"type": "retrieval"}] \n'
    +') \n'

  

    const runUseModel_curl = '```js \n'
    +'curl https://api.openai.com/v1/threads  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{  \n'
    +'      "assistant_id": "ASSISTANT_ID",  \n'
    +'      "model": "gpt-4-1106-preview",  \n'
    +'      "instructions": "New instructions that override the Assistant instructions",  \n'
    +'      "tools": [{"type": "code_interpreter"}, {"type": "retrieval"}]  \n'
    +'  }\'  \n'
 
    return {
       runUseModel_activeName,
       runUseModel_node,
       runUseModel_python,
       runUseModel_curl
    }
}