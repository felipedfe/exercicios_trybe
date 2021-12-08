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

elementoBotaoFeriado = botaoFeriado("Feriado");

let buttonsContainer = document.querySelector(".buttons-container");
buttonsContainer.appendChild(elementoBotaoFeriado);

//3

