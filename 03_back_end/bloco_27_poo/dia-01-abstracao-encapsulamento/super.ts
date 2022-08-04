class Person1 {
  name: string;

  constructor(name: string) {
    this.name = name
  }
}

class Student1 extends Person1 {
  constructor() {
    super('vivi') // passando hard code
  }
}

class Student2 extends Person1 {
  constructor(name: string) {
    super(name) // dinâmica na hora de gerar a instancea new Student2()
  }
}

//// gerando instância

const student1 = new Student1()
const student2 = new Student2('Peu')
console.log(student1)
console.log(student2)