const { resolve } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')

const { config, SOURCES, DIST } = require('./shared.config')


const MOCK = resolve(__dirname, '..', 'mock')

module.exports = merge(config, {
  devtool: 'source-map',
  profile: false,

  entry: {
    weather: ['babel-polyfill', 'react-hot-loader/patch', 'index'],
  },

  output: {
    pathinfo: true,
    filename: '[name].dev.js',
  },

  performance: {
    hints: false,
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlPlugin({
      title: 'Яндекс.Погода',
      template: resolve(SOURCES, 'index.html'),
      alwaysWriteToDisk: true,
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new ExtractTextPlugin('assets/css/vendor.css'),
  ],

  devServer: {
    contentBase: [DIST, MOCK],
    port: process.env.DEV_PORT || 4800,
    host: process.env.DEV_HOST || '0.0.0.0',
    hot: true,
    noInfo: true,
    historyApiFallback: true,
    overlay: {
      warning: false,
      errors: true,
    },
  },
})
