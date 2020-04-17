const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

const doesUserExist = (req, res, next) => {
  // eslint-disable-next-line no-underscore-dangle
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
