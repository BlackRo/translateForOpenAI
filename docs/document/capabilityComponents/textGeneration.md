# 文本生成模型

::: tip DevDay新推出的模型
文本生成模型现在支持JSON模式和可重现的输出。我们还推出了Assistants API，使您能够在我们的文本生成模型之上构建类似代理的体验。通过在模型名称中指定gpt-4-1106-preview，GPT-4 Turbo的预览版已经可用。
:::

OpenAI的文本生成模型（通常称为生成预训练转换器或大型语言模型）已经被训练来理解自然语言、代码和图像。模型提供文本输出以响应其输入。这些模型的输入也称为“提示”。设计提示本质上是如何“编程”大型语言模型，通常是通过提供如何成功完成任务的说明或一些示例。

使用OpenAI的文本生成模型，您可以构建应用程序以：

- 起草文件
- 编写计算机代码
- 回答有关知识库的问题
- 分析文本
- 为软件提供自然语言接口
- 在各种学科中提供辅导
- 翻译语言
- 为游戏模拟角色

随着gpt-4-vision-preview的发布，您现在可以构建处理和理解图像的系统。

<textGenerComponent/>

要通过OpenAI API使用其中一个模型，您将发送一个包含输入和API键的请求，并接收一个包含模型输出的响应。我们的最新模型gpt-4和gpt-3.5-turbo可通过聊天完成API端点访问。


|   | 模型族 | API端点 |
| :-| :- |:- |
| 较新的模型 (2023–) | gpt-4, gpt-4 turbo, gpt-3.5-turbo | 	https://api.openai.com/v1/chat/completions |
| 更新的模型(旧版)(2023年版) | gpt-3.5-turbo-instruct, babbage-002, davinci-002 | https://api.openai.com/v1/completions |
| 旧版模型 (2020–2022)   |   text-davinci-003, text-davinci-002, davinci, curie, babbage, ada | https://api.openai.com/v1/completions |

