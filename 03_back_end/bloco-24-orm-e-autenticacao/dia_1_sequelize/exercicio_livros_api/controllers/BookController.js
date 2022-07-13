const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ "message": "Book not found" });

  return res.status(200).json(book);
}

const create = async (req, res) => {
  const data = req.body;
  const createdBook = await BookService.create(data);

  res.status(200).send(createdBook);
}

const update = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  await BookService.update(id, data);

  return res.status(200).send("Book updated!");
}

const remove = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await BookService.remove(id);
  
  if (!deletedBook) return res.status(500).send('Algo deu errado...')

  return res.status(200).send('Livro deletado!')
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
