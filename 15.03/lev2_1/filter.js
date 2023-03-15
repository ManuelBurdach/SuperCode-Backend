export const cityFilterPopulation = (array) => {
  return array.filter((a) => a.population > 100000);
};

export const cityFilterPopulation1 = (array) => {
  return array.filter((a) => a.population < 100000);
};
