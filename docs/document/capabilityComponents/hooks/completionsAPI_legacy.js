import {ref} from 'vue'

export default function(){


const completionsAPI_legacy_activeName = ref('Python')
const completionsAPI_legacy_python = '```python \n'
+'from openai import OpenAI \n'
+'client = OpenAI() \n'
+'\n'
+'response = client.completions.create( \n'
+'  model="gpt-3.5-turbo-instruct", \n'
+'  prompt="Write a tagline for an ice cream shop." \n'
+')\n'

const completionsAPI_legacy_node = '```js \n'
+'const completion = await openai.completions.create({ \n'
+'    model: \'gpt-3.5-turbo-instruct\', \n'
+'    prompt: \'Write a tagline for an ice cream shop.\' \n'
+'}); \n'


return {
    completionsAPI_legacy_activeName,
    completionsAPI_legacy_node,
    completionsAPI_legacy_python
}


}