# 介绍

OpenAI API几乎可以应用于任何任务。我们提供一系列具有不同功能和价位的[模型](../markdown-examples.md)，同时还可以对[自定义模型](../markdown-examples.md)进行微调。
## 资源

- 在线[尝试](../markdown-examples.md)
- 阅读[API指引](../markdown-examples.md)
- 访问[帮助中心](../markdown-examples.md)
- 查看当前[API状态](../markdown-examples.md)
- 查看[OpenAI 开发者论坛](../markdown-examples.md)
- 了解我们的[使用政策](../markdown-examples.md)

::: tip 提示
在OpenAI，保护用户数据是我们使命的核心。我们不会通过API对输入和输出进行模型训练。
请在我们的API数据隐私页面上了解更多信息。
:::
## 关键概念

### Text generation models 文本生成模型

**OpenAI** 的文本生成模型(通常称为生成预训练转换器 Transformer 或简称“GPT”模型)，如 GPT-4 和 GPT-3.5,已经经过训练来理解自然语言。
像GPT-4这样的模型,允许文本“输出”来响应其"输入"，这些模型的"输入"也被称为"prompts(提示)"。使用模型(例如GPT-4)的本质就是设计"prompt"，
设计"prompt"的过程通常是通过提供说明或一些如何成功完成任务的示例。GPT-4 等模型可用于多种任务，包括内容或代码生成、摘要、对话、创意写作等，
请阅读我们的[文本生成指南](../markdown-examples.md)和[prompt指南](../markdown-examples.md)来了解更多信息。


### Assistants 助手

**助手** 是指在OpenAI API中由大型语言模型（如GPT-4）提供支持的实体，助手通常能够为用户执行各种任务。
这些助手根据模型上下文窗口中嵌入的指令进行操作，它们还可以使用工具来执行更复杂的任务，例如运行代码或从文件中检索信息。
请在我们的助手[API概述](../markdown-examples.md)中了解更多关于助手的信息。

### Embeddings 嵌入
**嵌入** 是一段数据（例如一些文本）的矢量表示，旨在保留其内容和/或意义的各个方面;在某些方面相似的数据块往往具有比不相关数据更紧密的嵌入;
OpenAI提供了文本嵌入模型，这些模型将文本字符串作为输入，并生成嵌入向量作为输出;嵌入可用于搜索、聚类、推荐、异常检测、分类等。
请在我们的[嵌入指南](../markdown-examples.md)中阅读更多关于嵌入的内容。


## Tokens 标记
文本生成和嵌入模型将文本按照标记(token)进行处理。标记表示常见的字符序列。例如，字符串 " tokenization" 被拆分成 " token" 和 "ization"，而像 " the" 这样的短而常见的单词则表示为一个单独的标记。注意，在一个句子中，每个单词的第一个标记通常以空格字符开头。您可以使用我们的分词工具来测试特定字符串，查看它们如何被转化为标记。作为一个粗略的经验法则，对于英文文本，1个标记大约相当于4个字符或0.75个单词。

请注意，对于文本生成模型，提示文本和生成的输出文本的长度总和不能超过模型的最大上下文长度。对于嵌入模型（不输出标记），输入文本的长度必须小于模型的最大上下文长度。每个文本生成和嵌入模型的最大上下文长度可以在[模型索引](../markdown-examples.md)中找到。

## 导航

点击下方指南，以了解更多信息。

<mycell/>

<script setup>
import mycell from '/.vitepress/components/mycell.vue'
</script>