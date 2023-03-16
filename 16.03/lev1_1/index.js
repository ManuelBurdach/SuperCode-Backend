import fs from "fs";

const openFileAndWrite = (datei, inhalt) => {
  fs.open("./" + datei, "a+", (err, fd) => {
    if (err) console.log("Beim öffnen der Datei ist ein Fehler aufgetreten:", err);
    else console.log("Datei geöffnet");
    fs.write(fd, inhalt, (err) => {
      if (err) console.log("Beim schreiben in die Datei ist ein Fehler aufgetreten:", err);
      else console.log("Neuer Inhalt in die Datei geschrieben:", inhalt);
    });
  });
};

openFileAndWrite("blog1.txt", "Der Neue Inhalt + " + Math.ceil(Math.random() * 99999999999) + "\n");

fs.writeFile("./blog2.txt", "Bla", { flag: "a+" }, (err) => {
  if (err) console.log("Beim erstellen der neuen Datei ist ein Fehler aufgetreten: ", err);
  else console.log("Datei wurde erstellt oder überschrieben");
});

openFileAndWrite("blog2.txt", "Der Neue Inhalt + " + Math.ceil(Math.random() * 99999999999) + "\n");

fs.mkdir("./assets", { recursive: true }, (err) => {
  if (err) console.log("Beim erstellen des Verzeichnisses ist ein Fehler aufgetreten:", err);
  else console.log("Verzeichnis Erstellt");
});

fs.access("./assets", fs.constants.F_OK, (err) => {
  if (err) console.log("Verzeichnis nicht gefunden:", err);
  else console.log("Verzeichnis gefunden.");
  fs.rmdir("./assets", (err) => {
    if (err) console.log("Fehler beim löschen des Verzeichnisses:", err);
    else console.log("Verzeichnis gelöscht");
  });
});

fs.writeFile("./delete.txt", "Text in Datei", { flag: "a+" }, (err) => {
  if (err) console.log("Fehler beim erstellen der delete.txt", err);
});

fs.access("./delete.txt", fs.constants.F_OK, (err) => {
  if (err) console.log("Datei existiert nicht", err);
  else {
    console.log("Datei existiert und wird gelöscht");
    fs.rmSync("./delete.txt", { recursive: true }, (err) => {
      if (err) console.log("Fehler beim löschen des Files", err);
    });
  }
});

fs.writeFile("./Hello.txt", "Beliebiger Text", { flag: "a+" }, (err) => {
  if (err) console.log("Fehler beim erstellen der Datei", err);
  else console.log("Datei wurde erstellt");
});

fs.rename("./Hello.txt", "./HelloWord.txt", (err) => {
  if (err) console.log("Fehler beim umbennen", err);
});
