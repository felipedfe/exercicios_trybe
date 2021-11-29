let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
let numeros_em_linha = "";

for (n = 0; n <= numbers.length - 1; n+= 1) {
    if (n === 0) {
        numeros_em_linha = numbers[n];
    } else {
        numeros_em_linha += "," + numbers[n];
    }
}

console.log(numeros_em_linha);

//2
let soma = 0;

for (num of numbers) {
    soma = soma + num;     
}

console.log(soma);

//3
let numDeElementos = numbers.length;
let mediaAritmetica = soma / numDeElementos;

console.log(mediaAritmetica);

//4
if (mediaAritmetica <= 20) {
    console.log("valor menor ou igual a 20")
} else {
    console.log("valor maior que 20")
}

//5
let maiorNumero = 0;
for (let numero of numbers) {
    if (numero > maiorNumero){
        maiorNumero = numero;
    }
}

console.log(maiorNumero);

//6
let numeroDeImpares = 0;

for (let numero of numbers) {
    if (numero % 2 === 1){
        numeroDeImpares += 1
    }
}

if (numeroDeImpares === 0){
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("número de ímpares: ", numeroDeImpares);
}

//7
let menorNumero;

for (let c = 0; c <= numbers.length - 1; c += 1) {
    if (c === 0) {
        menorNumero = numbers[c];
    }
    else if (numbers[c] < menorNumero) {
        menorNumero = numbers[c];
    }
}

console.log("menor número: " + menorNumero);

//8
let array1a25 = [];

for (let c = 1; c <= 25; c += 1) {
    array1a25.push(c);
}

console.log("Array de 1 a 25: " + array1a25);

//9
for (number of array1a25) {
    console.log(number / 2);
}

//BÔNUS
//Ordem crescente:
let temp

for (let c = 1; c < numbers.length; c += 1) {
    for (let d = 0; d < numbers.length - c; d += 1) {
        if (numbers[d] > numbers [d + 1]) {
            temp = numbers[d + 1];
            numbers[d + 1] = numbers[d];
            numbers[d] = temp
        }
    }
}

console.log("ordem crescente: " + numbers);

//Ordem decrescente:

for (let c = 1; c < numbers.length; c += 1) {
    for (let d = 0; d < numbers.length - c; d += 1) {
        if (numbers[d] < numbers [d + 1]) {
            temp = numbers[d + 1];
            numbers[d + 1] = numbers[d];
            numbers[d] = temp
        }
    }
}

console.log("ordem decrescente: " + numbers);

//Novo array com os números multiplicados entre si de dois em dois:
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicaNumbers = [];

for (let c = 1; c < numbers.length; c += 1) {
    multiplicaNumbers.push(numbers[c] * numbers[c - 1]);
}

console.log(multiplicaNumbers);
