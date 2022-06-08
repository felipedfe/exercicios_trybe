const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'MEU TEXTOOOO!')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  // writeFile com flag

fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', {flag: 'wx'})
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });