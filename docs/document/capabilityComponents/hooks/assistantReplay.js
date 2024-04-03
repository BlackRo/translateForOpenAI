
import {ref} from 'vue'

export default function () {
    
    const assistantReplay_activeName = ref('Python')
    
    const assistantReplay_node = '```js \n'
    +'completion.choices[0].message.content \n'
    
    const assistantReplay_python = '```js \n'
    +"response['choices'][0]['message']['content'] \n"
    
    
    
    return{
        assistantReplay_activeName,
        assistantReplay_node,
        assistantReplay_python
    }
}