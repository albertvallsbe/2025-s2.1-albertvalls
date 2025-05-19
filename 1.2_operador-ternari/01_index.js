const potConduir = (edat) => {
  return edat >= 18
    ? `Pots conduir amb ${edat} anys`
    : `No pots conduir amb ${edat} anys`;
};

console.log(potConduir(20));
console.log(potConduir(16));
