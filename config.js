const {
  NODE_ENV,
  JWT_SECRET,
  MONGO_URL,
  PORT,
} = process.env;

const jwtSecret = NODE_ENV === 'production' ? JWT_SECRET : 'some-secret';
const mongoUrl = NODE_ENV === 'production' ? MONGO_URL : 'mongodb://localhost:27017/mestodb';
const port = NODE_ENV === 'production' ? PORT : 3000;

module.exports = {
  jwtSecret, mongoUrl, port,
};
