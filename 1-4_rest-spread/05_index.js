const presentarTres = (arg1, arg2, arg3) => {
  console.log(`Argument 1: ${arg1}`);
  console.log(`Argument 2: ${arg2}`);
  console.log(`Argument 3: ${arg3}`);
};

const valors = ["poma", "pera", "plàtan"];

presentarTres(...valors);
