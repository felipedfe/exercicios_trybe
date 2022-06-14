const readline = require('readline-sync');
const fs = require('fs');

const randomNum = Math.floor((Math.random() * 11));

const palpite = readline.questionInt('Digite um número: ');

console.log(`Esse era o número ---> ${randomNum}`);
if (palpite === randomNum) {
  console.log('ACERTOU!')
} else {
  console.log('errou...')
};
