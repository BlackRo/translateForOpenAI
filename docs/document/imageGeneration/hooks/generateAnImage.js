import { ref } from 'vue'

export default function () {

    const generateAnImage_activeName = ref('Python');
    const generateAnImage_node = '```js \n'
    +"const response = await openai.createImage({ \n"
    +'  model: "dall-e-3", \n'
    +'  prompt: "a white siamese cat", \n'
    +"  n: 1, \n"
    +'  size: "1024x1024", \n'
    +"}); \n"
    +"image_url = response.data.data[0].url; \n"



    const generateAnImage_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.images.generate( \n'
    +'  model="dall-e-3",  \n'
    +'  prompt="a white siamese cat", \n'
    +'  size="1024x1024", \n'
    +'  quality="standard", \n'
    +'  n=1, \n'
    +') \n'
    +'image_url = response.data[0].url \n'
  

    const generateAnImage_curl = '```js \n'
    +'curl https://api.openai.com/v1/images/generations \\ \n'
    +'  -H "Content-Type: application/json"  \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\ \n'
    +'  -d \'{ \\ \n'
    +'      "model": "dall-e-3", \\ \n'
    +'      "prompt": "a white siamese cat", \\ \n'
    +'      "n": 1, \\ \n'
    +'      "size": "1024x1024", \\ \n'
    +'  }\' \\ \n'

    return {
       generateAnImage_activeName,
       generateAnImage_node,
       generateAnImage_python,
       generateAnImage_curl
    }

}