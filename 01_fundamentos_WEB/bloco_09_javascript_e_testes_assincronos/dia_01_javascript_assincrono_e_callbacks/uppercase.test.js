const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testa a função uppercase', (done) => {
  uppercase('felipe', (result) => {
    try {
      expect(result).toEqual('FELIPE')
      done();
    } catch (erro){
      done(erro)
    }
  })
});
