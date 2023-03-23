import http from "http";
import fs from "fs";

//GET REQUEST
const sendFile = (path, res) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(404, "<h1>Ups</h1>");
      } else {
        resolve(200, data);
      }
    });
  });
};

//REQUEST Handler
const requestHandler = (req, res) => {
  console.log("Neuer Request:", req.method, req.url);
  if (req.url === "/") {
    sendFile("./assets/index.html", req);
  }
};

//Erstelle neuen Server
const server = http.createServer(requestHandler);

//Fange Abfragen auf Port 9898 ab
server.listen(9898, () => {
  console.log("ok");
});
