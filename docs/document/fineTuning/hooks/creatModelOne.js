import { ref } from 'vue'

export default function () {

    const creatModelOne_activeName = ref('Python');
    const creatModelOne_node = '```js \n'
    +"const fineTune = await openai.fineTuning.jobs.create({ training_file: 'file-abc123', model: 'gpt-3.5-turbo' }) \n"



    const creatModelOne_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'client.fine_tuning.jobs.create( \n'
    +'  training_file="file-abc123",  \n'
    +'  model="gpt-3.5-turbo" \n'
    +') \n'
  
    return {
        creatModelOne_activeName,
        creatModelOne_node,
        creatModelOne_python
    }

}