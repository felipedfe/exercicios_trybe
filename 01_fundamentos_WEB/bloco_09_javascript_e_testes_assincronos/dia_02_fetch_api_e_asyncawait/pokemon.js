const botao = document.getElementById('poke-botao');
const containerDeAnexo = document.getElementById('container-anexo');
let input = document.getElementById('input-pokemon');

// Retorna o nome do pokemon com a 1a letra maiúscula
const capitalize = (nome) => {
  let primeiraLetra = nome.charAt(0);
  primeiraLetra = primeiraLetra.toUpperCase();
  nome = nome.slice(1, nome.length);
  return primeiraLetra + nome;
}

// Anexa no container-anexo um container com nome e imagem do pokemon
const anexaPokemon = async () => {
  let nomePokemon = input.value;
  const pokemonParaAnexo = await fetchPokemon(nomePokemon);
  let imagemPokemon = document.createElement('img');
  let tituloPokemon = document.createElement('h2');
  imagemPokemon.src = pokemonParaAnexo.sprites.front_default;
  tituloPokemon.innerText = capitalize(pokemonParaAnexo.name);
  if (containerDeAnexo.firstElementChild) {
    containerDeAnexo.firstElementChild.remove();
  }
  const containerNomeEImagem = document.createElement('div');
  containerNomeEImagem.appendChild(tituloPokemon);
  containerNomeEImagem.appendChild(imagemPokemon);
  containerDeAnexo.appendChild(containerNomeEImagem);
}

// Função que faz a requisição à API dos pokemons
const fetchPokemon = async (nome) => {
  const pokemonEscolhido = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${nome}`)
  .then((resposta) => resposta.json())
  .catch((erro) => {
    let containerErro = document.createElement('div');
    containerErro.innerText = 'Não existe esse Pokemon!';
    containerDeAnexo.appendChild(containerErro);
    if (containerDeAnexo.firstElementChild) {
      containerDeAnexo.firstElementChild.remove();
    }
  })
  return pokemonEscolhido
}

botao.addEventListener('click', anexaPokemon);
