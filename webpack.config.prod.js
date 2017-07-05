const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename : 'index.html',
  inject : 'body'
})

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader:'babel-loader',
        query:{
          presets: ['es2015', 'react','stage-0'],
                plugins: ['transform-decorators-legacy']
        },
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=images/[name].[ext]',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
  new ExtractTextPlugin("css/bundle.css"),
  HtmlWebpackPluginConfig]
};


