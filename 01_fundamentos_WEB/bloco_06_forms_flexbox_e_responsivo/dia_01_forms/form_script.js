// Colocando as opções de estados no elemento select
let siglas = `AC
AL
AP
AM
BA
CE
DF
ES
GO
MA
MT
MS
MG
PA
PB
PR
PE
PI
RJ
RN
RS
RO
RR
SC
SP
SE
TO`

let listaSiglas = siglas.split("\n");
let selecaoEstado = document.getElementById("select-estado");

for (let i = 0; i < listaSiglas.length; i += 1) {
  let opcaoEstado = document.createElement("option");
  opcaoEstado.value = listaSiglas[i];
  opcaoEstado.innerText = listaSiglas[i];
  selecaoEstado.appendChild(opcaoEstado);
}

// Botão
let botaoEnviar = document.getElementById("botao-enviar");
botaoEnviar.addEventListener("click", impededirValidacao);

function impededirValidacao(evento) {
  evento.preventDefault();
}

// Validações:
let containerDosDadosValidados = document.createElement("div");
let validacaoContainer = false;
// Nome
botaoEnviar.addEventListener("click", validaNome);

function validaNome() {
  let inputNome = document.getElementById("input-nome");
  let nome = document.createElement("p");
  if (inputNome.value.length > 0 && inputNome.value.length < 41) {
    validacaoContainer = true;
    nome.innerText = inputNome.value;
    containerDosDadosValidados.appendChild(nome);
  } else {
    validacaoContainer = false;
  }
}

// Estado
let estados = document.getElementById("select-estado");
botaoEnviar.addEventListener("click", validaEstado);

function validaEstado(){
  console.log(estados.value);
}
console.log(estados);

// Residencia
let residencia = document.getElementById("casa");
console.log(residencia.checked)