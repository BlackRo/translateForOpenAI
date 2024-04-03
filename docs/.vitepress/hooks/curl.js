import { ref } from 'vue'

export default function () {

    let curlStr =
        "```bash \n" +
        'curl https://api.openai.com/v1/chat/completions   -H "Content-Type: application/json"   -H "Authorization: Bearer $OPENAI_API_KEY"   -d \'{\n' +
        '     "model": "gpt-3.5-turbo",\n' +
        '     "messages": [\n' +
        "          {\n" +
        '              "role": "system",\n' +
        '              "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."\n' +
        "          },\n" +
        "          {\n" +
        '              "role": "user",\n' +
        '              "content": "Compose a poem that explains the concept of recursion in programming."\n' +
        "          }\n" +
        "      ]\n" +
        " }'";

    const curl_demo1=ref("```bash \n curl https://platform.openai.com \n```")
    const curl_API_macOS=ref("```bash \n export OPENAI_API_KEY='your-api-key-here' \n```")
    const curl_API_windows=ref("```bash \n export OPENAI_API_KEY='your-api-key-here' \n```")
    const markText_curl = ref(curlStr);
    const activeName = ref("Curl");
    const activeNames = ref(["0"]);
    const curlStep2Names = ref(["0"]);
    const curlStep3Names = ref(["0"]);
    const curlVal = ref("ChatCompletions");
    const curlChange = (val) => {
        if (val == "Embeddings") {
            markText_curl.value =
                "```bash \n" +
                'curl https://api.openai.com/v1/embeddings   -H "Authorization: Bearer $OPENAI_API_KEY"   -H "Content-Type: application/json"   -d \'{\n' +
                '     "input": "The food was delicious and the waiter...",\n' +
                '     "model": "text-embedding-ada-002"\n' +
                "}\' \n```";
        }
        if (val == "ChatCompletions") {
            markText_curl.value = curlStr;
        }
        if (val == "Images") {
            markText_curl.value =
                "```bash \n" +
                'curl https://api.openai.com/v1/images/generations   -H "Content-Type: application/json"   -H "Authorization: Bearer $OPENAI_API_KEY"   -d \'{\n' +
                '     "prompt": "A cute baby sea otter",\n' +
                '     "n": 2,\n' +
                '     "size": "1024x1024"\n' +
                "}'";
        }
    };

    return {
        curlChange,
        markText_curl,
        activeName,
        activeNames,
        curlStep2Names,
        curlStep3Names,
        curlVal,
        curl_demo1,
        curl_API_macOS,
        curl_API_windows
    }



}
