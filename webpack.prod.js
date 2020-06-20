const merge = require('webpack-merge');
const webpackConfig = require('./webpack.common');

const npmConfig = merge(webpackConfig, {
  mode: 'production',
  target: 'web',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
});

const browserConfig = {
  target: 'web',
  output: {
    filename: 'engage-onsite-sdk-js.js',
    library: ['linx', 'engageOnsiteSdk'],
    libraryTarget: 'window',
  },
};

module.exports = [
  npmConfig,
  merge(npmConfig, browserConfig),
];
