import http from "http";

// denkt dran client-server
// was bekommt ein server vom client?

// ein Request
// wir müssen jetzt sagen was unser Server mit einem Request machen soll
// wir brauchen eine Funktion

const requestHandler = (req, res) => {
  console.log("Neuer Request:", req.method, req.url);

  if (req.url === "/") {
    res.end("<p>Mama ist Stolz auf deine Schwester</p>");
  } else if (req.url === "/car") {
    res.end("<p>Schickes Auto</p>");
  } else {
    res.writeHead(404);
    res.end("<h1>Page not found</h1>");
  }
};

const server = http.createServer(requestHandler);

server.listen(50000, () => console.log("Mein Server horcht auf Port", 50000));
