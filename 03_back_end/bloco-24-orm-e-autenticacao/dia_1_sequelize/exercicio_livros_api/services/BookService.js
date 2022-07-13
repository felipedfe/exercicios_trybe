const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (data) => {
  const { title, author, pageQuantity } = data;
  const createdBook = await Book.create({ title, author, pageQuantity });
  
  return createdBook;
};

const update = async (id, data) => {
  const { title, author, pageQuantity } = data;

  await Book.update({ title, author, pageQuantity }, {where: {id}});
}

const remove = async (id) => {
  const deletedBook = await Book.destroy({where: {id}});
  return deletedBook;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}