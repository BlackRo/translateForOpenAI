<template>
  <el-collapse v-model="firstGeneration_names">
    <el-collapse-item title="第一代模型（不推荐）" name="1">
      <div class="stepcontent">
        所有第一代模型（以“-001”结尾的模型）都使用GPT-3的分词器，并且最大输入长度限制为2046个tokens。
      </div>
      <div class="stepcontent">
        第一代嵌入是由针对三种不同任务进行调优的五个不同模型系列生成的：文本搜索、文本相似性和代码搜索。搜索模型成对出现：一个用于短查询，一个用于长文档。每个系列包含最多四个模型，质量和速度在一个连续的范围内。
      </div>
      <div class="tableBox">
        <div class="tableItem tableTitle">模型</div>
        <div class="tableItem tableTitle">输出维度</div>
        <div class="tableItem tableContent">Ada</div>
        <div class="tableItem tableContent">1024</div>
        <div class="tableItem tableContent">Babbage</div>
        <div class="tableItem tableContent">2048</div>
        <div class="tableItem tableContent">Curie</div>
        <div class="tableItem tableContent">4096</div>
        <div class="tableItem tableContent">Davinci</div>
        <div class="tableItem tableContent">12288</div>
      </div>
      <div class="stepcontent">
        Davinci是最强大的模型，但比其他模型更慢且更昂贵。Ada是最不强大的模型，但速度明显更快且更便宜。
      </div>
      <div class="stepTitle">Similarity embeddings 相似性嵌入</div>
      <div class="stepcontent">
        相似性模型最擅长捕捉文本片段之间的语义相似性。
      </div>
      <div class="tableBox2">
        <div class="tableItem2 tableTitle2">用例</div>
        <div class="tableItem2 tableTitle2">可用模型</div>
        <div class="tableItem2 tableContent2">
          Clustering, regression, anomaly detection, visualization
        </div>
        <div class="tableItem2 tableContent2">
          text-similarity-ada-001 <br />
          text-similarity-babbage-001 <br />
          text-similarity-curie-001 <br />
          text-similarity-davinci-001
        </div>
      </div>
      <div class="stepTitle">Text search embeddings 文本搜索嵌入</div>
      <div class="stepcontent">
        文本搜索模型有助于衡量哪些长文档与短搜索查询最相关。使用两个模型：一个用于嵌入搜索查询，另一个用于嵌入要进行排名的文档。与查询嵌入最接近的文档嵌入应该是最相关的。
      </div>
      <div class="tableBox2">
        <div class="tableItem2 tableTitle2">用例</div>
        <div class="tableItem2 tableTitle2">可用模型</div>
        <div class="tableItem2 tableContent3">
          Search, context relevance, information retrieval
        </div>
        <div class="tableItem2 tableContent3">
          text-search-ada-doc-001 <br />
          text-search-ada-query-001 <br />
          text-search-babbage-doc-001 <br />
          text-search-babbage-query-001 <br />
          text-search-curie-doc-001 <br />
          text-search-curie-query-001 <br />
          text-search-davinci-doc-001<br />
          text-search-davinci-query-001
        </div>
      </div>
      <div class="stepTitle">Code search embeddings 代码搜索嵌入</div>
      <div class="stepcontent">
        类似于搜索嵌入，也有两种类型：一种是用于嵌入自然语言搜索查询的，另一种是用于嵌入代码片段以供检索的。
      </div>
      <div class="tableBox2">
        <div class="tableItem2 tableTitle2">用例</div>
        <div class="tableItem2 tableTitle2">可用模型</div>
        <div class="tableItem2 tableContent4">
          Code search and relevance
        </div>
        <div class="tableItem2 tableContent4">
          code-search-ada-code-001 <br />
          code-search-ada-text-001 <br />
          code-search-babbage-code-001 <br />
          code-search-babbage-text-001
        </div>
      </div>
      <div class="stepcontent">对于-001文本嵌入（而不是002，也不是代码嵌入），我们建议用单个空格替换输入中的换行符（\n），因为当出现换行符时，我们看到了更糟糕的结果。</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ElCollapse, ElCollapseItem, ElLink } from "element-plus";
import {ref} from 'vue'
const  firstGeneration_names = ref(['0'])
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