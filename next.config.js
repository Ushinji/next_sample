const path = require("path");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    return config;
  }
});
