
import { ref } from 'vue'

export default function () {

    const enablingCodeInterpreter_activeName = ref('Python');

    const enablingCodeInterpreter_node = '```js \n'
    +'const assistant = await openai.beta.assistants.create({ \n'
    +'  instructions: "You are a personal math tutor. When asked a math question, write and run code to answer the question.", \n'
    +'  model: "gpt-4-1106-preview", \n'
    +'  tools: [{"type": "code_interpreter"}] \n'
    +'}); \n'
 

    const enablingCodeInterpreter_python = '```python \n'
    +'assistant = client.beta.assistants.create( \n'
    +'  instructions="You are a personal math tutor. When asked a math question, write and run code to answer the question.", \n'
    +'  model="gpt-4-1106-preview", \n'
    +'  tools=[{"type": "code_interpreter"}] \n'
    +') \n'

  

    const enablingCodeInterpreter_curl = '```js \n'
    +'curl https://api.openai.com/v1/assistants  \\ \n'
    +'  -u :$OPENAI_API_KEY  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "instructions": "You are a personal math tutor. When asked a math question, write and run code to answer the question.", \n'
    +'      "tools": [ \n'
    +'          { "type": "code_interpreter" } \n'
    +'      ], \n'
    +'      "model": "gpt-4-1106-preview" \n'
    +'  }\' \n'
 
    return {
       enablingCodeInterpreter_activeName,
       enablingCodeInterpreter_node,
       enablingCodeInterpreter_python,
       enablingCodeInterpreter_curl
    }
}