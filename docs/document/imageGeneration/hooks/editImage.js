import { ref } from 'vue'

export default function () {

    const editImage_activeName = ref('Python');
    const editImage_node = '```js \n'
    +"const response = await openai.createImageEdit( \n"
    +'  fs.createReadStream("sunlit_lounge.png"), \n'
    +'  fs.createReadStream("mask.png"), \n'
    +'  "dall-e-2", \n'
    +'  "A sunlit indoor lounge area with a pool containing a flamingo", \n'
    +'  1, \n'
    +'  "1024x1024" \n'
    +"}); \n"
    +"image_url = response.data.data[0].url; \n"



    const editImage_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.images.edit(( \n'
    +'  model="dall-e-2",  \n'
    +'  image=open("sunlit_lounge.png", "rb"), \n'
    +'  mask=open("mask.png", "rb"), \n'
    +'  prompt="A sunlit indoor lounge area with a pool containing a flamingo", \n'
    +'  n=1, \n'
    +'  size="1024x1024" \n'
    +') \n'
    +'image_url = response.data[0].url \n'
  

    const editImage_curl = '```js \n'
    +'curl https://api.openai.com/v1/images/edits \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY"  \\ \n'
    +'  -F image="@sunlit_lounge.png"  \\ \n'
    +'  -F mask="@mask.png"  \\ \n'
    +'  -F model="dall-e-2"  \\ \n'
    +'  -F prompt="A sunlit indoor lounge area with a pool containing a flamingo"  \\ \n'
    +'  -F n=1  \\ \n'
    +'  -F size="1024x1024" \\ \n'
  

    return {
       editImage_activeName,
       editImage_node,
       editImage_python,
       editImage_curl
    }

}