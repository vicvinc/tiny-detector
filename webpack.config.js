const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./test/index.js",

  output: {
    path: path.resolve("./dist", __dirname),
    filename: "[name].bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  },

  resolve: {
    modules: ["node_modules", path.resolve("./src", __dirname)],
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
    contentBase: path.join("./dist", __dirname),
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
      tempalte: path.join("./public/index.ejs", __dirname)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
