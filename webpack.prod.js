const merge = require('webpack-merge');
const webpackConfig = require('./webpack.common');

const nodeConfig = merge(webpackConfig, {
  target: 'node',
  mode: 'production',
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
  nodeConfig,
  merge(nodeConfig, browserConfig),
];
