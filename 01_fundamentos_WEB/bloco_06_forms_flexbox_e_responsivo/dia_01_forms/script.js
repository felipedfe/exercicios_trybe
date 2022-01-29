// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", bloqueiaHref);

function bloqueiaHref(event){
    event.preventDefault();
    console.log(event.target);
}

INPUT_CHECKBOX.addEventListener("click", bloqueiaCheckbox);

function bloqueiaCheckbox(event){
    event.preventDefault();
    console.log(event.target);
}

INPUT_TEXT.addEventListener("keypress", bloqueiaTexto);

function bloqueiaTexto(event){
    if (event.key !== "a") {
        event.preventDefault();
    }
    console.log(event.key)
}