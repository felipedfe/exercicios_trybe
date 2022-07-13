const connection = require('./connection');

const turnToCamelCase = ({ first_name, last_name, email, password }) => {
  return {
    firstName: first_name,
    lastName: last_name,
    email,
    password,
  };
};

const addUser = async ({ firstName, lastName, email, password }) => {

  const result = await connection.execute(
    'INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );

  return {
    id: result[0].insertId,
    firstName,
    lastName,
    email
  };
};

module.exports = {
  addUser,
}