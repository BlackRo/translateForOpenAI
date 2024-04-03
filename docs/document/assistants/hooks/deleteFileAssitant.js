
import { ref } from 'vue'

export default function () {

    const deleteFileAssitant_activeName = ref('Python');

    const deleteFileAssitant_node = '```js \n'
    +'const fileDeletionStatus = await openai.beta.assistants.files.del( \n'
    +'  assistant.id, \n'
    +'  file.id \n'
    +'); \n'
 

    const deleteFileAssitant_python = '```python \n'
    +'file_deletion_status = client.beta.assistants.files.delete( \n'
    +'  assistant_id=assistant.id, \n'
    +'  file_id=file.id \n'
    +') \n'

  

    const deleteFileAssitant_curl = '```js \n'
    +'curl https://api.openai.com/v1/assistants/asst_abc123/files/FILE_ID \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -H "OpenAI-Beta: assistants=v1" \\  \n'
    +'  -X DELETE \n'
 
    return {
       deleteFileAssitant_activeName,
       deleteFileAssitant_node,
       deleteFileAssitant_python,
       deleteFileAssitant_curl
    }
}