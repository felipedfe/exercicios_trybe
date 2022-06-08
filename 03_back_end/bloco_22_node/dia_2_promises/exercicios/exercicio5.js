const { rmSync } = require('fs');

const fs = require('fs').promises;

// parte 1
// arrayDePalavras = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
// arrayDePromises = [];

// for (let i = 0; i < arrayDePalavras.length; i += 1){
//   arrayDePromises.push(fs.writeFile(`./file${i}.txt`, arrayDePalavras[i]));
// }


// const criaArquivosTxt = () => {
//   Promise.all(arrayDePromises)
//     .then()

// }

// criaArquivosTxt()


// parte 2
const readAndStorage = async () => {
  const arquivos = Array.from({ length: 5 }).map((_, index) => `file${index}.txt`);
  const arrayDePromises = [];

  for(arquivo of arquivos) {
    arrayDePromises.push(fs.readFile(arquivo, 'utf8')) 
  }

  const conteudoDoNovoArquivo = await (await Promise.all(arrayDePromises)).join(' ')
  console.log(conteudoDoNovoArquivo)
  fs.writeFile('./novoArquivo.txt', conteudoDoNovoArquivo)
}

readAndStorage()