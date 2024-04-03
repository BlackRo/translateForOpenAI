<template>
    <el-collapse v-model="countingTokens_names">
        <el-collapse-item title="计算chat API调用的tokens" name="1">
        <div class="stepcontent">
            以下是用于对传递到gpt-3.5-turbo-0613的消息的tokens进行计数的示例函数。
        </div>
        <div class="stepcontent">
            messages转换为tokens的确切方式可能会因模型而异。因此，当未来的模型版本发布时，此函数返回的答案可能只是近似值。<el-link type="primary" href="../markdown-examples.html" :underline="false">ChatML</el-link>文档解释了OpenAI API如何将消息转换为令牌，这可能有助于编写自己的函数。
        </div>
        <div class="demoBox">
            <div class="demoContent">
                <MarkdownRender :source="countingTokens_python_markText" />
            </div>
        </div>
        <div class="stepcontent">
           接下来，创建一条message并将其传递给上面定义的函数以查看tokens计数，这应该与API使用参数返回的值相匹配：
        </div>
        <div class="demoBox">
            <div class="demoContent">
                <MarkdownRender :source="countingTokens_message_markText" />
            </div>
        </div>
        <div class="stepcontent">
           要确认我们上面的函数生成的数字与API返回的数字相同，请创建一个新的聊天完成：
        </div>
        <div class="demoBox">
            <div class="demoContent">
                <MarkdownRender :source="countingTokens_example_markText" />
            </div>
        </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script lang="ts" setup>
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import countingTokens from '../hooks/countingTokens'
import {ElCollapse,ElCollapseItem,ElLink} from "element-plus";
const {countingTokens_names,countingTokens_python_markText,countingTokens_message_markText,countingTokens_example_markText } = countingTokens();
</script>
<style >
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