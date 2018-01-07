import webpack from 'webpack'
import path from 'path'

export default {
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/[hash].[ext]'
      },
      {test: /\.json$/, loader: 'json-loader'},
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
      }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ],
  entry: {
    app: './src/js/app',
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}
