const processarCadena = (cadena, callback) => {
  const transformada = cadena.toUpperCase();
  callback(transformada);
};

const callable = (parameter) => {
  console.log(`Valor: ${parameter}`);
};

processarCadena("Programació", callable);
processarCadena("Pastanaga", callable);
