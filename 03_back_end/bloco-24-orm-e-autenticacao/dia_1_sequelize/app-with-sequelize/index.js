const express = require('express');
const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/user', userController.getAll);
app.post('/user', userController.addUser);
app.delete('/user/:id', userController.deleteUser)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));