//1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2

let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

//3

menu.push("Contato");
console.log(menu);

// FOR
//1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (i = 0; i <= groceryList.length - 1; i+= 1){
    console.log(groceryList[i]);
}

// FOR/OF
//1

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names){
    console.log(nome);
}