const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  module:{
    rules:[
          {
            test: /\.scss$/,
            loaders:['style','css','sass']
          }
    ]
  }
})
