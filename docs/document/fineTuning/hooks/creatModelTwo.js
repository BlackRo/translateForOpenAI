import { ref } from 'vue'

export default function () {

    const creatModelTwo_activeName = ref('Python');
    const creatModelTwo_node = '```js \n'
    +"# List 10 fine-tuning jobs \n"
    +"let page = await openai.fineTuning.jobs.list({ limit: 10 }); \n"
    +"# Retrieve the state of a fine-tune \n"
    +"let fineTune = await openai.fineTuning.jobs.retrieve('ftjob-abc123'); \n"
    +"# Cancel a job \n"
    +"let status = await openai.fineTuning.jobs.cancel('ftjob-abc123'); \n"
    +"# List up to 10 events from a fine-tuning job \n"
    +"let events = await openai.fineTuning.jobs.listEvents(fineTune.id, { limit: 10 }); \n"
    +"# Delete a fine-tuned model (must be an owner of the org the model was created in) \n"
    +"let model = await openai.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123') \n"



    const creatModelTwo_python = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'# List 10 fine-tuning jobs \n'
    +'client.fine_tuning.jobs.list(limit=10) \n'
    +'# Retrieve the state of a fine-tune \n'
    +'client.fine_tuning.jobs.retrieve("ftjob-abc123") \n'
    +'# Cancel a job \n'
    +'client.fine_tuning.jobs.cancel("ftjob-abc123") \n'
    +'# List up to 10 events from a fine-tuning job \n'
    +'client.fine_tuning.jobs.list_events(fine_tuning_job_id="ftjob-abc123", limit=10) \n'
    +'# Delete a fine-tuned model (must be an owner of the org the model was created in) \n'
    +'client.models.delete("ft:gpt-3.5-turbo:acemeco:suffix:abc123") \n'
  
    return {
        creatModelTwo_activeName,
        creatModelTwo_node,
        creatModelTwo_python
    }

}