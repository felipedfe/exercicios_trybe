const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const num3 = Math.floor(Math.random() * 10 + 1);

function exercicio1 (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof(param1) !== 'number') reject(new Error("Informe apenas números"));

    const resultado = (param1 + param2) * param3

    if (resultado < 50) reject(new Error("Valor muito baixo!"))

    resolve(resultado)
  })
}

// exercicio1(num1, num2, num3)
// .then((result) => console.log(result))
// .catch((err) => console.log(err.message))


const main = async () => {
  try{
    const result = await exercicio1(num1, num2, num3);
    console.log(result);
  } catch(erro) {
    console.log(erro.message)
  }

}

main()