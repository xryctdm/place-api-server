/* eslint-disable func-names */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      // eslint-disable-next-line object-shorthand
      validator: function (v) {
        return /^http(s?):\/\/(www\.)?(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|([-\w]+(\.\w+))+)(:[0-9]{2,5})?([-/\w]+(#?))$/.test(v);
      },
      // eslint-disable-next-line arrow-parens
      message: props => `${props.value} не является ссылкой!`,
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
