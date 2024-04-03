# 快速工程

本指南分享了从GPT-4等大型语言模型（有时称为GPT模型）中获得更好结果的策略和策略。这里描述的方法有时可以组合使用以获得更大的效果。我们鼓励通过实验找到最适合您的方法。

这里演示的一些示例目前仅适用于我们最强大的模型gpt-4。一般来说，如果你发现一个模型在任务中失败了，并且有一个功能更强大的模型可用，那么通常值得用功能更强的模型再试一次。

您还可以探索示例提示，展示我们的模型的功能：

<promptExample/>

## 获得更好结果的六种策略

### 写清楚说明

这些模型无法读懂你的心思。如果输出太长，请要求简短答复。如果输出过于简单，请要求专家级的写作。如果您不喜欢这种格式，请演示您希望看到的格式。模型对你想要的东西猜测得越少，你得到它的可能性就越大。

策略：
- [在查询中包含详细信息以获得更相关的答案](https://platform.openai.com/docs/guides/prompt-engineering/strategy-write-clear-instructions)
- [让模特扮演一个角色](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-to-adopt-a-persona)
- [使用分隔符清楚地指示输入的不同部分](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input)
- [指定完成任务所需的步骤](https://platform.openai.com/docs/guides/prompt-engineering/tactic-specify-the-steps-required-to-complete-a-task)
--[提供示例](https://platform.openai.com/docs/guides/prompt-engineering/tactic-provide-examples)
- [指定所需的输出长度](https://platform.openai.com/docs/guides/prompt-engineering/tactic-specify-the-desired-length-of-the-output)

### 提供参考文本

语言模型可以自信地编造虚假答案，尤其是当被问及深奥的话题或引用和URL时。就像一张纸条可以帮助学生在测试中做得更好一样，提供这些模型的参考文本可以帮助学生用更少的捏造来回答问题。

策略：
- [指导模型使用参考文本进行回答](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-using-a-reference-text)
- [指导模型使用参考文本中的引文进行回答](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-with-citations-from-a-reference-text)

### 将复杂的任务拆分为更简单的子任务

正如将复杂系统分解为一组模块化组件是软件工程中的良好实践一样，提交给语言模型的任务也是如此。复杂的任务往往比简单的任务具有更高的错误率。此外，复杂任务通常可以重新定义为更简单任务的工作流，其中早期任务的输出用于构建后期任务的输入。

策略：
- [使用意向分类来识别与用户查询最相关的指令](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-intent-classification-to-identify-the-most-relevant-instructions-for-a-user-query)
- [对于需要很长对话的对话应用程序，请总结或过滤以前的对话](https://platform.openai.com/docs/guides/prompt-engineering/tactic-for-dialogue-applications-that-require-very-long-conversations-summarize-or-filter-previous-dialogue)
- [分段汇总长文档并递归构建完整摘要](https://platform.openai.com/docs/guides/prompt-engineering/tactic-summarize-long-documents-piecewise-and-construct-a-full-summary-recursively)

### 给模型时间“思考”

如果让你把17乘以28，你可能不会立刻知道，但仍然可以随着时间的推移计算出来。同样，模型在试图立即回答时会犯更多的推理错误，而不是花时间来找出答案。在回答之前询问“思维链”可以帮助模型更可靠地推理出正确的答案。

策略：
- [指导模型在匆忙得出结论之前制定自己的解决方案](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion)
- [使用内心独白或一系列查询来隐藏模型的推理过程](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-inner-monologue-or-a-sequence-of-queries-to-hide-the-model-s-reasoning-process)
- [询问模特是否错过了之前的传球](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-if-it-missed-anything-on-previous-passes)

### 使用外部工具

通过向模型提供其他工具的输出来弥补模型的弱点。例如，文本检索系统（有时称为RAG或检索增强生成）可以告诉模型有关文档的信息。像OpenAI的代码解释器这样的代码执行引擎可以帮助模型进行数学运算和运行代码。如果一项任务可以通过工具而不是语言模型更可靠或更有效地完成，那么就卸载它，以实现两者的最佳效果。

策略：
- [使用基于嵌入的搜索实现高效的知识检索](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)
- [使用代码执行来执行更准确的计算或调用外部API](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-code-execution-to-perform-more-accurate-calculations-or-call-external-apis)
- [为模型提供特定功能的访问权限](https://platform.openai.com/docs/guides/prompt-engineering/tactic-give-the-model-access-to-specific-functions)

### 系统地测试更改

如果你能衡量的话，提高性能会更容易。在某些情况下，对提示的修改会在一些孤立的示例上获得更好的性能，但在更具代表性的示例集上会导致更差的整体性能。因此，为了确保更改对性能是净正的，可能有必要定义一个全面的测试套件（也称为“eval”）。

策略：
- [参考黄金标准答案评估模型输出](https://platform.openai.com/docs/guides/prompt-engineering/tactic-evaluate-model-outputs-with-reference-to-gold-standard-answers)

## 策略

上面列出的每个策略都可以用特定的策略来实例化。这些策略旨在为尝试提供思路。它们绝不是全面的，你应该自由尝试这里没有代表的创造性想法。

### 策略：编写清晰的说明

#### 策略：在查询中包含详细信息以获得更相关的答案

为了获得高度相关的响应，请确保请求提供任何重要的细节或上下文。否则，你就让模型来猜测你的意思了。

|糟糕的方式|更好的方式|
|:-|:-|
|How do I add numbers in Excel?|How do I add up a row of dollar amounts in Excel? I want to do this automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total".|
|Who’s president?|Who was the president of Mexico in 2021, and how frequently are elections held?|
|Write code to calculate the Fibonacci sequence.|Write a TypeScript function to efficiently calculate the Fibonacci sequence. Comment the code liberally to explain what each piece does and why it's written that way.|
|Summarize the meeting notes.|Summarize the meeting notes in a single paragraph. Then write a markdown list of the speakers and each of their key points. Finally, list the next steps or action items suggested by the speakers, if any.|

#### 策略：让模特扮演一个角色

系统消息可用于指定模型在回复中使用的角色。

|||
|:-|:-|
|SYSTEM|When I ask for help to write something, you will reply with a document that contains at least one joke or playful comment in every paragraph.|
|USER|Write a thank you note to my steel bolt vendor for getting the delivery in on time and in short notice. This made it possible for us to deliver an important order.|

[Open in Playground](https://platform.openai.com/playground/p/default-playful-thank-you-note?mode=chat)

#### 策略：使用分隔符清楚地指示输入的不同部分

三引号、XML标记、节标题等分隔符可以帮助划分要区别对待的文本节。

|||
|:-|:-|
|USER|Summarize the text delimited by triple quotes with a haiku."""insert text here"""|

[Open in Playground](https://platform.openai.com/playground/p/default-delimiters-1?mode=chat)

|||
|:-|:-|
|SYSTEM|You will be provided with a pair of articles (delimited with XML tags) about the same topic. First summarize the arguments of each article. Then indicate which of them makes a better argument and explain why.|
|USER|<article> insert first article here </article> <article> insert first article here </article>|

[Open in Playground](https://platform.openai.com/playground/p/default-delimiters-1?mode=chat)

|||
|:-|:-|
|SYSTEM|You will be provided with a thesis abstract and a suggested title for it. The thesis title should give the reader a good idea of the topic of the thesis but should also be eye-catching. If the title does not meet these criteria, suggest 5 alternatives.|
|USER|Abstract: insert abstract here <br> Title: insert title hereTitle: insert title here|

[Open in Playground](https://platform.openai.com/playground/p/default-delimiters-1?mode=chat)

对于这样简单的任务，使用分隔符可能不会对输出质量产生影响。然而，任务越复杂，消除任务细节的歧义就越重要。不要为了准确理解你对他们的要求而让模型发挥作用。

#### 策略：指定完成任务所需的步骤

某些任务最好指定为一系列步骤。明确地写出步骤可以使模型更容易地遵循它们。

|||
|:-|:-|
|SYSTEM|Use the following step-by-step instructions to respond to user inputs.<br> Step 1 - The user will provide you with text in triple quotes. Summarize this text in one sentence with a prefix that says "Summary: ". <br>Step 2 - Translate the summary from Step 1 into Spanish, with a prefix that says "Translation: ".|
|USER|"""insert text here"""|

[Open in Playground](https://platform.openai.com/playground/p/default-delimiters-1?mode=chat)

#### 策略：提供示例

提供适用于所有示例的通用指令通常比通过示例演示任务的所有排列更有效，但在某些情况下，提供示例可能更容易。例如，如果您打算让模型复制一种很难明确描述的响应用户查询的特定样式。这就是所谓的“few-shot”提示。

|||
|:-|:-|
|SYSTEM|Answer in a consistent style.|
|USER|Teach me about patience.|
|ASSISTANT|The river that carves the deepest valley flows from a modest spring; the grandest symphony originates from a single note; the most intricate tapestry begins with a solitary thread.|
|USER|Teach me about the ocean.|

[Open in Playground](https://platform.openai.com/playground/p/default-chat-few-shot?mode=chat)

#### 策略：指定所需的输出长度

您可以要求模型生成给定目标长度的输出。目标输出长度可以根据单词、句子、段落、项目符号等的数量来指定。但是，请注意，指示模型生成特定数量的单词并不具有高精度。该模型可以更可靠地生成具有特定段落数或项目符号数的输出。

|||
|:-|:-|
|USER|Summarize the text delimited by triple quotes in about 50 words. <br> """insert text here"""|

|||
|:-|:-|
|USER|Summarize the text delimited by triple quotes in 2 paragraphs. <br> """insert text here"""|

|||
|:-|:-|
|USER|Summarize the text delimited by triple quotes in 3 bullet points. <br> """insert text here"""|


### 策略：提供参考文本

#### 策略：指导模型使用参考文本进行回答

如果我们可以为模型提供与当前查询相关的可信信息，那么我们可以指示模型使用所提供的信息来组成其答案。

|||
|:-|:-|
|SYSTEM|Use the provided articles delimited by triple quotes to answer questions. If the answer cannot be found in the articles, write "I could not find an answer."|
|USER|insert articles, each delimited by triple quotes <br> Question: insert question here|

[Open in Playground](https://platform.openai.com/playground/p/default-answer-from-retrieved-documents?mode=chat)

考虑到所有模型都有有限的上下文窗口，我们需要一些方法来动态查找与所问问题相关的信息。[嵌入](../embeddings/embeddingsPage.md)可以用于实现高效的知识检索。有关如何实现这一点的更多详细信息，请参阅策略“[使用基于嵌入的搜索来实现高效的知识检索](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)”。


#### 策略：指导模型使用参考文本中的引文进行回答

如果输入已经用相关知识进行了补充，那么可以直接要求模型通过引用所提供文件中的段落来在其答案中添加引文。请注意，然后可以通过所提供文档中的字符串匹配以编程方式验证输出中的引用。

|||
|:-|:-|
|SYSTEM|您将收到一份由三个引号和一个问题分隔的文档。你的任务是只使用提供的文件回答问题，并引用用于回答问题的文件的段落。如果文件中没有包含回答这个问题所需的信息，那么只需写下：“信息不足。”如果提供了问题的答案，则必须用引文进行注释。使用以下格式引用相关段落（｛“引文”：…｝）。|
|USER|"""insert document here""" <br> Question: insert question here|

[Open in Playground](https://platform.openai.com/playground/p/default-answer-with-citation?mode=chat)

### 策略：将复杂的任务拆分为更简单的子任务

策略：使用意图分类来识别用户查询的最相关指令

对于需要许多独立指令集来处理不同情况的任务，首先对查询类型进行分类并使用该分类来确定需要哪些指令可能是有益的。这可以通过定义与处理给定类别中的任务相关的固定类别和硬编码指令来实现。这个过程也可以递归地应用于将任务分解为一系列阶段。这种方法的优点是，每个查询将仅包含执行任务的下一阶段所需的那些指令，与使用单个查询执行整个任务相比，这可能导致更低的错误率。这也可以降低成本，因为更大的提示运行成本更高（请参阅定价信息）。

例如，假设对于客户服务应用程序，查询可以有效地分类如下：

|||
|:-|:-|
|SYSTEM|您将收到客户服务查询。将每个查询分类为主要类别和次要类别。以json格式提供带有关键字的输出：primary和secondary。<br> Primary categories: Billing, Technical Support, Account Management, or General Inquiry. <br> Billing secondary categories:<br> - Unsubscribe or upgrade<br>- Add a payment method<br>- Explanation for charge<br>- Dispute a charge<br>Technical Support secondary categories:<br>- Troubleshooting<br>- Device compatibility<br>- Software updates<br>Account Management secondary categories:<br>- Password reset<br>- Update personal information<br>- Close account<br>- Account security<br>General Inquiry secondary categories:<br>- Product information<br>- Pricing<br>- Feedback<br>- Speak to a human<br>|
|USER|I need to get my internet working again.|

[Open in Playground](https://platform.openai.com/playground/p/default-decomposition-by-intent-classification-1?mode=chat)

基于客户查询的分类，可以向模型提供一组更具体的指令，供其处理下一步操作。例如，假设客户需要“故障排除”方面的帮助。

|||
|:-|:-|
|SYSTEM|将向您提供需要在技术支持环境中进行故障排除的客户服务咨询。通过以下方式帮助用户：<br> -请他们检查所有连接到/来自路由器的电缆是否已连接。请注意，随着时间的推移，电缆松动是很常见的。<br> 如果所有电缆都已连接，但问题仍然存在，请询问他们使用的是哪种路由器型号<br> -现在，您将建议他们如何重新启动设备：<br>- 如果型号为MTD-327J，建议他们按下红色按钮并保持5秒钟，然后等待5分钟再测试连接。<br>- 如果型号是MTD-327S，建议他们拔下插头并重新安装，然后等待5分钟再测试连接<br>- 如果客户的问题在重新启动设备并等待5分钟后仍然存在，请通过输出｛“请求的IT支持”｝将他们连接到IT支持。<br>如果用户开始提出与此主题无关的问题，请确认他们是否希望结束当前关于故障排除的聊天，并根据以下方案对其请求进行分类：<br>- <在此处插入一级/二级分类方案>|
|USER|I need to get my internet working again.|

请注意，模型已被指示发出特殊字符串，以指示会话状态何时更改。这使我们能够将我们的系统变成一个状态机，在状态机中，状态决定注入哪些指令。通过跟踪状态，在该状态下哪些指令是相关的，以及允许从该状态进行哪些状态转换，我们可以在用户体验周围设置护栏，这是用不太结构化的方法很难实现的。

#### 策略：对于需要很长对话的对话应用程序，总结或过滤以前的对话

由于模型具有固定的上下文长度，用户和助手之间的对话（整个对话都包含在上下文窗口中）不能无限期地继续。

这个问题有各种各样的解决方法，其中之一就是总结之前谈话中的转折点。一旦输入的大小达到预定的阈值长度，这可以触发对会话的一部分进行总结的查询，并且先前会话的总结可以被包括作为系统消息的一部分。或者，可以在整个会话的后台异步总结先前的会话。

另一种解决方案是动态选择对话中与当前查询最相关的先前部分。请参阅策略“使用基于嵌入的搜索来实现高效的知识检索”。

#### 策略：分段总结长文档，并递归构建完整摘要

由于模型具有固定的上下文长度，因此它们不能用于在单个查询中汇总超过上下文长度减去生成的摘要长度的文本。

要总结一个很长的文档，例如一本书，我们可以使用一系列查询来总结文档的每个部分。章节摘要可以连接和汇总，从而生成摘要摘要。这个过程可以递归地进行，直到整个文档被总结出来。如果有必要使用有关前几节的信息来理解后几节，那么另一个有用的技巧是在总结书中任何给定点之前的文本时，包括对该点内容的连续摘要。OpenAI在之前的研究中已经使用GPT-3的变体研究了这种总结书籍的程序的有效性。

### 策略：给模特们时间“思考”

#### 策略：指导模型在匆忙得出结论之前制定自己的解决方案

有时，当我们明确指示模型在得出结论之前从第一原理进行推理时，我们会得到更好的结果。例如，假设我们想要一个模型来评估学生对数学问题的解决方案。最明显的方法是简单地询问模型学生的解决方案是否正确。

|||
|:-|:-|
|SYSTEM|确定学生的解决方案是否正确。|
|USER|问题陈述：我正在建造一个太阳能装置，我需要你帮助解决财务问题。<br> -土地价格为100美元/平方英尺<br> -我可以花250美元/平方英尺买太阳能电池板<br> -我协商了一份维护合同，每年将花费10万美元，每平方英尺额外花费10美元<br>- 作为平方英尺数量的函数，运营第一年的总成本是多少。<br>- 学生解决方案：设x为装置的大小，单位为平方英尺。<br>- 土地成本：100x<br>太阳能电池板成本：250x<br>- 维护成本：100000+100x <br> 总成本: 100x + 250x + 100,000 + 100x = 450x + 100,000|
|ASSISTANT|The student's solution is correct.|

但学生的解决方案实际上并不正确！我们可以通过提示模型首先生成自己的解决方案来让模型成功地注意到这一点。











<script setup>
import promptExample from './components/promptExample.vue'


</script>