function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

listaDias = document.getElementById("days");

for (let i = 0; i < dezDaysList.length; i += 1) {
  let dia = document.createElement("li");
  dia.innerText = dezDaysList[i];
  dia.classList.add("day");
  if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
    dia.classList.add("holiday");
  }
  if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
    dia.classList.add("friday");
  }
  
  listaDias.appendChild(dia);
}

//2
function botaoFeriado (string) {
  let botao = document.createElement("button");
  botao.innerText = string;
  botao.setAttribute("id", "btn-holiday");
  return botao;
}

let elementoBotaoFeriado = botaoFeriado("Feriado");

let buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.appendChild(elementoBotaoFeriado);

//3
elementoBotaoFeriado.addEventListener("click", mudaFundo);

function mudaFundo () {
  let feriados = document.getElementsByClassName("holiday");
  
  for (feriado of feriados) {
    if (feriado.style.backgroundColor === "white") {
      feriado.style.backgroundColor = "rgb(238,238,238)";
    } else {
      feriado.style.backgroundColor = "white";
    }
  }
}

//4

function botaoSextaFeira (string) {
  let botao = document.createElement("button");
  botao.innerText = string;
  botao.setAttribute("id", "btn-friday");
  return botao;
}

let elementoBotaoSextaFeira = botaoSextaFeira("Sexta-feira");

buttonsContainer.appendChild(elementoBotaoSextaFeira);

//5
elementoBotaoSextaFeira.addEventListener("click", mudaTexto);

function mudaTexto () {
  let diasClasseFriday = document.getElementsByClassName("friday");
  let listaDiasSexta = ['4', '11', '18', '25'];

  for (i = 0; i < diasClasseFriday.length; i += 1) {
    if (diasClasseFriday[i].innerText === "Sexta-feira") {
      diasClasseFriday[i].innerText = listaDiasSexta[i];
    } else {
      diasClasseFriday[i].innerText = "Sexta-feira";
    }
  }
}

//6
let dias = document.getElementsByClassName("day")

for (dia of dias) {
  dia.addEventListener("mouseover", zoomIn);
  dia.addEventListener("mouseout", zoomOut)
}

function zoomIn (evento) {
  console.log(evento.target)
  for (let i = 0; i < dezDaysList.length; i += 1) {
    if (evento.target.innerText == dezDaysList[i]) {
      evento.target.style.fontSize = "xx-large";
    }
  }
}

function zoomOut (evento) {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    if (evento.target.innerText == dezDaysList[i]) {
      evento.target.style.fontSize = "20px";
    }
  }
}

//7

function criaTarefa (string) {
  let myTasks = document.querySelector(".my-tasks");
  let tarefa = document.createElement("span");
  tarefa.innerText = string;
  myTasks.appendChild(tarefa);
}

criaTarefa("natação");

//8

function criaLegenda (string) {
  let myTasks = document.querySelector(".my-tasks");
  let legenda = document.createElement("div");
  legenda.className = "task";
  legenda.style.backgroundColor = string;
  myTasks.appendChild(legenda); 
}

criaLegenda("green");

//9 & 10

let task = document.querySelector(".task");

task.addEventListener("click", criaSelecao);
dias[0].addEventListener("click", mudaCorDia);

function criaSelecao () {
  task.classList.toggle("selected");
}

//rgb(119, 119, 119) -> cinza (cor original)
//rgb(0, 128, 0) -> verde

function mudaCorDia (event) {
  let corFonte = getComputedStyle(dias[0]).color;       //para pegar a cor dele no CSS
  console.log(corFonte);
  if (task.classList[1] === "selected" && corFonte === "rgb(119, 119, 119)") {
    dias[0].style.color = "rgb(0, 128, 0)";
  }
  else if (task.classList[1] === "selected" && corFonte === "rgb(0, 128, 0)") {
    dias[0].style.color = "rgb(119, 119, 119)";
  }
}
