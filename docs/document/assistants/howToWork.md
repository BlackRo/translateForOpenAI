# 工作原理

助手API旨在帮助开发人员构建能够执行各种任务的强大人工智能助手。

::: tip 提示
助手API目前处于测试阶段，我们正在积极努力添加更多功能。请在我们的[开发者论坛](https://community.openai.com/)上分享您的反馈
:::

1. 助手可以使用特定的指示调用OpenAI的[模型](../startComponents/models-overview.md)，以调整其个性和功能。
2. 助手可以同时访问多个工具。这些工具可以是OpenAI托管的工具，如[代码解释器](https://platform.openai.com/docs/assistants/tools/code-interpreter)和[知识检索](https://platform.openai.com/docs/assistants/tools/knowledge-retrieval)，也可以是您构建/托管的工具（通过[函数调用](https://platform.openai.com/docs/assistants/tools/function-calling)）。
3. 助手可以访问持久的Thread。Thread通过存储消息历史记录并在对话超过模型上下文长度时截断它来简化AI应用程序开发。您只需创建一个Thread，然后在用户回复时向其追加消息即可。
4. 助手可以访问多种格式的[文件](https://platform.openai.com/docs/assistants/tools/supported-files)，可以作为其创建的一部分，也可以作为助手和用户之间的Thread的一部分。在使用工具时，助手还可以创建文件（例如图像、电子表格等），并在创建的消息中引用文件。

## Objects 对象

<img src="/.vitepress/assets/diagram-assistant.jpg">

|对象|释义|
|:-|:-|
|Assistant|专门构建的人工智能，使用OpenAI的模型和调用工具|
|Thread|助手和用户之间的对话会话。Thread存储消息并自动处理截断，以使内容适应模型的上下文。|
|Message|助手或用户创建的消息。消息可以包含文本、图像和其他文件。消息以列表的形式存储在Thread上。|
|Run|在Thread上对助手的调用。助手使用其配置和Thread的消息通过调用模型和工具来执行任务。作为Run的一部分，助手将消息附加到Thread上。|
|Run Step|Run步骤的详细列表。作为Run的一部分，助手可以调用工具或创建消息。检查Run步骤可以让您内省助手如何得到最终结果。|

## 创建助手

::: tip 提示
我们建议使用OpenAI的[最新模型](../startComponents/models-overview.md#gpt-4-and-gpt-4-turbo)与Assistants API以获得最佳结果并最大程度地与工具兼容。
:::

要开始创建一个助手，只需要指定要使用的模型即可。但是，您可以进一步自定义助手的行为：
- instructions:使用instructions参数来指导助手的个性，并定义其目标。指示类似于Chat Completions API中的系统消息，它们可以用来引导助手的行为。通过提供明确的指示，您可以影响助手生成响应的方式，以使其更符合您的预期和需求。
- tools:使用tools参数可以让助手访问多达128个工具。您可以让助手访问OpenAI托管的工具，如code_interpreter和retrieval，也可以通过函数调用调用第三方工具。通过这种方式，助手可以获得更丰富的功能和资源，以满足您的特定需求。
- file_ids:使用file_ids参数可以让像code_interpreter和retrieval这样的工具访问文件。文件可以使用[文件上传端点](https://platform.openai.com/docs/api-reference/files/create)上传，并且必须将其目的设置为assistants，以便在此API中使用。通过这种方式，工具可以使用文件来执行相关的操作和功能。

例如，要创建一个可以基于.csv文件创建数据可视化的助手，首先上传一个文件。

<createCsvAssistant/>

然后，使用已上传的文件创建助手。

<createUploadAssistant/>

您可以每个助手附加最多20个文件，每个文件的最大大小为512 MB。您的组织上传的所有文件的大小不应超过100 GB。您可以使用我们的[帮助中心](https://help.openai.com/en/)请求增加存储限制。除了512 MB的文件大小限制外，每个文件只能包含2,000,000个标记。如果任何附加的文件超过标记限制，助手或消息的创建将失败。

您还可以使用[AssistantFile](https://platform.openai.com/docs/api-reference/assistants/file-object)对象来创建、删除或查看助手和文件对象之间的关联。请注意，删除AssistantFile不会删除原始的文件对象，它只是删除该文件与助手之间的关联。要删除文件，请改用文件[删除端点](https://platform.openai.com/docs/api-reference/files/delete)。

## 管理线程及消息

Threads和Messages表示助手和用户之间的对话片段。您可以在Thread中存储无限数量的消息。一旦消息的数量超过了模型的上下文窗口大小，Thread将尽可能包含适应上下文窗口的尽可能多的消息，并丢弃最旧的消息。这样可以确保对话的上下文始终保持在模型可处理的范围内。

您可以创建一个具有初始消息列表的线程，如下所示：

<createMessagesThread/>

消息可以包含文本、图像或文件。目前，用户创建的消息不能包含图像文件，但我们计划在未来添加对此的支持。消息也具有与助理相同的文件大小和token限制（512 MB文件大小限制和2000000token限制）。

## 上下文窗口管理

Assistants API会自动管理上下文窗口，以确保不超过模型的上下文长度。一旦Thread中的消息数量超过了模型的上下文窗口大小，Thread将尽可能包含适应上下文窗口的尽可能多的消息，并丢弃最旧的消息。请注意，这种截断策略将随着时间的推移而变得更加复杂和精细。

目前，助手会包含适应上下文长度的最大数量的消息。我们计划探索您在选择的模型之外控制输入/输出token数量的能力，以及自动生成以前消息的摘要并将其作为上下文传递的能力。如果您的用例需要更高级的控制级别，您可以使用[Chat Completions API](../capabilityComponents/textGeneration.md#chat-completions-api)手动生成摘要并控制上下文。

## 消息注释

助理创建的消息可以在对象的内容数组中包含[注释](https://platform.openai.com/docs/api-reference/messages/object#messages/object-content)。注释提供了有关应如何对消息中的文本进行注释的信息。

注释有两种类型：
- 1. file_citation:文件引用由检索工具创建，并定义对助理上传并用于生成响应的特定文件中特定引用的引用.
- 2. file_path：文件路径注释由code_interpreter工具创建，并包含对该工具生成的文件的引用。

当Message对象中存在注释时，您将在文本中看到难以辨认的模型生成的子字符串，您应该将其替换为注释。这些字符串可能看起来像[13†source]或sandbox：/mnt/data/file.csv。下面是一个示例python代码片段，它用注释中的信息替换这些字符串。

```json
# Retrieve the message object
message = client.beta.threads.messages.retrieve(
  thread_id="...",
  message_id="..."
)

# Extract the message content
message_content = message.content[0].text
annotations = message_content.annotations
citations = []

# Iterate over the annotations and add footnotes
for index, annotation in enumerate(annotations):
    # Replace the text with a footnote
    message_content.value = message_content.value.replace(annotation.text, f' [{index}]')

    # Gather citations based on annotation attributes
    if (file_citation := getattr(annotation, 'file_citation', None)):
        cited_file = client.files.retrieve(file_citation.file_id)
        citations.append(f'[{index}] {file_citation.quote} from {cited_file.filename}')
    elif (file_path := getattr(annotation, 'file_path', None)):
        cited_file = client.files.retrieve(file_path.file_id)
        citations.append(f'[{index}] Click <here> to download {cited_file.filename}')
        # Note: File download functionality not implemented above for brevity

# Add footnotes to the end of the message before displaying to user
message_content.value += '\n' + '\n'.join(citations)
```

## Runs and Run Steps

当您在线程中从用户那里获得了所需的所有上下文时，您可以使用自己选择的助手运行线程。

<runSteps/>

默认情况下，Run将使用Assistant对象中指定的模型和工具配置，但您可以在创建Run时覆盖其中大部分配置，以增加灵活性：

<runUseModel/>

注意：在创建Run期间，不能覆盖与Assistant关联的file_ids。必须使用[修改助手端点](https://platform.openai.com/docs/api-reference/assistants/modifyAssistant)才能执行此操作


##  Run的生命周期

Run对象可以具有多个状态。

<img src="/.vitepress/assets/diagram-1.jpg">

|状态|释义|
|:-|:-|
|queued|首次创建运行时或完成required_action时，它们将移动到排队状态。他们几乎应该立即转向in_progress。|
|in_progress|在in_progress中，助手使用模型和工具执行步骤。您可以通过检查运行步骤来查看运行的进度。|
|completed|Run成功完成！现在，您可以查看助手添加到线程的所有消息，以及Run所采取的所有步骤。您还可以通过向线程添加更多用户消息并创建另一个Run来继续对话。|
|requires_action|使用[函数调用](https://platform.openai.com/docs/assistants/tools/function-calling)工具时，一旦模型确定了要调用的函数的名称和参数，Run将移动到required_action状态。然后，您必须运行这些函数并[提交输出](https://platform.openai.com/docs/api-reference/runs/submitToolOutputs)，然后才能继续运行。如果在expires_at时间戳过去之前（大约在创建后10分钟）没有提供输出，则运行将进入过期状态。|
|expired|当函数调用输出在expires_at之前没有提交并且运行到期时，就会发生这种情况。此外，如果运行时间过长，并且超过expires_at中规定的时间，我们的系统将使运行过期。|
|cancelling|您可以尝试使用“[取消运行](https://platform.openai.com/docs/api-reference/runs/cancelRun)”端点取消in_progress运行。一旦取消尝试成功，“运行”的状态将变为“已取消”。已尝试取消，但不能保证取消。|
|cancelled|已成功取消Run。|
|failed|您可以通过查看Run中的last_error对象来查看失败的原因。故障的时间戳将记录在failed_at下。|

## 轮询更新

为了保持Run的最新状态，您必须定期检索run对象。您可以在每次检索对象时检查运行状态，以确定应用程序下一步应该做什么。我们计划在不久的将来增加对流媒体的支持，使其更简单。


### 线程锁

当Run处于_progress状态且不处于终端状态时，Thread将被锁定。这意味着：
- 无法将新消息添加到线程中。
- 无法在线程上创建新运行。

## Run steps

<img src="/.vitepress/assets/diagram-2.jpg">

Run step状态与 Run 状态具有相同的含义。
Run Step对象中大多数有趣的细节都位于Step_details字段中。可以有两种类型的步骤详细信息：
- message_creation：当助手在线程上创建消息时，会创建此运行步骤。
- tool_calls：此Run Step是在助手调用工具时创建的。有关此方面的详细信息，请参阅[《工具》](https://platform.openai.com/docs/assistants/tools)指南的相关章节。

## 数据访问指南

目前，通过API创建的助手、线程、消息和文件的范围是整个组织。因此，任何对组织具有API密钥访问权限的人都能够读取或写入组织中的助手、线程、消息和文件。

我们强烈建议使用以下数据访问控制：
- 实施授权。在对助手、线程、消息和文件执行读取或写入之前，请确保最终用户有权这样做。例如，将最终用户可以访问的对象ID存储在数据库中，并在使用API获取对象ID之前对其进行检查。
- 限制API密钥访问。仔细考虑组织中谁应该拥有API密钥，并定期审核此列表。API密钥支持广泛的操作，包括读取和修改敏感信息，如消息和文件。
- 创建单独的帐户。考虑为不同的应用程序创建单独的帐户/组织，以便在多个应用程序之间隔离数据。

## 局限性

在测试期间，我们希望在未来几周和几个月内解决几个已知的限制。当我们添加对附加功能的支持时，我们将在此页面上发布更改日志。
- 支持流输出（包括消息和运行步骤）。
- 支持通知共享对象状态更新，而无需轮询。
- 支持DALL·E或浏览作为一种工具。
- 支持使用图像创建用户消息。
我们正在积极努力添加这些功能，并欢迎在我们的开发者论坛上就构建助手的其他功能提供反馈。






<script setup>
import createCsvAssistant from './components/createCsvAssistant.vue'
import createUploadAssistant from './components/createUploadAssistant.vue'
import createMessagesThread from './components/createMessagesThread.vue'
import runSteps from './components/runSteps.vue'
import runUseModel from './components/runUseModel.vue'

</script>