/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */

const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

const getAllCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then(card => res.send({ data: card }))
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else if (card.owner.toString() !== req.user._id.toString()) {
        throw new ForbiddenError('Вы не создавали эту карточку');
      } else {
        card.remove();
        res.status(200).send({ message: 'Карточка удалена' });
      }
    })
    .catch(next);
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
};
