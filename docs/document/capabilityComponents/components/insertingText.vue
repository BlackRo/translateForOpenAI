<template>
    <el-collapse v-model="insertingText_names">
        <el-collapse-item title="深入研习 Inserting text" name="1">
        <div class="stepcontent">
           为了说明后缀上下文是如何影响生成文本的，可以考虑“Today I decided to make a big change.”的提示。人们可以想象有很多方法来完成句子。但如果我们现在提供故事的结局：I've gotten many compliments on my new hair!”，那么预期的完成就变得清晰了。
        </div>
        <div class="stepcontent">
            I went to college at Boston University. After getting my degree, I decided to make a change. A big change!
        </div>
        <div class="stepcontent">
            I packed my bags and moved to the west coast of the United States.
        </div>
        <div class="stepcontent">
            Now, I can’t get enough of the Pacific Ocean!
        </div>
        <div class="stepcontent">
           通过为模型提供额外的上下文，它可以更加可控。然而，这对模型来说是一项更具约束性和挑战性的任务。为了获得最佳效果，我们建议如下：
        </div>
        
        <div class="stepcontent">
           使用max_tokens>256。该模型更擅长插入较长的补全。由于max_tokens太小，模型可能在连接到后缀之前就被切断了。请注意，即使使用更大的max_tokens，也只会对生成的tokens数量收费。
        </div>
        <div class="stepcontent">
           首选finish_reason=“stop”。当模型到达自然停止点或用户提供的停止序列时，它会将finish_reason设置为“stop”。这表明该模型已成功连接到后缀井，是完井质量的良好信号。当使用n>1或重新采样时，这对于在几个完成之间进行选择尤其重要（请参阅下一点）。
        </div>
        <div class="stepcontent">
           重新取样3-5次。虽然几乎所有的补全都连接到前缀，但在更困难的情况下，模型可能很难连接后缀。我们发现，在这种情况下，重新采样3或5次（或使用k=3,5的best_of）并以“stop”作为其finish_reason来挑选样本可能是一种有效的方法。在重新采样时，通常需要更高的temperatures 来增加多样性。
        </div>
        <div class="stepcontent">
           注意：如果所有返回的样本都有finish_reason=“length”，则可能是max_tokens太小，模型在设法自然连接提示和后缀之前就用完了标记。在重新采样之前，请考虑增加max_tokens。
        </div>
        <div class="stepcontent">
           试着提供更多的线索。在某些情况下，为了更好地帮助模型的生成，您可以通过提供一些模式的例子来提供线索，模型可以遵循这些模式来决定一个自然的停止位置。
        </div>
        <div class="stepcontent">
            如何制作美味的热巧克力：
            <ul>
                <li>1.烧开水</li>
                <li>2.把热巧克力放在杯子里</li>
                <li>3.往杯子里加入沸水</li>
                <li>4.享受热巧克力</li>
            </ul>
            <ul>
                <li>狗是忠诚的动物。</li>
                <li>狮子是凶猛的动物。</li>
                <li>海豚是顽皮的动物。</li>
                <li>马是雄伟的动物。</li>
            </ul>
        </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script lang="ts" setup>
import MarkdownRender from "/.vitepress/components/markdownRenderer.vue";
import insertingText from '../hooks/insertingText'
import {ElCollapse,ElCollapseItem,ElLink} from "element-plus";
const {insertingText_names} = insertingText();
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