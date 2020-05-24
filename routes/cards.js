const router = require('express').Router();
const { celebrate } = require('celebrate');
const { postCardSchema, idSchema } = require('../joi_schemas/joi-schemas');

const { getAllCards, createCard, deleteCard } = require('../controllers/cards');

router.get('/cards', getAllCards);
router.post('/cards', celebrate({ body: postCardSchema }), createCard);
router.delete('/cards/:cardId', celebrate({ body: idSchema }), deleteCard);

module.exports = router;
