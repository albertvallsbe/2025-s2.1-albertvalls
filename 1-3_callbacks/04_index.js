const processarElements = (array, callback) => {
  array.forEach(callback);
};
const callable = (parameter) => {
  console.log(`Valor: ${parameter}`);
};

const nombres = [10, 20, 30];
const lletres = ["a", "b", "v"];
processarElements(nombres, callable);
processarElements(lletres, callable);
