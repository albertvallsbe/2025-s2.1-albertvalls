const promesaCondicional = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "Hola") {
        resolve(`Input correcte: '${input}'`);
      } else {
        reject(new Error(`Input incorrecte: s'ha rebut '${input}'`));
      }
    }, 2000);
  });
};

promesaCondicional("Hola")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

promesaCondicional("Adéu")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