你可以在[chat playground](https://platform.openai.com/playground?mode=chat)里试用各种模型。如果您不确定要使用哪种型号，请使用gpt-3.5-turbo或gpt-4。

## Chat Completions API 

聊天模型将消息列表作为输入，并返回模型生成的消息作为输出。尽管聊天格式旨在简化多回合对话，但它对没有任何对话的单回合任务同样有用。

调用 Chat Completions API 的示例如下：

<chatCompletionsDemo />

要了解更多信息，您可以查看聊天[API参考文档](../api-examples.md)。

主要输入是messages参数。Messages必须是一组message对象，其中每个对象都有一个(role)角色（'system'、'user' 或 'assistant'）和内容。对话可以短到一条信息，也可以多次来回。

通常，会话的格式首先是 system 消息,然后是交替的 user 和 assistant 消息。

系统(system)消息有助于设置助手的行为。例如，您可以修改助理的个性，或提供关于其在整个谈话中应如何表现的具体说明。但是请注意，系统消息是可选的，没有系统消息的模型行为可能类似于使用通用消息，如“You are a helpful assistant”

用户(user)消息提供助理响应的请求或评论。助理消息存储以前的助理响应，但也可以由您编写，以提供所需行为的示例。

当用户指令引用以前的消息时，包含会话历史记录非常重要。在上面的例子中,用户的最后一个问题"Where was it played?"只有在之前关于2020年世界大赛的消息的背景下才有意义。因为模型没有过去请求的内存,所以所有相关信息都必须作为每个请求中会话历史的一部分提供。如果会话不能满足模型的tokens限制,则需要以某种方式[缩短](../api-examples.md)会话。

::: tip 提示
为了模拟ChatGPT中迭代返回文本的效果，请将 stream 参数设置为true。
:::

### Chat Completions response format 响应格式

Chat Completions API 响应示例如下：

```js
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "The 2020 World Series was played in Texas at Globe Life Field in Arlington.",
        "role": "assistant"
      },
      "logprobs": null
    }
  ],
  "created": 1677664795,
  "id": "chatcmpl-7QyqpwdfhqwajicIEznoc6Q47XAyW",
  "model": "gpt-3.5-turbo-0613",
  "object": "chat.completion",
  "usage": {
    "completion_tokens": 17,
    "prompt_tokens": 57,
    "total_tokens": 74
  }
}

```
assistant的回复可以通过以下方式提取：

<assistantReply/>

每个响应都将包括一个finish_reason。finish_reason的可能值为：

- stop: API返回完整的消息，或者是由stop参数提供的停止序列终止的消息
- length: 由于max_tokens参数或tokens限制，模型输出不完整
- function_call: 可以理解为模型在某个时刻做出了调用一个函数的决定。这意味着模型在执行过程中经过一番思考或逻辑判断后，决定使用特定的函数来完成某个任务或操作。这个决定可能是基于某些条件、算法或数据的分析和推断而做出的。
- content_filter: 由于我们的内容过滤器中的标志而省略了内容
- null:API响应仍在进行中或未完成

根据输入参数，模型响应可以包括不同的信息。

## JSON mode JSON 模式

使用Chat Completions的一种常见方法是，通过在系统消息中指定JSON对象，指示模型始终返回一个对您的用例有意义的JSON对象。虽然这在某些情况下确实有效，但偶尔模型可能会生成不解析为有效JSON对象的输出。

为了防止这些错误并提高模型性能，在调用gpt-4-1106-preview或gpt-3.5-turbo-1106时，可以将response_format设置为｛“type”：“json_object”｝以启用json模式。当启用JSON模式时，模型被约束为仅生成解析为有效JSON对象的字符串。

重要注意事项：

- 当使用JSON模式时，请始终通过会话中的某些消息（例如通过系统消息）指示模型生成JSON。如果不包含生成JSON的显式指令，则模型可能会生成一个无休止的空白流，并且请求可能会持续运行，直到达到令牌限制。为了确保您不会忘记，如果字符串“JSON”没有出现在上下文中的某个位置，API将抛出错误。
- 如果finish_reason是长度，则模型返回的消息中的JSON可能是部分的（即截断），这表示生成超过了max_tokens或会话超过了令牌限制。为了防止这种情况发生，请在分析响应之前检查finish_reason。
- JSON模式不会保证输出与任何特定的模式匹配，只保证它是有效的并且解析时没有错误。

<jsonMode />

在本例中，响应包括一个JSON对象，看起来如下所示：
```js
"content": "{\"winner\": \"Los Angeles Dodgers\"}"`
```
请注意，当模型生成参数作为函数调用的一部分时，JSON模式始终处于启用状态。

## Reproducible outputs 可再现输出

默认情况下，Chat Completions 是不确定的（这意味着模型输出可能因请求而异）。话虽如此，我们通过允许您访问种子参数和system_fingerprint响应字段，为确定性输出提供了一些控制。

要通过API调用接收（大部分）确定性输出，您可以：

- 将[seed](../api-examples.md)参数设置为您选择的任意整数，并在您想要确定性输出的请求中使用相同的值。
- 确保所有其他参数（如 prompt 或 temperature）在请求中完全相同。

有时，由于OpenAI对我们端的模型配置进行了必要的更改，确定性可能会受到影响。为了帮助您跟踪这些更改，我们公开了system_fingerprint字段。如果这个值不同，您可能会看到由于我们对系统所做的更改而产生的不同输出。

<reproducibleOutputs/>

## Managing tokens 

语言模型以称为tokens (标记)的块读取和写入文本。在英语中，token可以短至一个字符或长至一个单词（例如，a或apple），在某些语言中，token 甚至可以短于一个字符，甚至长于一个单词。


例如，字符串“ChatGPT很棒！”被编码为六个标记：[“Chat”、“G”、“PT”、“is”、“great”、“！”]。

API调用中的tokens总数影响：

- 您的API使用费用，按每个token支付
- API调用需要多长时间，因为写入更多tokens需要更多时间
- API调用是否有效，因为总token数必须低于模型的最大限制（gpt-3.5-turbo为4097个tokens）

输入和输出令牌都计入这些数量。例如，如果您的API调用在消息输入中使用了10个令牌，而您在消息输出中收到了20个令牌，那么将为您收取30个令牌的费用。然而，请注意，对于某些模型，输入中的代币与输出中的代币的每个代币的价格是不同的（有关更多信息，请参阅[定价页面](https://openai.com/pricing)）。

要查看API调用使用了多少tokens，请检查API响应中的用法字段（例如，response['usage']['total_tokens']）。

像gpt-3.5-turbo和gpt-4这样的聊天模型使用token的方式与 completions API中可用的模型相同，但由于其基于消息的格式，因此更难计算会话将使用多少tokens。

<countingTokens/>


要在不调用API的情况下查看文本字符串中有多少tokens，请使用OpenAI的[tiktoken Python库](https://github.com/openai/tiktoken)。示例代码可以在OpenAI Cookbook关于如何[使用tiktoken计数tokens](https://github.com/openai/tiktoken)的指南中找到。

传递给API的每条消息(内容、角色和其他字段)都会消耗tokens数量，再加上一些用于后台格式化的额外tokens。这种情况在未来可能会略有改变。
如果一个对话的tokens太多，无法满足模型的最大限制（例如，gpt-3.5-turbo的tokens超过4097个），您将不得不截断、省略或以其他方式缩小文本，直到它适合为止。请注意，如果从消息输入中删除消息，则模型将失去对该消息的所有了解。

请注意，很长的对话更有可能收到不完整的回复。例如，长度为4090个tokens的gpt-3.5-turbo会话将在仅6个tokens之后被切断回复。

## Parameter details 参数详情
### Frequency and presence penalties 频率和存在惩罚

频率惩罚和存在惩罚是自然语言处理中的概念，用于对语料库中频繁出现的词语进行惩罚。其目的是降低那些出现频率高但可能没有太多意义或信息的词语的重要性。

存在惩罚则是对在语料库的每个文档中都出现的词语进行惩罚。这些词语通常被称为停用词或常见词，比如"the"、"and"、"is"等。存在惩罚的目的是减少这些常见词对整体分析或建模过程的影响。

频率惩罚和存在惩罚都用于提高文本分析或建模的质量，通过降低那些可能对数据的理解或表达没有太多贡献的词语的影响。这些惩罚有助于优先考虑更有意义和信息丰富的词语在分析或建模过程中的作用。

Chat Completions API和Legacy Completions API中的频率惩罚和存在惩罚可用于减少采样重复的令牌序列的可能性。它们通过直接修改逻辑回归（未归一化的对数概率）并添加一个增量贡献来实现。

```
mu[j] -> mu[j] - c[j] * alpha_frequency - float(c[j] > 0) * alpha_presence
```
在这里：
- mu[j] 是第j个令牌的逻辑回归值（logits）
- c[j] 是在当前位置之前该tokens被采样的次数
- float(c[j] > 0) 如果c[j] > 0则为1，否则为0
- alpha_frequency 是频率惩罚系数
- alpha_presence 是存在惩罚系数

这些参数和变量在计算频率惩罚和存在惩罚时起到了关键作用。它们用于调整模型生成过程中的逻辑回归值，从而减少重复或冗余的输出，增加生成的结果的多样性和新颖性。

正如我们所看到的，存在惩罚是一种一次性的加性贡献，适用于至少采样过一次的所有tokens，而频率惩罚是与特定token采样频率成比例的贡献。

如果目的只是在一定程度上减少重复样本，则惩罚系数的合理值约为0.1至1。如果目的是强烈抑制重复，那么可以将系数增加到2，但这会显著降低样本的质量。负值可用于增加重复的可能性。

### Token log probabilities  token 概率日志

在Chat Completions API和Legacy Completions API中，当请求时，logprobs参数提供了每个输出token的对数概率，以及每个token位置上最有可能的若干个token及其对数概率。在某些情况下，这对于评估模型对输出的置信度或查看模型可能给出的其他响应是有用的。

通过logprobs参数，我们可以获得每个生成的token的对数概率，这有助于了解模型对每个token的自信程度。此外，还可以查看每个token位置上的概率最高的几个token及其对数概率，这有助于探索模型可能给出的其他候选响应。

通过分析logprobs参数，我们可以更好地理解模型的输出，并在需要时进行后续的处理和评估。

## Completions API （旧版）

Completions API端点在2023年7月进行了最后一次更新，与新的聊天补全端点的接口不同。输入不再是消息列表，而是一个称为prompt的自由文本字符串。

一个API调用的示例如下：

<completionsAPILegacy/>

请参阅完整的[API参考文档](../api-examples.md)以了解更多信息。

### Inserting text 插入文本

补全端点还支持通过提供后缀来插入文本，除了标准的前缀prompt。这在撰写长篇文本、段落之间的过渡、按照大纲进行写作或引导模型达到一个结尾时自然而然地需要。这种方法也适用于代码，并且可以在函数或文件的中间插入文本。

通过提供后缀，我们可以在已有文本的基础上继续生成内容，这对于长篇文本的撰写、代码的编辑等场景非常有用。后缀文本会被视为前缀文本的补充，在生成补全时起到引导和指导的作用。

<insertingText/>

### Completions response format

completions API 示例响应如下：

```
{
  "choices": [
    {
      "finish_reason": "length",
      "index": 0,
      "logprobs": null,
      "text": "\n\n\"Let Your Sweet Tooth Run Wild at Our Creamy Ice Cream Shack"
    }
  ],
  "created": 1683130927,
  "id": "cmpl-7C9Wxi9Du4j1lQjdjhxBlO22M61LD",
  "model": "gpt-3.5-turbo-instruct",
  "object": "text_completion",
  "usage": {
    "completion_tokens": 16,
    "prompt_tokens": 10,
    "total_tokens": 26
  }
}

```
在Python中，可以使用response['choices'][0]['text']提取输出。

响应格式类似于chat completions API的响应格式

### Chat Completions vs. Completions

通过使用单个用户消息构建请求，可以使Chat Completions格式类似于Completions格式。例如，可以通过以下完成提示将英语翻译为法语：

```
Translate the following English text to French: "{text}"
```
等效的chat prompt是：

```
[{"role": "user", "content": 'Translate the following English text to French: "{text}"'}]
```

同样，completions API 可以用于通过相应地格式化输入来模拟用户和助手之间的聊天。

这些API之间的区别在于每个API中可用的底层模型。chat completions API 是我们最有能力的模型（gpt-4）和最具成本效益的模型（gpt-3.5-turbo）的接口。

### 我应该使用哪种型号？

我们通常建议您使用gpt-4或gpt-3.5-turbo。您应该使用哪个模型取决于您使用模型的任务的复杂性。在多项评估中，gpt-4通常表现更好。特别是，gpt-4在仔细遵循复杂指令方面更有能力。相比之下，gpt-3.5-turbo更有可能只遵循复杂多部分指令的一部分。与gpt-3.5-turbo相比，gpt-4更不太可能虚构信息(这种行为被称为“幻觉”)，。gpt-4的上下文窗口也更大，最大大小为8,192个令牌，而gpt-3.5-turbo为4,096个令牌。然而，gpt-3.5-turbo返回的输出具有较低的延迟，并且每个标记的成本要低得多。

我们建议您在Playground中进行实验，以调查哪个模型在您的使用情况下提供最佳的性价比。一个常见的设计模式是使用多个不同的查询类型，每个查询类型分发到适合处理它们的模型。

### 提示工程

了解与OpenAI模型合作的最佳实践可以显著提高应用性能。每个模型都有其特定的故障模式，而解决或纠正这些故障模式的方法并不总是直观的。在与语言模型合作的过程中，有一个被称为“提示工程”的领域，但随着领域的发展，其范围已经超出了仅仅工程化提示的范畴，而是工程化使用模型查询作为组件的系统。要了解更多信息，请阅读我们的[提示工程指南](../api-examples.md)，其中涵盖了改进模型推理、减少模型幻觉等方法。您还可以在[OpenAI Cookbook](https://cookbook.openai.com/)中找到许多有用的资源，包括代码示例。

## FAQ

### 如何设置 temperature parameter

temperature值越低，输出越一致（例如0.2），而temperature值越高，输出越多样化和创造性（例如1.0）。根据特定应用程序的一致性和创造性之间的期望权衡选择temperature值。temperature可以在0到2之间。

### 最新模型是否可以进行微调？

是的，对一些人来说。目前，您只能微调gpt-3.5-turbo和我们更新的基础模型（babbage-002和davinci-002）。有关如何使用微调模型的更多详细信息，请参阅[微调指南](../api-examples.md)。


### 是否存储传递到API的数据？

自2023年3月1日起，我们将保留您的API数据30天，但不再使用您通过API发送的数据来改进我们的模型。在我们的[数据使用政策](https://openai.com/policies/usage-policies)中了解更多信息。某些端点提供[零保留](../startComponents/models-overview#根据终端点的默认使用策略)。

### 如何使我的应用程序更加安全？

如果您想在Chat API的输出中添加审核层，您可以按照我们的 [moderation guide](../api-examples.md)来防止违反OpenAI使用策略的内容被显示。

### 我应该使用ChatGPT还是API？

ChatGPT为OpenAI API中的模型提供聊天界面，并提供一系列内置功能，如集成浏览、代码执行、插件等。相比之下，使用OpenAI的API提供了更多的灵活性。

<script setup>
import textGenerComponent from './components/textGenerComponent.vue'
import chatCompletionsDemo from './components/chatCompletionsDemo.vue'
import reproducibleOutputs from './components/reproducibleOutputs.vue'
import jsonMode from './components/jsonMode.vue'
import countingTokens from './components/countingTokens.vue'
import insertingText from './components/insertingText.vue'
import assistantReply from './components/assistantReply.vue'
import completionsAPILegacy from './components/completionsAPILegacy.vue'
</script>