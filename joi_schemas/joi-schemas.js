/* eslint-disable no-useless-escape */
const { Joi } = require('celebrate');

const signupSchema = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  name: Joi.string().required().min(2).max(30),
  about: Joi.string().min(2).max(30),
  avatar: Joi.string().required().regex(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i),
});

const signinSchema = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
});

const postCardSchema = Joi.object().keys({
  name: Joi.string().required().min(2).max(30),
  link: Joi.string().required().regex(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i),
});

const idSchema = Joi.object().keys({
  id: Joi.string().alphanum().length(24),
});

module.exports = {
  signupSchema,
  signinSchema,
  idSchema,
  postCardSchema,
};
