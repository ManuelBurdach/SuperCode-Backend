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
