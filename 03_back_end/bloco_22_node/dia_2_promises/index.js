const fs = require('fs');

// usando a funcao readFile. ela recebe um arq de texto e uma callback como parâmetro

fs.readFile('./texto1.txt', (erro, conteudo) => {
  if (erro) {
    console.error(`Erro ao ler o arquivo: ${erro.message}`);
    return;
  }
  console.log(`Arquivo lido com sucesso: ${conteudo.toString('utf8')}. BYTE LENGTH: ${conteudo.byteLength}`)
})

// exemplo com promise

function readFilePromisse (file) {
  const promise = new Promise ((resolve, reject) => {
    fs.readFile(file, (erro, conteudo) => {
      if (erro) return reject(erro)
      resolve(conteudo)
    })
  });
  return promise;
}

readFilePromisse('./texto1.txt')
.then((result) => console.log(result.toString('utf8')))
.catch((erro) => console.log(erro.message))

