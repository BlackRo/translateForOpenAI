# 函数调用

了解如何将大型语言模型连接到外部工具。

::: tip 提示
我们意识到gpt-3.5-turbo-1106和gpt-4-1106-preview中的非ASCII输出存在问题，正在进行修复。当这些模型生成函数调用并且参数包含非ASCII字符时，API可能会直接返回Unicode转义序列，而不是Unicode字符。例如，参数可能看起来像｛“location”：“D\u00fcsseldorf”｝，而不是｛“location”：“Düsseldorv”｝。大多数应用程序不应该受到此影响，因为Python和Javascript等语言中的JSON解析器会将这些字符串解析为正确的对象。若要了解此主题的最新信息，请订阅此社区[论坛帖子](https://community.openai.com/t/gpt-4-1106-preview-messes-up-function-call-parameters-encoding/478500)。
:::
## 介绍

在API调用中，您可以描述函数，并使模型智能选择输出一个包含调用一个或多个函数所需参数的JSON对象。Chat Completions API不调用该函数；相反，模型会生成JSON，您可以在代码中使用该JSON来调用函数。

最新的模型（gpt-3.5-turbo-1106和gpt-4-1106-preview）已经经过训练，既可以检测到何时应该调用函数（取决于输入），又可以以比以前的模型更贴近函数签名的方式进行响应。然而，这种能力也带来了潜在的风险。我们强烈建议在代表用户采取可能影响世界的行动之前，构建用户确认流程（发送电子邮件、在线发布内容、进行购买等）。

::: tip 提示
本指南专注于使用Chat Completions API进行函数调用，有关在Assistants API中进行函数调用的详细信息，请参阅[Assistants工具页面](../api-examples.md)。
:::

### 常见用例

函数调用使您能够更可靠地从模型中获取结构化数据。例如，您可以：

- 创建 assistants 并通过调用API回答问题（例如，类似于ChatGPT插件）
    - 例如，定义send_email（to：string，body：string）或get_current_weither（location：string，unit：'celsius'|'fahrenheit'）等函数
- 将自然语言转换为API调用
    - 例如，将“谁是我的顶级客户？”转换为get_customers（min_revenue：int，created_before：string，limit：int）并调用您的内部API
- 从文本中提取结构化数据
    - 例如，定义一个名为extract_data（名称：字符串，生日：字符串）或sql_query（查询：字符串）的函数

...诸如此类

函数调用的基本步骤顺序如下：

- 1.使用用户查询和函数参数中定义的一组函数调用模型。
- 2.模型可以选择调用一个或多个函数；如果是这样，内容将是符合您自定义模式的字符串化JSON对象（请注意：模型可能会产生虚构的参数）。
- 3.在您的代码中将字符串解析为JSON，并根据提供的参数（如果存在）调用您的函数。
- 4.通过将函数的响应作为新消息附加到模型中再次调用模型，让模型将结果归纳总结后返回给用户。

### 支持的模型

并非所有的模型版本都经过函数调用数据的训练。以下模型支持函数调用功能：

- gpt-4
- gpt-4-1106-preview
- gpt-4-0613
- gpt-3.5-turbo
- gpt-3.5-turbo-1106
- gpt-3.5-turbo-0613

此外，以下模型支持并行函数调用：

- gpt-4-1106-preview
- gpt-3.5-turbo-1106

## Function calling 并行函数调用

并行函数调用是模型同时执行多个函数调用的能力，允许并行解决这些函数调用的效果和结果。如果函数执行时间较长，这将特别有用，并减少与API的往返次数。例如，模型可以同时调用函数获取3个不同位置的天气情况，这将在工具调用数组中生成一个包含3个函数调用的消息，每个调用都有一个id。要回应这些函数调用，可以向对话中添加3个新消息，每个消息包含一个函数调用的结果，并使用tool_call_id引用tool_calls中的id。

在这个例子中，我们定义了一个名为get_current_weather的单个函数。模型多次调用该函数，在将函数响应发送回模型后，让模型决定下一步。模型回应了一个面向用户的消息，告诉用户旧金山、东京和巴黎的温度。根据查询的不同，模型可能会选择再次调用函数。

如果您想强制模型调用特定的函数，可以通过设置tool_choice为特定的函数名来实现。您还可以通过设置tool_choice: "none"来强制模型生成一个面向用户的消息。请注意，默认行为（tool_choice: "auto"）是让模型自行决定是否调用函数，如果调用函数，则由模型决定调用哪个函数。

<weatherExample/>

您可以在[OpenAI Cookbook](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models)中找到更多函数调用的示例：

<moreExample/>

## Tokens 标记

在底层，函数以模型已经训练过的语法形式注入到系统消息中。这意味着函数会计入模型的上下文限制，并作为输入Tokens进行计费。如果遇到上下文限制问题，我们建议限制函数的数量或减少为函数参数提供的文档长度。

如果您定义了许多函数，还可以使用[fine-tuning](../api-examples.md)来减少所使用的Tokens数量。








<script setup>
import weatherExample from './components/weatherExample.vue'
import moreExample from './components/moreExample.vue'
</script>