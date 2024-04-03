
import { ref } from 'vue'

export default function () {

    const uploadFilesForRetrieval_activeName = ref('Python');

    const uploadFilesForRetrieval_node = '```js \n'
    +'// Upload a file with an "assistants" purpose \n'
    +'const file = await openai.files.create({ \n'
    +'  file: fs.createReadStream("knowledge.pdf"), \n'
    +'  purpose: "assistants", \n'
    +'}); \n'
    +'// Add the file to the assistant \n'
    +'const assistant = await openai.beta.assistants.create({ \n'
    +'  instructions: "You are a customer support chatbot. Use your knowledge base to best respond to customer queries.", \n'
    +'  model: "gpt-4-1106-preview", \n'
    +'  tools: [{"type": "retrieval"}], \n'
    +'  file_ids: [file.id] \n'
    +'}); \n'
 

    const uploadFilesForRetrieval_python = '```python \n'
    +'# Upload a file with an "assistants" purpose \n'
    +'file = client.files.create( \n'
    +'  file=open("knowledge.pdf", "rb"), \n'
    +'  purpose=\'assistant\' \n'
    +') \n'
    +'# Add the file to the assistant \n'
    +'assistant = client.beta.assistants.create( \n'
    +'  instructions="You are a customer support chatbot. Use your knowledge base to best respond to customer queries.", \n'
    +'  model="gpt-4-1106-preview", \n'
    +'  tools=[{"type": "retrieval"}], \n'
    +'  file_ids=[file.id] \n'
    +') \n'

  

    const uploadFilesForRetrieval_curl = '```js \n'
    +'# Upload a file with an "assistants" purpose  \\ \n'
    +'curl https://api.openai.com/v1/files  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -F purpose="assistants"  \\ \n'
    +'  -F file="@/path/to/knowledge.pdf"  \n'
    +'# Add the file to the assistant \n'
    +'curl "https://api.openai.com/v1/assistants"  \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -H "OpenAI-Beta: assistants=v1"  \\ \n'
    +'  -d \'{   \n'
    +'      "instructions": "You are a customer support chatbot. Use your knowledge base to best respond to customer queries.", \n'
    +'      "name": "Math Tutor",  \n'
    +'      "tools": [{"type": "retrieval"}],  \n'
    +'      "model": "gpt-4-1106-preview" \n'
    +'      "file_ids": ["file_123abc456"] \n'
    +'  }\'\n'
 
    return {
       uploadFilesForRetrieval_activeName,
       uploadFilesForRetrieval_node,
       uploadFilesForRetrieval_python,
       uploadFilesForRetrieval_curl
    }
}