# 工具

让助手访问OpenAI托管的工具，如代码解释器和知识检索，或者使用函数调用构建自己的工具。使用OpenAI托管工具需要额外付费——请访问我们的帮助中心文章，了解更多关于这些工具定价的信息。

::: tip 提示
助理API处于测试版，我们正在积极添加更多功能。在我们的开发者论坛中分享您的反馈！
:::

## 代码解释器

代码解释器允许助理API在沙盒执行环境中编写和运行Python代码。该工具可以处理具有不同数据和格式的文件，并生成具有数据和图形图像的文件。代码解释器允许您的助手迭代运行代码，以解决具有挑战性的代码和数学问题。当您的助手编写的代码无法运行时，它可以通过尝试运行不同的代码来迭代此代码，直到代码执行成功。

代码解释器每次收费0.03美元。如果您的助手在两个不同的线程中同时调用代码解释器（例如，每个最终用户一个线程），则会创建两个代码解释器会话。默认情况下，每个会话活动一小时，这意味着如果用户在同一线程中与代码解释器交互长达一小时，则每个会话只需支付一个会话的费用。

### 启用代码解释器

传递Assistant对象的tools参数code_interpreterin以启用代码解释器：

<enablingCodeInterpreter/>

然后，模型根据用户请求的性质决定何时在运行中调用代码解释器。可以通过助理的说明中的提示（例如，“编写代码以解决此问题”）来促进此行为。

### 将文件传递给代码解释器

