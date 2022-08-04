class Student {
  private _matricula: number;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(mat: number, nom: string, notasP: number[], notasT: number[]) {
    this._matricula = mat;
    this._nome = nom;
    this._notasProva = notasP;
    this._notasTrabalho = notasT;
  }

  somaNotas(): number {
    const todasAsNotas = [...this._notasProva, ...this._notasTrabalho];
    const soma = todasAsNotas.reduce((acc, nota) => acc + nota)

    return soma;
  }

  mediaNotas(): number {
    const todasAsNotas = [...this._notasProva, ...this._notasTrabalho];
    const somaNotas = this.somaNotas()
    return somaNotas / todasAsNotas.length;
  }
};

const estudante1 = new Student(3467, 'Peu', [10, 2], [3, 3]);
// console.log(estudante1.mediaNotas());

/////////////////////

class Cliente {
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Pedido {
  public cliente: Cliente;
  public itensConsumidos: Item[];
  public formaPagamento: string;
  public desconto?: number;

  constructor(cl: Cliente, it: Item[], fo: string, des?: number) {
    this.cliente = cl;
    this.itensConsumidos = it;
    this.formaPagamento = fo;
    this.desconto = des;
  }

  totalPedido (): number {
    return this.itensConsumidos.reduce((acc, item) => acc + item.preco, 0)
  }

  pedidoComDesconto (): number {
    const totalPedido = this.totalPedido();

    if(this.desconto) {
      const pedidoComDesconto = totalPedido - (totalPedido * this.desconto);
      return pedidoComDesconto;
    } 
      return totalPedido;
  }
}

class Item {
  public nome: string;
  public preco: number;

  constructor(nome: string, preco:number) {
    this.nome = nome;
    this.preco = preco;
  }
}

// items
const item1 = new Item('Batata', 12);
const item2 = new Item('Suquinho', 8);

// clientes
const cliente1 = new Cliente('Peu');

// pedidos
const pedido1 = new Pedido(cliente1, [item1, item2], 'Pix');

console.log(pedido1.pedidoComDesconto());
