
import { ref } from 'vue'

export default function () {

    const downloadFile_activeName = ref('Python');

    const downloadFile_node = '```js \n'
    +'import fs from "fs"; \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'async function main() { \n'
    +'  const response = await openai.files.content("file-abc123"); \n'
    +'   \n'
    +'  // Extract the binary data from the Response object \n'
    +'  const image_data = await response.arrayBuffer(); \n'
    +'   \n'
    +'  // Convert the binary data to a Buffer \n'
    +'  const image_data_buffer = Buffer.from(image_data); \n'
    +' \n'
    +'  // Save the image to a specific location \n'
    +'  fs.writeFileSync("./my-image.png", image_data_buffer); \n'
    +'} \n'
    +' \n'
    +'main(); \n'
 

    const downloadFile_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'image_data = client.files.content("file-abc123") \n'
    +'image_data_bytes = image_data.read() \n'
    +'with open("./my-image.png", "wb") as file: \n'
    +'  file.write(image_data_bytes) \n'


  

    const downloadFile_curl = '```js \n'
    +'curl https://api.openai.com/v1/files/file-abc123/content  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  --output image.png \\  \n'
 
    return {
       downloadFile_activeName,
       downloadFile_node,
       downloadFile_python,
       downloadFile_curl
    }
}