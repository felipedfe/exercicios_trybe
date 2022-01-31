let listaDeMoedas = document.querySelector('ul'); 

const url = 'https://api.coincap.io/v2/assets';

function fetchCrypto() {
  fetch(url)
  .then((resposta) => resposta.json())
  .then((moedas) => {
    let arrayDasMoedas = moedas.data;
    let dezPrimeirasMoedas = arrayDasMoedas.slice(0, 10);
    
    dezPrimeirasMoedas.forEach((moeda) =>{
      let li = document.createElement('li')
      li.innerHTML = `${moeda.name} ${moeda.symbol} : ${moeda.priceUsd}`
      listaDeMoedas.appendChild(li)
    })
  })
  .catch((erro) => console.log(`Deu ruim! ${erro}`))
}

fetchCrypto();
