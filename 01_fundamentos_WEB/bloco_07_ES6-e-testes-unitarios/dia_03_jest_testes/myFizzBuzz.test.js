const myFizzBuzz = require('./myFizzBuzz');

it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
})

it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(4)).toBe(4);
})

it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('y')).toBeFalsy;
})