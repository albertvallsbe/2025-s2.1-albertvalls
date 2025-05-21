let nombres = [1, 2, 3, 4, 5, 6];

for (const num of nombres) {
  console.log(num);
  if (num === 5) {
    console.log("Fi del for of");
    break;
  }
}
