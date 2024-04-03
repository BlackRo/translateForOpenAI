# Embeddings 嵌入

## 什么是 Embeddings 嵌入 

OpenAI的文本embeddings是用于衡量文本字符串之间相关性的工具。embeddings通常用于以下几个方面：

- Search  搜索（根据与查询字符串的相关性对结果进行排名）
- Clustering  聚类（将文本字符串按相似性进行分组）
- Recommendations  推荐（根据相关文本字符串推荐相关物品）
- Anomaly detection  异常检测（识别与相关性较低的异常值）
- Diversity measurement 多样性测量（分析相似性分布）
- Classification  分类（按照最相似的标签对文本字符串进行分类）

::: tip 提示
我们很高兴地宣布，新的 Assistants API提供了检索和内置的消息历史管理功能。如果您不想自己处理和存储embeddings，可以查看 [Assistants API](../api-examples.md) 以了解更多信息。
:::

一个embeddings是一个浮点数向量（列表）。两个向量之间的距离衡量它们的相关性。小的距离表示高相关性，而大的距离表示低相关性。

请访问我们的[定价页面](https://openai.com/pricing)了解有关embeddings定价的信息。请求的计费是基于发送的输入中的tokens数量。


::: tip 要查看嵌入的实际应用，请查看我们的[代码示例](../api-examples.md)：
- Classification
- Topic clustering
- Search
- Recommendations
:::

## 如何获取embeddings

要获取一个embeddings，将您的文本字符串发送到 embeddings API端点，并选择一个 embeddings 模型ID（例如，text-embedding-ada-002）。响应将包含一个embeddings，您可以提取、保存和使用。

示例请求：

<embeddingsGet/>

示例响应：

```
{
  "data": [
    {
      "embedding": [
        -0.006929283495992422,
        -0.005336422007530928,
        ...
        -4.547132266452536e-05,
        -0.024047505110502243
      ],
      "index": 0,
      "object": "embedding"
    }
  ],
  "model": "text-embedding-ada-002",
  "object": "list",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}

```

请在[OpenAI Cookbook](https://cookbook.openai.com/)中查看更多的Python代码示例。

在使用OpenAI embeddings时，请牢记其[限制和风险](../api-examples.md)。

## Embedding 模型

OpenAI提供了一个第二代嵌入模型（在模型ID中用-002表示），以及16个第一代模型（在模型ID中用-001表示）。

我们建议几乎所有的使用情况都使用text-embedding-ada-002。它更好、更便宜、更简单易用。请阅读[博客/公告](https://openai.com/blog/new-and-improved-embedding-model)以获取更多信息。

| 模型代数 | 标记器 | 最大输入标记数 | 知识截断点 |
|:-|:-|:-|:-|
| V2 | cl100k_base | 8191 | 2021年9月 |
| V1 | GPT-2/GPT-3 | 2046 | 2020年8月 |

使用按每个输入 token 定价，费率为每1000个token0.0004美元，或每美元约3000页（假设每页约800个token）：


| 模型 | 粗略页数/美元| BEIR SEARCH EVAL的示例性能 |
|:-|:-|:-|
| text-embedding-ada-002 | 3000 | 53.9 |
| *-davinci-*-001 | 6 | 52.8 |
| *-curie-*-001 | 60 | 50.9 |
| *-babbage-*-001 | 240 | 50.4 |
| *-ada-*-001 | 300 | 49.0 |

## 第二代模型

| 模型代数 | 标记器 | 最大输入标记数 | 输出维度 |
|:-|:-|:-|:-|
| V2 | cl100k_base | 8191 | 2021年9月 |
| V1 | GPT-2/GPT-3 | 2046 | 2020年8月 |


::: tip tips
"OUTPUT DIMENSIONS"（输出维度）是指在一个模型或系统中，输出的向量或张量的维度数量。在机器学习和深度学习中，模型通常会将输入数据转换为具有不同维度的输出。这些维度可以表示不同的特征、类别、概率分布等，具体取决于具体任务和模型的设计。

理解输出维度对于分析和解释模型的输出非常重要。它可以帮助我们理解模型学习到的特征或表示，并根据需要进行后续处理或决策。输出维度的选择和设计是模型开发过程中的重要考虑因素之一，它会直接影响模型的性能和适用性。
:::

<firstGeneration/>



## Use cases 用例

这里我们展示一些有代表性的用例。我们将使用 Amazon fine-food 评论数据集进行以下示例。
 
### Obtaining the embeddings 获取嵌入

数据集包含截至2012年10月，亚马逊用户留下的共计568,454条食品评论。为了说明问题，我们将使用最近的1,000条评论的子集。这些评论都是用英文撰写的，倾向于积极或消极。每条评论包含产品ID、用户ID、评分、评论标题（摘要）和评论内容（正文）。例如：

| 产品ID | 用户ID | 分数 | 摘要 | 评论内容 |
|:-|:-|:-|:-|:-|
| B001E4KFG0 | A3SGXH7AUHU8GW | 5 | Good Quality Dog Food | I have bought several of the Vitality canned... |
| B00813GRG4 | A1D87F6ZCVE5NK | 1 | Not as Advertised | Product arrived labeled as Jumbo Salted Peanut... |

我们将把评论摘要和评论内容合并成一个整体的文本。模型将对这个合并后的文本进行编码，并输出一个单一的向量嵌入。

[从数据集中获取嵌入](https://cookbook.openai.com/examples/get_embeddings_from_dataset)


```python
from openai import OpenAI
client = OpenAI()

def get_embedding(text, model="text-embedding-ada-002"):
   text = text.replace("\n", " ")
   return client.embeddings.create(input = [text], model=model).data[0].embedding

df['ada_embedding'] = df.combined.apply(lambda x: get_embedding(x, model='text-embedding-ada-002'))
df.to_csv('output/embedded_1k_reviews.csv', index=False)

```
要从保存的文件加载数据，可以运行以下操作：

```python
import pandas as pd
df = pd.read_csv('output/embedded_1k_reviews.csv')
df['ada_embedding'] = df.ada_embedding.apply(eval).apply(np.array)
```

<dataVisuaIn2d/>

## Limitations & risks 限制和风险

在某些情况下，我们的嵌入模型可能不可靠或存在社会风险，并且在没有减轻措施的情况下可能会造成伤害。

### Social bias 社会偏见

::: tip 限制
限制：这些模型通过刻板印象或对特定群体的负面情绪编码了社会偏见。
:::
通过运行SEAT（[May等人,2019](https://arxiv.org/abs/1903.10561)）和Winogender（[Rudinger等人,2018](https://arxiv.org/abs/1804.09301)）基准测试，我们发现了我们模型中的偏见证据。这些基准测试共包含7个测试，用于衡量模型在应用于性别化名称、地区名称和一些刻板印象时是否存在隐含的偏见。

例如，我们发现我们的模型更强烈地将（a）欧洲裔美国人的名字与正面情绪联系起来，而与非洲裔美国人的名字相比，以及（b）将负面刻板印象与黑人女性联系起来。

这些基准测试在多个方面存在限制：（a）它们可能不适用于您特定的用例，（b）它们只测试了可能的社会偏见的一小部分。

这些测试是初步的，我们建议针对您特定的用例运行测试。这些结果应该被视为存在该现象的证据，而不是对您用例的确切描述。有关更多详细信息和指导，请参阅我们的[使用政策](https://openai.com/policies/usage-policies)。

如果您有任何问题，请通过聊天与我们的支持团队[联系](https://help.openai.com/en/)；我们很乐意为您提供建议。

### Blindness to recent events 对最近事件的不了解

::: tip 限制性
限制：模型缺乏对2020年8月之后发生的事件的了解。
:::

我们的模型是在包含2020年8月之前真实世界事件的一些信息的数据集上进行训练的。如果你依赖于代表最近事件的模型，那么它们可能不会表现得很好。


## 常见问题

### 在嵌入字符串之前，我如何判断它有多少个tokens？

在Python中，您可以使用OpenAI的标记器tiktoken将字符串拆分为标记。

示例代码:
```python
import tiktoken

def num_tokens_from_string(string: str, encoding_name: str) -> int:
    """Returns the number of tokens in a text string."""
    encoding = tiktoken.get_encoding(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

num_tokens_from_string("tiktoken is great!", "cl100k_base")
```

对于第二代嵌入模型，如text-embedding-ad-002，请使用cl100k_base编码。

更多细节和示例代码在OpenAI Cookbook指南中介绍如何[使用tiktoken计数](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken)

### 如何快速检索K个最近的嵌入向量？

为了快速搜索多个矢量，我们建议使用矢量数据库。你可以在我们的GitHub [Cookbook](https://cookbook.openai.com/examples/vector_databases/readme) 找到使用向量数据库和OpenAI API的例子。

矢量数据库选项包括：

- [Chroma](https://cookbook.openai.com/examples/vector_databases/chroma/using_chroma_for_embeddings_search)，一个开源嵌入商店
- [Elasticsearch](https://cookbook.openai.com/examples/vector_databases/elasticsearch/readme)，一个流行的搜索/分析引擎和矢量数据库
- [Milvus](https://cookbook.openai.com/examples/vector_databases/milvus/getting_started_with_milvus_and_openai)，一个用于可扩展相似性搜索的矢量数据库
- [Pinecone](https://cookbook.openai.com/examples/vector_databases/pinecone/readme)，一个完全管理的矢量数据库
- [Qdrant](https://cookbook.openai.com/examples/vector_databases/qdrant/getting_started_with_qdrant_and_openai), 矢量搜索引擎
- [Redis](https://cookbook.openai.com/examples/vector_databases/redis/readme) 作为矢量数据库
- [Typesense](https://cookbook.openai.com/examples/vector_databases/typesense/readme)，快速开源矢量搜索
- [Weaviate](https://cookbook.openai.com/examples/vector_databases/weaviate/readme)，一个开源的矢量搜索引擎
- [Zilliz](https://cookbook.openai.com/examples/vector_databases/zilliz/getting_started_with_zilliz_and_openai)，数据基础设施，由Milvus提供支持


### 我应该使用哪个距离函数？

我们建议[余弦相似性](https://en.wikipedia.org/wiki/Cosine_similarity)。距离函数的选择通常无关紧要。

OpenAI嵌入被标准化为长度1，这意味着：

- 仅使用点积就可以更快地计算余弦相似性

- 余弦相似性和欧几里得距离将导致相同的排名

### 我可以在线共享我的嵌入吗？

客户拥有我们模型中的输入和输出，包括嵌入的情况。您有责任确保您输入到我们的API中的内容不违反任何适用的法律或我们的[使用条款](https://openai.com/policies/terms-of-use)。



<script setup>
import embeddingsGet from './components/embeddingsGet.vue'
import firstGeneration from './components/firstGeneration.vue'
import dataVisuaIn2d from './components/dataVisuaIn2d.vue'
</script>