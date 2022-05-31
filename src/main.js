import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import '@/assets/css/style.css'

import 'highlight.js/styles/atom-one-dark.css'

import hljs from 'highlight.js'

hljs.highlightAll()

// import * as monaco from 'monaco-editor'


createApp(App).use(store).use(router).mount('#app')
