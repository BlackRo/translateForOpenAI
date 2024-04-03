import { ref } from 'vue'

export default function () {

    const uploadFile_activeName = ref('Python');
    const uploadFile_node = '```js \n'
    +"import fs from 'fs'; \n"
    +"import fetch from 'node-fetch'; \n"
    +"import OpenAI, { toFile } from 'openai'; \n"
    +"const openai = new OpenAI(); \n"
    +"// If you have access to Node fs we recommend using fs.createReadStream(): \n"
    +"await openai.files.create({ file: fs.createReadStream('mydata.jsonl'), purpose: 'fine-tune' }); \n"
    +"// Or if you have the web File API you can pass a File instance: \n"
    +"await openai.files.create({ file: new File(['my bytes'], 'mydata.jsonl'), purpose: 'fine-tune' }); \n"
    +"// You can also pass a fetch Response: \n"
    +"await openai.files.create({ file: await fetch('https://somesite/mydata.jsonl'), purpose: 'fine-tune' }); \n"



    const uploadFile_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'client.files.create( \n'
    +'  file=open("mydata.jsonl", "rb"), \n'
    +'  purpose="fine-tune" \n'
    +') \n'
  
    const uploadFile_curl = '```js \n'
    +'curl https://api.openai.com/v1/files \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -F purpose="fine-tune" \\ \n'
    +'  -F file="@mydata.jsonl" \\ \n'

    return {
        uploadFile_activeName,
        uploadFile_node,
        uploadFile_python,
        uploadFile_curl
    }

}