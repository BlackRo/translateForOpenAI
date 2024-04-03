
import { ref } from 'vue'

export default function () {

    const createUploadAssistant_activeName = ref('Python');

    const createUploadAssistant_node = '```js \n'
    +'const assistant = await openai.beta.assistants.create({ \n'
    +'  name: "Data visualizer", \n'
    +'  description: "You are great at creating beautiful data visualizations. You analyze data present in .csv files, understand trends, and come up with data visualizations relevant to those trends. You also share a brief text summary of the trends observed.", \n'
    +'  model: "gpt-4-1106-preview", \n'
    +'  tools: [{"type": "code_interpreter"}], \n'
    +'  file_ids: [file.id] \n'
    +'}); \n'
 

    const createUploadAssistant_python = '```python \n'
    +'assistant = client.beta.assistants.create( \n'
    +'  name="Data visualizer", \n'
    +'  description="You are great at creating beautiful data visualizations. You analyze data present in .csv files, understand trends, and come up with data visualizations relevant to those trends. You also share a brief text summary of the trends observed.",\n'
    +'  model="gpt-4-1106-preview", \n'
    +'  tools=[{"type": "code_interpreter"}], \n'
    +'  file_ids=[file.id] \n'
    +') \n'

  

    const createUploadAssistant_curl = '```js \n'
    +'curl https://api.openai.com/v1/assistants  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -d \'{ \n'
    +'      "name": "Data visualizer", \n'
    +'      "description": "You are great at creating beautiful data visualizations. You analyze data present in .csv files, understand trends, and come up with data visualizations relevant to those trends. You also share a brief text summary of the trends observed.",\n'
    +'      "model": "gpt-4-1106-preview", \n'
    +'      "tools": [{"type": "code_interpreter"}], \n'
    +'      "file_ids": ["file-BK7bzQj3FfZFXr7DbL6xJwfo"] \n'
    +'  }\' \n'
 
    return {
       createUploadAssistant_activeName,
       createUploadAssistant_node,
       createUploadAssistant_python,
       createUploadAssistant_curl
    }
}