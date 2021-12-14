const path = require('path');
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '康益堂',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
    resolve: {
      alias: {//别名
        '@': path.resolve(__dirname, './src'),
        // 'components': path.resolve(__dirname, './src/components'),
      }
    },
    devServer: {
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:4000',
      //     changeOrigin: true,
      //     pathRewrite: { '^/api': '' }
      //   },
      //   '/': {
      //     target: 'http://localhost:4000',
      //     changeOrigin: true,
      //     // pathRewrite: { '': '' }
      //   }
      // },
      port: 8001,     // 端口
      // host: '192.168.0.108'
    },

  },
  publicPath: './',
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  css: {
    extract: false
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
    // .rule('media')
    // .use('file-loader')
    // .loader('file-loader')
    // .tap(options => {
    //   // 修改它的选项...
    //   return {
    //     name: 'media/[name].[hash:8].[ext]'
    //   }
    // })
    // .end()
    // 你还可以再添加一个 loader
    // .use('other-loader')
    // .loader('other-loader')
  },
}
