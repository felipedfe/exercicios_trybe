//PARTE 1

//1
var elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta);

//2
var pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "pink";
console.log(pai);

//3
var primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "olá, sou o primeiro filho do filho!"
console.log(primeiroFilhoDoFilho);

//4
let primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

//5
primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilho);

//6
let textoPai = elementoOndeVoceEsta.nextSibling;
console.log(textoPai);

//7
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho);

//8
terceiroFilho = pai.children;
console.log(terceiroFilho[2]);


//PARTE 2

//1

let irmaoElementoOnVcEsta = document.createElement('section');
pai.appendChild(irmaoElementoOnVcEsta);
irmaoElementoOnVcEsta.innerText = "sou um novo irmão";

console.log(pai);

//2

filhoElementoOndeVoceEsta = document.createElement('div');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

//3

filhoDoPrimeiroFilhoDoFilho = document.createElement('div');
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

//4

terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);


//PARTE 3

//1

todosOsFilhos = pai.children;
console.log(todosOsFilhos);

for (let i = 0; i < todosOsFilhos.length; i += 1) {
    if (todosOsFilhos.id !== "elementoOndeVoceEsta") {
        pai.removeChild(todosOsFilhos[i]);

    }
}
