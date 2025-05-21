const espera = (temps, missatge) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(missatge), temps);
  });

const promesa2s = (temps) => espera(temps * 1000, `Primer resultat ${temps}`);
const promesa3ms = (temps) => espera(temps, `Segon resultat ${temps / 1000}`);

async function executarPromises() {
  try {
    const [response2, response3] = await Promise.all([
      promesa2s(2),
      promesa3ms(3000),
    ]);
    console.log(response2);
    console.log(response3);
  } catch (error) {
    console.error("Error en alguna promesa:", error);
  }
}

// Ara ja pots trucar-la per nom:
executarPromises();
