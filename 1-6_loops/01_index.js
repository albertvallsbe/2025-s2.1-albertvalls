let noms = ["Anna", "Bernat", "Clara"];

const printNames = (array, callback) => {
  array.forEach(callback);
};
const callable = (parameter) => {
  console.log(`Nom: ${parameter}`);
};

printNames(noms, callable);
