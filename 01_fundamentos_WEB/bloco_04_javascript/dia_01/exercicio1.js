// variáveis
const a = 6;
const b = 4;
const c = 2;
const ang1 = -90;
const ang2 = -30;
const ang3 = -60;
const rei = "qualquer direção";
const rainha = "qualquer direção";
const torre = "vertical e horizontal";
const bispo = "diagonal";
const cavalo = "L";
const peao = "vertical";
let peca = "Rei";
let porcentagem;
let verificaPar;
let verificaImpar;

let valorCustoTotal;
let impostoSobreCusto;
let lucro;

//1

console.log("Adição:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Módulo:", a % b);

//2

if (a > b){
    console.log("Maior número:", a);
} else {
    console.log("Maior número:", b);
}

//3

if (a > b && a > c){
    console.log("Maior número:", a);
} 
else if (b > a && b > c) {
    console.log("Maior número:", b);
} else {
    console.log("Maior número:", c);
}

//4

if (a > 0){
    console.log("positive");
}
else if (a < 0) {
    console.log("negative");
}
else {
    console.log("zero")
}

//5

if ((ang1 < 0 || ang2 < 0 || ang3 < 0) || (ang1 + ang2 + ang3 != 180)) {
    console.log("ângulos inválidos");
} else {
    console.log("ângulos válidos");
}

//6

peca = "Cavalo";
const resultado = peca.toLowerCase();

switch (resultado) {
    case "rei":
        console.log(rei);
        break;
    case "rainha":
        console.log(rainha);
        break;
    case "peao":
        console.log(peao);
        break;
    case "torre":
        console.log(torre);
        break;
    case "cavalo":
        console.log(cavalo);
        break;
    case "bispo":
        console.log(bispo);
        break;
}

//7

porcentagem = 0;

if (porcentagem >= 90) {
    console.log("A");
}
else if (porcentagem >= 80) {
    console.log("B");
}
else if (porcentagem >= 70) {
    console.log("C");
}
else if (porcentagem >= 60) {
    console.log("D")
}
else if (porcentagem >= 50) {
    console.log("E");
} else {
    console.log("F");
}

if (porcentagem > 100 || porcentagem < 0) {
    console.log("ERRO");
}

//8

verificaPar = (a % 2 === 0 || b % 2 === 0 || c % 2 === 0)

if (verificaPar) {
    console.log(true);
} else{
    console.log(false);
}

//9

verificaImpar = (a % 2 === 1 || b % 2 === 1 || c % 2 === 1)

if (verificaImpar) {
    console.log(true);
} else{
    console.log(false);
}

//10
// lucro = valorVenda - valorCustoTotal
// impostoSobreCusto = (custo x 20) / 100
// valorCustoTotal = valorCusto + impostoSobreCusto

const valorCusto = 200;
const valorVenda = 500;

impostoSobreCusto = (valorCusto * 20) / 100;
valorCustoTotal = valorCusto + impostoSobreCusto;

lucro = valorVenda - valorCustoTotal;

console.log(lucro);

//11
//let salarioBruto = 3000;
//let aliquotaINSS = 11;
//let aliquotaIR = 7.5;
//let salarioBase = 3000 - ((3000 *  aliquotaINSS) / 100);
//let valorIR = ((salarioBase * aliquotaIR) / 100) - 142.80;
//let salarioLiquido = salarioBase - valorIR;

//console.log(salarioLiquido);

let salarioBruto = 1111;
let aliquotaINSS;
let aliquotaIR;
let salarioBase;
let parcela;
let salarioLiquido;
let valorIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = (salarioBruto * 8) / 100;
}
else if (salarioBruto <= 2594.92) {
    aliquotaINSS = (salarioBruto * 9) / 100;
}
else if (salarioBruto <= 5189.82) {
    aliquotaINSS = (salarioBruto * 11) / 100;
} else {
    aliquotaINSS = 570.88;
}

salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase < 1903.98) {
    aliquotaIR = 0;
    parcela = 0;
}
else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 7.5) / 100;
    parcela = 142.80;
}
else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 15) / 100;
    parcela = 354.80;
}
else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 22.5) / 100;
    parcela = 636.13;
}
else {
    aliquotaIR = (salarioBase * 27.5) / 100;
    parcela = 869.36;
}

valorIR = aliquotaIR - parcela;

salarioLiquido = salarioBase - valorIR;

console.log(salarioLiquido);


