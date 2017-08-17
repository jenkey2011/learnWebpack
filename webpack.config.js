const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{
    index:'./src/js/index.js',
    main:'./src/js/main.js'
  },
  output: {
    filename:'bundle-[name].js',
    path:path.resolve(__dirname, 'dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
