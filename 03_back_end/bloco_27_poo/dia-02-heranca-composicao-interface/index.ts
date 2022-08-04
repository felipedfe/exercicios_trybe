// Exercício 1
// Classe Pessoa

class Person {
  protected _name: string;
  protected _birthDate: Date;

  constructor(name: string, birth: Date) {
    this._name = name;
    this._birthDate = birth;

    // isso abaixo é pra fazer a validacao assim que cria a instancia
    this.name = this._name;
    this.birthDate = this._birthDate;
  }

  get name (): string {
    return this._name;
  }

  set name (value: string) {
    if (value.length < 3) {
      throw new Error('Nome precisa ter no mínimo  3 caracteres')
    }
    this._name = value
  }

  get birthDate (): Date {
    return this._birthDate;
  }

  set birthDate (value: Date) {
    if (value.getTime() > new Date().getTime() ) {
      throw Error('Não pode data do futuro')
    }
    if (this.calculateAge(value) > 120) {
      throw new Error('Não pode mais de 120')
    }
    this._birthDate = value;
  }

  calculateAge(value: Date): number {
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

// Exercício 2
// Classe Estudante

class Student extends Person {
  private _enrollment: string = '';
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(protected _name: string, protected _birthDate: Date) {
      super(_name, _birthDate)
      this.enrollment = this.generateEnrollment();
  }

  get enrollment (): string {
    return this._enrollment;
  }

  set enrollment (value: string) {
    this._enrollment = value;
  }

  get examsGrades (): number[] {
    return this._examsGrades;
  }

  set examsGrades (value: number[]) {
    if (value.length > 4) {
      throw new Error('Não pode mais que 4 notas de prova')
    }

    this._examsGrades = value;
  }

  get worksGrades (): number[] {
    return this._worksGrades;
  }

  set worksGrades (value: number[]) {
    if (value.length > 2) {
      throw new Error('Não pode mais que 2 notas de trabalho')
    }
  }

  somaNotas(): number {
    const todasAsNotas = [...this._examsGrades, ...this._worksGrades];
    const soma = todasAsNotas.reduce((acc, nota) => acc + nota)

    return soma;
  }

  mediaNotas(): number {
    const todasAsNotas = [...this._examsGrades, ...this._worksGrades];
    const somaNotas = this.somaNotas()
    return somaNotas / todasAsNotas.length;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    if (randomStr.length < 16) {
      throw new Error('Número de matrícula muito pequeno!')
    }

    return `STU${randomStr}`;
  }
}

// Exercício 3
// Interface Employee

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}

const professor: Employee = {
    salary : 5000,
    registration : 'FUNC3234320532094',
    admissionDate : new Date(),
  

  generateRegistration (): string {
    return `FUNC${new Date().getTime()}`
  }
}

// Exercicio 4
// Classe Subject

class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
    // isso embaixo é pra validacao valer quando criamos a instância
    this.name = this._name
  }

  get name (): string {
    return this._name;
  }

  set name (value: string) {
    if (value.length < 3) {throw new Error('Nome deve possuir no mínimo 3 caracteres')}

    this._name = value;
  }
}

// Exercicio 5
// Classe Teacher

const historia = new Subject('História');

class Teacher extends Person implements Employee{
  private _subject: Subject;
  public salary: number;
  public admissionDate: Date;
  public registration: string;

  constructor(name: string, birthDate: Date, salary: number, subj: Subject) {
    super(name, birthDate)
    this._subject = subj;
    this.salary = salary;
    this.admissionDate = new Date();
    this.registration = this.generateRegistration()
  }

  generateRegistration(): string {
    return `FUNC${new Date().getTime()}`
  }

}

const professor1 = new Teacher('Peu Soares', new Date('1983-02-11'), 12000, historia)

console.log(professor1.calculateAge(new Date()))



