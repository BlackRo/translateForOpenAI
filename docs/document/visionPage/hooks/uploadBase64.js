import { ref } from 'vue'

export default function () {

    const uploadBase64_activeName = ref('Python');

    const uploadBase64_python = '```python \n'
    +'import base64 \n'
    +'import requests \n'
    +'# OpenAI API Key \n'
    +'api_key = "YOUR_OPENAI_API_KEY" \n'
    +'# Function to encode the image \n'
    +'def encode_image(image_path): \n'
    +'  with open(image_path, "rb") as image_file: \n'
    +'      return base64.b64encode(image_file.read()).decode(\'utf-8\') \n'
    +'# Path to your image \n'
    +'image_path = "path_to_your_image.jpg" \n'
    +'# Getting the base64 string \n'
    +'base64_image = encode_image(image_path) \n'
    +'headers = { \n'
    +'  "Content-Type": "application/json", \n'
    +'  "Authorization": f"Bearer {api_key}" \n'
    +'} \n'
    +'payload = { \n'
    +'  "model": "gpt-4-vision-preview", \n'
    +'  "messages": [ \n'
    +'      { \n'
    +'          "role": "user", \n'
    +'          "content": [ \n'
    +'              { \n'
    +'                  "type": "text", \n'
    +'                  "text": "What’s in this image?" \n'
    +'              }, \n'
    +'              { \n'
    +'                  "type": "image_url", \n'
    +'                  "image_url": { \n'
    +'                      "url": f"data:image/jpeg;base64,{base64_image}" \n'
    +'                  } \n'
    +'              } \n'
    +'          ] \n'
    +'      } \n'
    +'  ], \n'
    +'"max_tokens": 300 \n'
    +'} \n'
    +'response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)    \n'
    +'print(response.json()) \n'
 
  

    
    return {
       uploadBase64_activeName,
       uploadBase64_python,
    }

}