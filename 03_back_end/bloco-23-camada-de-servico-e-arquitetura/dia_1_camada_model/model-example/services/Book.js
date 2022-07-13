const Book = require('../models/Book');

const getAll = async () => {
  const books = await Book.getAll();
  return books;
}

const getByAuthorId = async (id) => {
  const booksById = await Book.getByAuthorId(id);
  if (booksById.length === 0) return {
    error: {
      code: 'notFound',
      message: 'Não foi encontrado autor com esse ID'
    }
  };

  return booksById;
}

module.exports = {
  getAll,
  getByAuthorId,
}