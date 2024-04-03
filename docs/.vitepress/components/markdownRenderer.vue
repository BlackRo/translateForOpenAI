<template>
  <div v-html="markdown.render(source)" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import hljs from 'highlight.js'
const markdown = new MarkdownIt().use(MarkdownItHighlightjs)

const propsList = defineProps({
  source: {
    type: String,
    default: ""
  }
});
// console.log(propsList.source)
</script>