const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

(fs.readFile(nomeDoArquivo, 'utf8')
.then((data) => console.log(data))
)
