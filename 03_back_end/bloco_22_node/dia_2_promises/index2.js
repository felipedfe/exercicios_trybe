// encademento de chamdas

const fs = require('fs');

function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (erro, conteudo) => {
      if (erro) return reject(erro)
      resolve(conteudo)
    })
  });
};

readFilePromise('./texto2.txt')
  .then((resultado) => {
    console.log(resultado.toString('utf8'))
    return readFilePromise('./texto3.txt')
  })
  .then((resultado)  => {
    console.log(resultado.toString('utf8'))
    return readFilePromise('./text4.txt')
  })
  .then((resultado)  => {
    console.log(resultado.toString('utf8'))
    return readFilePromise('./texto5.txt')
  })
  .then((resultado)  => {
    console.log(resultado.toString('utf8'))
    return readFilePromise('./texto6.txt')
  })
  .catch((err) => console.log(err.message))
