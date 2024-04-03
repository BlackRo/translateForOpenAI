
import { ref } from 'vue'

export default function () {

    const getModerations_activeName = ref('Python');

    const getModerations_node = '```js \n'
    +'import fs from "fs"; \n'
    +'import path from "path"; \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'const speechFile = path.resolve("./speech.mp3"); \n'
    +'async function main() { \n'
    +'  const mp3 = await openai.audio.speech.create({ \n'
    +'      model: "tts-1", \n'
    +'      voice: "alloy", \n'
    +'      input: "Today is a wonderful day to build something people love!", \n'
    +'  }); \n'
    +'  console.log(speechFile); \n'
    +'  const buffer = Buffer.from(await mp3.arrayBuffer()); \n'
    +'  await fs.promises.writeFile(speechFile, buffer); \n'
    +'} \n'
    +'main(); \n'
 




    const getModerations_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.moderations.create(input="Sample text goes here.") \n'
    +'output = response.results[0] \n'

  

    const getModerations_curl = '```js \n'
    +'curl https://api.openai.com/v1/moderations  \\ \n'
    +'  -X POST \\  \n'
    +'  -H "Content-Type: application/json" \\  \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\  \n'
    +'  -d \'{"input": "Sample text goes here"}\' \n'
 
    return {
       getModerations_activeName,
       getModerations_node,
       getModerations_python,
       getModerations_curl
    }

}