const express = require('express');
const BookController = require('./controllers/BookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books/:id', BookController.getById);
app.put('/books/:id', BookController.update);
app.delete('/books/:id', BookController.remove);
app.get('/books', BookController.getAll);
app.post('/books', BookController.create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));