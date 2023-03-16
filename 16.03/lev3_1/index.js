//Importiere Filesystem
import fs from "fs";

//Erstelle Ordner
fs.mkdir("./unterordner", (err) => {
  if (err) console.log("Verzeichnis existiert bereits");
  else console.log("Ordner wurde erstellt");
});

let anonymFunc = (parameter) => {
  fs.access("./unterordner/datei.txt", fs.constants.F_OK, (err) => {
    if (err) {
      console.log("Datei wird erstellt!");
      fs.writeFile("./unterordner/datei.txt", parameter, (err) => {
        if (err) console.log("Fehler beim erstellen der Datei");
      });
    } else {
      console.log("Datei existiert bereits!");
      fs.open("./unterordner/datei.txt", "a+", (err, fd) => {
        if (err) console.log("Fehler beim öffnen der Datei");
        else {
          console.log("Datei wurde geöffnet");
          fs.write(fd, "\n" + parameter, (err) => {
            if (err) console.log("Es konnte nicht in die Datei geschrieben werden.");
            else console.log("In die Datei wurde dieser Text aufgenommen:", parameter);
          });
        }
      });
    }
  });
};

anonymFunc("Dein Inhaltstext");
