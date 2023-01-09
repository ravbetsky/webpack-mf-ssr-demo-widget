const handler = require("serve-handler");
const http = require("http");

const server = http.createServer((request, response) => {
  // Для запросов с другого хоста
  response.setHeader("Access-Control-Allow-Origin", "*");
  return handler(request, response);
});

server.listen(8082, () => {
  console.log("Running at http://localhost:8082");
});
