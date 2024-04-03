import { ref } from 'vue'

export default function () {

    const creatingAssistant_activeName = ref('Python');

    const creatingAssistant_node = '```js \n'
    +'const assistant = await openai.beta.assistants.create({ \n'
    +'  name: "Math Tutor", \n'
    +'  instructions: "You are a personal math tutor. Write and run code to answer math questions.", \n'
    +'  tools: [{ type: "code_interpreter" }], \n'
    +'  model: "gpt-4-1106-preview" \n'
    +'}); \n'
 

    const creatingAssistant_python = '```python \n'
    +'assistant = client.beta.assistants.create( \n'
    +'  name="Math Tutor", \n'
    +'  instructions="You are a personal math tutor. Write and run code to answer math questions.", \n'
    +'  tools=[{"type": "code_interpreter"}], \n'
    +'  model="gpt-4-1106-preview" \n'
    +') \n'

  

    const creatingAssistant_curl = '```js \n'
    +'curl "https://api.openai.com/v1/assistants"  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "instructions": "You are a personal math tutor. Write and run code to answer math questions.", \n'
    +'      "name": "Math Tutor", \n'
    +'      "tools": [{"type": "code_interpreter"}], \n'
    +'      "model": "gpt-4" \n'
    +'  }\' \n'
 
    return {
       creatingAssistant_activeName,
       creatingAssistant_node,
       creatingAssistant_python,
       creatingAssistant_curl
    }
}