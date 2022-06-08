const { brl, usdToBrl: convert } = require('./brlValue');
const meuModulo = require('./meuModulo/index')

console.log(convert(2))
console.log(brl)

meuModulo.func2();