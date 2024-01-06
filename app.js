const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);

  const url = request.url;
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");

  const urlobj = {
    "/node": () =>
      response.write(
        "<head><title>Node</title></head><body><h1>Welcome to My Node Js project</h1></body>"
      ),
    "/home": () =>
      response.write(
        "<head><title>Home page</title></head><body><h1>Welcome home</h1></body>"
      ),
    "/about": () =>
      response.write(
        "<head><title>About Us page</title></head><body><h1>Welcome to About Us page</h1></body>"
      ),
  };

  if (urlobj[url]) {
    urlobj[url]();
  }

  response.write("</html>");
  response.end();
});

server.listen(3000);
