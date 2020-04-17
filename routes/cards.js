const router = require('express').Router();
const path = require('path');

const cardsPath = path.resolve('../sprint_12/data/cards.json');

// eslint-disable-next-line import/no-dynamic-require
const cards = require(cardsPath);

router.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = router;
