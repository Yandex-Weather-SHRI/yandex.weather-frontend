const { resolve } = require('path')
const {
  optimize: {
    OccurrenceOrderPlugin,
    UglifyJsPlugin,
    CommonsChunkPlugin,
  },
} = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const Package = require('../package.json')

const { config, SOURCES, DIST } = require('./shared.config')


module.exports = merge(config, {
  profile: true,
  cache: false,
  watch: false,
  stats: {
    assets: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    reasons: false,
    source: false,
  },

  entry: {
    weather: ['index'],
    vendor: Object.keys(Package.dependencies),
  },

  output: {
    filename: 'assets/js/[name].[hash:10].js',
  },

  plugins: [
    new ExtractTextPlugin('assets/css/vendor.[hash:10].css'),
    new OccurrenceOrderPlugin(true),
    new UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    }),
    new HtmlPlugin({
      title: 'Яндекс.Погода',
      template: resolve(SOURCES, 'index.html'),
      alwaysWriteToDisk: true,
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        sortAttributes: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
      },
    }),
    new CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity,
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['weather'],
      minChunks: Infinity,
    }),
  ],
})
