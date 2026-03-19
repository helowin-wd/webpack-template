const baseConfig = require("./webpack.base")
const { merge } = require("webpack-merge")

/**
 * @type {import('webpack').Configuration}
 */
const prodConfig = {
  mode: "production"
}

module.exports = merge(baseConfig, prodConfig)
