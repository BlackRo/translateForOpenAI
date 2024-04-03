import { ref } from 'vue'

export default function () {

    const visionDemo_activeName = ref('Python');
    const visionDemo_node = '```js \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'async function main() { \n'
    +'    const response = await openai.chat.completions.create({ \n'
    +'        model: "gpt-4-vision-preview", \n'
    +'        messages: [ \n'
    +'            { \n'
    +'                role: "user", \n'
    +'                content: [, \n'
    +'                    { type: "text", text: "What’s in this image?" }, \n'
    +'                    {, \n'
    +'                        type: "image_url", \n'
    +'                        image_url: { \n'
    +'                            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg", \n'
    +'                        }, \n'
    +'                    }, \n'
    +'                ], \n'
    +'            }, \n'
    +'        ], \n'
    +'    }); \n'
    +'    console.log(response.choices[0]); \n'
    +'} \n'
    +'main(); \n'



    const visionDemo_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.chat.completions.create( \n'
    +'  model="gpt-4-vision-preview",  \n'
    +'  messages=[ \n'
    +'      { \n'
    +'          "role": "user", \n'
    +'          "content": [ \n'
    +'              {"type": "text", "text": "What’s in this image?"}, \n'
    +'              { \n'
    +'                  "type": "image_url", \n'
    +'                  "image_url": { \n'
    +'                      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg", \n'
    +'                  }, \n'
    +'              }, \n'
    +'          ], \n'
    +'      } \n'
    +'  ], \n'
    +'  max_tokens=300, \n'
    +') \n'
    +'print(response.choices[0]) \n'
  

    const visionDemo_curl = '```js \n'
    +'curl https://api.openai.com/v1/chat/completions \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -d \'{   \n'
    +'      "model": "gpt-4-vision-preview",   \n'
    +'      "messages": [   \n'
    +'          {  \n'
    +'              "role": "user", \n'
    +'              "content": [,  \n'
    +'                  {,  \n'
    +'                      "type": "text",  \n'
    +'                      "text": "What’s in this image?"  \n'
    +'                  },  \n'
    +'                  {  \n'
    +'                      "type": "image_url", \n'
    +'                      "image_url": {  \n'
    +'                          "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"  \n'
    +'                      } \n'
    +'                  } \n'
    +'              ] \n'
    +'          } \n'
    +'      ], \n'
    +'      "max_tokens": 300 \n'
    +'  }\' \n'

    return {
       visionDemo_activeName,
       visionDemo_node,
       visionDemo_python,
       visionDemo_curl
    }

}