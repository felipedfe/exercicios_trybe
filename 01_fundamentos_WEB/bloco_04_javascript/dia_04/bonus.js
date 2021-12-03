function line () {
    console.log("-----------------------------------")
}

//2

function ArrayOfNumbers (vector) {
    let arrayPares = [];
    
    for (array of vector){
        for (number of array) {
            if (number % 2 === 0) {
                arrayPares.push(number);
            }
        }
    }
    return arrayPares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(ArrayOfNumbers(vector));

line ();

//3

let cesta = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'];
let frutasRepetidas = [];
let novaCesta = [];
let quantidadeFrutas = {}

cesta = cesta.sort();

for (c = 0; c < cesta.length; c += 1) {
    if (cesta[c] === cesta[c + 1]) {
        frutasRepetidas.push(cesta[c]);
    } else {
        frutasRepetidas.push(cesta[c]);
        novaCesta.push(frutasRepetidas);
        frutasRepetidas = [];
    }
}
console.log(novaCesta);

for (let i = 0; i < novaCesta.length; i += 1 ) {
    quantidadeFrutas[novaCesta[i][0]] = novaCesta[i].length;
}

console.log(quantidadeFrutas);

console.log("Sua cesta possui: " + quantidadeFrutas['Melancia']);

line ();
