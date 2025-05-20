const calculadora = (a, b, callback) => {
  callback(a, b);
};

const sumar = (x, y) => {
  console.log(`El resultat de la suma: ${x + y}`);
};

const restar = (x, y) => {
  console.log(`El resultat de la resta: ${x - y}`);
};

calculadora(10, 15, sumar);
calculadora(10, 15, restar);
