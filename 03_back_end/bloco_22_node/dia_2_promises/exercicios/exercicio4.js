const fs = require('fs').promises;

// 1
// const readAll = async () => {
//   const conteudo = await fs.readFile('./simpsons.json', 'utf8')
//   const listaPersonagens = JSON.parse(conteudo)
//   listaPersonagens.forEach((personagem) => console.log(`${personagem.id} - ${personagem.name}`))
// }

// readAll()

//2
// const printPeloId = async (id) => {
//   const conteudo2 = await fs.readFile('./simpsons.json', 'utf8');
//   const listaPersonagens2 = JSON.parse(conteudo2);
//   return new Promise((resolve, reject) => {
//     const resultado = listaPersonagens2.find((personagem) => Number(personagem.id) === id)
//     if (!resultado) reject(new Error("id não encontrado"))

//     resolve(resultado)
//   })
// }

// printPeloId(2)
// .then(console.log)
// .catch((erro) => console.log("OLHA O ERRO :", erro.message))

// 3
// const alteraLista = async () => {
//   const conteudo3 = await fs.readFile('./simpsons.json', 'utf8');
//   const listaPersonagens3 = JSON.parse(conteudo3);
//   const retiraIds = listaPersonagens3.filter((personagem) => 
//     Number(personagem.id) !== 6 && Number(personagem.id) !== 10)
  
//     try {
//       fs.writeFile('./simpsons.json', JSON.stringify(retiraIds));
//       console.log("SUCESSO!")
//     } catch (error) {
//       console.log(`ERRO :( - ${error.message})`)
//     }
// }

// alteraLista();

//4
// const criaFamilia = async () => {
//   const conteudo4 = await fs.readFile('./simpsons.json', 'utf8');
//   const listaPersonagens4 = JSON.parse(conteudo4);
//   const simpsonsFamily = listaPersonagens4
//     .filter((_, index) => index < 4)
  
//   fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
// }

// criaFamilia()

// 5
// const addNelson = async () => {
//   const conteudo5 = await fs.readFile('./simpsonsFamily.json', 'utf8');
//   const listaFamilia = JSON.parse(conteudo5);

//   const conteudo6 = await fs.readFile('./simpsons.json', 'utf8');
//   const listaPersonagens6 = JSON.parse(conteudo6);
//   const nelsonData = listaPersonagens6.find((personagem) => personagem.id === '8');
  
//   listaFamilia.push(nelsonData);
//   fs.writeFile('./simpsonsFamily.json', JSON.stringify(listaFamilia));
// }

// addNelson()

// 6
const replaceByMaggie = async () => {
  const conteudo7 = await fs.readFile('./simpsonsFamily.json', 'utf8');
  const listaFamilia2 = JSON.parse(conteudo7);

  const familiaSemNelson = listaFamilia2.filter((personagem) => personagem.id !== '8');
  const maggieData = {id: '5', name: 'Maggie Simpson'}
  const novaFamilia = [...familiaSemNelson, maggieData]
  
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(novaFamilia));
}

replaceByMaggie()