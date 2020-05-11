/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */

const Card = require('../models/card');

const getAllCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then(card => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Произошла ошибка' }));
};

const deleteCard = (req, res) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка не найдена' });
      } else if (toString(req.user._id) !== toString(card.owner)) {
        console.log(card.owner, req.user._id);
        res.status(403).send({ message: 'вы не создавали эту карточку' });
      } else {
        card.remove();
        res.status(200).send({ data: card });
      }
    })
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
};
