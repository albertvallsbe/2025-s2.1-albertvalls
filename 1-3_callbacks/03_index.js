const esperarISaludar = (nom, callback) => {
  setTimeout(() => {
    callback(nom);
  }, 2000);
};

esperarISaludar("Anna", (nomRebut) => {
  console.log(`Hola, ${nomRebut}!`);
});
