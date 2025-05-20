const suma = (...nombres) => {
  return nombres.reduce((acumulat, valor) => acumulat + valor, 0);
};

console.log(suma(1, 2, 3, 4));
console.log(suma(5, 10, 15));
