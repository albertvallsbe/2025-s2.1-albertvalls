const smartphone = {
  marca: "Samsung",
  model: "Galaxy S21",
};

const especificacions = {
  ram: "8GB",
  emmagatzematge: "128GB",
};

const fullSmartphone = { ...smartphone, ...especificacions };

console.log(fullSmartphone);
