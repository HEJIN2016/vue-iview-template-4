const LessFunc = require('less-plugin-functions');
require('webpack-chain');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        plugins: [ new LessFunc() ]     // 实例化less-plugin-functions
      }
    }
  },
  chainWebpack:  config => {
    // ie报错无效字符 添加该配置项 解决该问题
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end()
  },
  devServer: {
    port: 3060
    // proxy: {
    //   '/api': {
    //     target: 'https://testrpc1.uosio.org:20580',   //代理接口
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'    //代理的路径
    //     }
    //   }
    // }
  }
}