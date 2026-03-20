const path = require("path")
const baseConfig = require("./webpack.base")
const { merge } = require("webpack-merge")

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: JSON.parse(process.env.VUE_APP_OPEN || "true"), // 环境变量默认字符串
    port: process.env.VUE_APP_PORT || 8080,
    historyApiFallback: true, // 404 responses fallback to index.html
    // 开发时直接提供 public 下的静态资源（favicon 等），不依赖是否已写入 dist
    static: {
      directory: path.resolve(__dirname, "../public"),
      publicPath: "/",
      watch: true
    }
  }
}

module.exports = merge(baseConfig, devConfig)
