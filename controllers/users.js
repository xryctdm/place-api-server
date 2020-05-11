/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secretKey = require('../config');

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Пользователь не найден' });
      } else {
        res.send({ data: user });
      }
    })
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

const createUser = (req, res) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  if (password.length < 8) {
    res.status(400).send({ message: 'короткий пароль' });
    return;
  }

  bcrypt.hash(password, 10)
    .then(hash => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then(user => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'Произошла ошибка' }));
};

const login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
      });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: 'Произошла ошибка' });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  login,
};
