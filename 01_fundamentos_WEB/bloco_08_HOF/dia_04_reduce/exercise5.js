// Adicione o código do exercício aqui:

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(lista) {
  let listaDeLetras = lista.reduce((acc, elemento) => {
    acc.push(elemento.split(''))
    return acc;
  }, [])
  let listaCocatenada = listaDeLetras.reduce((acc, elemento) => {
    return acc.concat(elemento)
  }, [])
  let numeroDeAs = listaCocatenada.reduce((acc, elemento) => {
    if (elemento === 'a' || elemento === 'A') {
      return acc + 1
    } else {
      return acc + 0
    }
  }, 0)
  return numeroDeAs;
}

console.log(containsA(names))