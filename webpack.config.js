const path = require("path");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  mode: "development", // developモードで起動します。
  entry: path.resolve(src, "js/index.js"), // エントリファイル
  output: {
    filename: "index.bundle.js", // 生成されるファイル名
    path: dist, // 生成先
  },

  resolve: {
    modules: ["node_modules"], // import分にnode_modulesのパスを省略する
    extensions: [".js", ".jsx"], // 拡張子を省略できる
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
