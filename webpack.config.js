const { resolve } = require('path')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
module.exports = require(resolve(__dirname, 'webpack', `${process.env.NODE_ENV}.config`))
