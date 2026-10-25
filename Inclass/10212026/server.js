const http = require("http");


http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<h1>Hi Node!</h1> <p> From CSCI 331</p>");

  response.end();


}).listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
