import { ref } from 'vue'

export default function () {

    const textSpeechDemo_activeName = ref('Python');

    const textSpeechDemo_node = '```js \n'
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
 




    const textSpeechDemo_python = '```python \n'
    +'from pathlib import Path \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'speech_file_path = Path(__file__).parent / "speech.mp3" \n'
    +'response = client.audio.speech.create( \n'
    +'  model="tts-1", \n'
    +'  voice="alloy", \n'
    +'  input="Today is a wonderful day to build something people love!" \n'
    +') \n'
    +'response.stream_to_file(speech_file_path) \n'
  

    const textSpeechDemo_curl = '```js \n'
    +'curl https://api.openai.com/v1/chat/completions \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -d \'{   \n'
    +'      "model": "gpt-4-vision-preview", \n'
    +'      "input": "Today is a wonderful day to build something people love!", \n'
    +'      "voice": "alloy" \n'
    +'}\' \\ \n'
    +'--output speech.mp3 \n'
 
    return {
       textSpeechDemo_activeName,
       textSpeechDemo_node,
       textSpeechDemo_python,
       textSpeechDemo_curl
    }

}