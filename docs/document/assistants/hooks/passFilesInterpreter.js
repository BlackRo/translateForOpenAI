
import { ref } from 'vue'

export default function () {

    const passFilesInterpreter_activeName = ref('Python');

    const passFilesInterpreter_node = '```js \n'
    +'// Upload a file with an "assistants" purpose \n'
    +'const file = await openai.files.create({ \n'
    +'  file: fs.createReadStream("mydata.csv"), \n'
    +'  purpose: "assistants", \n'
    +'}); \n'
    +'// Create an assistant using the file ID \n'
    +'const assistant = await openai.beta.assistants.create({ \n'
    +'  instructions: "You are a personal math tutor. When asked a math question, write and run code to answer the question.", \n'
    +'  model: "gpt-4-1106-preview", \n'
    +'  tools: [{"type": "code_interpreter"}], \n'
    +'  file_ids: [file.id] \n'
    +'}); \n'
 

    const passFilesInterpreter_python = '```python \n'
    +'# Upload a file with an "assistants" purpose \n'
    +'file = client.files.create( \n'
    +'  file=open("speech.py", "rb"), \n'
    +'  purpose=\'assistants\' \n'
    +') \n'
    +'# Create an assistant using the file ID \n'
    +'assistant = client.beta.assistants.create( \n'
    +'  instructions="You are a personal math tutor. When asked a math question, write and run code to answer the question.", \n'
    +'  model="gpt-4-1106-preview", \n'
    +'  tools=[{"type": "code_interpreter"}], \n'
    +'  file_ids=[file.id] \n'
    +') \n'

  

    const passFilesInterpreter_curl = '```python \n'
    +'# Upload a file with an "assistants" purpose \n'
    +'curl https://api.openai.com/v1/files \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\ \n'
    +'  -F purpose="assistants" \\ \n'
    +'  -F file="@/path/to/mydata.csv" \\ \n'
    +'# Create an assistant using the file ID \n'
    +'curl https://api.openai.com/v1/assistants \\ \n'
    +'  -u :$OPENAI_API_KEY \\ \n'
    +'  -H \'Content-Type: application/json\' \\ \n'
    +'  -H \'OpenAI-Beta: assistants=v1\' \\ \n'
    +'  -d \'{ \n'
    +'      "instructions": "You are a personal math tutor. When asked a math question, write and run code to answer the question.", \n'
    +'      "tools": [{"type": "code_interpreter"}], \n'
    +'      "model": "gpt-4-1106-preview", \n'
    +'      "file_ids": ["file_123abc456"] \n'
    +'}\' \n'
 
    return {
       passFilesInterpreter_activeName,
       passFilesInterpreter_node,
       passFilesInterpreter_python,
       passFilesInterpreter_curl
    }
}