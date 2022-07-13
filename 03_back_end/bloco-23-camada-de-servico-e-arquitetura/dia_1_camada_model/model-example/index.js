const express = require('express');
const BooksController = require('./controllers/BooksController');

// const Author = require('./models/Author');

const app = express();
app.use(express.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

// lista livros
app.get('/books' ,BooksController.getAll);

// lista livros pelo id do autor
app.get('/books/:id', BooksController.getByAuthorId);

// adiciona novo livro
app.post('/books', async (req, res) => {
  const validation = await Book.validateAuthor(req.body);
  if(!validation) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.createAuthor(req.body);
  
  res.status(201).json(req.body);
})

app.use((err, _req, res, _next) => {
  res.status(500);
  res.json(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});