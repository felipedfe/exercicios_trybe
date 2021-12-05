let fundoPagina = document.getElementById("container");
fundoPagina.style.backgroundColor = "#EDF5D6";

let corFundoHeader = document.getElementById("header-container");
corFundoHeader.style.backgroundColor = "#748067";

let corFonte = document.querySelectorAll("h3");
for (let c = 0; c < corFonte.length; c += 1) {
    corFonte[c].style.color = "#545F66";
}

let fundoCaixaUrgente = document.getElementsByClassName("emergency-tasks");
fundoCaixaUrgente[0].style.backgroundColor = "#F0EC57";

let textoUrgente = document.querySelectorAll(".emergency-tasks h3" );
for (let c = 0; c < textoUrgente.length; c += 1) {
    textoUrgente[c].style.backgroundColor = "#E3D87E";
}

let fundoCaixaNaoUrgente = document.getElementsByClassName("no-emergency-tasks");
fundoCaixaNaoUrgente[0].style.backgroundColor = "#E3D87E";

let FundoTextoNaoUrgente = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < FundoTextoNaoUrgente.length; i += 1) {
    FundoTextoNaoUrgente[i].style.backgroundColor = "#F0EC57";
}

let textoParagrafos = document.getElementsByTagName("p");
for (let c = 0; c < textoParagrafos.length; c += 1){
textoParagrafos[c].style.color = "gray";
textoParagrafos[c].style.textAlign = "left";
textoParagrafos[c].style.padding = "10px";
}