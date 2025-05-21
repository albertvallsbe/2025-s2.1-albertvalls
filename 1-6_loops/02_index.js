let noms = ["Anna", "Bernat", "Clara"];

const printNames = (array, callback) => {
  for (const element of array) {
    callback(element);
  }
};

const callable = (parameter) => {
  console.log(`Nom: ${parameter}`);
};

printNames(noms, callable);
