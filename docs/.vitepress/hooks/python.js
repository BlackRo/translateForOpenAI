import {ref} from 'vue'

export default function(){

    let pythonStr =
    "```python \n" +
    "from openai import OpenAI \n" +
    "client = OpenAI()\n" +
    "completion = client.chat.completions.create(\n" +
    '      model="gpt-3.5-turbo",\n' +
    "      messages=[\n" +
    '          {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},\n' +
    '          {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}\n' +
    "      ]\n" +
    ") \n"+
    'print(completion.choices[0].message) \n```'
    // # Once you add your API key below, make sure to not share it with anyone! The API key should remain private.
    const tempstr = '```python \n'
    +'from openai import OpenAI \n'
    +'client = OpenAI() \n'
    +'# 默认情况下，可以使用os.environ.get("OPENAI_API_KEY")来获取API密钥。 \n'
    +'# 如果您将密钥保存在其他环境变量名下，可以进行如下操作： \n'
    +'# client = OpenAI( \n'
    +'#   api_key=os.environ.get("CUSTOM_ENV_NAME"), \n'
    +'# )\n'
    
    const py_demo1 = ref("```python\n python -m venv openai-env \n```");
    const py_demo2 = ref("```python\n openai-env\Scripts\activate \n```");
    const py_demo3= ref("```python\n source openai-env/bin/activate \n```");
    const py_demo4= ref("```python\n pip install --upgrade openai \n```");
    const py_Step21demo1= ref("```python\n export OPENAI_API_KEY='your-api-key-here' \n```");
    const py_API_windows= ref('```python\n setx OPENAI_API_KEY "your-api-key-here" \n```');
    const py_Step22demo1= ref("```python\n # 在添加API密钥后，请确保不与任何人分享！API密钥应保持私密。 \n OPENAI_API_KEY=abc123 \n```");
    const py_Step22demo2= ref(tempstr);
    const py_markText = ref(pythonStr);
    const py_activeName = ref("Curl");
    const py_activeNames = ref(["0"]);
    const py_curlStep2Names = ref(["0"]);
    const py_Step21Names = ref(["0"]);
    const py_curlStep3Names = ref(["0"]);
    const py_value = ref("ChatCompletions");

    const pythonChange = (val)=>{
        if (val == "Embeddings") {
            py_markText.value =
                "```python \n" +
                'from openai import OpenAI \n' +
                'client = OpenAI() \n' +
                'response = client.embeddings.create( \n' +
                '  model="text-embedding-ada-002",  \n' +
                '  input="The food was delicious and the waiter..." \n' +
                ') \n' +
                "print(response) \n";
        }
        if (val == "ChatCompletions") {
            py_markText.value = pythonStr;
        }
        if (val == "Images") {
            py_markText.value =
                "```python \n" +
                'from openai import OpenAI \n' +
                'client = OpenAI() \n' +
                'response = client.images.generate( \n' +
                '   prompt="A cute baby sea otter", \n'+
                '   n=2,'+
                '   size="1024x1024" \n'+
                ') \n'+
                'print(response)\n'
        }

    }
    return {
        py_markText,
        py_activeName,
        py_activeNames,
        py_curlStep2Names,
        py_curlStep3Names,
        py_value,
        py_demo1,
        py_demo2,
        py_demo3,
        py_demo4,
        py_Step21Names,
        py_Step21demo1,
        py_Step22demo1,
        py_Step22demo2,
        pythonChange,
        py_API_windows
    }

}