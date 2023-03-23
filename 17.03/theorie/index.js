const randomNumber = () => {
  return new Promise((resolve, reject) => {
    let randomNum = Math.random();
    if (randomNum < 0.5) reject("Zahl kleiner als 0.5");
    else resolve(randomNum);
  });
};

randomNumber()
  .then((result) => console.log(result))
  .catch((result) => console.log(result));
