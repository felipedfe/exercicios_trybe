const Book = require('../services/Book');

const getAll = async (req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
}

const getByAuthorId = async (req, res, next) => {
  const { id } = req.params;
  const booksById = await Book.getByAuthorId(id);
  if (booksById.error) return next(booksById.error);

  res.status(200).json(booksById);
}

module.exports = {
  getAll,
  getByAuthorId,
};
