
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  devServer: {
    open: false,  // 启动时是否自动打开
    port: 8030    // 设置启动的端口号
  },
  configureWebpack: () => {
    return {
      plugins: [new CompressionPlugin({
        test: /\.js$|\.css/, //匹配文件名
        threshold: 10240, //对超过10k的数据进行压缩
        deleteOriginalAssets: false //是否删除原文件
      })],
      resolve: {
        extensions: ['.js', '.json', '.vue', '.scss', '.css'],
        alias: {},
      },
      externals: {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vant': 'vant'
      }
    }
  }
}