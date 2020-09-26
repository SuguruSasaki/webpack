const path = require("path");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  // developモードで起動します。
  mode: "development",

  // エントリファイル
  entry: path.resolve(src, "js/index.js"),

  output: {
    // 生成されるファイル名
    filename: "index.bundle.js",
    // 生成先
    path: dist,
  },

  resolve: {
    // import分にnode_modulesのパスを省略する
    modules: ["node_modules"],
    // 拡張子を省略できる
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
};
