function line () {
    console.log("-----------------------------------")
}

//FUNÇÕES
//1

function verificaPalindromo (palavra) {
    let palavraReversa;
    palavraReversa = palavra.split("").reverse().join("");
    if (palavra === palavraReversa) {
        return true;
    } else {
        return false;
    }

}

console.log(verificaPalindromo("ana"));

line();

//2

function indiceDoMaiorValor (array) {
    let maiorIndice;
    let maiorNumero = array[0];
    for (c = 0; c < array.length; c += 1) {
        if (array[c] > maiorNumero) {
            maiorIndice = c;
        }
    }
    return maiorIndice;
}

let arrayTeste = [2, 3, 6, 7, 10, 1]

console.log(indiceDoMaiorValor(arrayTeste));

line();

//3

function indiceDoMenorValor (array) {
    let menorIndice;
    let menorNumero = array[0];
    for (c = 0; c < array.length; c += 1) {
        if (array[c] < menorNumero) {
            menorIndice = c;
        }
    }
    return menorIndice;
}

arrayTeste = [2, 4, 6, 7, 10, 0, -3];

console.log(indiceDoMenorValor(arrayTeste));

line();

//4

function nomeComMaisCaracteres (array) {
    let maiorNome = array[0]
    for (nome of arrayTeste) {
        if (nome.length > maiorNome.length) {
            maiorNome = nome;
        }
    }
    return maiorNome;
}

arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(nomeComMaisCaracteres(arrayTeste));

line();

//5

function numeroQueMaisRepete (array) {
    let repeticao = 0;
    let repeticaoAnterior = 0;
    let maisRepete;

    for (c = 0; c < array.length; c += 1) {
        for (i = 0; i < array.length; i += 1) {
            if (array[c] === array[i]) {
                repeticao += 1;
            }
        }
        
        if (repeticao > repeticaoAnterior) {
            maisRepete = array[c];
            repeticaoAnterior = repeticao;
            }

        repeticao = 0; 
    }
    return maisRepete;
}

arrayTeste = [2, 3, 2, 5, 5, 5, ,5, 8, 2, 3];

console.log(numeroQueMaisRepete(arrayTeste));

line();

//6

function sum (n) {
    let soma = 0;
    for (c = 1; c <= n; c += 1) {
        soma += c;
    }
    return soma;
}

console.log(sum(5));

line();

//7

function confereFinal (word, ending) {
    let tamanhoWord = word.length;
    let tamanhoEnding = ending.length;
    let fimWord = word.slice(tamanhoWord - tamanhoEnding, tamanhoWord);
    
    if (fimWord === ending) {
        return true;
    } else {
        return false;
    }
}

console.log(confereFinal('trybe', 'be'));
