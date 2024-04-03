
import { ref } from 'vue'

export default function () {

    const definingFunctions_activeName = ref('Python');

    const definingFunctions_node = '```js \n'
    +`const assistant = await openai.beta.assistants.create({
        instructions: "You are a weather bot. Use the provided functions to answer questions.",
        model: "gpt-4-1106-preview",
        tools: [
        {
            "type": "function",
            "function": {
                "name": "getCurrentWeather",
                "description": "Get the weather in location",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {"type": "string", "description": "The city and state e.g. San Francisco, CA"},
                        "unit": {"type": "string", "enum": ["c", "f"]}
                    },
                    "required": ["location"]
                }
            }
        }, 
        {
            "type": "function",
            "function": {
                "name": "getNickname",
                "description": "Get the nickname of a city",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {"type": "string", "description": "The city and state e.g. San Francisco, CA"},
                    },
                    "required": ["location"]
                }
            }
        }]
    }); \n`
 

    const definingFunctions_python = '```python \n'
    +`assistant = client.beta.assistants.create(
        instructions="You are a weather bot. Use the provided functions to answer questions.",
        model="gpt-4-1106-preview",
        tools=[
        {
            "type": "function",
            "function": {
                "name": "getCurrentWeather",
                "description": "Get the weather in location",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {"type": "string", "description": "The city and state e.g. San Francisco, CA"},
                        "unit": {"type": "string", "enum": ["c", "f"]}
                    },
                    "required": ["location"]
                }
            }
        }, 
        {
          "type": "function",
          "function": {
                "name": "getNickname",
                "description": "Get the nickname of a city",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {"type": "string", "description": "The city and state e.g. San Francisco, CA"},
                    },
                    "required": ["location"]
                }
            } 
        }]
      )`

  

    const definingFunctions_curl = '```js \n'
    +`curl https://api.openai.com/v1/assistants \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "OpenAI-Beta: assistants=v1" \
    -d '{
      "instructions": "You are a weather bot. Use the provided functions to answer questions.",
      "tools": [{
        "type": "function",
        "function": {
          "name": "getCurrentWeather",
          "description": "Get the weather in location",
          "parameters": {
            "type": "object",
            "properties": {
              "location": {"type": "string", "description": "The city and state e.g. San Francisco, CA"},
              "unit": {"type": "string", "enum": ["c", "f"]}
            },
            "required": ["location"]
          }
        }	
      },
      {
        "type": "function",
        "function": {
          "name": "getNickname",
          "description": "Get the nickname of a city",
          "parameters": {
            "type": "object",
            "properties": {
              "location": {"type": "string", "description": "The city and state e.g. San Francisco, CA"}
            },
            "required": ["location"]
          }
        }	
      }],
      "model": "gpt-4-1106-preview"
    }'`




    return {
       definingFunctions_activeName,
       definingFunctions_node,
       definingFunctions_python,
       definingFunctions_curl
    }
}