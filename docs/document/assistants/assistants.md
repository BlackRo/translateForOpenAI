# Assistants API  助手Api

Assistants API允许您在自己的应用程序中构建人工智能助手。助手有指令，可以利用模型、工具和知识来响应用户查询。助理API目前支持三种类型的工具：代码解释器、检索和函数调用。未来，我们计划发布更多OpenAI构建的工具，并允许您在我们的平台上提供自己的工具。

您可以使用助[Assistants playground](https://platform.openai.com/playground?mode=assistant)或跟随本指南逐步来探索Assistants API的功能。在高层次上，Assistants API的典型集成具有以下流程：

- 通过定义自定义指令并选择模型，在API中创建一个[助手](https://platform.openai.com/docs/api-reference/assistants/createAssistant)。如果有帮助的话，可以启用诸如代码解释器、检索和函数调用之类的工具。
- 当用户开始对话时，创建一个[Thread 线程](https://platform.openai.com/docs/api-reference/threads)。
- 随着用户提出问题，将[Messages](https://platform.openai.com/docs/api-reference/messages)添加到线程中。
- 在线程上[运行](https://platform.openai.com/docs/api-reference/runs)助手以触发响应。这会自动调用相关的工具。

::: tip 提示
助理API处于测试版，我们正在积极添加更多功能。在我们的开发者论坛中分享您的反馈！
:::

::: tip 提示
调用助手API需要您传递一个beta HTTP头。如果您使用OpenAI的官方Python或Node.js SDK，这将自动处理。
``` 
OpenAI-Beta: assistants=v1
```
:::

这个入门指南详细介绍了使用代码解释器创建和运行助手的关键步骤。


## Assistants playground

除了助手API，我们还提供了Assistants playground（需要登录）。Assistants playground是探索助手API功能和学习如何构建自己的助手的绝佳途径，而无需编写任何代码。

## 步骤1： 创建助手

助手代表一个可以根据多个参数配置来响应用户消息的实体，这些参数包括：

- 指令：助手和模型的行为或响应方式
- 模型：您可以指定任何GPT-3.5或GPT-4模型。检索工具需要gpt-3.5-turbo-1106和gpt-4-1106-preview模型。
    - 注意：助手API即将支持微调模型
- 工具：API支持由OpenAI构建和托管的代码解释器和检索工具。
- 函数：API允许您定义自定义函数签名，具有与我们的[函数调用](../functionCalling/functionCall.md)功能类似的行为。

在本例中，我们将[创建一个助手](https://platform.openai.com/docs/api-reference/assistants/createAssistant)，它是一个启用了代码解释器工具的个人数学导师。

<creatingAssistant/>


## 步骤2： 创建线程


一个线程表示一组对话。我们建议在用户启动对话后立即为每个用户创建一个[线程](https://platform.openai.com/docs/api-reference/threads/createThread)。通过[创建消息](https://platform.openai.com/docs/api-reference/messages/createMessage)传递此线程中任何特定于用户的上下文和文件。

<createThread/>

线程没有大小限制。您可以向线程中添加任意数量的消息。助手将确保模型对于每次运行的请求都适合于最大上下文窗口，并使用了我们在ChatGPT上进行了广泛测试的相关优化技术，如截断。当您使用Assistants API时，您将委托控制每次运行时传递给模型的输入token数量，这意味着在某些情况下您对于运行助手的成本有较少的控制，但无需自己处理管理上下文窗口的复杂性。

Organization 可以开启[Threads页面](https://platform.openai.com/threads)查看通过 Assistants API 和 Assistants playground 创建的Threads的功能。可以在[setting-Organization](https://platform.openai.com/account/organization) 管理 Threads 页面的权限。


## 步骤3： 向线程中添加Message

一条消息包含文本，并可选择允许用户上传任何[文件](https://platform.openai.com/docs/assistants/tools/supported-files)。消息需要[添加到特定的线程中](https://platform.openai.com/docs/api-reference/messages/createMessage)。目前不支持像在使用GPT-4 with Vision的聊天完成中那样[通过消息对象添加图像](https://platform.openai.com/docs/guides/vision)，但我们计划在未来几个月内添加对它们的支持。您仍然可以上传图片并通过[检索](https://platform.openai.com/docs/assistants/tools/knowledge-retrieval)进行处理。

<addMessage/>

现在，如果您[列出线程中的消息](https://platform.openai.com/docs/api-reference/messages/listMessages)，您将看到该消息已被附加。

```json
{
  "object": "list",
  "data": [
    {
      "created_at": 1696995451,
      "id": "msg_abc123",
      "object": "thread.message",
      "thread_id": "thread_abc123",
      "role": "user",
      "content": [{
        "type": "text",
        "text": {
          "value": "I need to solve the equation `3x + 11 = 14`. Can you help me?",
          "annotations": []
        }
          }],
        ...
```


## 步骤4： 运行助手

为了让助手回应用户的消息，您需要创建一个Run。这使得助手能够阅读Thread并决定是否调用工具（如果它们已启用）或者仅仅使用模型来最好地回答查询。随着Run的进行，助手会向Thread中添加具有role="assistant"的消息。助手还会自动决定在上下文窗口中包含哪些先前的消息，这既影响定价，也影响模型的性能。当前的方法是根据我们在构建ChatGPT过程中所学到的知识进行优化的，并且可能会随着时间的推移而发展。


您可以在创建Run时[选择性地传递新的指示](https://platform.openai.com/docs/api-reference/runs/createRun#runs-createrun-instructions)给助手，但请注意，这些指示会覆盖助手的默认指示。

<runAssistant/>


## 步骤5： 查看运行状态

默认情况下，一个Run处于[排队状态](https://platform.openai.com/docs/api-reference/runs/object#runs/object-status)。您可以定期[检索Run](https://platform.openai.com/docs/api-reference/runs/getRun)以检查其[状态](https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps)，以确定它是否已完成。

<checkRunStatus/>

## 步骤6： 显示助手的响应

Run完成后，您可以[列出](https://platform.openai.com/docs/api-reference/messages/listMessages)助手添加到线程的消息。

<displayResponse/>

最后，将它们显示给用户！在此运行过程中，助手向线程添加了两条新消息。以下是一个可能的示例：

| 角色 | 内容 |
|:-|:-|
|user|I need to solve the equation 3x + 11 = 14. Can you help me?|
|assistant|Certainly, Jane Doe. To solve the equation (3x + 11 = 14) for (x), you'll want to isolate (x) on one side of the equation. Here's how you can do that:
| | 1.Subtract 11 from both sides of the equation to get (3x = 3)
| | 2.Then, divide both sides by 3 to solve for (x)
| | Let me calculate the value of (x) for you.|
|assistant	|The solution to the equation (3x + 11 = 14) is (x = 1).|

如果您希望探索或展示助手及其工具的内部工作原理，您还可以检索此Run的[Run Steps](https://platform.openai.com/docs/api-reference/runs/listRunSteps)。

## 下一步

- 1.深入了解助理的[工作方式](https://platform.openai.com/docs/assistants/how-it-works)
- 2.了解有关[Tools](https://platform.openai.com/docs/assistants/tools)的更多信息
- 3.探索 [Assistants playground](https://platform.openai.com/playground?mode=assistant)




<script setup>
import creatingAssistant from './components/creatingAssistant.vue'
import createThread from './components/createThread.vue'
import addMessage from './components/addMessage.vue'
import listMessage from './components/listMessage.vue'
import runAssistant from './components/runAssistant.vue'
import checkRunStatus from './components/checkRunStatus.vue'
import displayResponse from './components/displayResponse.vue'
</script>