/* eslint-disable */
const webpackConfig = require('./webpack.config.js');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config) {
    const { baseAlias } = config.resolve;
    const { alias, extensions } = webpackConfig.resolve;
    config.resolve.alias = {
      ...baseAlias,
      ...alias
    };
    config.resolve.extensions = extensions;
    return config;
  },
});
