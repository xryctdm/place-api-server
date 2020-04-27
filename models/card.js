/* eslint-disable object-shorthand */
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    validate: {
      // eslint-disable-next-line object-shorthand
      // eslint-disable-next-line func-names
      validator: function (v) {
        return /^http(s?):\/\/(www\.)?(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|([-\w]+(\.\w+))+)(:[0-9]{2,5})?([-/\w]+(#?))$/.test(v);
      },
      // eslint-disable-next-line arrow-parens
      message: props => `${props.value} не является ссылкой!`,
    },
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
