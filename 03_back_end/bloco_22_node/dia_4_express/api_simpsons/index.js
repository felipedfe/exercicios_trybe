const fs = require('fs').promises;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const getLista = async () => {
  const conteudo = await fs.readFile('./simpsons.json');
  listaDePersonagens = JSON.parse(conteudo);
  return listaDePersonagens;
}

const setLista = async (personagem) => {
  const listaDePersonagens = await getLista()
  listaDePersonagens.push(personagem);
  const novaLista = await fs.writeFile('./simpsons.json', JSON.stringify(listaDePersonagens));
  return novaLista;
}

// listando personagens
app.get('/simpsons', async function (req, res) {
  try {
    const simpsons = await getLista()
    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end()
  }
})

// adicionando personagem
app.post('/simpsons', async function (req, res) {
  const { personagem } = req.body;
  try {
    const simpsons = await setLista(personagem);

    
    return res.status(202).json({ "message": "Adicionado com sucesso!" });
  } catch (error) {
    return res.status(500).end();
  }
})


// procurando pelo id
app.get('/simpsons/:id', async function (req, res) {
  const { id } = req.params;

  try {
    const simpsons = await getLista();
    const simpson = simpsons.find((personagem) => id === personagem.id);

    if (!simpson) return res.status(404).json({ message: 'simpson not found' });

    return res.status(202).json(simpson);
  } catch (error) {
    return res.status(500).end();
  }
})


app.listen(3008, () => {
  console.log('Ouvindo na 3008!')
})