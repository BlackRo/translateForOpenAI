<template>
  <el-tabs v-model="logsOfCodeInterpreter_activeName" class="demo-tabs">
    <el-tab-pane label="Python" name="Python">
      <div>
       <MarkdownRender :source="logsOfCodeInterpreter_python" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="Node.js" name="Node">
      <div class="stepcontent">
      <MarkdownRender :source="logsOfCodeInterpreter_node" />
      </div>
    </el-tab-pane>
    <el-tab-pane label="curl" name="curl">
      <div class="stepcontent">
      <MarkdownRender :source="logsOfCodeInterpreter_curl" />
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import logsOfCodeInterpreter  from '../hooks/logsOfCodeInterpreter'
import {ElTabs,ElTabPane} from "element-plus";
const { logsOfCodeInterpreter_activeName,logsOfCodeInterpreter_python,logsOfCodeInterpreter_curl,logsOfCodeInterpreter_node } = logsOfCodeInterpreter();


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