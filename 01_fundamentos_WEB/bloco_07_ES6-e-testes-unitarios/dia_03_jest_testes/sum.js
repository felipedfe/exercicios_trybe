const verificaString = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('parameters must be numbers');
  }
}

const sum = (num1, num2) => {
  verificaString(num1, num2);
 
  return num1 + num2;
}
module.exports = sum;
