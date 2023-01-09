const path = require("path");
const ModuleFederationPlugin = require("./module-federation");
const configFactory = require("./webpack.shared");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const baseConfig = configFactory(isProduction);

  return {
    ...baseConfig,
    output: {
      path: path.resolve(__dirname, "../build/server"),
      filename: "[name].js",
      libraryTarget: "commonjs-module",
    },
    target: false,
    name: "server",
    plugins: [...baseConfig.plugins, ...ModuleFederationPlugin.server],
  };
};
