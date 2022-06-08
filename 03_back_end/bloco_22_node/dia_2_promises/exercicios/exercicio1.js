function exercicio1 (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof(param1) !== 'number') reject(new Error("Informe apenas números"));

    const resultado = (param1 + param2) * param3

    if (resultado < 50) reject(new Error("Valor muito baixo!"))

    resolve(resultado)
  })
}

exercicio1(7, 7, 1)
.then((result) => console.log(result))
.catch((err) => console.log(err.message))