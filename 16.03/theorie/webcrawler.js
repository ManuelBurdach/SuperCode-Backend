import fs from "fs";

const array = [
  "https://www.zalando.de/herrenschuhe-sneaker-high/__groesse-49~5/",
  "https://www.snipes.com/c/shoes/sneaker?srule=Standard&prefn1=size&prefv1=49.5&openCategory=true&sz=48",
  "https://www.kickz.com/de/l/jordan/retros/air-jordan-1-retro/",
];

array.forEach((link, index) => {
  fetch(link)
    .then((res) => res.text())
    .then((data) => {
      fs.writeFile("./webseiten/" + index + ".html", data, (err) => {
        if (err) console.log("Crawler ist müde", err);
      });
    });
});
