const numeros = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getSomaDosPares = (numeros) => {
	const pares = numeros.filter((elemento) => elemento % 2 === 0);
	const somaPares = pares.reduce((acc, elemento) => acc + elemento);
	return somaPares;
}

console.log(getSomaDosPares(numeros))


console.log('----------------------');


const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPares = (acc, elemento) => {
	if (elemento % 2 === 0) {
		return elemento;
	}
}

const getSomaPares = (numbers) => {
	const somaPares = numbers.reduce((acc, elemento) => {
		return (elemento % 2 === 0) ? acc + elemento : acc;
	})
	return somaPares

}

console.log(getSomaPares(numbers))


console.log('----------------------');


const estudantes = [
	{
		nome: 'Jorge',
		sobrenome: 'Silva',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 67 },
			{ name: 'Português', nota: 79 },
			{ name: 'Química', nota: 70 },
			{ name: 'Biologia', nota: 65 },
		],
	},
	{
		nome: 'Mario',
		sobrenome: 'Ferreira',
		idade: 15,
		turno: 'Tarde',
		materias: [
			{ name: 'Matemática', nota: 59 },
			{ name: 'Português', nota: 80 },
			{ name: 'Química', nota: 78 },
			{ name: 'Biologia', nota: 92 },
		],
	},
	{
		nome: 'Jorge',
		sobrenome: 'Santos',
		idade: 15,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 76 },
			{ name: 'Português', nota: 90 },
			{ name: 'Química', nota: 70 },
			{ name: 'Biologia', nota: 80 },
		],
	},
	{
		nome: 'Maria',
		sobrenome: 'Silveira',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 91 },
			{ name: 'Português', nota: 85 },
			{ name: 'Química', nota: 92 },
			{ name: 'Biologia', nota: 90 },
		],
	},
	{
		nome: 'Natalia',
		sobrenome: 'Castro',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 70 },
			{ name: 'Português', nota: 70 },
			{ name: 'Química', nota: 60 },
			{ name: 'Biologia', nota: 50 },
		],
	},
	{
		nome: 'Wilson',
		sobrenome: 'Martins',
		idade: 14,
		turno: 'Manhã',
		materias: [
			{ name: 'Matemática', nota: 80 },
			{ name: 'Português', nota: 82 },
			{ name: 'Química', nota: 79 },
			{ name: 'Biologia', nota: 75 },
		],
	},
];

// const checaMaiorNota = (acc, elemento) => {
// 	if (acc < elemento.nota) {
// 		return elemento.nota
// 	} else {
// 		return acc
// 	}
// }

// const objetosAlunos = estudantes.map((aluno) => {
// 	return {
// 		nome: aluno.nome,
// 		materia: aluno.materias.reduce(checaMaiorNota, 0)
// 	}
// })

// console.log(objetosAlunos)

const getBestClass = (acc, materia) => {
	console.log(typeof acc.nota)
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass)}));

console.log(reportBetter(estudantes));



const nums = [1, 2, 3, 4, 5];

const sumNumbers = nums.reduce((result, number) => result + number); 
console.log(sumNumbers);

console.log('----------------------');

const epic = ['A', 'long', 'time'];

const stringa = epic.reduce((acc, value) => {
	return `${acc} ${value}`
})

console.log(stringa)