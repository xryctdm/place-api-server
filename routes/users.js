const router = require('express').Router();
const path = require('path');

const usersPath = path.resolve('../sprint_12/data/users.json');

// eslint-disable-next-line import/no-dynamic-require
const users = require(usersPath);

router.get('/users', (req, res) => {
  res.send(users);
});

const doesUserExist = (req, res, next) => {
  const initialUser = users.find((user) => user._id === req.params.id);
  if (!initialUser) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  req.user = initialUser;
  next();
};

router.get('/users/:id', doesUserExist, (req, res) => {
  res.send(req.user);
});

module.exports = router;
