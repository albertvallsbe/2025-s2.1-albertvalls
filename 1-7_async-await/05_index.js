const promesaHolaMon = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Per exemple, podríem simular un error aleatori:
      if (Math.random() < 0.5) {
        resolve("Hola, món");
      } else {
        reject(new Error("Ha fallat la promesa de saludar"));
      }
    }, 2000);
  });

const mostrarHolaMonSegur = async () => {
  try {
    const resultat = await promesaHolaMon();
    console.log("Resultat:", resultat);
  } catch (error) {
    console.error("Error capturat:", error.message);
  }
};

mostrarHolaMonSegur();
