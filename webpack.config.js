const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development', // developモードで起動します。
  entry: path.resolve(src, 'index.ts'), // エントリファイル
  output: {
    filename: 'index.bundle.js', // 生成されるファイル名
    path: dist, // 生成先
  },

  resolve: {
    modules: ['node_modules'], // import分にnode_modulesのパスを省略する
    extensions: ['.js', '.jsx', 'ts', 'tsx'], // 拡張子を省略できる
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre', // babel-loaderより前に実行される
        loader: 'eslint-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: dist, // 開発サーバーを立ち上げるときのルートディレクトリ
    hot: true, // hot-reload
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin()],
  devtool: 'cheap-module-eval-source-map',
};
