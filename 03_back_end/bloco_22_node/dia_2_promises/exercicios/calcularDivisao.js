const calcularDivisao = (num1, num2) => {
  try{
    const resultado = num1 / num2;
    if (num2 === 0) throw new Error('Erro!!!')
    console.log(`resultado: ${resultado}`);
  } catch (erro) {
    console.log(erro.message);
  }
}

calcularDivisao(4, 2);