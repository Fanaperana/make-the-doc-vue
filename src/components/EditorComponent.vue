<template>
    <div class="w-100 h-100 p-2">

        <div class="d-flex flex-row h-100">
            <div class="w-100">
                <div id="editor" class="w-100 h-100 rounded overflow-hidden"></div>
            </div>
            <div class="w-100 h-100 p-2">
                <div v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import { marked } from 'marked';

export default {
    data: () => ({
        md: '# My name is **Prince**\n',
        content: ''
    }),
    mounted(){
        const editor = monaco.editor.create(document.getElementById("editor"), {
            value: this.md,
            theme: 'vs-dark',
            language: 'markdown',
            automaticLayout: true,
            scrollBeyondLastLine: false
        })

        this.content = marked.parse(editor.getValue())

        editor.onDidChangeModelContent((e)=>{
            // console.log("Prince");
            this.content = marked.parse(editor.getValue())

        })
    }
}
</script>

