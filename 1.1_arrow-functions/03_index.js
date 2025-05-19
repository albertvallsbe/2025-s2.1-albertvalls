class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    const sayHello = () => {
      console.log(`Hola, ${this.name}`);
    };
    sayHello();
  }
}

const albert = new Person("Albert");
albert.greet();
