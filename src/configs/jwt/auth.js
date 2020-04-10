require('dotenv').config();

export default {
  secret: process.env.JWT_KEY,
  expiresIn: process.env.EXPIRES_IN,
};
