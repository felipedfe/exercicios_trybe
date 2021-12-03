//OBJETOS, FOR/IN

function line () {
    console.log("-----------------------------------")
}

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'não'
    };

console.log("Olá, " + info.personagem + "!");

line();

info['recorrente'] = 'sim';

for (let key in info) {
    console.log(key);
}

line();

for (let key in info) {
    console.log(info[key]);
}

line();

console.log(info.personagem + " e " + info2.personagem);
if (info.recorrente === info2.recorrente) {
    console.log("Ambos são recorrentes.")
} else {
    console.log(info.recorrente + " e " + info2.recorrente);
}   

line();

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

leitor['livrosFavoritos'].push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
editor: 'Rocco',
})

console.log("Julia tem " + leitor.livrosFavoritos.length + " livros favoritos.")