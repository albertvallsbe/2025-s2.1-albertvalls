const trobarMaxim = (a, b, c) => {
  return a >= b && a >= c
    ? `El nombre màxim es: ${a}`
    : b >= a && b >= c
    ? `El nombre màxim es: ${b}`
    : `El nombre màxim es: ${c}`;
};

console.log(trobarMaxim(3, 9, 5));
console.log(trobarMaxim(7, 2, 7));
