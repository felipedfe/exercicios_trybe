const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// 1
app.get('/ping', function(_req, res){
  res.json({ message: 'pong' });
})

// 2
app.post('/hello', function(req, res){
  const { user } = req.body;
  res.json({ "message": `Hello, ${user}` })
});

// 3
app.post('/greetings', function(req, res){
  const { name, age } = req.body;
  if(Number(age) > 17){
    return res.status(202).json({ "message": `Hello, ${name}!` })
  }
    return res.status(401).json({ "message": "Unauthorized" });
})

// 4
app.put('/users/:name/:age', function(req, res) {
  const { name, age } = req.params;
  res.json({"message": `Seu nome é ${name} e você tem ${age} anos de idade`})
})

app.listen(3007, () => {
  console.log('Ouvindo na 3007.')
})