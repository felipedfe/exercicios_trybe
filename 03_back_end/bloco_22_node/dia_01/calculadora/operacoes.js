const soma = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`); 
const subtracao = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`); 
const multiplicacao = (num1, num2) => console.log(`${num1} * ${num2} = ${num1 * num2}`); 
const divisao = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`); 

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao
};
