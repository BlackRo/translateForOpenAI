import {ref} from 'vue'


export default  function(){

    const node_markText_temp = 
    "```js \n" +
    'import OpenAI from "openai" \n' +
    "const openai = new OpenAI();\n" +
    "async function main() {\n" +
    '      const completion = await openai.chat.completions.create({ \n' +
    '           messages: [{ role: "system", content: "You are a helpful assistant." }],\n' +
    '           model: "gpt-3.5-turbo",\n' +
    "       });\n" +
    "       console.log(completion.choices[0]); \n"+
    '}'
    'main(); \n```'
    const installStr = '```js \n npm install --save openai \n' + ' # or \n' + ' yarn add openai \n```'
    // const installStr = ref("1222")
    const node_Step21demo1 = ref("```js \n export OPENAI_API_KEY='your-api-key-here'\n ```")
    const node_API_window = ref('```js \n setx OPENAI_API_KEY "your-api-key-here" \n ```')
    const node_demo1=ref(installStr)
    const node_markText = ref(node_markText_temp);
    const node_activeName = ref("Curl");
    const node_activeNames = ref(["0"]);
    const node_curlStep2Names = ref(["0"]);
    const node_step3Names = ref(["0"]);
    const node_value = ref("ChatCompletions");
    const nodeChange = (val)=>{
        if (val == "Embeddings") {
            node_markText.value =
                "```js \n" +
                'import OpenAI from "openai" \n' +
                "const openai = new OpenAI();\n" +
                "async function main() {\n" +
                '      const embedding = await openai.embeddings.create({ \n' +
                '           model: "text-embedding-ada-002",\n' +
                '          input: "The quick brown fox jumped over the lazy dog",\n' +
                "       });\n" +
                "       console.log(embedding); \n"+
                '}'
                'main(); \n```'
        }
        if (val == "ChatCompletions") {
            node_markText.value = node_markText_temp;
        }
        if (val == "Images") {
            node_markText.value =
                "```js \n" +
                'import OpenAI from "openai";v \n' +
                'const openai = new OpenAI(); \n' +
                'async function main() {( \n' +
                '   const image = await openai.images.generate({ prompt: "A cute baby sea otter" }); \n'+
                '   console.log(image.data);'+
                '} \n'+
                'main();\n'
        }

    }
    return {

        node_demo1,
        node_markText,
        node_activeName,
        node_activeNames,
        node_curlStep2Names,
        node_step3Names,
        node_value,
        node_Step21demo1,
        node_API_window,
        nodeChange
    }

}