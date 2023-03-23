import http from "http";
import fs from "fs";

// denkt dran client-server
// was bekommt ein server vom client?

// ein Request
// wir müssen jetzt sagen was unser Server mit einem Request machen soll
// wir brauchen eine Funktion

// wir wollen das fs module nutzen um html dateien einzulesen und diese dann im response zum client senden
const sendFile = (path, res, code) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
      return;
    }

    if (path.includes(".jpeg")) {
      res.writeHead(200, {
        "Content-Type": "image/jpeg",
      });
      res.end(data);
      return;
    }

    res.write(data.toString());
    res.end();
  });
};
const requestHandler = (req, res) => {
  console.log("Neuer Request:", req.method, req.url);

  if (req.url === "/") {
    sendFile("./assets/index.html", res);
  } else {
    const filePath = "./assets" + req.url;
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);

server.listen(8999, () => console.log("Mein Server horcht auf Port", 9898));
