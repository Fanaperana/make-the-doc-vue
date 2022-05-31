const { defineConfig } = require('@vue/cli-service');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')


module.exports = defineConfig({
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  },
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['markdown']
      })
    ]
  }
})
