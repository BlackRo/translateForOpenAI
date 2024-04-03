import { ref } from 'vue'

export default function () {

    const imageVariation_activeName = ref('Python');
    const imageVariation_node = '```js \n'
    +"const response = await openai.createImageVariation( \n"
    +'  fs.createReadStream("corgi_and_cat_paw.png"), \n'
    +'  "dall-e-2", \n'
    +'  1, \n'
    +'  "1024x1024" \n'
    +"}); \n"
    +"image_url = response.data.data[0].url; \n"



    const imageVariation_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.images.create_variation( \n'
    +'  image=open("image_edit_original.png", "rb"),  \n'
    +'  n=2, \n'
    +'  size="1024x1024" \n'
    +') \n'
    +'image_url = response.data[0].url \n'
  

    const imageVariation_curl = '```js \n'
    +'curl https://api.openai.com/v1/images/variations \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -F image=\'@corgi_and_cat_paw.png\'  \\ \n'
    +'  -F model="dall-e-2"  \\ \n'
    +'  -F n=1  \\ \n'
    +'  -F size="1024x1024" \\ \n'
  

    return {
       imageVariation_activeName,
       imageVariation_node,
       imageVariation_python,
       imageVariation_curl
    }

}