const client = require("./config/webpack.client");
const server = require("./config/webpack.server");
const dev = require("./config/webpack.dev");

module.exports = process.env.ENV === "development" ? dev : [client, server];
