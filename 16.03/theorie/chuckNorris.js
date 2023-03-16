import fs from "fs";
import { fsErrorHandler } from "./handler.js";

// fs.mkdir("./witze/", (err) => {
//   if (err) console.log("Ordner erstellen Fehler", err);
// });

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => {
    fs.writeFile("./witze/witze.txt", data.value + "\n", { flag: "a+" }, fsErrorHandler);
  });
