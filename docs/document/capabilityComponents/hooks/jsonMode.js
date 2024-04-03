

import {ref} from 'vue'

export default function (){


    const activeName_jsonMode = ref("Curl")

    const curl_chatAPI_jsonMode = '```js \n'
        +'curl https://api.openai.com/v1/chat/completions\ \n'
        +'  -H "Content-Type: application/json" \ \n'
        +'  -H "Authorization: Bearer $OPENAI_API_KEY" \ \n'
        +"  -d '{ \n"
        +'      "model": "gpt-3.5-turbo",\n'
        +'      "response_format": { "type": "json_object" },\n'
        +'      "messages": [ \n'
        +'          { \n'
        +'              "role": "system", \n'
        +'              "content": "You are a helpful assistant." \n'
        +'          }\n'
        +'          {\n'
        +'              "role": "user",\n'
        +'              "content": "Who won the world series in 2020?"\n'
        +'          }\n'
        +'          {\n'
        +'              "role": "assistant",\n'
        +'               "content": "The Los Angeles Dodgers won the World Series in 2020."\n'
        +'          }\n'
        +'          {\n'
        +'              "role": "user",\n'
        +'              "content": "Where was it played?"\n'
        +'          }\n'
        +'      ]\n'
        +"  }'\n"


    const python_chatAPI_jsonMode = '```js \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.chat.completions.create( \n'
    +'  model="gpt-3.5-turbo", \n'
    +'  response_format={ "type": "json_object" }, \n'
    +'  messages=[ \n'
    +'    {"role": "system", "content": "You are a helpful assistant."}, \n'
    +'    {"role": "user", "content": "Who won the world series in 2020?"}, \n'
    +'    {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."}, \n'
    +'    {"role": "user", "content": "Where was it played?"} \n'
    +'  ]\n'
    +')\n'

    const node_chatAPI_jsonMode = '```js \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'async function main() { \n'
    +'  const completion = await openai.chat.completions.create({ \n'
    +'      messages: [{"role": "system", "content": "You are a helpful assistant."}, \n'
    +'          {"role": "user", "content": "Who won the world series in 2020?"}, \n'
    +'          {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."}, \n'
    +'          {"role": "user", "content": "Where was it played?"}], \n'
    +'      model: "gpt-3.5-turbo", \n'
    +'      response_format: { type: "json_object" }, \n'
    +'  }); \n'
    +'  console.log(completion.choices[0]); \n'
    +'} \n'
    +'main();'



    return {
        activeName_jsonMode,
        curl_chatAPI_jsonMode,
        python_chatAPI_jsonMode,
        node_chatAPI_jsonMode
    }




}