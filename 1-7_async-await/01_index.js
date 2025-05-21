const promesaHolaMon = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 1000);
  });
};

promesaHolaMon()
  .then((missatge) => {
    console.log(missatge);
  })
  .catch((err) => {
    console.error("Hi ha hagut un error:", err);
  });
