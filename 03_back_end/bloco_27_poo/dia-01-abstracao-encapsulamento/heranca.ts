function myFunc (obj: SuperClass) {
  // obj.sayHello();
  if (obj.isSuper) {
    console.log('SUPER!')
  } else {
    console.log('SUB!')
  }
}

class SuperClass {
  constructor(public isSuper = true) {}

  sayHello() {
    console.log('Olá, mundo!');
  }
}

class SubClass extends SuperClass{
  constructor(){
    super(false)
  }
}

const super1 = new SuperClass();
const sub1 = new SubClass();

// console.log(super1)
// console.log(sub1)

myFunc(super1)
myFunc(sub1)

//////////////////////

class Animal {
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

// Aqui a main espera um Animal, mas um Mammal tb é um Animal
// mas nesse caso não poderiamos chamar a funcao walk() dentro da main
// pq um Animal nao tem walk()
const main = (animal: Animal) => {
  console.log(animal);
}

main(tiger);
tiger.walk();

