var path = require('path');

module.exports = function ({ config }) {
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};