const isEven = (array) => {
  for (let i = 0; i < array.length; i++) {
    const tipus = array[i] % 2 === 0 ? `és parell` : `és senar`;
    console.log(`${array[i]} ${tipus}`);
  }
};

isEven([1, 2, 3, 4, 5]);
