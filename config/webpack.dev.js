const path = require("path");
const configFactory = require("./webpack.shared");

module.exports = {
  ...configFactory(false),
  mode: 'development',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../build"),
    },
    port: 3000,
  },
};
