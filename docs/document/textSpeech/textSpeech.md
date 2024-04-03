# 文本转语音

学习如何将文本转换为逼真的口语音频

## 介绍

音频API提供了一个基于[TTS（text-to-speech）模型](https://platform.openai.com/docs/models/tts)的 [speech](https://platform.openai.com/docs/api-reference/audio/createSpeech) 端点。它配有6个内置语音，可用于：

- 叙述一篇书面博客文章
- 制作多种语言的口语音频
- 使用流媒体提供实时音频输出

这是合金之声的一个例子

<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/alloy.wav">
</audio>

::: tip 提示
请注意，我们的[使用政策](https://openai.com/policies/usage-policies)要求您向最终用户明确披露，他们听到的TTS语音是人工智能生成的，而不是人声。
:::

## 快速开始

speech端点接受三个关键输入：[模型(model)](https://platform.openai.com/docs/api-reference/audio/createSpeech#audio-createspeech-model)、应转换为音频的[文本(text)](https://platform.openai.com/docs/api-reference/audio/createSpeech#audio-createspeech-input)和用于音频生成的[语音(voice)](https://platform.openai.com/docs/api-reference/audio/createSpeech#audio-createspeech-voice)。一个简单的请求如下所示：

<textSpeechDemo/>

默认情况下，端点将输出语音音频的MP3文件，但也可以配置为输出我们支持的[任何格式](https://platform.openai.com/docs/guides/text-to-speech/supported-output-formats)。

## 音频质量

对于实时应用，标准tts-1模型提供了最低的延迟，但质量低于tts-1-hd模型。由于音频的生成方式，tts-1在某些情况下可能会生成比tts-1-hd更静态的内容。在某些情况下，音频可能没有明显的差异，这取决于您的收听设备和个人。

## 语音选项

尝试不同的声音（合金(alloy)、回声(echo)、寓言(fable)、玛瑙(onyx)、新星(nova)和微光(shimmer)），找到一种与你想要的音调和听众相匹配的声音。当前的语音已针对英语进行了优化。

合金(Alloy):

<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/alloy.wav">
</audio>

回声(Echo):

<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/echo.wav">
</audio>

寓言(Fable):

<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/Fable.wav">
</audio>

玛瑙(onyx)
<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/onyx.wav">
</audio>

新星(nova)
<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/nova.wav">
</audio>

微光(shimmer)
<audio id="audio" controls="" preload="none">
    <source id="mp3" src="/.vitepress/assets/audio/shimmer.wav">
</audio>

## 支持的输出格式

默认的响应格式是“mp3”，但也可以使用其他格式，如“opus”、“aac”或“flac”。

- Opus：用于互联网流媒体和通信，低延迟。

- AAC：用于数字音频压缩，YouTube、Android、iOS首选。

- FLAC：用于无损音频压缩，深受音频爱好者的存档青睐。

## 支持的语言

TTS模型在语言支持方面通常遵循Whisper模型。Whisper支持以下[语言](https://github.com/openai/whisper#available-models-and-languages)，尽管目前的语音已针对英语进行了优化，但仍表现良好：

南非荷兰语、阿拉伯语、亚美尼亚语、阿塞拜疆语、白俄罗斯语、波斯尼亚语、保加利亚语、加泰罗尼亚语、中文、克罗地亚语、捷克语、丹麦语、荷兰语、英语、爱沙尼亚语、芬兰语、法语、加利西亚语、德语、希腊语、希伯来语、印地语、匈牙利语、冰岛语、印尼语、意大利语、日语、卡纳达语、哈萨克语、韩语、拉脱维亚语、立陶宛语、马其顿语、马来语、马拉地语、毛利语、尼泊尔语、挪威语、波斯语、波兰语、葡萄牙语、罗马尼亚语、俄语，塞尔维亚语、斯洛伐克语、斯洛文尼亚语、西班牙语、斯瓦希里语、瑞典语、他加禄语、泰米尔语、泰语、土耳其语、乌克兰语、乌尔都语、越南语和威尔士语。

您可以通过提供您选择的语言的输入文本来生成这些语言的口语音频。

## 流式实时音频

语音API支持使用[块传输编码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)的实时音频流。这意味着可以在生成完整文件并使其可访问之前播放音频。

```python
from openai import OpenAI

client = OpenAI()

response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input="Hello world! This is a streaming test.",
)

response.stream_to_file("output.mp3")

```
## FAQ

### 如何控制生成音频的情绪范围？

没有直接的机制来控制所生成的音频的情感输出。某些因素可能会影响输出音频，如大写或语法，但我们对这些因素的内部测试结果喜忧参半。

### 我可以为自己的声音创建一个自定义副本吗？

不，这不是我们支持的。

### 我拥有输出的音频文件吗？

是的，就像API的所有输出一样，创建它们的人拥有输出。您仍然需要通知最终用户，他们听到的是人工智能生成的音频，而不是真人与他们交谈。



<script setup>
import textSpeechDemo from './components/textSpeechDemo.vue'
</script>