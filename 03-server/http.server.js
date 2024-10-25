// http y fs
const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  const user = {
    name: "Xabi",
    lastname: "Gallardo",
  };

  const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  // response.writeHead(200, { "Content-type": "text/plain" });
  //   response.writeHead(200, { "Content-type": "text/html" });
  response.writeHead(200, { "Content-type": "application/json" });

  //   response.end("<h1>Soy un server corriendo en NOdejs</h1>");
  //   response.end(html);
  response.end(JSON.stringify(user));
});

// listener
server.listen(5000, () => {
  console.log("server running on port 5000"); //localhost:5000
});
