/* eslint-disable import/newline-after-import */
/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const routeCards = require('./routes/cards');
const routeUsers = require('./routes/users');
const routeLogin = require('./routes/login');
const auth = require('./middlewares/auth');
const error = require('./middlewares/error');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routeLogin);
app.use(auth);

app.use(routeCards);
app.use(routeUsers);

app.use(errorLogger);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.use(errors);

app.use(error);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
