import { ref } from 'vue'

export default function () {

    const creatModelThree_activeName = ref('Python');

    const creatModelThree_node = '```js \n'
    +"async function main() { \n"
    +"  const completion = await openai.chat.completions.create({ \n"
    +'      messages: [{ role: "system", content: "You are a helpful assistant." }], \n'
    +'      model: "ft:gpt-3.5-turbo:my-org:custom_suffix:id", \n'
    +"  }); \n"
    +"  console.log(completion.choices[0]); \n"
    +"} \n"
    +"main(); \n"



    const creatModelThree_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'response = client.chat.completions.create( \n'
    +'  model="ft:gpt-3.5-turbo:my-org:custom_suffix:id", \n'
    +'  messages=[ \n'
    +'      {"role": "system", "content": "You are a helpful assistant."}, \n'
    +'      {"role": "user", "content": "Hello!"} \n'
    +'  ] \n'
    +')  \n'
    +'print(completion.choices[0].message) \n'
  
    return {
        creatModelThree_activeName,
        creatModelThree_node,
        creatModelThree_python
    }

}