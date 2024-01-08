const fs = require("fs");

const requestHandler = (request, response) => {
  const url = request.url;
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
    "/": () => {
      const data = fs.readFileSync("./message.txt");
      response.write(
        "<head><title>Form Page</title></head><body><h1>" +
          data.toString() +
          '</h1><form action = "/message" method ="POST" ><input type="text" name="message"><button type="submit">Submit</button></form></body>'
      );
    },
  };

  if (url === "/message" && request.method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    request.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      const message = parsebody.split("=")[1];
      fs.writeFileSync("message.txt", message.replace("+", " "));
    });

    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
  response.setHeader("Content-Type", "text/html");
  response.write("<html>");
  if (urlobj[url]) {
    urlobj[url]();
  }
  response.write("</html>");
  response.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handlers: requestHandler,
//     sometext: 'I Did it',
// }

// module.exports.handlers = requestHandler;
// module.exports.sometext = "Second way to export";

exports.handlers = requestHandler;
exports.sometext = "Third Way to export";
