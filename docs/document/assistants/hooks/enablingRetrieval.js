
import { ref } from 'vue'

export default function () {

    const enablingRetrieval_activeName = ref('Python');

    const enablingRetrieval_node = '```js \n'
    +'const assistant = await openai.beta.assistants.create({ \n'
    +'  instructions: "You are a customer support chatbot. Use your knowledge base to best respond to customer queries.", \n'
    +'  model: "gpt-4-1106-preview", \n'
    +'  tools: [{"type": "retrieval"}] \n'
    +'}); \n'
 

    const enablingRetrieval_python = '```python \n'
    +'assistant = client.beta.assistants.create( \n'
    +'  instructions="You are a customer support chatbot. Use your knowledge base to best respond to customer queries.", \n'
    +'  model="gpt-4-1106-preview", \n'
    +'  tools=[{"type": "retrieval"}] \n'
    +') \n'

  

    const enablingRetrieval_curl = '```js \n'
    +'curl https://api.openai.com/v1/assistants \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "instructions": "You are a customer support chatbot. Use your knowledge base to best respond to customer queries.", \n'
    +'      "tools": [{"type": "retrieval"}], \n'
    +'      "model": "gpt-4-1106-preview" \n'
    +'   }\' \n'
 


    
    return {
       enablingRetrieval_activeName,
       enablingRetrieval_node,
       enablingRetrieval_python,
       enablingRetrieval_curl
    }
}