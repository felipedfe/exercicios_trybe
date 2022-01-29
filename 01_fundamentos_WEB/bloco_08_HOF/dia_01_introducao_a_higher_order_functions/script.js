const acordar = () => console.log('Acordando!');
const lanchar = () => console.log('Bora tomar café!');
const dormir = () => console.log('Partiu dormir!');

const doingThings = (func) => func();

doingThings(dormir);

// 1

const newEmployees = (nomeEmail) => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'),
    id2: nomeEmail('Luiza Drumond'),
    id3: nomeEmail('Carla Paiva'),
  }
  return employees;
};

const nomeEmail = (nome) => {
  let email = nome.toLowerCase().replace(' ', '_');
  email = `${email}@trybe.com.br`
  let objeto = {
    Nome: nome,
    Email: email
  }
  return objeto
}

console.log(newEmployees(nomeEmail));

// 2
// geraNumeros é a HOF
console.log('------------------------');

const geraNumeros = (numeroApostado, verificaValores) => {
  let numeroSorteado = Math.ceil(Math.random() * 5);
  let resultado = verificaValores(numeroApostado, numeroSorteado);
  return resultado;
}

const verificaValores = (num1, num2) => {
  console.log(num1, num2);
  if (num1 === num2) {
    return 'Parabéns!';
  } else {
    return 'Tente outra vez :('
  }
}

console.log(geraNumeros(3, verificaValores));

// 3
console.log('------------------------');
const respCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const nota = (gabarito, respostasAluno, correcao) => {
  let resultadoCorrecao = correcao(gabarito, respostasAluno);
  return resultadoCorrecao;
}

const correcao = (respCertas, respAluno) => {
  let somaNota = 0;
  for (let i = 0; i < 10; i += 1) {
    if (respAluno[i] === respCertas[i]) {
      somaNota += 1;
    }
  }
  return somaNota;
}

console.log(nota(respCertas, respAluno, correcao));

// Bônus
console.log('------------------------');

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomizaDano = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// DRAGON
const dragonDamage = (dragon, randomizaDano) => {
  let min = 15;
  let max = dragon.strength;
  return randomizaDano(min, max);
}

const dragonAttacks = () => {
  let attackPoints = dragonDamage(dragon, randomizaDano);
  mage.healthPoints -= attackPoints;
  warrior.healthPoints -= attackPoints;
  dragon.damage = attackPoints;
}

// WARRIOR
const warriorDamage = (warrior, randomizaDano) => {
  let min = warrior.strength;
  let max = min * warrior.weaponDmg;
  return randomizaDano(min, max);
}

const warriorAttacks = () => {
  let attackPoints = warriorDamage(warrior, randomizaDano);
  warrior.damage = attackPoints;
  dragon.healthPoints -= attackPoints;
}

// MAGE
const mageDamageAndMana = (mage, randomizaDano) => {
  let min = mage.intelligence;
  let max = min * 2;
  mage.mana -= 15
  return {dano: randomizaDano(min, max), mana: mage.mana};
}

const mageAttacks = () => {
  let attackPoints = mageDamageAndMana(mage, randomizaDano);
  mage.damage = attackPoints.dano;      // precisa botar .dano pq o attackPoints recebe um objeto
  dragon.healthPoints -= attackPoints.dano;
}

// GAMEACTIONS

const showStats = () => {
  console.log('Resultado do turno: ', battleMembers);
}

const gameActions = {
  warriorTurn: warriorAttacks,
  mageTurn: mageAttacks,
  dragonTurn: dragonAttacks,
  turnResult: showStats
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
gameActions.turnResult();

console.log('------------------------------');

const pessoasAprovadas = [
  'felipedfe@gmail.com',
  'virginia@catmail.com',
  'pipa@meowmail.com'
]

const enviarEmail = (email) => console.log(`Aprovação para ${email} enviada com sucesso!`);

pessoasAprovadas.forEach((emailDaLista) => {
  enviarEmail(emailDaLista);
})


console.log('-----------------')

const numeros = [19, 21, 30, 3, 45, 22, 15];

const verificaMaior = (elemento) => {
  return elemento > 35;
}

const maiorQueTrintaECinco = numeros.find(verificaMaior);

const primeiroPar = numeros.find((elemento) => {
  return elemento % 2 === 0;
})

console.log(primeiroPar)
console.log(maiorQueTrintaECinco)

console.log('-------------')

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

const nominhos = ['Peu', 'Julia', 'Ana'];

const result = nominhos.find((nome) => {
  return nome === 'Ana'
})

console.log(result)

console.log('--------------');


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numero) => {
  return numero % 3 === 0 && numero % 5 === 0;  
}

console.log(numbers.find(findDivisibleBy3And5))

console.log('--------------');

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(objetoMusica) {
  let nome = Object.values(objetoMusica);
  console.log(nome[1]);
}

function nomeMusica(musicas, findMusic) {
  let objetoMusica = musicas.find((elemento) => {
    return elemento.id === '31031686'
  })
  findMusic(objetoMusica);
}

nomeMusica(musicas, findMusic);

console.log('--------------');

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((elemento) => {
    return elemento === name
  })
}

console.log(hasName(names, 'Peu'))

console.log('--------------');

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((pessoa) => {
    return pessoa.age >= minimumAge;
  })
}

console.log(verifyAges(people, 18));