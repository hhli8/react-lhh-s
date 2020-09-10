const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    app: '../src/main.js',
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '..')
    }),
    new HtmlWebpackPlugin({})
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}