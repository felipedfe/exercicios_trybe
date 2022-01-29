const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
  let objetoAluno = notas.map((elemento, index) => {
    return {
      name: alunos[index],
      average: elemento.reduce((acc, element) => acc + element) / 5
    }
  })

  return objetoAluno;
}

console.log(studentAverage(students, grades))