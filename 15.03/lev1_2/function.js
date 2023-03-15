// Folie 2
export const firstOfArray = (array) => {
  return array[0];
};

export const notTheLastOfArray = (array) => {
  return array.slice(0, array.length - 1);
};

export const lastOfArray = (array) => {
  return array[array.length - 1];
};

export const notFirstOfArray = (array) => {
  return array.slice(1, array.length);
};

export const deleteItemOfArray = (array, item) => {
  return array.filter((element) => element !== item);
};

export const uniqueItemsOfArray = (array) => {
  return array.filter((x, i) => array.indexOf(x) === i);
};

export const sumOfArray = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

//Folie 3

export const randomNumberBetween2Numbers = (para1, para2) => {
  return Math.round(Math.random() * (para2 - para1)) + para1;
};

export const firstLetterOfStringUppercase = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const stringToUppercase = (string) => {
  return string.toUpperCase();
};

export const lastLetterOfStringSamePara2 = (para1, para2) => {
  return para1.slice(para1.length - 1) === para2 ? true : false;
};
