const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./test/index.js",

  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  },

  resolve: {
    modules: ["node_modules", path.join(__dirname, "./src")],
    extensions: [".js", ".ts"]
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 3004,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    index: "index.html",
    open: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: path.join(__dirname, "./public/index.ejs")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
