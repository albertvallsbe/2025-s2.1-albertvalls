const processar = (num, patata) => {
  patata(num);
};

processar(42, (valor) => {
  console.log(`He rebut el valor: ${valor}`);
});
