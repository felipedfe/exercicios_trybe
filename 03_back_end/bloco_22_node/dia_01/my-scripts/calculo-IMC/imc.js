const readline = require('readline-sync');

function imc (pes, alt) {
  return pes / (alt ** 2);
}

function main(){
  const peso = readline.questionInt('Qual é o seu peso? ');
  const altura = readline.questionFloat('Qual é a sua altura? ');
  const resultado = imc(peso, altura)
  console.log(`Seu IMC é: ${resultado}`);
  if(resultado < 17){
    console.log("muito magro")
  } else if (resultado < 21){
    console.log("normal")
  }else {
    console.log("gordinho")
  }
}

main();
