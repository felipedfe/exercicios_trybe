const { expect } = require('chai');
const sinon = require('sinon');
const tipoDoNumero = require('../tipoDoNumero')

const VALOR_POSITIVO = 2;
const VALOR_NEGATIVO = -1;
const VALOR_NEUTRO = 0;


describe('testa função positivo/negativo', () => {
  it('a saída é um string', () => {
    const resultado = tipoDoNumero(VALOR_POSITIVO);
    expect(resultado).to.be.a('string')

  })
  it('a saída é positiva', () => {
    const resultado = tipoDoNumero(VALOR_POSITIVO);
    expect(resultado).to.be.equals('positivo')
  })
  it('a saída é negativa', () => {
    const resultado = tipoDoNumero(VALOR_NEGATIVO);
    expect(resultado).to.be.equals('negativo')
    
  })
  it('a saida é "neutro"', () => {
    const resultado = tipoDoNumero(VALOR_NEUTRO);
    expect(resultado).to.be.equals('neutro')
  })
  
  it('a saída é undefined', () => {
    const resultado = tipoDoNumero();
    expect(resultado).to.be.equals(undefined)
  })
})