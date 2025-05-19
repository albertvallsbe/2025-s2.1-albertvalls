const signeNumero = (num) => {
  return num > 0 ? "Positiu" : num < 0 ? "Negatiu" : "Zero";
};

console.log(signeNumero(10));
console.log(signeNumero(-4));
console.log(signeNumero(0));
