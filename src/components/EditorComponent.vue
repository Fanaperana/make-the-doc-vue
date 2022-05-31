<template>
    <div class="w-100 h-100 p-2">

        <div class="d-flex flex-row h-100">
            <div class="w-100">
                <button class="btn btn-outline-secondary btn-sm m-1" @click="openDialog()">open dialog</button>
                <div id="editor" class="w-100 h-100 rounded overflow-hidden"></div>
            </div>
            <div class="w-100 h-100 p-2">
                <display v-bind:markdown="content"></display>
            </div>
        </div>
    </div>
</template>

<script>
import MarkupComponent from './MarkupComponent.vue';
import MarkdownDisplay from './MarkdownDisplay.vue';

import * as monaco from 'monaco-editor';
import { marked } from 'marked';
const { dialog, remote } = require('electron');
const path = require('path')
const hljs = require('highlight.js')

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

        this.content = editor.getValue();

        editor.onDidChangeModelContent((e)=>{
            // console.log("Prince");
            this.content = editor.getValue();

        })
    },
    methods: {
        openDialog(){

        }
    },
    components: {
        'markup': MarkupComponent,
        'display': MarkdownDisplay,
    }
}
</script>

