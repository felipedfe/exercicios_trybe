const express = require('express');
const User = require('./models/User');

app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send("olá, mundo");
})

// exercicio 1
app.post('/user', async (req, res) => {
  const data = req.body;

  const addedUser = await User.addUser(data);

  res.status(200).json(addedUser);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});