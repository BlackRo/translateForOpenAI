
import {ref} from 'vue'

export default function(){

    const embeddingsGet_markdown_activeName = ref('curl')

    const embeddingsGet_curl = '``` \n'
    +'curl https://api.openai.com/v1/embeddings \\ \n'
    +'  -H "Content-Type: application/json" \\ \n'
    +'  -H "Authorization: Bearer $OPENAI_API_KEY" \\ \n'
    +'  -d \'{ \n'
    +'      "input": "Your text string goes here", \n'
    +'      "model": "text-embedding-ada-002"  \n'
    +'  }\' \n'


    const embeddingsGet_python = '``` \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.embeddings.create( \n'
    +'  input="Your text string goes here", \n'
    +'  model="text-embedding-ada-002" \n'
    +') \n'
    +'print(response.data[0].embedding)'


    // const embeddingsGet_node = ''

    return{
        embeddingsGet_markdown_activeName,
        embeddingsGet_curl,
        embeddingsGet_python,
        // embeddingsGet_node
    }

}