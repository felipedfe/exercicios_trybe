const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1

const adicionaPropriedade = (objeto, chave, valor) => objeto[chave] = valor;

adicionaPropriedade(lesson2, 'turno', 'noite');

console.log(lesson2);

// 2

const listaChaves = (objeto) => console.log(Object.keys(objeto));

listaChaves(lesson2);

// 3

const tamanhoObjeto = (objeto) => Object.entries(objeto).length;

console.log(tamanhoObjeto(lesson2))

//4

const listaValores = (objeto) => console.log(Object.values(objeto));

listaValores(lesson2);

//5
console.log('------')

const allLessons = {};