代码解释器可以解析文件中的数据。当您想向助手提供大量数据或允许用户上传自己的文件进行分析时，这很有用。请注意，为代码解释器上载的文件没有索引以供检索。请参阅下面的“[知识检索](https://platform.openai.com/docs/assistants/tools/knowledge-retrieval)”部分，以获取有关索引文件以进行检索的更多详细信息。

所有使用此助手运行的程序都可以访问在助手级别传递的文件：

<passFilesInterpreter/>

::: tip 提示
当与代码解释器一起使用时，您不需要为附加到助手或消息的文件付费。您只对为检索而编制索引的文件收费，如果启用了检索工具，则会自动进行检索。
:::

文件也可以在线程级别传递。这些文件只能在特定线程中访问。使用[文件上传端点](https://platform.openai.com/docs/api-reference/files/create)上传文件，然后将文件ID作为消息创建请求的一部分进行传递：

<passedFileThread/>

文件的最大大小为512 MB。代码解释器支持多种文件格式，包括.csv、.pdf、.json等。有关支持的文件扩展名（及其相应的MIME类型）的更多详细信息，请参阅下面的“[支持的文件](https://platform.openai.com/docs/assistants/tools/supported-files)”部分。

### 读取代码解释器生成的图像和文件

API中的代码解释器也输出文件，例如生成图像图、CSV和PDF。生成了两种类型的文件：
- 图像
- 数据文件（例如，包含助理生成的数据的csv文件）

当代码解释器生成图像时，您可以在助手消息响应的file_id字段中查找并下载此文件：

```json
{
    "id": "msg_abc123",
    "object": "thread.message",
    "created_at": 1698964262,
    "thread_id": "thread_abc123",
    "role": "assistant",
    "content": [
    {
      "type": "image_file",
      "image_file": {
        "file_id": "file-abc123"
      }
    }
  ]
  # ...
}
```
然后可以通过将文件ID传递到文件API来下载文件内容：

<downloadFile/>

当代码解释器引用文件路径（例如“下载此csv文件”）时，文件路径将作为注释列出。您可以将这些注释转换为链接以下载文件：

```json
{
  "id": "msg_abc123",
  "object": "thread.message",
  "created_at": 1699073585,
  "thread_id": "thread_abc123",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": {
        "value": "The rows of the CSV file have been shuffled and saved to a new CSV file. You can download the shuffled CSV file from the following link:\n\n[Download Shuffled CSV File](sandbox:/mnt/data/shuffled_file.csv)",
        "annotations": [
          {
            "type": "file_path",
            "text": "sandbox:/mnt/data/shuffled_file.csv",
            "start_index": 167,
            "end_index": 202,
            "file_path": {
              "file_id": "file-abc123"
            }
          }
          ...
```
### 代码解释器的输入和输出日志

通过列出一个名为代码解释器的Run的步骤，您可以检查代码解释器的代码输入和输出日志：

<logsOfCodeInterpreter/>

```json
{
  "object": "list",
  "data": [
    {
      "id": "step_abc123",
      "object": "thread.run.step",
      "type": "tool_calls",
      "run_id": "run_abc123",
      "thread_id": "thread_abc123",
      "status": "completed",
      "step_details": {
        "type": "tool_calls",
        "tool_calls": [
          {
            "type": "code",
            "code": {
              "input": "# Calculating 2 + 2\nresult = 2 + 2\nresult",
              "outputs": [
                {
                  "type": "logs",
                  "logs": "4"
                }
                        ...
 }
```

## 知识检索

检索为Assistant提供了模型之外的知识，例如用户提供的专有产品信息或文档。一旦文件上传并传递给助手，OpenAI将自动对您的文档进行分组，索引和存储嵌入，并实现矢量搜索以检索相关内容以回答用户查询。

### 启用检索

在助手的 Tools 参数中传递 retrieval 以启用检索：

<enablingRetrieval/>

::: tip 提示
如果您为特定助理启用检索功能，则所有附件都将自动编入索引，每个助理每天将向您收取0.20美元/GB的费用。可以使用“[修改助手](https://platform.openai.com/docs/api-reference/assistants/modifyAssistant)”端点启用/禁用检索。
:::

### 工作原理

模型然后基于用户消息来决定何时检索内容。助理API自动在两种检索技术之间进行选择：
- 它在短文档的提示中传递文件内容，或者
- 对较长的文档执行矢量搜索

检索当前通过将所有相关内容添加到模型调用的上下文中来优化质量。我们计划引入其他检索策略，使开发人员能够在检索质量和模型使用成本之间选择不同的折衷方案。


## 上传文件以供检索

与代码解释器类似，文件可以在助手级别或单个消息级别传递。

<uploadFilesForRetrieval/>

当文件在消息级别附加时，它只能在消息所附加的特定线程中访问。上传文件后，您可以在创建消息时传递此文件的ID。请注意，您不会根据您通过文件API上载的文件大小收费，而是根据您附加到特定助手或消息的索引文件收费。

<uploadRetrievalMessageLevel/>

最大文件大小为512 MB，不超过2000000个tokens（在附加文件时自动计算）。检索支持多种文件格式，包括.pdf、.md、.docx等。有关支持的文件扩展名（及其相应的MIME类型）的更多详细信息，请参阅下面的“[支持的文件](https://platform.openai.com/docs/assistants/tools/supported-files)”部分。

### 检索定价

检索的价格为每个助理每天0.20美元/GB。启用检索工具后，将单个文件ID附加到多个助理将产生每个助理每天的费用。例如，如果您在启用检索工具的情况下将同一个1 GB文件附加到两个不同的助理（例如，面向客户的助理#1和内部员工助理#2），您将被收取两次存储费（每天2*0.20美元）。该费用不随最终用户和从给定助理检索知识的线程的数量而变化。

此外，如果邮件是启用检索工具的运行的一部分，则附加到邮件的文件将按每个助理收费。例如，在一个线程上运行一个启用检索的助手，该线程有10条消息，每条消息有1个唯一文件（总共10个唯一文件），这将导致所有10个文件（以及附加到助手本身的任何文件）每天按GB计费。

### 删除文件

要从助手中删除文件，可以从助手分离该文件：

<deleteFileAssitant/>

将文件从助手中分离会将文件从检索索引中删除，这意味着您将不再收取存储索引文件的费用。


### 文件引用

当代码解释器在消息中输出文件路径时，您可以使用注释字段将它们转换为相应的文件下载。有关如何执行此操作的示例，请参见“注释”部分。


```json
{
    "id": "msg_abc123",
    "object": "thread.message",
    "created_at": 1699073585,
    "thread_id": "thread_abc123",
    "role": "assistant",
    "content": [
      {
        "type": "text",
        "text": {
          "value": "The rows of the CSV file have been shuffled and saved to a new CSV file. You can download the shuffled CSV file from the following link:\n\n[Download Shuffled CSV File](sandbox:/mnt/data/shuffled_file.csv)",
          "annotations": [
            {
              "type": "file_path",
              "text": "sandbox:/mnt/data/shuffled_file.csv",
              "start_index": 167,
              "end_index": 202,
              "file_path": {
                "file_id": "file-abc123"
              }
            }
          ]
        }
      }
    ],
    "file_ids": [
      "file-abc456"
    ],
        ...
  },
```

## Function calling  函数调用

类似于Chat Completions API，助手API支持函数调用。函数调用允许您向助手描述函数，并让助手智能地返回需要调用的函数及其参数。当助理API调用函数时，它将在运行期间暂停执行，您可以提供函数回调的结果以继续运行执行。

###  定义函数

首先，在创建助手时定义您的功能：

<definingFunctions/>

### 读取助手调用的函数

当您使用触发该功能的用户消息[启动Run](https://platform.openai.com/docs/api-reference/runs/createRun)时，Run将进入pending状态。处理后，运行将进入requires_action状态，您可以通过[检索run](https://platform.openai.com/docs/api-reference/runs/getRun)来验证该状态。该模型可以使用[并行函数调用](../functionCalling/functionCall.md#function-calling-并行函数调用)同时提供多个函数进行调用：

```json
{
  "id": "run_abc123",
  "object": "thread.run",
  "assistant_id": "asst_abc123",
  "thread_id": "thread_abc123",
  "status": "requires_action",
  "required_action": {
    "type": "submit_tool_outputs",
    "submit_tool_outputs": {
      "tool_calls": [
        {
          "id": "call_abc123",
          "type": "function",
          "function": {
            "name": "getCurrentWeather",
            "arguments": "{\"location\":\"San Francisco\"}"
          }
        },
        {
          "id": "call_abc456",
          "type": "function",
          "function": {
            "name": "getNickname",
            "arguments": "{\"location\":\"Los Angeles\"}"
          }
        }
      ]
    }
  },
...

```

### 提交函数输出

然后，您可以通过提交所调用[函数的工具输出](https://platform.openai.com/docs/api-reference/runs/submitToolOutputs)来完成Run。传递上面required_action对象中引用的tool_call_id，以将输出匹配到每个函数调用。

<submittingFunctionsOutputs/>

提交输出后，运行将在继续执行之前进入排队状态。

## 支持的文件

对于text/MIME类型，编码必须是utf-8、utf-16或ascii之一。

|文件格式|mime类型|代码解释器是否支持|是否支持检索|
|:-|:-|:-|:-|
|.c|text/x-c|支持|支持|
|.cpp|text/x-c++|支持|支持|
|.csv|application/csv|支持||
|.docx|application/vnd.openxmlformats-officedocument.wordprocessingml.document|支持|支持|
|.html|text/html|支持|支持|
|.java|text/x-c|支持|支持|
|.json|application/json|支持|支持|
|.md|text/markdown|支持|支持|
|.pdf|application/pdf|支持|支持|
|.php|text/x-php|支持|支持|
|.pptx|application/vnd.openxmlformats-officedocument.presentationml.presentation|支持|支持|
|.py|text/x-python|支持|支持|
|.py|text/x-script.python|支持|支持|
|.rb|text/x-ruby|支持|支持|
|.tex|text/x-tex|支持|支持|
|.txt|text/plain|支持|支持|
|.css|text/css|支持||
|.jpeg|image/jpeg|支持||
|.jpg|image/jpeg|支持||
|.js|text/javascript|支持||
|.gif|image/gif|支持||
|.png|image/png|支持||
|.tar|application/x-tar|支持||
|.ts|application/typescript|支持||
|.xlsx|application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|支持||
|.xml|application/xml or "text/xml"|支持||
|.zip|application/zip|支持||


<script setup>
import enablingCodeInterpreter from './components/enablingCodeInterpreter.vue'
import passFilesInterpreter from './components/passFilesInterpreter.vue'
import passedFileThread from './components/passedFileThread.vue'
import downloadFile from './components/downloadFile.vue'
import logsOfCodeInterpreter from './components/logsOfCodeInterpreter.vue'
import enablingRetrieval from './components/enablingRetrieval.vue'
import uploadFilesForRetrieval from './components/uploadFilesForRetrieval.vue'
import uploadRetrievalMessageLevel from './components/uploadRetrievalMessageLevel.vue'
import deleteFileAssitant from './components/deleteFileAssitant.vue'
import definingFunctions from './components/definingFunctions.vue'
import submittingFunctionsOutputs from './components/submittingFunctionsOutputs.vue'

</script>