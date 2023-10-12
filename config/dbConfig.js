const { Sequelize } = require("sequelize");
require('dotenv').config();

const database = process.env.DB_NAME
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = process.env.DB_DIALECT;

module.exports = {
  host: host,
  user: user,
  password: password,
  database: database,
  dialect: dialect,
};
