import http from "http";
import fs from "fs";

//Erstelle Get Request
const getRequest = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
      return;
    }

    if (path.includes(".png")) {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
      return;
    }

    if (path.includes(".ico")) {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      res.end(data);
      return;
    }

    res.writeHead(200);
    res.write(data.toString());
    res.end();
  });
};

// Erstelle Requerst Handler
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

//Server Abfrage
server.listen(8989, () => {
  console.log("Server hört auf Port:", 8989);
});
