import http from "http";
import fs from "fs";

//Get Request
const getRequest = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
      return;
    }

    res.write(data.toString());
    res.end();
  });
};

//Request Handler
const requestHandler = (req, res) => {
  console.log("Neuer Request:", req.method, req.url);

  if (req.url === "/") {
    getRequest("./page/index.html", res);
  } else {
    getRequest("./page" + req.url, res);
  }
};

//Erstelle Server
const server = http.createServer(requestHandler);

//Fange Abfrage auf
server.listen(8989, () => {
  console.log("Anfrage auf Port:", 8989);
});
