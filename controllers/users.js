/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const User = require('../models/user');

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch((err) => res.status(500).send(err.message));
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
