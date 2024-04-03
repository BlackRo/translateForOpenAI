# 语音转文本

了解如何将音频转换为文本

## 介绍

Audio API基于我们最先进的开源large-v2 Whisper模型，提供两种语音到文本的端点、转录和翻译。它们可用于：

- 将音频转录为音频所在的语言。

- 将音频翻译并转录为英文。

文件上传目前限制为25 MB，支持以下输入文件类型：mp3、mp4、mpeg、mpga、m4a、wav和webm。

## 快速开始

### 转录

转录API将要转录的音频文件和所需的音频转录输出文件格式作为输入。我们目前支持多种输入和输出文件格式。

<transcribeAudio/>

默认情况下，响应类型为json，其中包含原始文本。

```json
{
  "text": "Imagine the wildest idea that you've ever had, and you're curious about how it might scale to something that's a 100, a 1,000 times bigger.
....
}

```

音频API还允许您在请求中设置其他参数。例如，如果您想将response_format设置为text，您的请求将如下所示：

<additionalOptions/>

[API指引](https://platform.openai.com/docs/api-reference/audio)包括可用参数的完整列表。

### 翻译

 translations API将任何支持语言的音频文件作为输入，并在必要时将音频转录为英语。这与我们的/Transcriptions端点不同，因为输出不是原始输入语言，而是翻译成英文文本。

<translateAudio/>

在这个示例中，输入的音频是德语，输出的文本看起来像：

Hello, my name is Wolfgang and I come from Germany. Where are you heading today?

目前我们只支持翻译成英文。

## 支持的语言

我们目前Transcriptions api和 translations api支持[以下语言](https://github.com/openai/whisper#available-models-and-languages)：



南非荷兰语、阿拉伯语、亚美尼亚语、阿塞拜疆语、白俄罗斯语、波斯尼亚语、保加利亚语、加泰罗尼亚语、中文、克罗地亚语、捷克语、丹麦语、荷兰语、英语、爱沙尼亚语、芬兰语、法语、加利西亚语、德语、希腊语、希伯来语、印地语、匈牙利语、冰岛语、印尼语、意大利语、日语、卡纳达语、哈萨克语、韩语、拉脱维亚语、立陶宛语、马其顿语、马来语、马拉地语、毛利语、尼泊尔语、挪威语、波斯语、波兰语、葡萄牙语、罗马尼亚语、俄语，塞尔维亚语、斯洛伐克语、斯洛文尼亚语、西班牙语、斯瓦希里语、瑞典语、他加禄语、泰米尔语、泰语、土耳其语、乌克兰语、乌尔都语、越南语和威尔士语。



虽然基础模型是在98种语言上训练的，但我们只列出了超过[单词错误率](https://en.wikipedia.org/wiki/Word_error_rate)（WER）<50%的语言，这是语音到文本模型准确性的行业标准基准。该模型将返回上面未列出的语言的结果，但质量很低。

## 更长的输入

默认情况下，Whisper API仅支持小于25 MB的文件。如果你的音频文件比这个长，你需要把它分解成25 MB或更小的块，或者使用压缩的音频格式。为了获得最佳效果，我们建议您避免在句中打断音频，因为这可能会导致一些上下文丢失。

处理这一问题的一种方法是使用[PyDub开源Python包](https://github.com/jiaaro/pydub)来分割音频：

```Python
from pydub import AudioSegment

song = AudioSegment.from_mp3("good_morning.mp3")

# PyDub handles time in milliseconds
ten_minutes = 10 * 60 * 1000

first_10_minutes = song[:ten_minutes]

first_10_minutes.export("good_morning_10.mp3", format="mp3")

```
OpenAI不能保证像PyDub这样的第三方软件的可用性或安全性。

## 提示

您可以使用[提示(prompt)](https://platform.openai.com/docs/api-reference/audio/createTranscription#audio/createTranscription-prompt)来提高Whisper API生成的转录质量。模型会尝试匹配提示的风格，因此如果提示使用了大写和标点符号，生成的转录可能也会更有可能使用这些。然而，当前的提示系统比我们的其他语言模型要有限得多，并且对生成的音频只提供有限的控制。以下是提示在不同场景中如何帮助的一些示例：

- 提示对于纠正模型在音频中经常识别错误的特定单词或缩写词非常有帮助。例如，下面的提示可以改善"DALL·E"和"GPT-3"这两个词的转录，之前它们被写成了"GDP 3"和"DALI"："转录内容是关于OpenAI，该公司开发出了像DALL·E、GPT-3和ChatGPT这样的技术，并希望有朝一日构建一个造福人类的AGI系统"。
- 为了保留被分割成片段的文件的上下文，您可以使用前一个片段的转录作为模型的提示。这将使转录更准确，因为模型将使用前一个音频的相关信息。模型只会考虑提示的最后224个标记，并忽略之前的任何内容。对于多语言输入，Whisper使用自定义的分词器。对于仅英语输入，它使用标准的GPT-2分词器，这两者都可以通过开源的[Whisper Python软件包](https://github.com/openai/whisper/blob/main/whisper/tokenizer.py#L361)访问。
- 有时候模型可能会在转录中跳过标点符号。您可以通过使用包含标点符号的简单提示来避免这种情况："你好，欢迎来到我的讲座。"
- 模型可能会在音频中省略常见的填充词。如果您想在转录中保留这些填充词，您可以使用包含它们的提示："嗯，让我想想，像，嗯...好的，这就是我，像，想的。"
- 某些语言可以以不同的方式书写，比如简体或繁体中文。模型可能并不总是默认使用您想要的转录书写风格。通过使用符合您偏好的书写风格的提示，您可以改善这一点。

## 提高可靠性

正如我们在提示部分所探讨的那样，使用Whisper时最常见的挑战之一是模型经常无法识别不常见的单词或缩写词。为了解决这个问题，我们提出了不同的技巧，以提高这些情况下Whisper的可靠性。

<improvingReliability/>



<script setup>
import transcribeAudio from './components/transcribeAudio.vue'
import additionalOptions from './components/additionalOptions.vue'
import translateAudio from './components/translateAudio.vue'
import improvingReliability from './components/improvingReliability.vue'

</script>