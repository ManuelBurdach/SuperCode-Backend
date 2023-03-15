export const sortArray = (array) => {
  return array.sort((a, b) => String(a).localeCompare(String(b)));
};
