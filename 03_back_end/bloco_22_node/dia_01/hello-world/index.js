const readline = require('readline-sync');

const name = readline.question('Qual é o seu nome?');
const idade = readline.questionInt("Qual é a sua idade");

console.log(`Olá, ${name}! Você tem ${idade} anos!`);