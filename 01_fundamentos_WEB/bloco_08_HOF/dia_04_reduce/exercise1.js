const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(lista) {
  return lista.reduce((acc, elemento) => {
    return acc.concat(elemento)
  }, [])
}

console.log(flatten(arrays))