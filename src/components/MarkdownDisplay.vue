<template>
  <div v-html="compiledMarkdown" class="markdown-body" />
</template>

<script>
import {marked} from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default {
  name: "MarkdownDisplay",
  props: {
    markdown: {
      type: String,
      required: true,
    }
  },
  data: () => ({
      md: '',
  }),
  created() {
    setInterval(function() {
        hljs.highlightAll();
    }, 1000);
  },
  mounted() {
    hljs.highlightAll();
  },
  computed: {
    compiledMarkdown() {
      return marked(this.markdown, {
        highlight: function(markdown) {
          return hljs.highlightAuto(markdown).value
        }
      })
    }
  }
}
</script>

<style>
@import "highlight.js/styles/atom-one-dark.css";

.markdown-body > p > img {
  max-width: 90%;
  max-height: 600px;
  display: flex;
  margin: auto;
}

.hljs {
    border-radius: 5px;
}

</style>