# Models 模型

::: tip DevDay新推出的模型
我们很高兴地宣布，GPT-4 Turbo（128k上下文窗口）和更新版的GPT-3.5 Turbo（16k上下文窗口）的预览版本已经发布。除其他功能外，这两个模型都具有改进的指令跟随、JSON模式、更可复现的输出和并行函数调用等功能。
:::

## 概述

OpenAI API由一组具有不同功能和价位的不同模型提供支持。您还可以通过微调为您的特定用例定制我们的模型。

| 模型 | 描述 |
| :-| :- |
| [GPT-4 / GPT-4 Turbo](../quickstart.md) | 在GPT-3.5的基础上升级的模型，能够更好的理解和生成自然语言或代码。 |
| [GPT-3.5](../quickstart.md) | 在GPT-3的基础上升级的模型，能够理解和生成自然语言或代码。 | 
| [DALL·E](../quickstart.md)    |   可以根据自然语言提示生成和编辑图像的模型。 | 
| [TTS](../quickstart.md) | 可以将文本转换为口语音频的模型 | 
| [Whisper](../quickstart.md) | 可以将音频转换为文本的模型 | 
| [Embeddings](../quickstart.md) |  一组可以将文本转换为数字形式的模型 | 
| [Moderation](../quickstart.md) |  一个经过微调的模型，可以检测文本是否敏感或不安全 | 
| [GPT base](../quickstart.md) |    一组没有指令的模型，可以理解并生成自然语言或代码 | 
| [GPT-3](../quickstart.md)(旧版) |    一组可以理解和生成自然语言的模型 | 
| [Deprecated](../quickstart.md) |   已被弃用的模型及其建议的替代模型的完整列表。 | 

我们还发布了开源模型，包括[Point-E](../quickstart.md)、[Whisper](../quickstart.md)、[Jukebox](../quickstart.md)和[CLIP](../quickstart.md)。

访问我们的[模型索引](../quickstart.md)，可以了解更多关于哪些模型在我们的研究论文中被提及以及像InstructGPT和GPT-3.5这样的模型系列之间的区别。

## 模型升级

gpt-3.5-turbo、gpt-4和gpt-4-32k 当前已是最新版本。您可以通过查看发送请求后的响应对象来验证这一点。响应将包括所使用的具体模型版本（例如gpt-3.5-turbo-0613）。

我们还提供静态模型版本，开发人员在更新的模型推出后至少可以继续使用三个月。随着模型的更新，我们还让使用者去做评估，以帮助我们改进适用于不同用例的模型。如果您有兴趣，请查看[OpenAI Evals](../quickstart.md)存储库。

以下是临时快照的模型，我们已经公布了它们的停用日期以及它们的替代品。如果要使用最新的模型版本，请使用标准的模型名称，如gpt-4或gpt-3.5-turbo。

| 模型名称 | 停用日期 | 替换模型|
| :-| :- | :- |
| gpt-3.5-turbo-0613 | Jun 13, 2024 | gpt-3.5-turbo-1106 |
| gpt-3.5-turbo-0301 | Jun 13, 2024 | gpt-3.5-turbo-1106 |
| gpt-4-0314 | Jun 13, 2024 | gpt-4-0613 |
| gpt-4-32k-0314 | Jun 13, 2024 | gpt-4-32k-0613 |

请在我们的[弃用页](../Intro-page.md)上了解有关模型弃用的更多信息。

## GPT-4 and GPT-4 Turbo

GPT-4是一个大型多模态模型（接受文本或图像输入并输出文本），它可以比我们之前的任何模型更准确地解决困难问题，这要归功于其更广泛的通用知识和先进的推理能力。GPT-4可供付费客户在OpenAI API中使用。与gpt-3.5-turbo一样，GPT-4经过优化，适用于聊天，但也可以通过Chat Completions API很好地完成传统的填写任务。在我们的GPT指南中了解如何使用GPT-4。

