const webpackConfig = require('./webpack.config');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    files: [
      './test/index.js',
    ],
    exclude: [],
    preprocessors: {
      './test/index.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
};
