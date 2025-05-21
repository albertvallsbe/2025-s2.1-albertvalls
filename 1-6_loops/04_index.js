let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (const clau in obj) {
  console.log(`${clau}: ${obj[clau]}`);
}
