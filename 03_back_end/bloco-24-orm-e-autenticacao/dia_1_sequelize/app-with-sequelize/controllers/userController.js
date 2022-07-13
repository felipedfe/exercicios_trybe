const { User } = require('../models');

const getAll = async (_req, res) => {
  const users = await User.findAll();

  res.status(200).send(users);
}

const addUser = async (req, res) => {
  const { fullName, email } = req.body;
  const newUser = await User.create({ fullName, email });
  
  res.status(200).json(newUser);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy(
    {where: { id }}
  );

  res.status(200).json(deletedUser);
}

module.exports = {
  getAll,
  addUser,
  deleteUser,
};
