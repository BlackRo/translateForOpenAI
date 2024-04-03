# 图像生成

了解如何在API中使用DALL·E生成或操作图像。

:::tip 提示
想在ChatGPT中生成图像吗？前往[chat.openai.com](https://chat.openai.com/auth/login)。
:::


## 介绍

图像API提供了三种与图像交互的方法：

- 基于文本提示从头开始创建图像（DALL·E3和DALL·E2）

- 基于新的文本提示，通过让模型替换预先存在的图像的某些区域来创建图像的编辑版本（仅限DALL·E 2）

- 创建现有图像的变体（仅限DALL·E 2）

本指南介绍了使用这三个API接口的基本知识和有用的代码示例。要尝试DALL·E 3，请前往[ChatGPT](https://chat.openai.com/auth/login)。要尝试DALL·E2，请查看[DALL·E预览应用程序](https://labs.openai.com/)。

## 用例

### 代数

图像生成端点允许您在给定文本提示的情况下创建原始图像。当使用DALL·E 3时，图像的大小可以是1024x1024、1024x1792或1792x1024像素。

默认情况下，图像是以标准质量生成的，但当使用DALL·E 3时，您可以设置质量：“hd”以增强细节。方形、标准质量的图像生成速度最快。

您可以使用DALL·E 3一次请求1张图像（通过并行请求请求更多图像），也可以使用DASL·E 2和n参数一次最多请求10张图像。

<generateAnImage/>
<newWithDalle3/>

## 提示

随着DALL·E 3的发布，出于安全考虑，该模型现在采用了提供的默认提示，并自动重写，以添加更多细节（更详细的提示通常会产生更高质量的图像）。

虽然目前无法禁用此功能，但您可以使用提示，通过在提示中添加以下内容，使输出更接近您请求的图像：

::: tip 提示
I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:
:::

我需要测试该工具如何使用极其简单的提示。不要添加任何细节，只需按原样使用即可。

更新后的提示在数据响应对象的修订提示(revised_prompt)字段中可见。


## DALL·E 3 生成示例

|提示|生成示例|
|:-|:-|
|一张白色暹罗猫的照片|<img style="width:220px;height:220px" src="/.vitepress/assets/cat.jpg" />|


使用[response_format](https://platform.openai.com/docs/api-reference/images/create#images/create-response_format)参数，每个图像都可以作为URL或Base64数据返回。URL将在一小时后过期。


## 编辑（仅限DALL·E 2）

也被称为“修复”，[图像编辑端点](https://platform.openai.com/docs/api-reference/images/create-edit)允许您通过上传图像和指示应替换哪些区域的掩码来编辑或扩展图像。遮罩的透明区域指示应在何处编辑图像，提示应描述完整的新图像，而不仅仅是已擦除的区域。这个端点可以实现我们DALL·E[预览应用程序中的编辑器](https://labs.openai.com/editor)等体验。

<editImage/>

|图片|遮罩|输出|
|:-|:-|:-|
|<img style="width:200px;height:200px" src="/.vitepress/assets/poolorigin.jpg"/>|<img style="width:200px;height:200px" src="/.vitepress/assets/poolmask.jpg" />|<img style="width:200px;height:200px" src="/.vitepress/assets/pooloutput.jpg" />|

提示：阳光充足的室内休息区，有一个装有火烈鸟的游泳池

上传的图像和掩码必须都是大小小于4MB的方形PNG图像，并且必须具有彼此相同的尺寸。生成输出时不使用遮罩的不透明区域，因此它们不一定需要像上面的示例那样与原始图像匹配。


## 变体（仅适用于DALL·E 2）

图像变体[端点](https://platform.openai.com/docs/api-reference/images/create-variation)允许您生成给定图像的变体。

<imageVariation/>


|图片|输出|
|:-|:-|
|<img style="width:200px;height:200px" src="/.vitepress/assets/variationImage.jpg"/>|<img style="width:200px;height:200px" src="/.vitepress/assets/variationOutput.jpg" />|

与编辑端点类似，输入图像必须是大小小于4MB的方形PNG图像。


## 内容审核

基于我们的内容策略，对提示和图像进行了过滤，当提示或图像被标记时会返回错误信息。


## 针对特定语言的提示/建议

<languageSpecific/>





<script setup>
import generateAnImage from './components/generateAnImage.vue'
import newWithDalle3 from './components/newWithDalle3.vue'
import editImage from './components/editImage.vue'
import imageVariation from './components/imageVariation.vue'
import languageSpecific from './components/languageSpecific.vue'
</script>