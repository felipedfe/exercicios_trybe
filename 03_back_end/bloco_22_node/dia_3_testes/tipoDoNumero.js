const tipoDoNumero = (numero) => {
  if (numero > 0) {
    return 'positivo';
  } else if (numero < 0) {
    return 'negativo';
  } else if (numero === 0){
    return 'neutro';
  };
}

console.log(typeof tipoDoNumero(2))

module.exports = tipoDoNumero;