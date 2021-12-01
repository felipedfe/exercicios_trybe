//1

let n = 9;
let linha = "";

for (let i = 0; i < n; i += 1){
    for (let c = 0; c < n; c += 1){
        linha = linha + "*";
    }
    console.log(linha);
    linha = "";
}

//2

linha = "";

for (let i = 0; i < n; i += 1){
    for (let c = 0; c <= i; c += 1){
        linha = linha + "*";
    }
    console.log(linha);
    linha = "";
}

//3

linha = "";
let espaços = "";
let numDeEspaços = n - 1 ;

for (let i = 0; i < n; i += 1){
    for (let c = 0; c <= i; c += 1){
        linha = linha +  "*";
    }
    for (let e = 0; e < numDeEspaços; e += 1) {
        espaços = espaços + " ";
    }
    linha = espaços + linha;
    console.log(linha);
    linha = "";
    espaços = "";
    numDeEspaços -= 1;
}

//4

linha = "";
espaços = "";
numDeEspaços = n - 2;

for (let i = 0; i < n; i += 2){
    for (let c = 0; c <= i; c += 1){
        linha = linha +  "*";
    }
    for (let e = 0; e < numDeEspaços; e += 1) {
        espaços = espaços + " ";
    }
    linha = espaços + linha + espaços;
    console.log(linha);
    linha = "";
    espaços = "";
    numDeEspaços -= 1;
}

//BÔNUS

//5

let espaçoMeio = "";
let asterico = "*";
let numDeAsteriscos = 2;

linha = "";
espaços = "";
espaçoLateral = n - 2;

for (let i = 0; i < n; i += 2){                     // linha crescendo de 2 em 2 (1, 3, 5 linhas)
    for (let e = 0; e < espaçoLateral; e += 1) {    // calcula os espaços laterais
        espaços = espaços + " ";
    }
    if (i === n -1) {                               // aqui é uma condição pra imprimir a base do triang.
        for (let p = 0; p < n; p += 1) {
            linha = linha + asterico;
        }
        console.log(espaços + linha);
    } else {                                        // aqui começa a formar o triang.
        linha = asterico + linha;                       // primeiro *
        for (let c = 2; c <= i; c += 1){                // preenche com espaços
            linha = linha + " ";
            }
        if (i > 0) {                                // isso é pra não imprimir o segundo * no começo
            linha = linha + asterico;                   // segundo *
        }
    
        linha = espaços + linha + espaços;
        console.log(linha);
        linha = "";
        espaços = "";
        espaçoLateral -= 1;
    }
}


//6

numero = 1000;
listaDivisores = [];

for (c = 1; c <= numero; c += 1) {
    if (numero % c === 0 || c % numero === 0) {
        listaDivisores.push(c)
    }
}

console.log(listaDivisores);

if (listaDivisores.length > 2){
    console.log("Não é primo.")
} else {
    console.log("É primo.")
} 