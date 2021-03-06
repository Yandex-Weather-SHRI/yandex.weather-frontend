const { resolve } = require('path')


const SOURCES = resolve(__dirname, '..', 'src')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.modules.push(SOURCES)
  storybookBaseConfig.resolve.extensions.push('.svg')
  storybookBaseConfig.module.rules.push({
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
  {
    test: /\.css$/,
    use:'css-loader'
  },
  {
    test: /\.ttf$/,
    use: {
      loader: 'file-loader',
      query: {
        name: 'assets/fonts/[name].[hash:10].[ext]',
      },
    },
  })

  return storybookBaseConfig
}
