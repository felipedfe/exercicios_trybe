const connection = require('./connection');

const toCamelCase = (data) => {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    authorId: item.author_id,
  }))
}

const validateAuthor = async ({ title, author_id }) => {
  if(!title || title.length < 3) return false;

  const allBooks = await getAll();
  if (!allBooks.find((item) => item.author_id === author_id )) return false;

  return true;
};

const createAuthor = async ({ title, author_id }) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, author_id]
  )
}

const getByAuthorId = async (id) => {
  const [booksById] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id =?;', [id]
  )
  // cada iteracao desse map retorna um objeto com apenas a alteracao do camelCase
  return toCamelCase(booksById);
}


const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  )
  return toCamelCase(books);
}

module.exports = {
  getAll,
  getByAuthorId,
  validateAuthor,
  createAuthor,
}
