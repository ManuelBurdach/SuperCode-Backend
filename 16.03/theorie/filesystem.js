import fs from "fs";

//einfache async Methode um eine Datei mit Inhalt zu erstellen
fs.writeFile("./auto", "Lada Niva", (err) => {
  console.log("write is ready");
  if (err) console.log("Autsch, es gab einen Fehler");
});

//Einfache async Methode um eine Datei zu lesen. Wenn man keine Codierung des Zeichensatzes angiebt, bekommt man einen Hex String <Buffer 48 9c>. Wenn man als Parameter 'utf-8' übergibt oder den parameter data zu einem String umwandelt, wird ein normaler String ausgegeben.
fs.readFile("./auto", "utf-8", (err, data) => {
  console.log("read is ready");
  //console.error liefert zusätzlich zur Fehlermeldung auch immer einen StackTrace
  if (err) console.error(err);
  else console.log(data);
});

//Einfache asynch Methode um ein Verzeichnis (Ordner) zu erstellen.
fs.mkdir("./webseiten", (err) => {
  console.log("ich erstelle Ordner");
  if (err) console.log("Ich darf keine Ordner erstellen", err);
});

fs.readFile("./webseiten/sneaker", "utf8", (err, data) => {
  console.log("read is ready");
  if (err) console.error("Datei schreibfehler", err);
  else console.log(data);
});

fetch("https://www.zalando.de/herrenschuhe-sneaker-high/__groesse-45~5/")
  .then((res) => res.text())
  .then((data) => {
    fs.writeFile("./webseiten/sneaker", data, (err) => {
      if (err) console.log("Sneaker schreiben geht nicht", err);
    });
  });
