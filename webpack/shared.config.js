const { resolve } = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
    alias: {
      i: resolve(__dirname, '..', 'public', 'i'),
    },
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
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'assets/fonts/[name].[hash:10].[ext]',
          },
        },
      },
      {
        test: /\.(jpe?g|png)$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'assets/images/[name].[hash:10].[ext]',
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
    new HtmlWebpackHarddiskPlugin({
      outputPath: DIST,
    }),
    new FaviconsWebpackPlugin(`${SOURCES}/assets/images/favicon.png`),
  ],
}

module.exports = {
  SOURCES,
  DIST,
  config,
}
