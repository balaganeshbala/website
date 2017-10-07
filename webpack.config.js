var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
     loaders: [{
       test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
             presets: ['es2015', 'react']
          }
     }]
 },
 devServer: {
    compress: true,
    disableHostCheck: true,   // That solved it
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
}
