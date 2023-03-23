import {
  closeFile,
  existDirectoryOrFile,
  makeDirectory,
  openFile,
  writeInFile,
} from "./promise.js";

//Prüfen ob ein der Ordner oder die Datei existiert.
// existDirectoryOrFile(path).catch((err) => console.log(err));

function doit(directoryPath, filename, content) {
  //Erstellen / erstellen/öffnen / schreiben / schließen / fehler
  makeDirectory(directoryPath) //Erstelle ein Verzeichnis
    .then(() => openFile(directoryPath + filename)) // Öffne eine Datei (wenn diese nicht existiert erstelle sie und öffne sie)
    .then((fd) => writeInFile(fd, content)) //Schreibe etwas in diese Datei
    .then((fd) => closeFile(fd)) //Schließe diese Datei
    .catch((err) => console.error(err)); // Falls ein Fehler auftritt
}

Promise.all([
  doit("./assets/", "data.txt", "https://www.amazon.de/ \n"),
  doit("./assets/", "data.txt", "https://www.amazon1.de/ \n"),
]);
