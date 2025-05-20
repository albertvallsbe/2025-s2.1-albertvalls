let objecte1 = {
  nom: "Alice",
  edat: 30,
};
let objecte2 = { ...objecte1 };
objecte2.edat = 99;

console.log("Objecte 1", objecte1);
console.log("Objecte 2", objecte2);
