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
  }
}

module.exports = merge(baseConfig, devConfig)
