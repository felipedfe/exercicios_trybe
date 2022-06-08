const readline = require('readline-sync');
const operacoes = require('./operacoes');

console.log('---CALCULADORA---');
const num1 = readline.questionInt('Digite um número: ');
const operador = readline.question('Digite um operador: ');
const num2 = readline.questionInt('Digite outro número: ')

switch(operador) {
  case '+':
    operacoes.soma(num1, num2)
    break
  case '-':
    operacoes.subtracao(num1, num2)
    break
  case '*':
    operacoes.multiplicacao(num1, num2)
    break
  case '/':
    operacoes.divisao(num1, num2)
    break
  default:
    console.log('Deu ruim...')
};
