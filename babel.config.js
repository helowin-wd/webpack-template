module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // 明确指定目标环境
        targets: "> 1%, last 3 versions, not ie <= 11",
        // 使用 core-js 进行 polyfill
        useBuiltIns: "usage", // 按需加载 polyfill 兼容性垫片
        corejs: 3
      }
    ],
    [
      "@babel/preset-typescript",
      {
        allExtensions: true, // 支持所有类型的文件扩展名
      }
    ]
  ]
}