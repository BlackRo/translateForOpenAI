import {ref} from 'vue'

export default function(){


    const countingTokens_names = ref(["0"])

    const countingTokens_python_markText = '```python \n'
    +'def num_tokens_from_messages(messages, model="gpt-3.5-turbo-0613"): \n'
    +'  """Returns the number of tokens used by a list of messages.""" \n'
    +'  try: \n'
    +'      encoding = tiktoken.encoding_for_model(model) \n'
    +'  except KeyError: \n'
    +'    encoding = tiktoken.get_encoding("cl100k_base") \n'
    +'  if model == "gpt-3.5-turbo-0613":  # note: future models may deviate from this \n'
    +'      num_tokens = 0 \n'
    +'      for message in messages: \n' 
    +'        num_tokens += 4  # every message follows <im_start>{role/name}\n{content}<im_end>\n \n'
    +'        for key, value in message.items(): \n'
    +'            num_tokens += len(encoding.encode(value)) \n'
    +'            if key == "name":  # if there\'s a name, the role is omitted \n'
    +'                num_tokens += -1  # role is always required and always 1 token \n'
    +'    num_tokens += 2  # every reply is primed with <im_start>assistant \n'
    +'    return num_tokens \n'
    +'  else: \n'
    +'      raise NotImplementedError(f"""num_tokens_from_messages() is not presently implemented for model {model}.\n'
    +'See https://github.com/openai/openai-python/blob/main/chatml.md for information on how messages are converted to tokens.""")\n'
    +'```'

    const countingTokens_message_markText = '```python \n'
    +'messages = [ \n'
    +'   {"role": "system", "content": "You are a helpful, pattern-following assistant that translates corporate jargon into plain English."}, \n'
    +'   {"role": "system", "name":"example_user", "content": "New synergies will help drive top-line growth."}, \n'
    +'   {"role": "system", "name": "example_assistant", "content": "Things working well together will increase revenue."}, \n'
    +'   {"role": "system", "name":"example_user", "content": "Let\'s circle back when we have more bandwidth to touch base on opportunities for increased leverage."}, \n'
    +'   {"role": "system", "name": "example_assistant", "content": "Let\'s talk later when we\'re less busy about how to do better."},\n'
    +'   {"role": "user", "content": "This late pivot means we don\'t have time to boil the ocean for the client deliverable."},\n'
    +'] \n'
    +'\n'  
    +'model = "gpt-3.5-turbo-0613" \n' 
    +'print(f"{num_tokens_from_messages(messages, model)} prompt tokens counted.") \n'
    +'# Should show ~126 total_tokens\n'
    +'```'
    const countingTokens_example_markText ='```python \n'
    +'# example token count from the OpenAI API \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'\n'
    +'response = client.chat.completions.create( \n'
    +'  model=model, \n'
    +'  messages=messages,\n'
    +'  temperature=0,\n'
    +')'
    +'\n'
    +'print(f\'{response.usage.prompt_tokens} prompt tokens used.\')\n'
    
    return {
        countingTokens_example_markText,
        countingTokens_message_markText,
        countingTokens_python_markText,
        countingTokens_names 
    }

}