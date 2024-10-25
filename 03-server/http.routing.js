// http y fs
const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  console.log(request.url);
  let url = request.url;
  if (url === "/") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("INDICE");
  } else if (url === "/about") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("ABOUT");
  } else if (url === "/contact") {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.end("CONTACT");
  } else if (url === "/api") {
    const user = {
      name: "Xabi",
      lastname: "Gallardo",
    };
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(user));
  } else {
    response.writeHead(404, { "Content-type": "text/plain" });
    response.end("NOT FOUND");
  }
});

// listener
server.listen(5000, () => {
  console.log("server running on port 5000"); //localhost:5000
});
