<template>
  <el-collapse v-model="improvingReliability_names">
    <el-collapse-item title="使用prompt参数" name="1">
      <div class="stepcontent">
        第一种方法是使用可选的提示参数，通过传递一个正确拼写的字典来进行修正
      </div>
      <div class="stepcontent">
        由于Whisper并未使用指令跟随(instruction-following) 技术进行训练，因此其运行方式更像是一个基本的GPT模型。重要的是要记住，Whisper只考虑提示的前244个标记。
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="improvingReliability_demo_prompt" />
      </div>
      <div class="stepcontent">
        虽然这将提高可靠性，但这项技术仅限于244个字符，因此您的SKU列表需要相对较小，才能成为可扩展的解决方案。
      </div>
    </el-collapse-item>
    <el-collapse-item title="使用GPT-4进行后处理" name="2">
      <div class="stepcontent">
        第二种方法涉及使用GPT-4或GPT-3.5-Turbo的后处理步骤。
      </div>
      <div class="stepcontent">
        我们首先通过system_prompt变量提供GPT-4的说明。与前面对prompt参数所做的操作类似，我们可以定义公司和产品名称。
      </div>
      <div class="stepcontent">
        <MarkdownRender :source="improvingReliability_demo_GPT" />
      </div>
      <div class="stepcontent">
        如果您尝试在自己的音频文件上进行此操作，您会发现GPT-4能够纠正许多转录中的拼写错误。由于其更大的上下文窗口，这种方法可能比使用Whisper的提示参数更具可扩展性，并且更可靠，因为GPT-4可以通过指导和指令进行操作，而Whisper由于缺乏后续指导而无法实现。
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ElCollapse, ElCollapseItem, ElLink } from "element-plus";
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import improvingReliability from '../hooks/improvingReliability'
const { improvingReliability_activeName,improvingReliability_demo_GPT, improvingReliability_demo_prompt} = improvingReliability();
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