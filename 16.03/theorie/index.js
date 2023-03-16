const array = ["Ich bin ein Array", "Zweiter Index"];

const outputArray = (array, cb) => {
  console.log(array);
  cb();
};

const callback = () => {
  console.log("Ich bin eine Callback");
};

outputArray(array, callback);
