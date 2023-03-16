import fs from "fs";
import array from "./file.json" assert { type: "json" };

console.log(array[0]);

fs.writeFile("./text.txt", "", { flag: "a+" }, (err) => {
  if (err) console.log(err);
  else {
    console.log("Datei wurde erstellt");
    fs.open("./text.txt", "a+", (err, fd) => {
      if (err) console.log("Fehler beim öffnen der Datei", err);
      else {
        console.log("Datei wurde geöffnet");
        array.forEach((item) => {
          fs.write(fd, `${item.id} - ${item.title}\n${item.description}\n\n`, (err) => {
            if (err) console.log("Fehler beim schreiben in die Datei", err);
          });
        });
      }
    });
  }
});
