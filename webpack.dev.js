const merge = require('webpack-merge');
const webpackConfig = require('./webpack.common');

module.exports = merge(webpackConfig, {
  output: {
    filename: '[name].js',
  },
});
