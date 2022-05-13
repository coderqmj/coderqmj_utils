const path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "coderqmj_utils.js",
    libraryTarget: "umd", // 支持AMD/CommonJS/浏览器，最终代码会做判断环境
    library: "coderqmjUtils", // 包名，挂载到window上的，浏览器直接取用
    globalObject: "this", // 把包挂载到哪里,this就是window或者document
  },
};
