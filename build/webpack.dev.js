const baseConfig = require("./webpack.base")
const { merge } = require("webpack-merge")

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    open: true,
    port: 3007,
    historyApiFallback: true, // 404 responses fallback to index.html
  }
}

module.exports = merge(baseConfig, devConfig)
