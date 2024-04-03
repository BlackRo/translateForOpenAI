# 修正

## 概述

[Moderations](https://platform.openai.com/docs/api-reference/moderations)端点是一个工具，您可以使用它来检查内容是否符合OpenAI的[使用政策](https://openai.com/policies/usage-policies)。开发者可以通过该工具识别违反我们使用政策的内容，并采取行动，例如进行过滤。

这些模型分为以下类别：

|类别|描述|
|:-|:-|
|hate|表达、煽动或宣扬基于种族、性别、民族、宗教、国籍、性取向、残疾状况或社会阶层的仇恨的内容。针对非受保护群体（例如国际象棋玩家）的仇恨内容是骚扰行为。|
|hate/threatening|基于种族、性别、民族、宗教、国籍、性取向、残疾状况或社会阶层的仇恨内容，同时包含对目标群体进行暴力或造成严重伤害的内容。|
|harassment 骚扰|向任何目标表达、煽动或推广骚扰性语言的内容。|
|harassment/threatening|骚扰内容，也包括对任何目标的暴力或严重伤害。|
|self-harm 自我伤害|宣扬、鼓励或描述自残行为的内容，如自杀、切割和饮食失调。|
|self-harm/intent| 演讲者表达自己正在参与或打算参与自残行为，如自杀、割伤和进食障碍的内容。|
|self-harm/instructions 自残/说明|鼓励实施自残行为的内容，如自杀、切割和饮食失调，或就如何实施此类行为提供指示或建议的内容。鼓励实施自残行为的内容，如自杀、切割和饮食失调，或就如何实施此类行为提供指示或建议的内容。|
|sexual 性行为相关|旨在引起性兴奋的内容，如对性活动的描述，或促进性服务的内容（不包括性教育和健康）。|
|sexual/minors 性/未成年人|性内容，包括未满18岁的个人。|
|violence 暴力|描述死亡、暴力或身体伤害的内容。|
|violence/graphic 暴力/图形|以图形细节描述死亡、暴力或身体伤害的内容。|

在监视OpenAI API的输入和输出时，可以免费使用审核端点。我们目前不允许使用其他用例。较长文本的准确性可能较低。为了获得更高的准确性，可以尝试将长文本分割成更小的块，每个块少于2000个字符。

::: tip 提示
我们正在不断努力提高分类器的准确性。目前，我们对非英语语言的支持有限。
:::

## 快速开始

要获得一段文本的分类，请向审核端点发出请求，如以下代码片段所示：

<getModerations/>

下面是端点的输出示例。它返回以下字段：

- flagled:如果模型将内容分类为违反OpenAI的使用策略，则设置为true，否则设置为false。
- categories：包含每个类别的二进制使用策略违反标志的字典。对于每个类别，如果模型将相应的类别标记为违反，则该值为true，否则为false。
- category_scores：包含模型输出的每个类别的原始分数字典，表示模型确信输入违反了OpenAI对该类别的策略。该值介于0和1之间，其中值越高表示置信度越高。分数不应被解释为概率。

```json
{
  "id": "modr-XXXXX",
  "model": "text-moderation-005",
  "results": [
    {
      "flagged": true,
      "categories": {
        "sexual": false,
        "hate": false,
        "harassment": false,
        "self-harm": false,
        "sexual/minors": false,
        "hate/threatening": false,
        "violence/graphic": false,
        "self-harm/intent": false,
        "self-harm/instructions": false,
        "harassment/threatening": true,
        "violence": true,
      },
      "category_scores": {
        "sexual": 1.2282071e-06,
        "hate": 0.010696256,
        "harassment": 0.29842457,
        "self-harm": 1.5236925e-08,
        "sexual/minors": 5.7246268e-08,
        "hate/threatening": 0.0060676364,
        "violence/graphic": 4.435014e-06,
        "self-harm/intent": 8.098441e-10,
        "self-harm/instructions": 2.8498655e-11,
        "harassment/threatening": 0.63055265,
        "violence": 0.99011886,
      }
    }
  ]
}
```
::: tip 提示
OpenAI将不断升级审核端点的底层模型。因此，依赖于category_cores的自定义策略可能需要随着时间的推移重新校准。
:::


<script setup>
import getModerations from './components/getModerations.vue'
</script>