<template>
  <el-tabs v-model="languageSpecific_activeName" class="demo-tabs">
    <el-tab-pane label="Node.js" name="Node">
    <div class="steptitle">
      使用内存中的图像数据
      </div>
      <div class="stepcontent">
      上面指南中的Node.js示例使用fs模块从磁盘读取图像数据。在某些情况下，您可能会将图像数据存储在内存中。下面是一个示例API调用，它使用存储在Node.js缓冲区对象(Buffer object)中的图像数据：
      </div>
      <div class="stepcontent">
      <MarkdownRender :source="languageSpecific_node_one" />
      </div>
     <div class="steptitle">
      使用TypeScript
      </div>
      <div class="stepcontent">
      如果您正在使用TypeScript，您可能会遇到一些图像文件参数的怪癖。以下是通过显式强制转换参数来解决类型不匹配问题的示例：
      </div>
      <div class="stepcontent">
      <MarkdownRender :source="languageSpecific_node_two" />
      </div>
      <div class="stepcontent">
      这里有一个类似的内存图像数据示例：
      </div>
      <div class="stepcontent">
      <MarkdownRender :source="languageSpecific_node_three" />
      </div>
      <div class="steptitle">
      错误处理
      </div>
      <div class="stepcontent">
      由于输入无效、速率限制或其他问题，API请求可能会返回错误。这些错误可以通过try....catch语句处理，错误详细信息可以在error.response或error.message中找到：
      </div>
      <div class="stepcontent">
      <MarkdownRender :source="languageSpecific_node_four" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Python" name="Python">
      <div class="steptitle">
      使用内存中的图像数据
      </div>
      <div class="stepcontent">
      上面指南中的Python示例使用open函数从磁盘读取图像数据。在某些情况下，您可能会将图像数据存储在内存中。下面是一个使用存储在BytesIO对象中的图像数据的示例API调用：
      </div>
      <div class="stepcontent">
       <MarkdownRender :source="languageSpecific_python_one" />
      </div>
      <div class="steptitle">
      对图像数据进行操作
      </div>
      <div class="stepcontent">
      在将图像传递给API之前对图像执行操作可能很有用。下面是一个使用PIL调整图像大小的示例：
      </div>
    <div class="stepcontent">
       <MarkdownRender :source="languageSpecific_python_two" />
      </div>
    <div class="steptitle">
      错误处理
      </div>
      <div class="stepcontent">
      由于输入无效、速率限制或其他问题，API请求可能会返回错误。这些错误可以通过try....except语句处理，错误详细信息可以在e.error中找到：
      </div>
      <div class="stepcontent">
       <MarkdownRender :source="languageSpecific_python_three" />
      </div>
    </el-tab-pane>
    
  </el-tabs>
</template>

<script lang="ts" setup>
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import languageSpecific from '../hooks/languageSpecific'
import {ElTabs,ElTabPane} from "element-plus";
const { languageSpecific_activeName,languageSpecific_node_one,languageSpecific_node_two,languageSpecific_node_three,languageSpecific_node_four,
languageSpecific_python_one,languageSpecific_python_two,languageSpecific_python_three } = languageSpecific();


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