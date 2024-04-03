import {ref} from 'vue'


export default function(){


    const fineTuningExampleOne_names = ref(['0'])

    const fineTuningExampleOne_messages = '```json \n'
    +'{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "What\'s the capital of France?"}, {"role": "assistant", "content": "Paris, as if everyone doesn\'t know that already."}]} \n'
    +'{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "Who wrote \'Romeo and Juliet\'?"}, {"role": "assistant", "content": "Oh, just some guy named William Shakespeare. Ever heard of him?"}]} \n'
    +'{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "How far is the Moon from Earth?"}, {"role": "assistant", "content": "Around 384,400 kilometers. Give or take a few, like that really matters."}]} \n'


    const fineTuningExampleOne_stylestone = '```json \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'file = client.files.create( \n'
    +'  file=open("marv.jsonl", "rb"), \n'
    +'  purpose="fine-tune" \n'
    +') \n'
    +'client.fine_tuning.jobs.create( \n'
    +'  training_file=file.id, \n'
    +'  model="gpt-3.5-turbo" \n'
    +') \n'

    const  fineTuningExampleOne_so_one = '```json \n'
    +'{"messages": [{"role": "system", "content": "Given a sports headline, provide the following fields in a JSON dict, where applicable: "player" (full name)", "team", "sport", and "gender".},{"role": "user", "content": "Sources: Colts grant RB Taylor OK to seek trade"}, \n'
    +'{"role": "assistant", "content": "{"player": "Jonathan Taylor", "team": "Colts", "sport": "football", "gender": "male" }"},]} \n'
    +'{"messages": [{"role": "system", "content": "Given a sports headline, provide the following fields in a JSON dict, where applicable: "player" (full name)", "team", "sport", and "gender".},{"role": "user", "content": "OSU \'split down middle\' on starting QB battle"}, \n'
    +'{"role": "assistant", "content": "{"player": null, "team": "OSU", "sport": "football", "gender": null }"},]} \n'

    const fineTuningExampleOne_so_two = '```json \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'file = client.files.create( \n'
    +'  file=open("sports-context.jsonl", "rb"), \n'
    +'  purpose="fine-tune" \n'
    +') \n'
    +'client.fine_tuning.jobs.create( \n'
    +'  training_file=file.id, \n'
    +'  model="gpt-3.5-turbo" \n'
    +') \n'
    

    const fineTuningExampleOne_so_three = '```js \n '
    +'completion = client.chat.completions.create( \n'
    +'  model="ft:gpt-3.5-turbo:my-org:custom_suffix:id", \n'
    +'  messages=[ \n'
    +'      {"role": "system", "content": "Given a sports headline, provide the following fields in a JSON dict, where applicable: player (full name), team, sport, and gender"}, \n'
    +'      {"role": "user", "content": "Richardson wins 100m at worlds to cap comeback"} \n'
    +'  ] \n'
    +') \n'
    +'print(completion.choices[0].message) \n'

    const fineTuningExampleOne_so_four = '```js \n'
    +'{"player": "Sha\'Carri Richardson", "team": null", "sport": "track and field", "gender": "female"} \n'
    

    const fineTuningExampleOne_fc_one = '```js \n'
    +'{ \n'
    +'  "messages": [ \n'
    +'      {"role": "user", "content": "What is the weather in San Francisco?"}, \n'
    +'      {"role": "assistant", "function_call": {"name": "get_current_weather", "arguments": "{\"location\": \"San Francisco, USA\", \"format\": \"celcius\"}"} \n'
    +'  ], \n'
    +'  "functions": [{ \n'
    +'      "name": "get_current_weather", \n'
    +'      "description": "Get the current weather", \n'
    +'      "parameters": { \n'
    +'          "type": "object", \n'
    +'          "properties": { \n'
    +'              "location": {"type": "string", "description": "The city and country, eg. San Francisco, USA"},\n'
    +'              "format": {"type": "string", "enum": ["celsius", "fahrenheit"]} \n'
    +'          }, \n'
    +'          "required": ["location", "format"] \n'
    +'      } \n'
    +'  }] \n'
    +' } \n'

    const fineTuningExampleOne_fc_otwo = '```js \n'
    +'{ \n'
    +'  "messages": [ \n'
    +'      {"role": "user", "content": "What is the weather in San Francisco?"}, \n'
    +'      {"role": "assistant", "function_call": {"name": "get_current_weather", "arguments": "{\"location\": \"San Francisco, USA\", \"format\": \"celcius\"}"}} \n'
    +'      {"role": "function", "name": "get_current_weather", "content": "21.0"}, \n'
    +'      {"role": "assistant", "content": "It is 21 degrees celsius in San Francisco, CA"} \n'
    +'  ], \n'
    +'  "functions": [...] // same as before \n'
    +'} \n'

    return {
        fineTuningExampleOne_names,
        fineTuningExampleOne_messages,
        fineTuningExampleOne_stylestone,
        fineTuningExampleOne_so_one,
        fineTuningExampleOne_so_two,
        fineTuningExampleOne_so_three,
        fineTuningExampleOne_so_four,
        fineTuningExampleOne_fc_one,
        fineTuningExampleOne_fc_otwo
    }
}