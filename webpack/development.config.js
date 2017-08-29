const { resolve } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const merge = require('webpack-merge')

const { config, DIST } = require('./shared.config')


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
