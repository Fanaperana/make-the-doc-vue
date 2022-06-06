<template>
  <div class="hljs-container" v-html="processedMarkdown"></div>
</template>

<script>
  import hljs from 'highlight.js'
  


  const MarkdownIt = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre><code class="hljs">' +
                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                '</code></pre>';
        } catch (__) {}
      }

      return '<pre><code class="hljs">' + MarkdownIt.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  export default {
    mounted(){
      hljs.highlightAll();

    },
    computed: {
      processedMarkdown(){
          
        if(this.markdown) {
          return MarkdownIt.render(this.markdown);
        }
      }
    },
    props: {
      markdown: String
    }
  }
</script>

<style lang="scss" scoped>

@import 'highlight.js/styles/atom-one-dark.css';



</style>