const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    app: './src/main.tsx',
  },
  devtool: 'inline-source-map', // 本地测试
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8086,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './template/index.html'
    })
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'IReact', //我们的库的名字，如果不写别人是用不了我们的库的
    libraryTarget: 'umd' //我们的库的输出格式，默认写umd
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
        /* test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        } */
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'config.js', '.json']
    /* alias: {
      '@': path.join(__dirname, './src')
    } */
  }
}