const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'easymustache.min.js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: false,
    port: 8085,
    publicPath: "/xuni/",
    open: true
  }
}