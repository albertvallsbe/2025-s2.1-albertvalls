const promesaHolaMon = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Hola, món"), 2000);
  });

const mostrarHolaMon = async () => {
  try {
    const resultat = await promesaHolaMon();
    console.log(resultat);
  } catch (error) {
    console.error("S’ha produït un error:", error);
  }
};

mostrarHolaMon();
