const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'miniApp'
  },
  // test: {
  //   host: 'localhost',
  //   user: 'root',
  //   password: process.env.DATABASE_SPRINT_PASSWORD,
  //   database: 'cmarket_test'
  // }
};

module.exports = config;
