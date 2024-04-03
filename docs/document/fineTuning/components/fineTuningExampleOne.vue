<template>
  <el-collapse v-model="fineTuningExampleOne_names">
    <el-collapse-item title="风格和语调" name="1">
      <div class="stepcontent">
        在这个示例中，我们将探讨如何构建一个精调模型，使其遵循特定的风格和语调指导，超出仅仅通过提示的范围。
      </div>
      <div class="stepcontent">
        首先，我们创建一个样本集，展示了模型应该具有的特点，比如拼写错误。
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_messages" />
      </div>
        <div class="stepcontent">
        如果你想跟随并自己创建一个微调的模型，你至少需要10个例子。
      </div>
      <div class="stepcontent">
        获取可能改进模型的数据之后，下一步是检查数据是否符合所有的
        <el-link
          type="primary"
          href="../fineTuning/fineTuning.html#检查数据格式"
          :underline="false"
          >格式要求。
          </el-link> 
      </div>
      <div class="stepcontent">
        现在我们已经格式化并验证了数据，最后的训练步骤是启动一个任务来创建微调模型。您可以通过OpenAI CLI或我们的SDK之一来完成此操作，如下所示：
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_stylestone" />
      </div>
      <div class="stepcontent">
        一旦训练任务完成，您就可以<el-link
          type="primary"
          href="../fineTuning/fineTuning.html#使用微调模型"
          :underline="false"
          >使用您的微调模型
          </el-link>了。
      </div>
    </el-collapse-item>
    <el-collapse-item title="结构化输出" name="2">
      <div class="stepcontent">
        另一种非常适合微调的用例是让模型提供结构化信息，一下是关于体育头条的示例：
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_so_one" />
      </div>
       <div class="stepcontent">
        如果你想跟随并自己创建一个微调的模型，你至少需要10个例子。
      </div>
      <div class="stepcontent">
        获取可能改进模型的数据之后，下一步是检查数据是否符合所有的<el-link
          type="primary"
          href="../fineTuning/fineTuning.html#检查数据格式"
          :underline="false"
          >格式要求。
          </el-link> 
      </div>
      <div class="stepcontent">
        现在我们已经格式化并验证了数据，最后的训练步骤是启动一个任务来创建微调模型。您可以通过OpenAI CLI或我们的SDK之一来完成此操作，如下所示：
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_so_two" />
      </div>
      <div class="stepcontent">
        一旦训练任务完成，您就可以<el-link
          type="primary"
          href="../fineTuning/fineTuning.html#使用微调模型"
          :underline="false"
          >使用您的微调模型
          </el-link>了，请求示例:
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_so_three" />
      </div>
      <div class="stepcontent">
        根据格式化的训练数据，响应应如下所示：
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_so_four" />
      </div>
    </el-collapse-item>
    <el-collapse-item title="函数调用" name="3">
      <div class="stepcontent">
       提示： function_call 和 functions 已经被弃用，取而代之的是tools，然而，微调API此时仍然需要旧版格式。
      </div>
      <div class="stepcontent">
        chat completions API支持<el-link
          type="primary"
          href="../functionCalling/functionCall.html#函数调用"
          :underline="false"
          >函数调用
          </el-link>。在完成API中包含一长串函数可能会消耗大量提示token，有时模型会产生幻觉或无法提供有效的JSON输出。
      </div>
      <div class="stepcontent">
        使用函数调用示例对模型进行微调可以使您：
      </div>
        <div class="stepcontent">
       <ul>
        <li>即使没有完整的函数定义，也可以获得格式相似的响应</li>
        <li>获得更准确、更一致的输出</li>
       </ul>
      </div>
      <div class="stepcontent">
        如图所示设置示例的格式，每行包括一个“消息”列表和一个可选的“函数”列表：
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_fc_one" />
      </div>
    <div class="stepcontent">
        如果你想跟随并自己创建一个微调的模型，你至少需要10个例子。
      </div>
    <div class="stepcontent">
        如果你的目标是使用更少的token，那么一些有用的方式是：
      </div>
    <div class="stepcontent">
       <ul>
        <li>省略函数和参数描述：从函数和参数中删除描述字段</li>
        <li>省略参数：从参数对象中删除整个属性字段</li>
        <li>完全省略函数：从函数数组中删除整个函数对象</li>
       </ul>
    </div>
    <div class="stepcontent">
        如果您的目标是最大限度地提高函数调用输出的正确性，我们建议在训练和查询微调模型时使用相同的函数定义
      </div>
    <div class="stepcontent">
        对函数调用的微调也可以用于自定义模型对函数输出的响应。为此，您可以包含一条功能响应消息和一条解释该响应的辅助消息：
      </div>
    <div class="stepcontent">
        <MarkdownRender :source="fineTuningExampleOne_fc_otwo" />
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import { ElCollapse, ElCollapseItem, ElLink } from "element-plus";
import {ref} from 'vue'
import fineTuningExampleOne from '../hooks/fineTuningExampleOne'
const { fineTuningExampleOne_names,fineTuningExampleOne_messages,fineTuningExampleOne_stylestone,fineTuningExampleOne_so_one,fineTuningExampleOne_so_two,
fineTuningExampleOne_so_three,fineTuningExampleOne_so_four,fineTuningExampleOne_fc_one,fineTuningExampleOne_fc_otwo} = fineTuningExampleOne();
</script>
<style >
.stepTitle {
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;
}
.tableTitle {
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid #eee;
}

.tableContent {
  font-size: 14px;
  border-bottom: 1px solid #eee;
  height: 40px;
  line-height: 40px;
}
.tableBox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  flex-wrap: wrap;
}
.tableItem {
  min-width: 100px;
}
.tableBox2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  flex-wrap: wrap;
}

.tableItem2 {
  min-width: 400px;
}
.tableTitle2 {
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid #eee;
}

.tableContent2 {
  font-size: 14px;
  height: 140px;
  line-height: 30px;
  border-bottom: 1px solid #eee;
}
.tableContent3 {
  font-size: 14px;
  height: 220px;
  line-height: 30px;
}
.tableContent4 {
font-size: 14px;
  height: 140px;
  line-height: 30px;
}
.py_demo1 {
  background: #aaa;
}
.seletRight {
  top: 5px;
  right: -5px;
  border: 0px;
}
.demoContent {
  background: rgb(32, 33, 35);
}
.demoBox {
  background: rgb(53, 55, 64);
}
.steptitle {
  font-size: 18px;
  font-weight: 550;
  margin: 20px 0px;
}
.el-collapse-item__header {
  font-size: 18px;
  font-weight: 550;
}
.stepcontent {
  margin: 10px 0px;
  font-size: 15px;
  font-weight: 400;
  color: #1c1e21;
  font-family: "Chinese Quotes", "Inter var", "Inter", ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>