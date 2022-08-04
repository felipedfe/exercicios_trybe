interface Bicho {
  nome: string;
  age: number;

}

class Passaro implements Bicho {
  constructor(public nome: string, public age: number) {}

  info () {
    console.log(`Um pássaro chamado ${this.nome} de ${this.age} anos.`)
  }

}

const passaro1 = new Passaro('Peu', 40)
passaro1.info();

////////

function minhaFuncao (objeto: Bicho) {
  console.log(objeto);
}

minhaFuncao(passaro1);