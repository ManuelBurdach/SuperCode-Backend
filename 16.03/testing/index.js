import fs from "fs";

// ------------------------------- EXIST -------------------------------
//Um nur zu überprüfen ob ein Ordner oder eine Datei existiert gebe nur ein Argument an
// existDirectoryOrFile("./assets");

//Prüfen ob Ordner oder Datei existiert (Path und Callbackfunction (gibt true oder false zurück))
const existDirectoryOrFile = (path, cb = () => {}) => {
  let bla = fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.log("Ordner oder Datei existiert nicht");
      cb(path);
    } else console.log("Ordner oder Datei existiert bereits");
  });
};

// ------------------------------- EXIST + MakeDirectory/File -------------------------------
//Um zu reagieren wenn Ordner oder Datei nicht existiert gebe ein zweites Argument an (Function: makeFile oder makeDirectory)
// existDirectoryOrFile("./assets", makeDirectory);
// existDirectoryOrFile("./assets/datei.txt", makeFile);

//Erstelle Ordner
const makeDirectory = (path) => {
  fs.mkdir(path, (err) => {
    if (err) console.log("Fehler");
    else console.log("Ordner wurde erstellt");
  });
};

//Erstelle Datei
const makeFile = (path) => {
  fs.writeFile(path, "", (err) => {
    if (err) console.log("Fehler");
    else console.log("Datei wurde erstellt");
  });
};

// ------------------------------- DELETE Directory -------------------------------
//Lösche Ordner / erstes Argument: der Path / zweites Argument: true/false (true löscht Ordner samt Datein die drin sind / false lässt es nicht zu)
// removeDirectory("./assets", true);

//Lösche Ordner
const removeDirectory = (path, recursive) => {
  fs.rmdir(path, { recursive: recursive }, (err) => {
    if (err) console.log("Ordner konnte nicht gelöscht werden");
    else console.log("Ordner wurde gelöscht");
  });
};

// ------------------------------- DELETE File -------------------------------
