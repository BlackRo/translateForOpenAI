
import { ref } from 'vue'

export default function () {

    const createCsvAssistant_activeName = ref('Python');

    const createCsvAssistant_node = '```js \n'
    +'const file = await openai.files.create({ \n'
    +'  file: fs.createReadStream("mydata.csv"), \n'
    +'  purpose: "assistants", \n'
    +'}); \n'
 

    const createCsvAssistant_python = '```python \n'
    +'file = client.files.create( \n'
    +'  file=open("speech.py", "rb"), \n'
    +'  purpose=\'assistants\' \n'
    +') \n'

  

    const createCsvAssistant_curl = '```js \n'
    +'curl https://api.openai.com/v1/files  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -F purpose="assistants" \\  \n'
    +'  -F file="@mydata.csv"  \n'
 
    return {
       createCsvAssistant_activeName,
       createCsvAssistant_node,
       createCsvAssistant_python,
       createCsvAssistant_curl
    }
}