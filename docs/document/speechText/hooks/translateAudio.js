import { ref } from 'vue'

export default function () {

    const translateAudio_activeName = ref('Python');

    const translateAudio_node = '```js \n'
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
 




    const translateAudio_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'audio_file= open("/path/to/file/audio.mp3", "rb") \n'
    +'transcript = client.audio.translations.create( \n'
    +'  model="whisper-1", \n'
    +'  file=audio_file \n'
    +') \n'

  

    const translateAudio_curl = '```js \n'
    +'curl --request POST  \\ \n'
    +'  --url https://api.openai.com/v1/audio/translations  \\ \n'
    +'  --header \'Authorization: Bearer TOKEN\' \\  \n'
    +'  --header \'Content-Type: multipart/form-data\' \\  \n'
    +'  --form file=@/path/to/file/german.mp3  \\ \n'
    +'  --form model=whisper-1 \n'
 
    return {
       translateAudio_activeName,
       translateAudio_node,
       translateAudio_python,
       translateAudio_curl
    }

}