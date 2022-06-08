const fs = require('fs').promises;

Promise.all([
  fs.readFile('../texto1.txt', 'utf8'),
  fs.readFile('../texto2.txt', 'utf8'),
  fs.readFile('../texto3.txt', 'utf8'),
])
  .then(([file1, file2, file3]) => {
    console.log(`Concatenando: ${file1}-${file2}-${file3}`)
  })
  .catch((erro) => console.log(erro.message))  