/* eslint-disable no-unused-vars */
module.exports = (err, req, res, next) => {
  const { joi } = err;
  const result = {
    statusCode: 400,
    error: {
      message: joi.message,
    },
  };
  return res.status(400).send(result);
};
