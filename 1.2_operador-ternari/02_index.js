const quinMesGran = (num1, num2) => {
  return num1 > num2
    ? `${num1} és més gran`
    : num1 < num2
    ? `${num2} és més gran`
    : `${num1} i ${num2} són iguals`;
};

console.log(quinMesGran(5, 3));
console.log(quinMesGran(2, 7));
console.log(quinMesGran(7, 7));
