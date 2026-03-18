// webpack基本配置：入口、出口、loader、plugins

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'production',
  optimization:{
    minimize: false, // 关闭代码压缩
  },
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    filename: 'js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '/' : './', // 打包后的资源的访问路径前缀
    clean: true // 清除上一次打包的文件
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'Webpack Vue Template'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      // Webpack 会使用 Babel 转译所有 .js、.jsx、.mjs、.mjsx 文件（除了 node_modules 中的），从而支持现代 JavaScript 语法和 React JSX
      // 注意：mjs 文件是 Node.js 中用于区分 CommonJS（.cjs）的 ES 模块格式，在 Webpack 中也可以被正常处理
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$/']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: ['.js', '.ts', '.tsx', '.vue', '.json']
  }
}

module.exports = config
