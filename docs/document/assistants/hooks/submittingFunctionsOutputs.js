
import { ref } from 'vue'

export default function () {

    const submittingFunctionsOutputs_activeName = ref('Python');

    const submittingFunctionsOutputs_node = '```js \n'
    +`const run = await openai.beta.threads.runs.submitToolOutputs(
        thread.id,
        run.id,
        {
          tool_outputs: [
            {
              tool_call_id: callIds[0],
              output: "22C",
            },
            {
              tool_call_id: callIds[1],
              output: "LA",
            },
          ],
        }
      );`
 

    const submittingFunctionsOutputs_python = '```python \n'
    +`run = client.beta.threads.runs.submit_tool_outputs(
        thread_id=thread.id,
        run_id=run.id,
        tool_outputs=[
            {
              "tool_call_id": call_ids[0],
              "output": "22C",
            },
            {
              "tool_call_id": call_ids[1],
              "output": "LA",
            },
          ]
      )`

  

    const submittingFunctionsOutputs_curl = '```js \n'
    +`curl https://api.openai.com/v1/threads/thread_abc123/runs/run_123/submit_tool_outputs \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "OpenAI-Beta: assistants=v1" \
    -d '{
      "tool_outputs": [{
        "tool_call_id": "call_abc123",
        "output": "{"temperature": "22", "unit": "celsius"}"
      }, {
        "tool_call_id": "call_abc456",
        "output": "{"nickname": "LA"}"
      }]
    }'`
 
    return {
       submittingFunctionsOutputs_activeName,
       submittingFunctionsOutputs_node,
       submittingFunctionsOutputs_python,
       submittingFunctionsOutputs_curl
    }
}