| 模型名称 | 描述 | 上下文窗口| 训练数据 |
| :-| :- | :- | :- |
| gpt-4-1106-preview | GPT-4 Turbo 最新的GPT-4模型,具有改进的指令跟随、JSON模式、可复现的输出、并行函数调用等功能。最多返回4,096个tokens。这个模型还不适用于生产,[了解更多](../Intro-page.md)。 | 128,000 tokens | 截至2023年4月 |
| gpt-4-vision-preview | GPT-4 Turbo with vision 除了具备GPT-4 Turbo的其他能力外，GPT-4还具备理解图像的能力。它最多返回4,096个tokens。这是一个预览模型版本，尚不适用于生产。[了解更多](../Intro-page.md)。 | 128,000 tokens | 截至2023年4月 |
| gpt-4 | 当前指gpt-4-0613 请参阅[模型升级](#模型升级) | 8,192 tokens |  截至2021年9月|
| gpt-4-32k | 当前指gpt-4-0613 请参阅[模型升级](#模型升级)| 32,768 tokens | 截至2021年9月 |
| gpt-4-0613 |gpt-4-0613是从2023年6月13日的快照，其中改进了函数调用支持。| 8,192 tokens | 截至2021年9月 |
| gpt-4-32k-0613 | 当前指gpt-4-32k | 32,768 tokens | 截至2021年9月 |
| gpt-4-0314 (旧版) | 2023年3月14日的gpt-4快照，支持函数调用。此型号版本将于2024年6月13日弃用。| 8,192 tokens | 截至2021年9月 |
| gpt-4-32k-0314 (旧版) | 2023年3月14日gpt-4-32k的快照，支持函数调用。此型号版本将于2024年6月13日弃用。| 32,768 tokens | 截至2021年9月 |

对于许多基础任务，GPT-4和GPT-3.5模型之间的差异并不显著。然而，在更复杂的情况下，GPT-4比我们以前的任何模型都更有能力。

## 多语言功能

GPT-4在性能上超越了之前的大型语言模型，并且截至2023年，它超过了大多数最先进的系统（这些系统通常具有特定基准训练或手工工程）。在MMLU基准测试中(一个涵盖57个主题的英语多项选择题套件),GPT-4不仅在英语方面大幅领先于现有模型，还在其他语言中展现出强大的性能。

## GPT-3.5

GPT-3.5模型可以理解并生成自然语言或代码。GPT-3.5系列中功能最强大、性价比最高的型号是GPT-3.5-turbo，它已使用[chat Complements API](../Intro-page.md)针对聊天进行了优化，但也适用于传统的完成任务。

| 模型名称 | 描述 | 上下文窗口| 训练数据 |
| :-| :- | :- | :- |
| gpt-3.5-turbo-1106 | 最新的GPT-3.5 Turbo模型，具有改进的指令跟随、JSON模式、可复制输出、并行函数调用等功能。最多返回4096个输出标记。[了解更多](../Intro-page.md)。 | 16,385 tokens | 截至2021年9月 |
| gpt-3.5-turbo | 当前即指gpt-3.5-turbo-0613 | 4,096 tokens | 截至2021年9月 |
| gpt-3.5-turbo-16k | 当前指gpt-3.5-turbo-0613| 16,385 tokens | 截至2021年9月 |
| gpt-3.5-turbo-instruct |与text-davinci-003类似的功能，但与传统的Completions端点兼容，而不是与Chat Completions兼容。| 4,096 tokens | 截至2021年9月 |
| ggpt-3.5-turbo-0613(旧版) | 2023年6月13日的gpt-3.5-turbo快照。将于2024年6月13日弃用。 | 4,096 tokens | 截至2021年9月 |
| gpt-3.5-turbo-16k-0613 (旧版) | 2023年6月13日的gpt-3.5-16k-turbo快照。将于2024年6月13日弃用。| 16,385 tokens | 截至2021年9月 |
| gpt-3.5-turbo-0301 (旧版) | 2023年3月1日的gpt-3.5-turbo快照。将于2024年6月13日弃用。| 4,096 tokens | 截至2021年9月 |
| text-davinci-003 (旧版) | 相比curie、babbage或ada模型,该模型可以以更好的质量和一致性执行语言任务,将于2024年1月4日弃用。| 4,096 tokens | 截至2021年6月 |
| text-davinci-002 (旧版) | 与text-davinci-003类似的功能，但使用监督微调而不是强化学习进行训练。将于2024年1月4日弃用| 4,096 tokens | 截至2021年9月 |
| code-davinci-002 (旧版) | 针对代码完成任务进行了优化。将于2024年1月4日弃用。| 8,001 tokens | 截至2021年6月 |

我们建议使用gpt-3.5-turbo而不是其他gpt-3.5型号，因为它的成本更低，性能也有所提高。

## DALL·E

DALL·E是一个人工智能系统，可以通过自然语言的描述来创造逼真的图像和艺术。DALL·E 3目前支持在提示下创建特定大小的新图像的功能。DALL·E 2还支持编辑现有图像或创建用户提供的图像的变体的能力。

DALL·E 3可通过我们的Images API和DALL·2获得。您可以通过ChatGPT Plus试用DALL·E 3。

| 模型名称 | 描述 | 
| :-| :- | 
| dall-e-3 | DALL·E 3 最新的DALL·E模型，于2023年11月发布。[了解更多](../Intro-page.md)。 | 
| dall-e-2 | 之前的DALL·E模型于2022年11月发布。二次迭代的DALL·E，具有比原始模型更逼真、更准确、分辨率高4倍的图像 | 

## TTS

TTS是一种将文本转换为听起来自然的口语文本的人工智能模型。我们提供了两种不同的模型变量，tts-1针对实时文本到语音用例进行了优化，tts-1-hd针对质量进行了优化。这些模型可以与音频API中的语音端点一起使用。

| 模型名称 | 描述 | 
| :-| :- | 
| tts-1 | Text-to-speech 1 最新的文本到语音模型，针对速度进行了优化。| 
| tts-1-hd | Text-to-speech 1 HD 最新的文本到语音模型，针对质量进行了优化。 | 

## Whisper

Whisper是一种通用的语音识别模型。它是在不同音频的大型数据集上训练的，也是一个多任务模型，可以执行多语言语音识别、语音翻译和语言识别。Whisper v2-大型型号目前可通过我们的API获得，型号名称为Whisper-1。

目前，Whisper的开源版本和通过我们的[API提供的版本](../Intro-page.md)之间没有差异。然而，通过[我们的API](../Intro-page.md)，我们提供了一个优化的推理过程，使Whisper通过我们的API运行比通过其他方式运行快得多。有关Whisper的更多技术细节，您可以阅读该[资料](../Intro-page.md)。

## Embeddings

Embeddings(嵌入)是文本的数字表示，可用于测量两段文本之间的相关性。我们的第二代嵌入模型text-embedding-ada-002旨在以很小的成本取代之前的16个第一代嵌入模型。嵌入对于搜索、聚类、推荐、异常检测和分类任务非常有用。您可以在公告博客文章中阅读更多关于我们最新嵌入模型的信息。

## Moderation

Moderation(审核)模型旨在检查内容是否符合OpenAI的使用策略。这些模型提供了分类功能，可以查找以下类别的内容：仇恨、仇恨/威胁、自残、性、性/未成年人、暴力和暴力/图形。您可以在我们的节制指南中找到更多信息。

Moderation(审核)模型接收任意大小的输入，并自动将其分成4,096个标记的块。在输入超过32,768个标记的情况下，会使用截断方法，这在极少数情况下可能会导致一小部分标记被省略在审查中。

每个对审查端点的请求的最终结果以每个类别为基础显示最大值。例如，如果一个4K标记的块的类别得分为0.9901，而另一个块的得分为0.1901，则结果会在API响应中显示0.9901，因为它更高。

| 模型名称 | 描述 | 最大 TOKENS |
| :-| :- | :- | 
| text-moderation-latest | 最高能（严格）的审查模式。精度将略高于稳定模型。| 32,768 |
| text-moderation-stable | 功能几乎与最新型号一样，但略旧。 | 32,768 |

## GPT base

GPT基础模型可以理解和生成自然语言或代码，但不使用以下指令进行训练。这些模型被用来替代我们最初的GPT-3基础模型，并使用传统的Completions API。大多数客户应该使用GPT-3.5或GPT-4。

| 模型名称 | 描述 | 最大 TOKENS | 训练数据|
| :-| :- | :- | :- | 
| babbage-002 | GPT-3 ada和babbage基本型号的替代品。| 16,384 tokens | 截至2021年9月 |
| davinci-002 | GPT-3 curie和davinci基础模型的替代品。 | 16,384 tokens | 截至2021年9月 |

## GPT-3 （旧版）

GPT-3模型可以理解和生成自然语言。这些模型被更强大的GPT-3.5代模型所取代。然而，最初的GPT-3基本模型（davinci、curie、ada和babbage）是目前唯一可以微调的模型。

| 模型名称 | 描述 | 最大 TOKENS | 训练数据|
| :-| :- | :- | :- | 
| text-curie-001 | 能力很强，速度更快，成本更低。| 2,049 tokens | 截至2019年10月 |
| text-babbage-001 | 能够完成简单的任务，速度非常快，成本更低。 | 2,049 tokens | 截至2019年10月 |
| text-ada-001 | 能够完成简单的任务，速度非常快，成本更低。 | 2,049 tokens | 截至2019年10月 |
| davinci | 最强大的GPT-3型号。可以完成其他型号可以完成的任何任务，通常质量更高。 | 2,049 tokens | 截至2019年10月 |
| curie | 能力很强，但比davinci更快，成本更低 | 2,049 tokens | 截至2019年10月 |
| babbage | 能够完成简单的任务，速度非常快，成本更低。 | 2,049 tokens | 截至2019年10月 |
| ada | 能够完成非常简单的任务，通常是GPT-3系列中速度最快的型号，成本最低。 | 2,049 tokens | 截至2019年10月 |

## 我们如何使用您的数据

您的数据就是您的数据。

截至2023年3月1日，发送到OpenAI API的数据将不会用于训练或改进OpenAI模型（除非您明确选择加入）。选择加入的一个好处是，随着时间的推移，这些模型可能会在您的用例中变得更好。

为了帮助识别滥用，API数据可能会保留30天，之后将被删除（法律另有要求的除外）。对于具有敏感应用程序的值得信赖的客户，可以实现零数据保留。在零数据保留的情况下，请求和响应主体不会持久化到任何日志记录机制，只存在于内存中，以便为请求提供服务。

请注意，此数据政策不适用于OpenAI的非API消费者服务，如ChatGPT或DALL·E Labs。

## 根据终端点的默认使用策略

"Default usage policies by endpoint"指的是根据不同的终端点（API端点）设定的默认使用策略。对于每个API终端点，OpenAI会定义一组默认的使用规则和策略，以确保用户在使用API时符合相关的使用条款和规定。

这些默认使用策略可能包括每分钟或每天的请求限制、响应时间要求、并发请求限制、数据传输限制等。这些策略旨在平衡资源使用和公平性，以确保API的稳定性和可用性，同时防止滥用和不当使用。

用户在使用API时应遵守这些默认使用策略，并根据需要进行调整。OpenAI可能会根据实际情况和需求来更新和调整这些策略，用户需要及时了解并遵守最新的使用规定。

"Eligible for zero retention"意味着满足特定条件的数据在存储期限方面可以被保留为零。数据保留是指在特定时间段内保留用户数据的实践。通常情况下，数据会在一定的时间后被删除或清除，以确保数据的安全性和隐私性。

"Eligible for zero retention"表示特定类型的数据可能被立即删除，而不会保留任何时间。这意味着数据不会被存储或保留在系统中，而是在处理完后立即移除，以进一步确保数据的安全性和隐私性。

这个条件通常适用于敏感或机密的数据，以保护用户的隐私和数据安全。它确保数据不会长时间存储或被滥用，增加了用户数据的保护级别。

| API端点 | 是否用于训练 | 默认保留时间 | 是否符合零保留条件 |
| :-| :- | :- | :- | 
| /v1/chat/completions* | 否 | 30 天 | 是，除了图像输入* |
| /v1/files | 否 | 直到被客户自行删除 | 否 |
| /v1/assistants | 否 | 直到被客户自行删除 | 否 |
| /v1/threads | 否 | 60天 | 否 |
| /v1/threads/messages | 否 | 60天| 否 |
| /v1/threads/runs | 否 | 60天 | 否 |
| /v1/threads/runs/steps | 否 | 60天 | 否 |
| /v1/images/generations | 否 | 30天 | 否 |
| /v1/images/edits | 否 | 30天 | 否 |
| /v1/images/variations | 否 | 30天 | 否 |
| /v1/embeddings | 否 | 30天 | 是 |
| /v1/audio/transcriptions | 否 | 零数据保留 | - |
| /v1/audio/translations | 否 | 零数据保留 | - |
| /v1/audio/speech | 否 | 30天 | 否 |
| /v1/fine_tuning/jobs | 否 | 直到被客户自行删除 | 否 |
| /v1/fine-tunes | 否 | 直到被客户自行删除 | 否 |
| /v1/moderations | 否 | 零数据保留 | - |
| /v1/completions | 否 | 30天 | 是 |
| /v1/edits | 否 | 30天 | 是 |

*通过gpt-4-vision-preview模型输入的图像不符合零保留条件。

*对于助理API，我们仍在评估Beta期间的默认保留期。我们预计，在测试版结束后，默认保留期将保持稳定。

有关详细信息，请参阅我们的[API数据使用策略](../Intro-page.md)。要了解更多关于零保留的信息，请与我们的销售团队[联系](https://openai.com/contact-sales)。

## 模型端点兼容性

| API端点 | 最新模型 |
| :-| :- |
| /v1/assistants |支持gpt-3.5-turbo-0301以外的所有型号。检索工具需要gpt-4-1106-preview或gpt-3.5-turbo-1106。 |
| /v1/audio/transcriptions | whisper-1 |
| /v1/audio/translations| whisper-1 |
| /v1/audio/speech | tts-1, tts-1-hd |
| /v1/chat/completions | gpt-4和日期型号发布，gpt-4-1106-preview，gpt-4-vision-preview、gpt-4-32k和日期型号版本，gpt-3.5-turbo和日期型号发行，gpt-3.5-turbo-16k和日期型号版，gpt-3.5m-turbo的微调版本 |
| /v1/completions (旧版) | gpt-3.5-turbo-instruct, babbage-002, davinci-002 |
| /v1/embeddings | text-embedding-ada-002 |
| /v1/fine_tuning/jobs | gpt-3.5-turbo, babbage-002, davinci-002 |
| /v1/moderations | text-moderation-stable, text-moderation-latest |
| /v1/images/generations | dall-e-2, dall-e-3 |

此列表排除了我们所有[不推荐使用的型号](../Intro-page.md)。