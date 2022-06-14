const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware')

const app = express();
app.use(bodyParser.json());

//

app.get('/hello', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá, mundo!');
}

// exemplo com encadeamento
const app2 = express()
app2
  .route('/')
  .get(function (req, res) {
    // Requisições para rota GET `/` são resolvidas aqui!
    console.log(req.query)
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
    // Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

app2.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// aplicacao que lista receitas! ////////////////////////////////////////////////

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// ordenando resultado
app.get('/recipes', function (req, res) {
  res.json(recipes.sort(function(a, b){return b.id - a.id}))
});

// Lugar pra testar esse middleware de autenticação
app.use(authMiddleware);

// usando passagem de parâmetros
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const receitaSelecionada = recipes.find((receita) => receita.id === Number(id));

  if(!receitaSelecionada) {
    res.status(404).json({message: "id não encontrado"})
  }

  res.status(200).json(receitaSelecionada);

});

// usando POST
app.post('/recipes', function (req, res) {
  const { teste } = req.body;
  console.log(req.body)
  res.json(teste)
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002!!!!!!!!');
});