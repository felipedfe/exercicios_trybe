let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: {golden: 2, silver: 3}
}

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.")

player['bestOfTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player['bestOfTheWorld'].length + " vezes.");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");


let pizzas = {
sabor: 'palmito',
preco: 39.90
}

for (let key in pizzas) {
console.log(key, pizzas[key]);
}

let names = {
person1: 'João',
person2: 'Maria',
person3: 'Jorge' 
};

for (let key in names) {
console.log("Bom dia, " + names[key] + "!");
}

let car = {
model: 'A3 Sedan',
manufacturer: 'Audi',
year: 2020
};

for (let key in car) {
console.log(key, car[key]);
}



// Refatoração de exercícios do dia 4.1

//2

function maiorNumero (primeiroNumero, segundoNumero) {
    if (primeiroNumero > segundoNumero) {
        console.log("Primeiro número é maior.")
    } 
    else if (segundoNumero > primeiroNumero) {
        console.log("Segundo é maior.")
    } else {
        console.log("Os números são iguais.")
    }
}

maiorNumero(2, 3);

//3

function maiorDeTresNumeros (a, b , c) {
    if (a > b && a > c){
        console.log("Maior número:", a);
    } 
    else if (b > a && b > c) {
        console.log("Maior número:", b);
    } else if (c > a && c > b) {
        console.log("Maior número:", c);
    } else {
        console.log("Os números são iguais.")
    }
}

maiorDeTresNumeros(11, 11 , 11);

//4

function positiveNegagative (a) {
    if (a > 0){
        console.log("positive");
    }
    else if (a < 0) {
        console.log("negative");
    }
    else {
        console.log("zero")
    }
}

positiveNegagative(0);

//5

function validAngles (ang1, ang2, ang3) {
    if ((ang1 < 0 || ang2 < 0 || ang3 < 0) || (ang1 + ang2 + ang3 != 180)) {
        console.log("ângulos inválidos");
    } else {
        console.log("ângulos válidos");
    }
}

validAngles(60, 100, 20);
