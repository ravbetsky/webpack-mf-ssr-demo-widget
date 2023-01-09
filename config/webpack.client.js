const path = require("path");
const ModuleFederationPlugin = require("./module-federation");
const configFactory = require("./webpack.shared");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const baseConfig = configFactory(isProduction);

  return {
    ...baseConfig,
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "../build/client"),
      publicPath: "http://localhost:8082/build/client/",
    },
    plugins: [...baseConfig.plugins, ModuleFederationPlugin.client],
    devServer: {
      static: {
        directory: path.join(__dirname, "../build/client"),
      },
      port: 3000,
    },
  };
};
