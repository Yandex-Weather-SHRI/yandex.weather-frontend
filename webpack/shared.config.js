const { resolve } = require('path')
const { DefinePlugin } = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const Package = require('../package.json')


const SOURCES = resolve(__dirname, '..', 'src')
const DIST = resolve(__dirname, '..', 'build')

const config = {
  context: SOURCES,
  target: 'web',

  entry: {
    weather: [],
  },

  output: {
    path: DIST,
    filename: '[name].[hash:10].js',
    publicPath: '/',
  },

  resolve: {
    modules: [
      'node_modules',
      SOURCES,
    ],
    extensions: ['.js', '.json', '.svg'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.jpe?g$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'images/[name]-[hash:10].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            query: {
              es5: true,
              svgo: {
                plugins: [{ removeTitle: true }],
                floatPrecision: 5,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlPlugin({
      title: 'Яндекс.Погода',
      template: resolve(SOURCES, 'index.html'),
      version: Package.version,
      alwaysWriteToDisk: true,
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: DIST,
    }),
  ],
}

module.exports = {
  SOURCES,
  DIST,
  config,
}
