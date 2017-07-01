const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  database: 'exp_dev'
});

module.exports = db;
