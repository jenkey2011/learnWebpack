const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port:9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
        // use: [
        //   { loader: "style-loader" },
        //   { loader: "css-loader" }
        // ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin ({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin()
  ],
  output:{
    filename:'[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
}


  // const path = require('path');
  // const HtmlWebpackPlugin = require('html-webpack-plugin');
  // const CleanWebpackPlugin = require('clean-webpack-plugin');

  // module.exports = {
  //   entry: {
  //     app: './src/index.js',
  //     print: './src/print.js'
  //   },
  //   devtool: 'inline-source-map',
  //   plugins: [
  //     new CleanWebpackPlugin(['dist']),
  //     new HtmlWebpackPlugin({
  //       title: 'Development'
  //     })
  //   ],
  //   output: {
  //     filename: '[name].bundle.js',
  //     path: path.resolve(__dirname, 'dist')
  //   }
  // };