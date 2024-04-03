<template>
  <el-collapse v-model="dataVisuaIn2d_names">
    <el-collapse-item title="Data visualization in 2D 二维数据可视化" name="1">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/visualizing_embeddings_in_2d"
          :underline="false"
          >Visualizing_embeddings_in_2D.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
        嵌入向量的大小取决于底层模型的复杂性。为了可视化这个高维数据，我们使用t-SNE算法将数据转换为二维。
      </div>
      <div class="stepcontent">
        我们根据评论者给出的星级评分来给每个个别的评论着色：
      </div>
      <div class="stepcontent">
        <ul>
          <li>1-星: 红色</li>
          <li>2-星: 深橙色</li>
          <li>3-星: 金色</li>
          <li>4-星: 绿松石色</li>
          <li>5-星: 深绿色</li>
        </ul>
      </div>
      <div class="imgBox">
        <el-image
          class="imgItem"
          src="/.vitepress/assets/embeddings-tsne.png"
          fit="fill"
        ></el-image>
      </div>
      <div class="stepcontent">
        可视化结果似乎产生了大约三个聚类，其中一个聚类主要包含负面评价。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_one" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Embedding as a text feature encoder 嵌入作为ML算法的文本特征编码器" name="2">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/regression_using_embeddings"
          :underline="false"
          >Regression_using_embeddings.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
        在机器学习模型中，嵌入可以作为通用的自由文本特征编码器使用。如果一些相关的输入是自由文本，那么将嵌入引入模型中将提高其性能。嵌入也可以作为分类特征编码器在机器学习模型中使用。如果分类变量的名称具有意义且数量众多（例如职位名称），则这将增加最大的价值。对于此任务，相似性嵌入通常比搜索嵌入表现更好。
      </div>
      <div class="stepcontent">
        我们观察到，嵌入的表示通常非常丰富和信息密集。例如，使用SVD或PCA将输入的维度降低10％，通常会导致特定任务的下游性能变差。
      </div>
      <div class="stepcontent">
       这段代码将数据分成训练集和测试集，这两个数据集将用于后面的回归和分类两个用例。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_two" />
        </div>
      </div>
      <div class="stepcontent">
       使用嵌入特征进行回归分析
      </div>
      <div class="stepcontent">
       嵌入提供了一种优雅的方式来预测数值。在这个例子中，我们基于评论的文本来预测评论者的星级评分。由于嵌入中包含的语义信息很丰富，即使只有很少的评论，预测结果也是不错的。
      </div>
      <div class="stepcontent">
       我们假设评分是一个介于1和5之间的连续变量，并允许算法预测任何浮点数值。机器学习算法通过最小化预测值与真实评分之间的距离，实现了平均绝对误差为0.39，这意味着平均而言，预测值与实际评分的差距不到半颗星星。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_three" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Classification using the embedding features 使用嵌入特征进行分类" name="3">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/classification_using_embeddings"
          :underline="false"
          >Classification_using_embeddings.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
        这次，我们不再让算法预测1到5之间的任意值，而是试图将评价的星级精确分类为5个桶，范围从1星到5星。
      </div>
      <div class="stepcontent">
        在训练之后，模型学会了更好地预测1星和5星的评论，而对于更加细致的评价（2-4星），由于情感表达更加极端，可能预测效果较差。
      </div>
      <div class="stepcontent">
       这段代码将数据分成训练集和测试集，这两个数据集将用于后面的回归和分类两个用例。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_four" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Zero-shot classification Zero-shot 分类" name="4">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/zero-shot_classification_with_embeddings"
          :underline="false"
          >Zero-shot_classification_with_embeddings.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
        zero-shot分类是一种自然语言处理任务，模型在训练过程中可以对其从未见过的类别进行分类。在传统的分类任务中，模型需要在每个类别上进行标注数据的训练。然而，在zero-shot分类中，模型被训练成理解类别之间的关系，并且可以利用训练过程中所学习的知识对未见过的或新的类别进行预测。
      </div>
      <div class="stepcontent">
        zero-shot分类通常使用预训练的语言模型，例如BERT或GPT。这些模型在大规模文本语料库上进行训练，学习理解词汇之间的语义关系，并且可以将这种知识推广到对未见过的类别进行分类。
      </div>
      <div class="stepcontent">
        在进行zero-shot分类时，模型在训练过程中会提供一组预定义的类别标签，以及每个类别的示例文本。模型学习将输入文本与相应的类别标签关联起来。在推理过程中，即使模型在训练过程中没有看到过特定类别的示例，它也可以将文本分类到任何预定义的类别中。
      </div>
      <div class="stepcontent">
        zero-shot分类在新的类别可能随时间出现或者在收集所有可能类别的标注数据不可行的情况下非常有用。它允许更灵活和可扩展的分类系统，因为模型可以在不重新训练的情况下对新的类别进行预测。
      </div>
      <div class="stepcontent">
        我们可以在没有任何标记的训练数据的情况下使用嵌入来进行zero-shot分类。对于每个类别，我们将类别名称或类别的简短描述进行嵌入。为了以zero-shot方式对一些新的文本进行分类，我们将其嵌入与所有类别嵌入进行比较，并预测具有最高相似度的类别。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_five" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="获取冷启动推荐的用户和产品嵌入" name="5">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/user_and_product_embeddings"
          :underline="false"
          >User_and_product_embeddings.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
        我们可以通过对所有评论进行平均来获得用户嵌入。同样地，我们可以通过对关于该产品的所有评论进行平均来获得产品嵌入。为了展示这种方法的有用性，我们使用了一个包含5万条评论的子集，以覆盖更多用户和产品的评论。
      </div>
      <div class="stepcontent">
       我们在一个单独的测试集上评估这些嵌入的有用性，我们绘制用户和产品嵌入的相似性作为评分的函数。有趣的是，基于这种方法，甚至在用户收到产品之前，我们就可以比随机更好地预测他们是否会喜欢该产品。
      </div>
     <div class="imgBox">
        <el-image
          class="imgItem"
          src="/.vitepress/assets/embeddings-boxplot.png"
          fit="fill"
        ></el-image>
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_six" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Clustering 聚类" name="6">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/user_and_product_embeddings"
          :underline="false"
          >Clustering.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
        聚类是理解大量文本数据的一种方法。嵌入对于此任务非常有用，因为它们提供了每个文本的语义有意义的向量表示。因此，通过无监督的方式，聚类将揭示数据集中隐藏的分组。
      </div>
      <div class="stepcontent">
       在这个例子中，我们发现了四个明显的聚类：一个聚焦于狗粮，一个聚焦于负面评价，以及两个聚焦于正面评价。
      </div>
     <div class="imgBox">
        <el-image
          class="imgItem"
          src="/.vitepress/assets/embeddings-cluster.png"
          fit="fill"
        ></el-image>
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_seven" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Text search using embeddings 使用嵌入的文本搜索" name="7">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/semantic_text_search_using_embeddings"
          :underline="false"
          >Semantic_text_search_using_embeddings.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
       为了检索最相关的文档，我们使用查询的嵌入向量与每个文档的嵌入向量之间的余弦相似度，并返回得分最高的文档。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_eight" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Code search using embeddings 使用嵌入的代码搜索" name="8">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/code_search"
          :underline="false"
          >Code_search.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
       代码搜索与基于嵌入的文本搜索类似。我们提供了一种从给定代码仓库中的所有Python文件中提取Python函数的方法。然后，每个函数都通过text-embedding-ada-002模型进行索引。
      </div>
      <div class="stepcontent">
       要执行代码搜索，我们使用相同的模型将查询嵌入到自然语言中。然后，我们计算生成的查询嵌入与每个函数嵌入之间的余弦相似度。余弦相似度最高的结果最相关。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_nine" />
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Recommendations using embeddings 使用嵌入的建议" name="9">
      <div class="stepcontent">
        <el-link
          type="primary"
          href="https://cookbook.openai.com/examples/recommendation_using_embeddings"
          :underline="false"
          >Recommendation_using_embeddings.ipynb</el-link
        >
      </div>
      <div class="stepcontent">
      由于嵌入向量之间的距离越短表示相似度越高，嵌入对于推荐非常有用。
      </div>
      <div class="stepcontent">
       下面，我们展示了一个基本的推荐系统。它接受一个字符串列表和一个“源”字符串，计算它们的嵌入，然后返回一个从最相似到最不相似的字符串排名。
       作为一个具体的例子，下面的链接笔记本将这个函数的一个版本应用于<el-link
          type="primary"
          href="http://groups.di.unipi.it/~gulli/AG_corpus_of_news_articles.html"
          :underline="false"
          >AG新闻数据集</el-link
        > （采样到2000个新闻文章描述），以返回与任何给定源文章最相似的前5篇文章。
      </div>
      <div class="demoBox">
        <div class="demoContent">
          <MarkdownRender :source="dataVisuaIn2d_markText_nine" />
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import dataVisuaIn2d from "../hooks/dataVisuaIn2d";
import { ElCollapse, ElCollapseItem, ElLink, ElImage } from "element-plus";
const {
  dataVisuaIn2d_names,
  dataVisuaIn2d_markText_one,
  dataVisuaIn2d_markText_two,
  dataVisuaIn2d_markText_three,
  dataVisuaIn2d_markText_four,
  dataVisuaIn2d_markText_five,
  dataVisuaIn2d_markText_six,
  dataVisuaIn2d_markText_seven,
  dataVisuaIn2d_markText_eight,
  dataVisuaIn2d_markText_nine
} = dataVisuaIn2d();
</script>
<style >
.imgBox {
  width: 100%;
}
.imgItem {
  width: 450px;
  height: 300px;
  left: 0px;
  margin: 0 auto;
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