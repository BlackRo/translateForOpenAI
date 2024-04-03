import {ref} from 'vue'

export default function(){

    
    const  improvingReliability_names = ref(['0'])

    const improvingReliability_demo_prompt = '```js \n'
    +'transcribe(filepath, prompt="ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array, OrbitalLink Seven, DigiFractal Matrix, PULSE, RAPT, B.R.I.C.K., Q.U.A.R.T.Z., F.L.I.N.T.")'
    
    const improvingReliability_demo_GPT = '```python \n'
    +'system_prompt = "You are a helpful assistant for the company ZyntriQix. Your task is to correct any spelling discrepancies in the transcribed text. Make sure that the names of the following products are spelled correctly: ZyntriQix, Digique Plus, CynapseFive, VortiQore V8, EchoNix Array, OrbitalLink Seven, DigiFractal Matrix, PULSE, RAPT, B.R.I.C.K., Q.U.A.R.T.Z., F.L.I.N.T. Only add necessary punctuation such as periods, commas, and capitalization, and use only the context provided." \n'
    +'def generate_corrected_transcript(temperature, system_prompt, audio_file): \n'
    +'  response = client.chat.completions.create( \n'
    +'      model="gpt-4", \n'
    +'      temperature=temperature, \n'
    +'      messages=[ \n'
    +'          { \n'
    +'              "role": "system", \n'
    +'              "content": system_prompt \n'
    +'          }, \n'
    +'          { \n'
    +'              "role": "user", \n'
    +'              "content": transcribe(audio_file, "") \n'
    +'          } \n'
    +'      ] \n'
    +'  ) \n'
    +"  return response['choices'][0]['message']['content'] \n"
    +'corrected_text = generate_corrected_transcript(0, system_prompt, fake_company_filepath) \n'


    return{
        improvingReliability_names,
        improvingReliability_demo_GPT,
        improvingReliability_demo_prompt
    }

}