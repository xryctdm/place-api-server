const router = require('express').Router();
const { celebrate } = require('celebrate');
const { idSchema } = require('../joi_schemas/joi-schemas');

const {
  getAllUsers, getUserById,
} = require('../controllers/users');

router.get('/users', getAllUsers);
router.get('/users/:userId', celebrate({ body: idSchema }), getUserById);

module.exports = router;
