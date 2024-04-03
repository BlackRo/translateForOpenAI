# 开发者 快速上手
## 使用 openAI Api 启动并运行

OpenAI API为开发者提供了一个简单的接口，在他们的应用程序中创建一个智能层,使用OpenAI的最先进模型来提供支持。
Chat Completions端点提供了聊天式GPT（ChatGPT）的能力，它提供了一种简单的方式，将文本作为输入，并使用GPT-4这样的模型生成输出。


这个快速入门旨在帮助您设置本地开发环境并发送第一个API请求。如果您是一名有经验的开发者，或者只是想直接开始使用OpenAI API，可以从[API参考](../markdown-examples.md)或[GPT指南](../api-examples.md)开始。在整个快速入门过程中，您将学习到：

- 如何设置开发环境
- 如何安装最新的SDK
- OpenAI API的一些基本概念
- 如何发送第一个API请求

如果您在开始过程中遇到任何挑战或有任何问题，请加入我们的开发者论坛。

## 账户设置

首先，创建一个[OpenAI账户](../api-examples.md)或[登录](../markdown-examples.md)。然后，导航到API密钥页面，并选择“Create new secret key”，可选择为密钥命名。确保将其保存在安全的地方，并不与任何人共享。

## 开发语言

选择您想要使用的工具或语言,主要包括curl、Python、Node.js。


<languageChoice/>

## 后续步骤
现在您已经进行了第一次OpenAI API请求，是时候探索其他可能性了：

- 想要获取有关我们的模型和API更详细的信息，请查看我们的[GPT指南](../markdown-examples.md)
- 请访问[OpenAI Cookbook](https://cookbook.openai.com/)，了解深入的示例API用例，以及常见任务的代码片段。
- 想知道OpenAI的模型有什么能力？请查看我们的[示例提示库](../markdown-examples.md)。
- 想要在不编写任何代码的情况下尝试API吗？请在Playground中开始实验。
- 在开始构建之前，请牢记我们的[使用政策](https://openai.com/policies/usage-policies)。

<script setup>
import languageChoice from '/.vitepress/components/languageChoice.vue'
</script>