import { ref } from 'vue'

export default function () {

    const languageSpecific_activeName = ref('Node');
    
    const languageSpecific_node_one = '```js \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'// This is the Buffer object that contains your image data \n'
    +'const buffer = [your image data]; \n'
    +'// Set a `name` that ends with .png so that the API knows it\'s a PNG image \n'
    +'buffer.name = "image.png"; \n'
    +"async function main() { \n"
    +'  const image = await openai.images.createVariation({ model: "dall-e-2", image: buffer, n: 1, size: "1024x1024" }); \n'
    +"  console.log(image.data); \n"
    +"} \n"
    +"main(); \n"

    const languageSpecific_node_two = '```js \n'
    +'import fs from "fs"; \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +"async function main() { \n"
    +"  // Cast the ReadStream to `any` to appease the TypeScript compiler \n"
    +'  const image = await openai.images.createVariation({  \n'
    +'      image: fs.createReadStream("image.png") as any, \n'
    +"  }); \n"
    +"  console.log(image.data); \n"
    +"} \n"
    +"main(); \n"

    const languageSpecific_node_three ='```js \n'
    +'import fs from "fs"; \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'// This is the Buffer object that contains your image data \n'
    +'const buffer = [your image data]; \n'
    +'// Cast the buffer to `any` so that we can set the `name` property \n'
    +'const file: any = buffer; \n'
    +'// Set a `name` that ends with .png so that the API knows it\'s a PNG image \n'
    +'buffer.name = "image.png"; \n'
    +"async function main() { \n"
    +'  const image = await openai.images.createVariation({ \n'
    +"      file, \n"
    +"      1, \n"
    +'      "1024x1024" \n'
    +"  }); \n"
    +"  console.log(image.data); \n"
    +"} \n"
    +"main(); \n"



    const languageSpecific_node_four='```js \n'
    +'import fs from "fs"; \n'
    +'import OpenAI from "openai"; \n'
    +'const openai = new OpenAI(); \n'
    +'try { \n'
    +'  const response = openai.images.createVariation( \n'
    +'      fs.createReadStream("image.png"), \n'
    +'      1, \n'
    +'      "1024x1024" \n'
    +'  ); \n'
    +'  console.log(response.data.data[0].url); \n'
    +'} catch (error) { \n'
    +'  if (error.response) { \n'
    +'      console.log(error.response.status); \n'
    +'      console.log(error.response.data); \n'
    +'  } else { \n'
    +'      console.log(error.message); \n'
    +'  } \n'
    +'} \n'

    const languageSpecific_python_one = '```python \n'
    +'from io import BytesIO \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'# This is the BytesIO object that contains your image data \n'
    +'byte_stream: BytesIO = [your image data] \n'
    +'byte_array = byte_stream.getvalue() \n'
    +'response = client.images.create_variation( \n'
    +'  image=byte_array,  \n'
    +'  n=1, \n'
    +'  model="dall-e-2",'
    +'  size="1024x1024" \n'
    +') \n'
  
    const languageSpecific_python_two ='```python \n'
    +'from io import BytesIO \n'
    +'from PIL import Image \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'# Read the image file from disk and resize it \n'
    +'image = Image.open("image.png") \n'
    +'width, height = 256, 256 \n'
    +'image = image.resize((width, height)) \n'
    +'# Convert the image to a BytesIO object \n'
    +'byte_stream = BytesIO() \n'
    +'image.save(byte_stream, format=\'PNG\') \n'
    +'byte_array = byte_stream.getvalue() \n'
    +'response = client.images.create_variation( \n'
    +'  image=byte_array,  \n'
    +'  n=1, \n'
    +'  model="dall-e-2",'
    +'  size="1024x1024" \n'
    +') \n'

    const languageSpecific_python_three = '```python \n'
    +'import openai \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'try: \n'
    +'  response = client.images.create_variation( \n'
    +'      image=open("image_edit_mask.png", "rb"), \n'
    +'      n=1, \n'
    +'      model="dall-e-2", \n'
    +'      size="1024x1024" \n'
    +'  ) \n'
    +'  print(response.data[0].url) \n'
    +'except openai.OpenAIError as e: \n'
    +'  print(e.http_status)  \n'
    +'  print(e.error) \n'



    return {
       languageSpecific_activeName,
       languageSpecific_node_one,
       languageSpecific_node_two,
       languageSpecific_node_three,
       languageSpecific_node_four,
       languageSpecific_python_one,
       languageSpecific_python_two,
       languageSpecific_python_three
    }

}