<template>
    <div class="w-100 h-100" v-html="processedMD"></div>
</template>

<script>
import { marked } from 'marked';
import highlight from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default {
    props: [
        'markdown'
    ],
    mounted() {
        highlight.highlightAll();
    },
    computed: {
        processedMD(){
            return marked(this.markdown, {
                highlight(md){
                    return highlight.highlightAuto(md).value;
                }
            })
        }
    }
}
</script>
