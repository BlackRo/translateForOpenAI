import { ref } from 'vue'

export default function () {

    const creatModelFour_activeName = ref('Python');

    const creatModelFour_node = '```js \n'
    +'const fineTune = await openai.fineTuning.jobs.create({training_file: "file-abc123", model: "gpt-3.5-turbo", hyperparameters: { n_epochs: 2 }}); \n'
 



    const creatModelFour_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'client.fine_tuning.jobs.create( \n'
    +'  training_file="file-abc123", \n'
    +'  model="gpt-3.5-turbo", \n'
    +'  hyperparameters={ \n'
    +'      "n_epochs":2 \n'
    +'  }\n'
    +')  \n'
  
    return {
        creatModelFour_activeName,
        creatModelFour_node,
        creatModelFour_python
    }

}